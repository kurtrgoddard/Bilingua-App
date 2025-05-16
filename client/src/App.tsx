import { Switch, Route, useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Loader2, KeyRound, Home, LogOut, UserCircle, Settings } from "lucide-react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { SkipToContent } from "@/components/ui/SkipToContent";
import { VersionFooter } from "@/components/ui/version-footer";
import { HomePage } from "./pages/HomePage";
import { AuthPage } from "./pages/AuthPage";
import { SignupPage } from "./pages/SignupPage";
import { OnboardingPage } from "./pages/OnboardingPage";
import { DashboardPage } from "./pages/DashboardPage";
import { FeaturesPage } from "./pages/FeaturesPage";
import { LegalPage } from "./pages/LegalPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { AdminPage } from "./pages/AdminPage";
import { AdminLoginPage } from "./pages/admin/AdminLoginPage";
import { UsersPage } from "./pages/admin/UsersPage";
import { RegionsPage as AdminRegionsPage } from "./pages/admin/RegionsPage";
import { AnalyticsPage } from "./pages/admin/AnalyticsPage";
import { VerificationsPage } from "./pages/admin/VerificationsPage";
import { SettingsPage } from "./pages/admin/SettingsPage";
import { SecurityPage } from "./pages/admin/SecurityPage";
import { SuperAdminPage } from "./pages/admin/SuperAdminPage";
import { ModerationPage } from "./pages/admin/ModerationPage";
import { MatchesPage } from "./pages/MatchesPage";
import { MessagesPage } from "./pages/MessagesPage";
import { RegionsPage } from "./pages/RegionsPage";
import { RegionDetailPage } from "./pages/RegionDetailPage";
import { ProfilePage } from "./pages/ProfilePage";
import { DevToolsPage } from "./pages/development/DevToolsPage";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { useAdmin } from "@/hooks/use-admin";
import { AdminAccessButton } from "@/components/AdminAccessButton";
import { ErrorBoundary } from './components/ErrorBoundary';
import { useEffect, lazy, Suspense, useState } from 'react';
import { t } from '@/lib/translations';
import { useQueryClient } from '@tanstack/react-query';

// Development-only components - loaded only in dev mode
// Using type assertion to handle JSX.Element | null return types
const AccessibilityTester = lazy(() => {
  if (import.meta.env.DEV) {
    return import('./components/development/AccessibilityTester')
      .then(mod => ({ default: mod.AccessibilityTester }));
  } else {
    return Promise.resolve({ 
      default: () => null as unknown as JSX.Element 
    });
  }
});

const UiUxTester = lazy(() => {
  if (import.meta.env.DEV) {
    return import('./components/development/UiUxTester')
      .then(mod => ({ default: mod.UiUxTester }));
  } else {
    return Promise.resolve({ 
      default: () => null as unknown as JSX.Element 
    });
  }
});

const UserJourneyTester = lazy(() => {
  if (import.meta.env.DEV) {
    return import('./components/development/UserJourneyTester')
      .then(mod => ({ default: mod.UserJourneyTester }));
  } else {
    return Promise.resolve({ 
      default: () => null as unknown as JSX.Element 
    });
  }
});

const SecurityAuditor = lazy(() => {
  if (import.meta.env.DEV) {
    return import('./components/development/SecurityAuditor')
      .then(mod => ({ default: mod.SecurityAuditor }));
  } else {
    return Promise.resolve({ 
      default: () => null as unknown as JSX.Element 
    });
  }
});

function App() {
  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const { language } = useLanguage();
  const { isAdmin, isCheckingAdmin } = useAdmin();
  const [, setLocation] = useLocation();
  const [appLoadRetry, setAppLoadRetry] = useState(0);
  const [startupError, setStartupError] = useState<Error | null>(null);
  const queryClient = useQueryClient();

  // Add keyboard handler for accessibility shortcuts
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      // Skip if user is typing in an input, textarea or contentEditable element
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        (e.target instanceof HTMLElement && e.target.isContentEditable)
      ) {
        return;
      }

      // Alt+H to go home
      if (e.altKey && e.key === 'h') {
        e.preventDefault();
        setLocation('/');
      }
      
      // Alt+D to go to dashboard (when authenticated)
      if (e.altKey && e.key === 'd' && isAuthenticated) {
        e.preventDefault();
        setLocation('/dashboard');
      }
      
      // Alt+L to logout (when authenticated)
      if (e.altKey && e.key === 'l' && isAuthenticated) {
        e.preventDefault();
        logout();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAuthenticated, logout, setLocation]);

  // Set document language for screen readers
  useEffect(() => {
    document.documentElement.lang = language;
    
    // Add additional meta tags for accessibility
    const metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = language === 'en' 
        ? 'Bilingua NB - A language exchange app connecting English and French speakers in New Brunswick'
        : 'Bilingua NB - Une application d\'échange linguistique qui relie les anglophones et les francophones du Nouveau-Brunswick';
      document.head.appendChild(meta);
    } else {
      metaDescription.setAttribute('content', language === 'en'
        ? 'Bilingua NB - A language exchange app connecting English and French speakers in New Brunswick'
        : 'Bilingua NB - Une application d\'échange linguistique qui relie les anglophones et les francophones du Nouveau-Brunswick');
    }
  }, [language]);

  // Add retry logic for loading
  useEffect(() => {
    // If loading takes too long, we may need to retry the auth check
    let loadingTimeout: number | null = null;
    
    if (isLoading && appLoadRetry < 3) {
      loadingTimeout = window.setTimeout(() => {
        console.log(`Auth loading timeout reached, retrying (attempt ${appLoadRetry + 1}/3)...`);
        setAppLoadRetry(prev => prev + 1);
        
        // Force the auth check to retry by reloading queryClient queries
        try {
          queryClient.invalidateQueries({ queryKey: ['/api/auth/status'] });
        } catch (err) {
          console.error('Failed to retry auth check:', err);
          setStartupError(err instanceof Error ? err : new Error('Unknown error retrying auth check'));
        }
      }, 15000); // 15 seconds timeout
    }
    
    return () => {
      if (loadingTimeout) window.clearTimeout(loadingTimeout);
    };
  }, [isLoading, appLoadRetry, queryClient]);
  
  // Handle loading state
  if (isLoading || isCheckingAdmin) {
    return (
      <div 
        className="min-h-screen bg-background flex flex-col items-center justify-center" 
        role="status" 
        aria-live="polite"
        aria-label={language === 'en' ? 'Loading application' : 'Chargement de l\'application'}
      >
        <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" aria-hidden="true" />
        <div className="text-center">
          <p className="font-medium">
            {language === 'en' ? 'Loading application' : 'Chargement de l\'application'}
          </p>
          {appLoadRetry > 0 && (
            <p className="text-sm text-muted-foreground mt-2">
              {language === 'en' 
                ? `Connectivity appears slow, retrying... (${appLoadRetry}/3)` 
                : `La connectivité semble lente, nouvelle tentative... (${appLoadRetry}/3)`}
            </p>
          )}
        </div>
        
        {/* Only show retry button after second retry */}
        {appLoadRetry >= 2 && (
          <Button 
            variant="outline" 
            size="sm"
            className="mt-6"
            onClick={() => window.location.reload()}
          >
            {language === 'en' ? 'Reload page' : 'Recharger la page'}
          </Button>
        )}
      </div>
    );
  }
  
  // Handle startup error
  if (startupError) {
    return (
      <div className="flex min-h-screen items-center justify-center" role="alert">
        <Card className="mx-auto max-w-md">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 text-destructive">
              <AlertCircle className="h-10 w-10" aria-hidden="true" />
              <h2 className="text-xl font-semibold">
                {language === 'en' ? 'Connection Issue' : 'Problème de connexion'}
              </h2>
            </div>
            <p className="mt-4 text-muted-foreground">
              {language === 'en' 
                ? "We're having trouble connecting to the server. This might be due to network issues or server maintenance."
                : "Nous avons des difficultés à nous connecter au serveur. Cela peut être dû à des problèmes de réseau ou à une maintenance du serveur."}
            </p>
            <div className="flex gap-3 mt-6">
              <Button 
                className="flex-1" 
                onClick={() => window.location.reload()}
                aria-label={language === 'en' ? 'Reload the page' : 'Recharger la page'}
              >
                {language === 'en' ? 'Reload Page' : 'Recharger la page'}
              </Button>
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => {
                  setStartupError(null);
                  setAppLoadRetry(0);
                }}
                aria-label={language === 'en' ? 'Try Again' : 'Réessayer'}
              >
                {language === 'en' ? 'Try Again' : 'Réessayer'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  
  const navigateToDashboard = () => {
    setLocation('/dashboard');
  };

  return (
    <ErrorBoundary fallback={
      <div className="flex min-h-screen items-center justify-center" role="alert">
        <Card className="mx-auto max-w-md">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 text-destructive">
              <AlertCircle className="h-10 w-10" aria-hidden="true" />
              <h2 className="text-xl font-semibold">
                {language === 'en' ? 'Something went wrong' : 'Une erreur s\'est produite'}
              </h2>
            </div>
            <p className="mt-4 text-muted-foreground">
              {language === 'en' 
                ? "We're sorry, but an error occurred while rendering the application."
                : "Nous sommes désolés, mais une erreur s'est produite lors du rendu de l'application."}
            </p>
            <Button 
              className="mt-6" 
              onClick={() => window.location.reload()}
              aria-label={language === 'en' ? 'Reload the page' : 'Recharger la page'}
            >
              {language === 'en' ? 'Reload the page' : 'Recharger la page'}
            </Button>
          </CardContent>
        </Card>
      </div>
    }>
      <div className="flex flex-col min-h-screen bg-background">
        {/* Skip to content link for keyboard users */}
        <SkipToContent />
        
        <header className="flex justify-between items-center p-4 border-b" role="banner">
          <LanguageToggle mode="dropdown" />
          <nav aria-label={t('accessibility.userNavigation', language)}>
            {isAuthenticated && user && (
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={navigateToDashboard}
                  className="flex items-center gap-1.5"
                  aria-label={t('app.goToDashboard', language)}
                >
                  <UserCircle className="h-4 w-4" aria-hidden="true" />
                  <span>{user.username}</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setLocation('/profile')}
                  className="flex items-center gap-1.5"
                  aria-label={language === 'en' ? 'Edit profile' : 'Modifier le profil'}
                >
                  <Settings className="h-4 w-4" aria-hidden="true" />
                  <span>{language === 'en' ? 'Settings' : 'Paramètres'}</span>
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleLogout}
                  className="flex items-center gap-1.5"
                  aria-label={t('auth.logOut', language)}
                >
                  <LogOut className="h-4 w-4" aria-hidden="true" />
                  <span>{t('auth.logOut', language)}</span>
                </Button>
              </div>
            )}
          </nav>
        </header>

        <main className="flex-grow" id="main-content">
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/features" component={FeaturesPage} />
            <Route path="/onboarding" component={OnboardingPage} />
            <Route path="/auth">
              {() => isAuthenticated ? (setLocation('/dashboard'), null) : <AuthPage />}
            </Route>
            <Route path="/signup">
              {() => isAuthenticated ? (setLocation('/dashboard'), null) : <SignupPage />}
            </Route>
            <Route path="/dashboard">
              {() => !isAuthenticated ? (setLocation('/auth'), null) : <DashboardPage />}
            </Route>
            <Route path="/matches">
              {() => !isAuthenticated ? (setLocation('/auth'), null) : <MatchesPage />}
            </Route>
            <Route path="/messages/:id">
              {() => !isAuthenticated ? (setLocation('/auth'), null) : <MessagesPage />}
            </Route>
            <Route path="/messages">
              {() => !isAuthenticated ? (setLocation('/auth'), null) : <MessagesPage />}
            </Route>
            <Route path="/regions/:id">
              <RegionDetailPage />
            </Route>
            <Route path="/regions">
              <RegionsPage />
            </Route>
            <Route path="/legal" component={LegalPage} />
            <Route path="/privacy" component={PrivacyPolicyPage} />
            <Route path="/terms">
              {() => {
                setLocation('/legal?tab=terms');
                return null;
              }}
            </Route>
            <Route path="/safety">
              {() => {
                setLocation('/legal?tab=safety');
                return null;
              }}
            </Route>
            <Route path="/profile">
              {() => !isAuthenticated ? (setLocation('/auth'), null) : <ProfilePage />}
            </Route>
            <Route path="/admin/login">
              {() => isAdmin ? (window.location.href = '/admin', null) : <AdminLoginPage />}
            </Route>
            <Route path="/admin">
              {() => !isAdmin ? (window.location.href = '/admin/login', null) : <AdminPage />}
            </Route>
            <Route path="/admin/users">
              {() => !isAdmin ? (window.location.href = '/admin/login', null) : <UsersPage />}
            </Route>
            <Route path="/admin/regions">
              {() => !isAdmin ? (window.location.href = '/admin/login', null) : <RegionsPage />}
            </Route>
            <Route path="/admin/analytics">
              {() => !isAdmin ? (window.location.href = '/admin/login', null) : <AnalyticsPage />}
            </Route>
            <Route path="/admin/verifications">
              {() => !isAdmin ? (window.location.href = '/admin/login', null) : <VerificationsPage />}
            </Route>
            <Route path="/admin/settings">
              {() => !isAdmin ? (window.location.href = '/admin/login', null) : <SettingsPage />}
            </Route>
            <Route path="/admin/security">
              {() => !isAdmin ? (window.location.href = '/admin/login', null) : <SecurityPage />}
            </Route>
            <Route path="/admin/moderation">
              {() => !isAdmin ? (window.location.href = '/admin/login', null) : <ModerationPage />}
            </Route>
            <Route path="/admin/super">
              {() => {
                const admin = JSON.parse(sessionStorage.getItem('admin') || '{}');
                return !isAdmin ? (window.location.href = '/admin/login', null) : 
                       admin.role !== 'superadmin' ? (window.location.href = '/admin', null) : <SuperAdminPage />;
              }}
            </Route>
            <Route path="/dev-tools">
              {() => import.meta.env.DEV ? <DevToolsPage /> : (window.location.href = '/', null)}
            </Route>
            <Route>
              {() => (
                <div 
                  className="min-h-screen w-full flex items-center justify-center bg-background"
                  role="alert"
                  aria-labelledby="page-not-found-title"
                >
                  <Card className="w-full max-w-md mx-4">
                    <CardContent className="pt-6">
                      <div className="flex mb-4 gap-2">
                        <AlertCircle className="h-8 w-8 text-red-500" aria-hidden="true" />
                        <h1 id="page-not-found-title" className="text-2xl font-bold text-foreground">
                          404 {language === 'en' ? 'Page Not Found' : 'Page non trouvée'}
                        </h1>
                      </div>
                      <p className="mt-4 text-sm text-muted-foreground">
                        {language === 'en' 
                          ? "The page you're looking for doesn't exist."
                          : "La page que vous recherchez n'existe pas."}
                      </p>
                      <div className="mt-6">
                        <Button 
                          onClick={() => setLocation('/')}
                          className="flex items-center gap-1.5"
                        >
                          <Home className="h-4 w-4" aria-hidden="true" />
                          <span>{language === 'en' ? 'Go to Home Page' : 'Aller à la page d\'accueil'}</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </Route>
          </Switch>
        </main>

        {/* Version Footer - displays Beta tag and version counter */}
        <VersionFooter />

        {/* Admin Access Button only displays for admins or in development mode */}
        <AdminAccessButton />

        {/* Development testing tools - only available in development mode */}
        {import.meta.env.DEV && (
          <Suspense fallback={null}>
            <AccessibilityTester />
            <UiUxTester />
            <UserJourneyTester />
            <SecurityAuditor />
          </Suspense>
        )}
        
        {/* Accessibility info dialog that's hidden visually but available to screen readers */}
        <div className="sr-only">
          <div role="region" aria-label={language === 'en' ? 'Keyboard shortcuts' : 'Raccourcis clavier'}>
            <h2>{language === 'en' ? 'Keyboard shortcuts' : 'Raccourcis clavier'}</h2>
            <ul>
              <li>
                {language === 'en' 
                  ? 'Press Alt+H to go to the home page' 
                  : 'Appuyez sur Alt+H pour aller à la page d\'accueil'}
              </li>
              <li>
                {language === 'en' 
                  ? 'Press Alt+D to go to your dashboard' 
                  : 'Appuyez sur Alt+D pour aller à votre tableau de bord'}
              </li>
              <li>
                {language === 'en' 
                  ? 'Press Alt+L to log out' 
                  : 'Appuyez sur Alt+L pour vous déconnecter'}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
