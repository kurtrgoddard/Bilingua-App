import { useState } from "react";
import { useLocation, Link } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLanguage } from "@/hooks/use-language";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, UserPlus } from "lucide-react";

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export function AuthPage() {
  const [, navigate] = useLocation();
  const { language } = useLanguage();
  const { login, isLoggingIn } = useAuth();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    try {
      await login(values);
      toast({
        title: language === 'en' ? "Login Successful" : "Connexion réussie",
        description: language === 'en' ? "Welcome back!" : "Bon retour!",
      });
      navigate("/dashboard");
    } catch (error) {
      toast({
        variant: "destructive",
        title: language === 'en' ? "Error" : "Erreur",
        description: error instanceof Error ? error.message : "Invalid credentials",
      });
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <Button
        variant="ghost"
        className="absolute top-4 left-4"
        onClick={() => navigate("/")}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        {language === 'en' ? 'Back to Home' : "Retour à l'accueil"}
      </Button>

      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle>{language === 'en' ? 'Welcome Back' : 'Bon Retour'}</CardTitle>
          <CardDescription>
            {language === 'en' 
              ? 'Enter your credentials to continue'
              : 'Entrez vos identifiants pour continuer'}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {language === 'en' ? 'Username' : "Nom d'utilisateur"}
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {language === 'en' ? 'Password' : 'Mot de passe'}
                    </FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full"
                disabled={isLoggingIn}
              >
                {isLoggingIn ? (
                  language === 'en' ? 'Logging in...' : 'Connexion en cours...'
                ) : (
                  language === 'en' ? 'Log In' : 'Se connecter'
                )}
              </Button>
            </form>
          </Form>
        </CardContent>

        <CardFooter className="flex flex-col space-y-4 pt-0">
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                {language === 'en' ? 'or' : 'ou'}
              </span>
            </div>
          </div>

          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => navigate("/signup")}
          >
            <UserPlus className="mr-2 h-4 w-4" />
            {language === 'en' 
              ? 'Create New Account' 
              : 'Créer un nouveau compte'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default AuthPage;
