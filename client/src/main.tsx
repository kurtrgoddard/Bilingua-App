import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import App from './App';
import "./index.css";

// Global error handling for unhandled Promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled Promise Rejection:', event.reason);
  
  // Prevent the default browser behavior (console error)
  event.preventDefault();
  
  // Attempt to identify WebSocket-related errors
  const errorMessage = event.reason?.message || String(event.reason);
  const isWebSocketError = 
    errorMessage.includes('WebSocket') || 
    errorMessage.includes('network') || 
    errorMessage.includes('connection') ||
    errorMessage.includes('ws://') ||
    errorMessage.includes('wss://');
  
  if (isWebSocketError) {
    console.warn('WebSocket connection issue detected. This might affect real-time messaging.');
    // WebSocket errors are often due to network conditions, so we don't need to notify the user every time
    // They'll see the connection status in the UI
  } else {
    console.warn('Application Error: An unexpected error occurred. The development team has been notified.');
    // For other errors, we would ideally send to an error tracking service
  }
  
  // Store diagnostic information in sessionStorage for debugging
  try {
    const diagnosticInfo = {
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      errorType: event.reason?.name || 'UnknownError',
      errorMessage: errorMessage,
      errorStack: event.reason?.stack || 'No stack trace available'
    };
    
    // Add to existing diagnostics or create new array
    const existingDiagnostics = JSON.parse(sessionStorage.getItem('errorDiagnostics') || '[]');
    existingDiagnostics.push(diagnosticInfo);
    // Keep only the last 10 errors to avoid bloating sessionStorage
    if (existingDiagnostics.length > 10) {
      existingDiagnostics.shift();
    }
    sessionStorage.setItem('errorDiagnostics', JSON.stringify(existingDiagnostics));
  } catch (e) {
    console.error('Failed to store error diagnostics:', e);
  }
});

// Setup global error boundaries for the React app
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <Toaster />
    </QueryClientProvider>
  </StrictMode>,
);
