import { useState, useEffect, useRef } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useUser } from "@/hooks/use-user";
import { useWebSocket } from "@/hooks/use-websocket";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/hooks/use-language";
import { format } from "date-fns";
import { useRoute } from "wouter";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Loader2, Languages, AlertTriangle, RefreshCw, Send } from "lucide-react";

import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { MeetupProposal } from "@/components/MeetupProposal";
import { MeetupConfirmation, type MeetupDetails } from "@/components/MeetupConfirmation";
import { SafetyTips } from "@/components/SafetyTips";
import { ReportMessageDialog } from "@/components/ReportMessageDialog";

interface Message {
  message: {
    id: number;
    content: string;
    senderId: number;
    createdAt: string;
    translatedContent?: string;
  };
  sender: {
    username: string;
  };
}

interface Conversation {
  conversation: {
    id: number;
    lastMessageAt: string;
  };
  otherUser: {
    id: number;
    username: string;
  };
  lastMessage?: {
    content: string;
  };
}

export function MessagesPage() {
  const { user } = useUser();
  const { toast } = useToast();
  const { language } = useLanguage();
  const queryClient = useQueryClient();
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const { isConnected, sendMessage, socket, error: wsError, reconnect } = useWebSocket();
  const [showTranslation, setShowTranslation] = useState<Record<number, boolean>>({});
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [match, params] = useRoute<{ id: string }>("/messages/:id");

  const { data: conversations = [], isLoading: isLoadingConversations } = useQuery<Conversation[]>({
    queryKey: ['/api/conversations'],
    refetchInterval: 5000 // Poll every 5 seconds for new messages
  });

  // Handle conversation ID from URL
  useEffect(() => {
    if (conversations && conversations.length > 0 && match && params && params.id && !selectedUserId) {
      const conversationId = parseInt(params.id);
      const conversation = conversations.find((c: any) => c.conversation.id === conversationId);
      if (conversation) {
        setSelectedUserId(conversation.otherUser.id);
      }
    }
  }, [conversations, match, params, selectedUserId]);

  // Get the conversation ID from the selected user
  const selectedConversation = selectedUserId ? 
    conversations.find((c) => c.otherUser.id === selectedUserId) : null;
  const conversationId = selectedConversation?.conversation.id;

  const { data: messages = [], isLoading: isLoadingMessages, error: messagesError } = useQuery<Message[]>({
    queryKey: ['/api/conversations', conversationId, 'messages'],
    enabled: conversationId !== undefined && conversationId !== null,
  });

  // Function to scroll to bottom of messages
  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollViewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollViewport) {
        scrollViewport.scrollTop = scrollViewport.scrollHeight;
      }
    }
  };

  // Effect to scroll to bottom when new messages arrive or conversation changes
  useEffect(() => {
    // Initial scroll
    scrollToBottom();
    
    // Secondary scroll with a slight delay to ensure content is rendered
    const timeoutId = setTimeout(scrollToBottom, 100);
    return () => clearTimeout(timeoutId);
  }, [messages, selectedUserId]);
  
  // We'll move this effect after the sendMessageMutation is defined
  // to avoid the variable being used before declaration

  // Listen for WebSocket messages
  useEffect(() => {
    if (!socket) {
      console.log('MessagesPage: No WebSocket connection available');
      return;
    }

    console.log('MessagesPage: Setting up WebSocket message handlers');

    const handleMessage = (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data);
        console.log('MessagesPage: Received WebSocket message:', data);
        
        if (data.type === 'message') {
          console.log('MessagesPage: Received new message, invalidating queries');
          queryClient.invalidateQueries({ queryKey: ['/api/conversations'] });
          queryClient.invalidateQueries({ 
            queryKey: ['/api/conversations', conversationId, 'messages'] 
          });
        } else if (data.type === 'error') {
          console.error('MessagesPage: Received error from WebSocket:', data.message);
          toast({
            variant: "destructive",
            title: "Connection Error",
            description: data.message || "There was an error with the chat connection",
          });
        } else if (data.type === 'connected') {
          console.log('MessagesPage: WebSocket connection confirmed with userId:', data.userId);
        } else if (data.type === 'message_sent') {
          console.log('MessagesPage: Message sent confirmation received');
        }
      } catch (error) {
        console.error('MessagesPage: Error handling WebSocket message:', error);
      }
    };

    socket.addEventListener('message', handleMessage);
    return () => {
      console.log('MessagesPage: Cleaning up WebSocket message handlers');
      socket.removeEventListener('message', handleMessage);
    };
  }, [socket, queryClient, conversationId, toast]);

  const sendMessageMutation = useMutation({
    mutationFn: async () => {
      if (!selectedUserId || !newMessage.trim()) return;

      // Try to send via WebSocket first
      if (isConnected && sendMessage(selectedUserId, newMessage)) {
        return;
      }

      // Find the conversation ID for the selected user
      const selectedConversation = conversations.find((c) => c.otherUser.id === selectedUserId);
      if (!selectedConversation) {
        throw new Error("Conversation not found");
      }

      // Fallback to REST API if WebSocket fails
      const response = await fetch(`/api/conversations/${selectedConversation.conversation.id}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: newMessage }),
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      return response.json();
    },
    onSuccess: () => {
      setNewMessage("");
      queryClient.invalidateQueries({ queryKey: ['/api/conversations'] });
      queryClient.invalidateQueries({ 
        queryKey: ['/api/conversations', conversationId, 'messages'] 
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message",
      });
    },
  });

  const translateMessage = useMutation({
    mutationFn: async (messageId: number) => {
      const response = await fetch(`/api/messages/${messageId}/translate`, {
        method: 'POST',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      return response.json();
    },
    onSuccess: (data, messageId) => {
      queryClient.setQueryData<Message[]>(
        ['/api/conversations', conversationId, 'messages'],
        (old) => old?.map(msg => 
          msg.message.id === messageId 
            ? { ...msg, message: { ...msg.message, translatedContent: data.translatedContent }}
            : msg
        )
      );
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Translation Error",
        description: error instanceof Error ? error.message : "Failed to translate message",
      });
    },
  });

  function getInitials(username: string) {
    return username
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  }

  // Add defensive check for empty data or missing messages
  const hasMessages = messages && messages.length > 0;
  
  // Scroll after a message is sent successfully - placed after the mutation is defined
  useEffect(() => {
    if (sendMessageMutation.isSuccess) {
      scrollToBottom();
    }
  }, [sendMessageMutation.isSuccess]);

  // Handle WebSocket connection status display
  const renderConnectionStatus = () => {
    if (wsError) {
      return (
        <Alert variant="destructive" className="mb-4">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Connection Error</AlertTitle>
          <AlertDescription>
            <p>{wsError}</p>
            <div className="flex gap-2 mt-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => {
                  reconnect();
                  toast({
                    title: "Reconnecting",
                    description: "Attempting to reconnect to the chat server..."
                  });
                }}
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Reconnect
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => {
                  // Try sending a message via REST API as fallback
                  if (selectedUserId && conversationId) {
                    sendMessageMutation.mutate();
                    toast({
                      title: "Fallback Mode",
                      description: "Trying to send message through alternative method..."
                    });
                  } else {
                    toast({
                      variant: "destructive",
                      title: "Error",
                      description: "Please select a conversation first"
                    });
                  }
                }}
              >
                Try Fallback Method
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      );
    }
    return null;
  };

  return (
      <div className="min-h-screen bg-background p-4">
        <div className="container max-w-6xl mx-auto">
          {/* Display WebSocket connection error if present */}
          {renderConnectionStatus()}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Conversations List */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Conversations</CardTitle>
              <CardDescription>
                {isConnected ? "Connected" : "Connecting..."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isLoadingConversations ? (
                <div className="flex justify-center p-4">
                  <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                </div>
              ) : (
                <ScrollArea className="h-[calc(100vh-12rem)]">
                  <div className="space-y-2">
                    {(conversations as any[]).map(({ conversation, otherUser, lastMessage }) => (
                      <Button
                        key={conversation.id}
                        variant={selectedUserId === otherUser.id ? "default" : "ghost"}
                        className={cn(
                          "w-full justify-start transition-all px-3 py-2 relative",
                          selectedUserId === otherUser.id ? "shadow-sm" : "hover:bg-accent/50"
                        )}
                        onClick={() => setSelectedUserId(otherUser.id)}
                        aria-label={`Conversation with ${otherUser.username}`}
                      >
                        <div className="flex items-center gap-3 w-full">
                          <Avatar className="h-10 w-10 border-2 border-background">
                            <AvatarFallback 
                              className="text-sm font-medium" 
                              aria-label={`${otherUser.username}'s profile`}
                            >
                              {getInitials(otherUser.username)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="text-left flex-1 overflow-hidden">
                            <div className="font-medium flex items-center">
                              <span className="truncate">{otherUser.username}</span>
                              <span className="ml-2 text-xs opacity-70 whitespace-nowrap">
                                {conversation.lastMessageAt 
                                  ? format(new Date(conversation.lastMessageAt), 'PPp').split(',')[0]
                                  : ''}
                              </span>
                            </div>
                            {lastMessage && (
                              <p className="text-sm text-muted-foreground truncate max-w-[200px]">
                                {lastMessage.content}
                              </p>
                            )}
                          </div>
                        </div>
                        {selectedUserId === otherUser.id && (
                          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-3/4 bg-primary rounded-r-full" aria-hidden="true" />
                        )}
                      </Button>
                    ))}
                  </div>
                </ScrollArea>
              )}
            </CardContent>
          </Card>

          {/* Messages */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>
                {selectedUserId
                  ? (conversations as any[]).find((c: any) => c.otherUser.id === selectedUserId)?.otherUser.username
                  : "Select a conversation"}
              </CardTitle>
              {selectedUserId && (
                <CardDescription>
                  Practice your language skills through chat
                </CardDescription>
              )}
            </CardHeader>
            <CardContent>
              {!selectedUserId ? (
                <div className="flex flex-col items-center justify-center h-[60vh] text-center">
                  <p className="text-muted-foreground">
                    Select a conversation from the list to start chatting
                  </p>
                </div>
              ) : (
                <>
                  <ScrollArea ref={scrollAreaRef} className="h-[calc(100vh-16rem)]">
                    <div className="space-y-4">
                      {hasMessages ? messages.map((msg) => {
                        // Check if the message object and its properties exist
                        if (!msg || !msg.message || !msg.sender) {
                          return null;
                        }

                        const { message, sender } = msg;
                        const isSentByMe = message.senderId === user?.id;
                        return (
                          <div
                            key={message.id}
                            className={cn(
                              "flex flex-col mb-4",
                              isSentByMe ? "items-end" : "items-start"
                            )}
                          >
                            {/* Sender name for received messages */}
                            {!isSentByMe && (
                              <div className="ml-2 mb-1">
                                <span className="text-xs font-medium text-muted-foreground">
                                  {sender.username}
                                </span>
                              </div>
                            )}
                            <div
                              className={cn(
                                "max-w-[75%] rounded-lg px-4 py-3 shadow-sm",
                                isSentByMe
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted"
                              )}
                              aria-label={`Message from ${isSentByMe ? 'you' : sender.username}`}
                            >
                              <p className="leading-relaxed text-sm md:text-base">
                                {message.content}
                              </p>
                              
                              {/* Translation content with animation */}
                              {message.translatedContent && showTranslation[message.id] && (
                                <div 
                                  className="mt-2 pt-2 border-t border-primary-foreground/20 text-sm opacity-90 animate-in fade-in-50 duration-200"
                                  role="region" 
                                  aria-label="Translation"
                                >
                                  {message.translatedContent}
                                </div>
                              )}
                              
                              <div className="flex items-center justify-between gap-2 mt-2">
                                <span className="text-xs opacity-70" aria-label={`Sent at ${format(new Date(message.createdAt), 'p')}`}>
                                  {format(new Date(message.createdAt), 'p')}
                                </span>
                                
                                {/* Translation button - only for received messages */}
                                {!isSentByMe && (
                                  <div className="flex items-center gap-1">
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="h-6 px-2 hover:bg-primary/10 transition-colors rounded-full"
                                      title={showTranslation[message.id] ? 
                                        (language === 'en' ? "Hide translation" : "Masquer la traduction") :
                                        (language === 'en' ? "Show translation" : "Afficher la traduction")}
                                      onClick={() => {
                                        if (!message.translatedContent) {
                                          translateMessage.mutate(message.id);
                                        }
                                        setShowTranslation(prev => ({
                                          ...prev,
                                          [message.id]: !prev[message.id]
                                        }));
                                      }}
                                      aria-label={showTranslation[message.id] ? "Hide translation" : "Show translation"}
                                    >
                                      <Languages className="h-4 w-4" aria-hidden="true" />
                                    </Button>
                                    
                                    {/* Report message button */}
                                    <ReportMessageDialog messageId={message.id} />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      }) : (
                        <div className="flex justify-center py-8">
                          <p className="text-muted-foreground">No messages yet. Start the conversation!</p>
                        </div>
                      )}
                    </div>
                  </ScrollArea>

                  <div className="flex flex-col gap-2 mt-4">
                    <div className="relative rounded-lg border bg-background shadow-sm focus-within:ring-1 focus-within:ring-primary">
                      <div className="flex items-end">
                        <Textarea
                          id="message-input"
                          aria-label="Type your message"
                          placeholder={language === 'en' ? "Type your message..." : "Écrivez votre message..."}
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                              e.preventDefault();
                              if (newMessage.trim()) {
                                sendMessageMutation.mutate();
                              }
                            }
                          }}
                          className="min-h-[45px] max-h-[120px] resize-none border-0 focus-visible:ring-0 bg-transparent py-3 px-4"
                        />
                        
                        <div className="flex items-center mb-2 mr-2 space-x-1">
                          <Button 
                            type="button"
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent"
                            title={language === 'en' ? "Language assistance" : "Assistance linguistique"}
                            aria-label="Language assistance"
                            onClick={() => {
                              // Language helper dropdown would go here
                              toast({
                                title: language === 'en' ? "Language Assistance" : "Assistance linguistique",
                                description: language === 'en' 
                                  ? "Language assistance features are available to help with your conversation."
                                  : "Des fonctionnalités d'assistance linguistique sont disponibles pour vous aider dans votre conversation.",
                                duration: 3000,
                              });
                            }}
                          >
                            <Languages className="h-4 w-4" />
                          </Button>
                          
                          <Button 
                            type="button"
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                            title={language === 'en' ? "Send message" : "Envoyer le message"}
                            onClick={() => {
                              if (newMessage.trim()) {
                                sendMessageMutation.mutate();
                              }
                            }}
                            disabled={!newMessage.trim() || sendMessageMutation.isPending}
                            aria-label="Send message"
                          >
                            {sendMessageMutation.isPending ? (
                              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                            ) : (
                              <Send className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-muted-foreground">
                        {language === 'en' 
                          ? "Press Enter to send, Shift+Enter for a new line"
                          : "Appuyez sur Entrée pour envoyer, Maj+Entrée pour une nouvelle ligne"}
                      </p>
                      
                      <Badge variant="outline" className="text-xs">
                        {isConnected 
                          ? <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-green-500"></span> {language === 'en' ? "Connected" : "Connecté"}</span>
                          : <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span> {language === 'en' ? "Connecting..." : "Connexion..."}</span>
                        }
                      </Badge>
                    </div>
                    
                    {/* Meetup Proposal Button */}
                    {selectedUserId && (
                      <div className="mt-4 flex justify-center">
                        <MeetupProposal
                          recipientId={selectedUserId}
                          recipientName={(conversations as any[]).find((c: any) => c.otherUser.id === selectedUserId)?.otherUser.username || ''}
                          onProposalSubmit={(values) => {
                            // Implement the API call to send a meetup proposal
                            fetch(`/api/users/${selectedUserId}/meetup-proposals`, {
                              method: 'POST',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify(values),
                              credentials: 'include',
                            })
                              .then(response => {
                                if (!response.ok) {
                                  throw new Error('Failed to send meetup proposal');
                                }
                                return response.json();
                              })
                              .then(() => {
                                toast({
                                  title: language === 'en' ? 'Meetup Proposed' : 'Rencontre proposée',
                                  description: language === 'en' 
                                    ? 'Your meetup proposal has been sent' 
                                    : 'Votre proposition de rencontre a été envoyée',
                                });
                                // Optionally refresh any meetup-related queries
                              })
                              .catch((error) => {
                                toast({
                                  variant: "destructive",
                                  title: language === 'en' ? 'Error' : 'Erreur',
                                  description: error instanceof Error 
                                    ? error.message 
                                    : (language === 'en' ? 'Failed to send meetup proposal' : 'Échec de l\'envoi de la proposition de rencontre'),
                                });
                              });
                          }}
                        />
                      </div>
                    )}
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
        
        {/* Safety Tips Section */}
        <div className="mt-6">
          <SafetyTips />
        </div>
      </div>
    </div>
  );
}
