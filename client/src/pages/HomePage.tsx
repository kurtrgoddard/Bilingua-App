import { useLanguage } from "@/hooks/use-language";
import { t } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { StepIndicator } from "@/components/ui/step-indicator";
import { motion } from "framer-motion";
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Mail, LogIn, Users, Calendar, MessageCircle, Globe, Theater, Coffee } from "lucide-react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { usePageView } from "@/lib/analytics";

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

export function HomePage() {
  usePageView('home');
  const { language } = useLanguage();
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const onboardingSteps = [
    {
      title: language === 'en' ? "Welcome to Bilingua.app" : "Bienvenue sur Bilingua.app",
      description: language === 'en' 
        ? "Connect with real people for real conversations in English or French" 
        : "Connectez-vous avec des personnes réelles pour des conversations authentiques en anglais ou en français",
      icon: <Globe className="h-16 w-16 text-primary" />
    },
    {
      title: language === 'en' ? "Rich Cultural Heritage" : "Riche Patrimoine Culturel",
      description: language === 'en'
        ? "Experience the unique blend of Acadian, Indigenous, and Maritime cultures"
        : "Découvrez le mélange unique des cultures acadienne, autochtone et maritime",
      icon: <Theater className="h-16 w-16 text-primary" />
    },
    {
      title: language === 'en' ? "Local Coffee Culture" : "Culture Locale du Café",
      description: language === 'en'
        ? "Practice your language skills at cozy cafés across the province"
        : "Pratiquez vos compétences linguistiques dans des cafés confortables à travers la province",
      icon: <Coffee className="h-16 w-16 text-primary" />
    }
  ];

  // Value proposition sections
  const features = [
    {
      title: language === 'en' ? "Real Conversations" : "Conversations Réelles",
      description: language === 'en' 
        ? "Practice with native speakers in authentic settings" 
        : "Pratiquez avec des locuteurs natifs dans des cadres authentiques",
      icon: <MessageCircle className="h-8 w-8 text-primary" />
    },
    {
      title: language === 'en' ? "Find Local Partners" : "Trouvez des Partenaires Locaux",
      description: language === 'en'
        ? "Connect with language learners near you"
        : "Connectez-vous avec des apprenants de langues près de chez vous",
      icon: <Users className="h-8 w-8 text-primary" />
    },
    {
      title: language === 'en' ? "Schedule Meetups" : "Planifiez des Rencontres",
      description: language === 'en'
        ? "Arrange coffee meetups at convenient locations"
        : "Organisez des rencontres dans des cafés à des endroits pratiques",
      icon: <Calendar className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header with Login */}
        <header className="flex-aligned mb-12">
          <div className="flex-aligned-start gap-4">
            <h2 className="font-bold text-xl text-high-contrast">Bilingua.app</h2>
            <LanguageToggle variant="ghost" size="sm" />
          </div>
          <Link href="/auth">
            <Button variant="outline" className="gap-2 a11y-focus">
              <LogIn className="h-4 w-4" />
              {language === 'en' ? "Login" : "Connexion"}
            </Button>
          </Link>
        </header>

        {/* Hero Section */}
        <section className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex mb-6 rounded-full bg-primary/10 px-3 py-1">
            <span className="text-sm font-semibold leading-6 text-primary">
              {language === 'en' ? "Launching Summer 2025" : "Lancement Été 2025"}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl text-gradient mb-4">
            <span>Bilingua.app</span>
          </h1>
          <h2 className="text-xl md:text-2xl accessible-muted mb-6">
            {language === 'en' 
              ? "Connect with real people for real conversations in English or French" 
              : "Connectez-vous avec des personnes réelles pour des conversations réelles en anglais ou en français"}
          </h2>

          <p className="text-lg accessible-muted mb-8 max-w-2xl mx-auto">
            {language === 'en'
              ? "Find language exchange partners near you or around the world, practice your speaking and listening skills, and make new friends along the way."
              : "Trouvez des partenaires d'échange linguistique près de chez vous ou dans le monde entier, pratiquez vos compétences orales et auditives, et faites de nouvelles amitiés en cours de route."}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link href="/auth?signup=true">
              <Button size="lg" className="w-full sm:w-auto">
                {language === 'en' ? "Start Your Journey" : "Commencez Votre Voyage"}
              </Button>
            </Link>
            <Link href="/features">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto"
              >
                {language === 'en' ? "Learn More" : "En Savoir Plus"}
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <div className="mb-4 p-2 rounded-full bg-primary/10 inline-block">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="accessible-muted">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-20 bg-slate-50 dark:bg-slate-900 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === 'en' ? "How It Works" : "Comment Ça Marche"}
          </h2>

          <StepIndicator currentStep={page + 1} totalSteps={3} className="mb-8" />

          <div className="space-y-6">
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="p-6 rounded-lg border bg-card"
            >
              <div className="text-5xl mb-4 flex justify-center">{onboardingSteps[page].icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-center">{onboardingSteps[page].title}</h3>
              <p className="accessible-muted text-center">
                {onboardingSteps[page].description}
              </p>
            </motion.div>

            <div className="flex-aligned">
              <Button
                variant="outline"
                onClick={() => paginate(-1)}
                disabled={page === 0}
                className="px-6 a11y-focus"
              >
                {language === 'en' ? 'Previous' : 'Précédent'}
              </Button>
              {page === onboardingSteps.length - 1 ? (
                <Link href="/auth">
                  <Button size="lg" className="px-8 a11y-focus">
                    {language === 'en' ? "Get Started" : "Commencer"}
                  </Button>
                </Link>
              ) : (
                <Button onClick={() => paginate(1)} className="px-6 a11y-focus">
                  {language === 'en' ? 'Continue' : 'Continuer'}
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* New Brunswick Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-950 dark:to-indigo-950 rounded-xl p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                {language === 'en' ? "New Brunswick's Premier Language Exchange Platform" : "La Principale Plateforme d'Échange Linguistique du Nouveau-Brunswick"}
              </h2>
              <p className="text-lg mb-8">
                {language === 'en'
                  ? "Designed specifically for New Brunswick's unique bilingual community. Connect with fellow language learners in Fredericton, Moncton, Saint John and beyond."
                  : "Conçue spécifiquement pour la communauté bilingue unique du Nouveau-Brunswick. Connectez-vous avec d'autres apprenants de langues à Fredericton, Moncton, Saint-Jean et au-delà."}
              </p>
              <Link href="/regions">
                <Button variant="secondary" size="lg">
                  {language === 'en' ? "Discover Regions" : "Découvrir les Régions"}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer with Legal Links and Safety Warnings */}
        <footer className="pt-8 pb-12 border-t">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-semibold mb-3">
                  {language === 'en' ? "Legal Information" : "Information légale"}
                </h3>
                <div className="space-y-2">
                  <Link href="/legal" className="block text-sm accessible-primary hover:underline a11y-focus">
                    {language === 'en' ? "Terms of Use" : "Conditions d'utilisation"}
                  </Link>
                  <Link href="/legal?tab=privacy" className="block text-sm accessible-primary hover:underline a11y-focus">
                    {language === 'en' ? "Privacy Policy" : "Politique de confidentialité"}
                  </Link>
                  <Link href="/legal?tab=safety" className="block text-sm accessible-primary hover:underline a11y-focus">
                    {language === 'en' ? "Safety Guidelines" : "Directives de sécurité"}
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">
                  {language === 'en' ? "Safety Resources" : "Ressources de sécurité"}
                </h3>
                <div className="space-y-2 text-sm accessible-muted">
                  <p>
                    {language === 'en'
                      ? "• Always meet in public coffee shops"
                      : "• Rencontrez-vous toujours dans des cafés publics"}
                  </p>
                  <p>
                    {language === 'en'
                      ? "• Share meeting details with friends"
                      : "• Partagez les détails de la rencontre avec des amis"}
                  </p>
                  <p>
                    {language === 'en'
                      ? "• Trust your instincts"
                      : "• Faites confiance à votre instinct"}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">
                  {language === 'en' ? "Contact Information" : "Informations de contact"}
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://www.linkedin.com/in/kurtgoddard/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-aligned-start gap-2 accessible-primary hover:underline a11y-focus"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a
                    href="mailto:kurtRgoddard@gmail.com"
                    className="flex-aligned-start gap-2 accessible-primary hover:underline a11y-focus"
                  >
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">kurtRgoddard@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="text-xs text-center accessible-muted border-t pt-8">
              <p>
                {language === 'en'
                  ? "By using this service, you agree to follow all safety protocols and accept liability as per New Brunswick provincial laws."
                  : "En utilisant ce service, vous acceptez de suivre tous les protocoles de sécurité et acceptez la responsabilité conformément aux lois provinciales du Nouveau-Brunswick."}
              </p>
              <p className="mt-2">
                © 2025 Bilingua.app. {language === 'en' ? "All rights reserved." : "Tous droits réservés."}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
