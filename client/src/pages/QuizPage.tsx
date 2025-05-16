import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLanguage } from "@/hooks/use-language";
import { t } from "@/lib/translations";
import { useUser } from "@/hooks/use-user";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { Progress } from "@/components/ui/progress";
import { culturalQuizSchema } from "@db/schema";

type QuizFormValues = z.infer<typeof culturalQuizSchema>;

// Helper function to get step titles based on current step
function getStepTitle(stepNumber: number, lang: string): string {
  if (lang === 'en') {
    switch (stepNumber) {
      case 1:
        return "Language Proficiency";
      case 2:
        return "Writing & Reading Skills";
      case 3:
        return "Learning Preferences";
      case 4:
        return "Location & Availability";
      default:
        return "";
    }
  } else {
    // French titles
    switch (stepNumber) {
      case 1:
        return "Niveau de Langue";
      case 2:
        return "Compétences en Écriture et Lecture";
      case 3:
        return "Préférences d'Apprentissage";
      case 4:
        return "Lieu et Disponibilité";
      default:
        return "";
    }
  }
}

export function QuizPage() {
  const { language } = useLanguage();
  const { user } = useUser();
  const { toast } = useToast();
  const [, navigate] = useLocation();
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Create a ref for the announcement element for screen readers
  const [announcement, setAnnouncement] = useState<string | null>(null);

  const form = useForm<QuizFormValues>({
    resolver: zodResolver(culturalQuizSchema),
    defaultValues: {
      proficiencyLevel: "beginner",
      preferredLocation: "fredericton",
      availableTime: "weekend",
      practiceFrequency: "weekly",
      speakingConfidence: "moderate",
      writingLevel: "beginner",
      readingLevel: "beginner",
      learningStyle: "visual",
    },
  });

  const submitQuiz = useMutation({
    mutationFn: async (data: QuizFormValues) => {
      setIsSubmitting(true);
      try {
        const response = await fetch("/api/quiz", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
          credentials: "include",
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.error || 'Failed to submit quiz');
        }

        return response.json();
      } finally {
        setIsSubmitting(false);
      }
    },
    onSuccess: () => {
      toast({
        title: t('quizCompleted', language),
        description: t('quizSaved', language),
      });
      // Redirect based on authentication status
      navigate(user ? "/matches" : "/auth");
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: language === 'en' ? "Error" : "Erreur",
        description: error instanceof Error ? error.message : 
          language === 'en' ? "Failed to save preferences" : "Échec de l'enregistrement des préférences",
      });
    },
  });

  const onSubmit = async (data: QuizFormValues) => {
    if (step < totalSteps) {
      // Move to next step
      setStep(step + 1);
      
      // Focus the first input in the form after step change for better keyboard navigation
      setTimeout(() => {
        const firstInput = document.querySelector('#quiz-form select, #quiz-form input');
        if (firstInput instanceof HTMLElement) {
          firstInput.focus();
        }
      }, 100);
      
      return;
    }

    // Final step submission
    await submitQuiz.mutateAsync(data);
    
    // Announce quiz completion to screen readers
    const completionAnnouncement = language === 'en'
      ? 'Quiz completed successfully. Processing your answers.'
      : 'Quiz complété avec succès. Traitement de vos réponses.';
    
    setAnnouncement(completionAnnouncement);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <FormField
              control={form.control}
              name="proficiencyLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel id="proficiency-level-label">
                    {language === 'en' 
                      ? `What's your overall level in ${user?.targetLanguage === 'en' ? 'English' : 'French'}?`
                      : `Quel est votre niveau général en ${user?.targetLanguage === 'en' ? 'anglais' : 'français'} ?`}
                  </FormLabel>
                  <div className="text-sm text-muted-foreground mb-1" id="proficiency-level-hint">
                    {language === 'en'
                      ? "Choose the level that best matches your current language skills"
                      : "Choisissez le niveau qui correspond le mieux à vos compétences linguistiques actuelles"}
                  </div>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                    aria-labelledby="proficiency-level-label"
                    aria-describedby="proficiency-level-hint"
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={language === 'en' ? "Select level" : "Sélectionner le niveau"} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem 
                        value="beginner"
                        aria-label={language === 'en' ? "Beginner level" : "Niveau débutant"}
                      >
                        {language === 'en' ? "Beginner" : "Débutant"}
                      </SelectItem>
                      <SelectItem 
                        value="intermediate"
                        aria-label={language === 'en' ? "Intermediate level" : "Niveau intermédiaire"}
                      >
                        {language === 'en' ? "Intermediate" : "Intermédiaire"}
                      </SelectItem>
                      <SelectItem 
                        value="advanced"
                        aria-label={language === 'en' ? "Advanced level" : "Niveau avancé"}
                      >
                        {language === 'en' ? "Advanced" : "Avancé"}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="speakingConfidence"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {language === 'en' 
                      ? "How confident are you in speaking?"
                      : "Quel est votre niveau de confiance à l'oral ?"}
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={language === 'en' ? "Select confidence level" : "Sélectionner le niveau de confiance"} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="very-low">
                        {language === 'en' ? "Very Low - Just starting" : "Très Faible - Je débute"}
                      </SelectItem>
                      <SelectItem value="low">
                        {language === 'en' ? "Low - Basic conversations" : "Faible - Conversations basiques"}
                      </SelectItem>
                      <SelectItem value="moderate">
                        {language === 'en' ? "Moderate - Can hold conversations" : "Moyen - Peut tenir une conversation"}
                      </SelectItem>
                      <SelectItem value="high">
                        {language === 'en' ? "High - Fluent in most situations" : "Élevé - Fluide dans la plupart des situations"}
                      </SelectItem>
                      <SelectItem value="very-high">
                        {language === 'en' ? "Very High - Near native" : "Très Élevé - Proche du natif"}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        );
      case 2:
        return (
          <>
            <FormField
              control={form.control}
              name="writingLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {language === 'en' ? "Writing Level" : "Niveau d'écriture"}
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={language === 'en' ? "Select level" : "Sélectionner le niveau"} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="beginner">
                        {language === 'en' ? "Beginner - Basic phrases" : "Débutant - Phrases simples"}
                      </SelectItem>
                      <SelectItem value="intermediate">
                        {language === 'en' ? "Intermediate - Can express ideas" : "Intermédiaire - Peut exprimer des idées"}
                      </SelectItem>
                      <SelectItem value="advanced">
                        {language === 'en' ? "Advanced - Complex writing" : "Avancé - Écriture complexe"}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="readingLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {language === 'en' ? "Reading Comprehension" : "Compréhension écrite"}
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={language === 'en' ? "Select level" : "Sélectionner le niveau"} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="beginner">
                        {language === 'en' ? "Beginner - Simple texts" : "Débutant - Textes simples"}
                      </SelectItem>
                      <SelectItem value="intermediate">
                        {language === 'en' ? "Intermediate - General texts" : "Intermédiaire - Textes généraux"}
                      </SelectItem>
                      <SelectItem value="advanced">
                        {language === 'en' ? "Advanced - Complex materials" : "Avancé - Documents complexes"}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        );
      case 3:
        return (
          <>
            <FormField
              control={form.control}
              name="learningStyle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {language === 'en' ? "How do you learn best?" : "Comment apprenez-vous le mieux ?"}
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={language === 'en' ? "Select style" : "Sélectionner le style"} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="visual">
                        {language === 'en' ? "Visual - Learning through images" : "Visuel - Apprentissage par images"}
                      </SelectItem>
                      <SelectItem value="auditory">
                        {language === 'en' ? "Auditory - Learning by listening" : "Auditif - Apprentissage par l'écoute"}
                      </SelectItem>
                      <SelectItem value="reading">
                        {language === 'en' ? "Reading/Writing" : "Lecture/Écriture"}
                      </SelectItem>
                      <SelectItem value="kinesthetic">
                        {language === 'en' ? "Hands-on Practice" : "Pratique active"}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="practiceFrequency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {language === 'en' ? "How often would you like to practice?" : "À quelle fréquence souhaitez-vous pratiquer ?"}
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={language === 'en' ? "Select frequency" : "Sélectionner la fréquence"} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="weekly">
                        {language === 'en' ? "Weekly" : "Hebdomadaire"}
                      </SelectItem>
                      <SelectItem value="biweekly">
                        {language === 'en' ? "Every two weeks" : "Aux deux semaines"}
                      </SelectItem>
                      <SelectItem value="monthly">
                        {language === 'en' ? "Monthly" : "Mensuel"}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        );
      case 4:
        return (
          <>
            <FormField
              control={form.control}
              name="preferredLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {language === 'en' ? "Preferred meetup location" : "Lieu de rencontre préféré"}
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={language === 'en' ? "Select location" : "Sélectionner l'emplacement"} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="fredericton">Fredericton</SelectItem>
                      <SelectItem value="moncton">Moncton</SelectItem>
                      <SelectItem value="saint-john">Saint John</SelectItem>
                      <SelectItem value="other">
                        {language === 'en' ? "Other" : "Autre"}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="availableTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {language === 'en' ? "When are you usually available?" : "Quand êtes-vous généralement disponible ?"}
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={language === 'en' ? "Select time" : "Sélectionner l'horaire"} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="morning">
                        {language === 'en' ? "Mornings" : "Matins"}
                      </SelectItem>
                      <SelectItem value="afternoon">
                        {language === 'en' ? "Afternoons" : "Après-midis"}
                      </SelectItem>
                      <SelectItem value="evening">
                        {language === 'en' ? "Evenings" : "Soirées"}
                      </SelectItem>
                      <SelectItem value="weekend">
                        {language === 'en' ? "Weekends" : "Fins de semaine"}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        );
      default:
        return null;
    }
  };

  // Add a useEffect to update the announcement when step changes
  useEffect(() => {
    if (step > 0) {
      // Create announcement text
      const newAnnouncement = language === 'en'
        ? `Now on step ${step} of ${totalSteps}: ${getStepTitle(step, language)}`
        : `Maintenant à l'étape ${step} sur ${totalSteps}: ${getStepTitle(step, language)}`;
      
      // Update announcement state for the screen reader
      setAnnouncement(newAnnouncement);
      
      // Clear announcement after it's read (commonly 3 seconds is enough)
      setTimeout(() => setAnnouncement(null), 3000);
    }
  }, [step, language, totalSteps]);

  return (
    <div className="min-h-screen bg-background p-4">
      {/* Skip to content link for keyboard users */}
      <a 
        href="#quiz-form" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-background focus:border focus:border-primary focus:rounded-md"
        tabIndex={0}
      >
        {language === 'en' ? 'Skip to quiz form' : 'Passer au formulaire'}
      </a>
      
      {/* Live region for screen reader announcements */}
      {announcement && (
        <div 
          className="sr-only" 
          role="status" 
          aria-live="assertive"
          aria-atomic="true"
        >
          {announcement}
        </div>
      )}
      <div className="container max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle id="quiz-title">
              {t('quizTitle', language)}
            </CardTitle>
            <CardDescription>
              {t('quizDescription', language)}
            </CardDescription>
            <div className="mt-4 flex justify-between items-center">
              <h3 className="text-lg font-medium" id={`step-${step}-heading`}>
                {language === 'en'
                  ? `Step ${step}: ${getStepTitle(step, language)}`
                  : `Étape ${step}: ${getStepTitle(step, language)}`}
              </h3>
            </div>
            <div className="flex items-center gap-1 mt-4">
              {[...Array(totalSteps)].map((_, i) => (
                <div 
                  key={i} 
                  className="flex flex-col items-center"
                  aria-hidden={true}
                >
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium
                    ${i + 1 === step 
                      ? 'bg-primary text-primary-foreground border-2 border-primary-foreground' 
                      : i + 1 < step 
                        ? 'bg-primary/80 text-primary-foreground' 
                        : 'bg-muted text-muted-foreground'}`}
                  >
                    {i + 1}
                  </div>
                </div>
              ))}
            </div>
            <div className="sr-only" aria-live="polite">
              {language === 'en' 
                ? `Step ${step} of ${totalSteps}` 
                : `Étape ${step} sur ${totalSteps}`}
            </div>
            <Progress 
              value={(step / totalSteps) * 100} 
              className="h-2 mt-4"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={(step / totalSteps) * 100}
              aria-valuetext={language === 'en' 
                ? `Step ${step} of ${totalSteps}, ${Math.round((step / totalSteps) * 100)}% complete` 
                : `Étape ${step} sur ${totalSteps}, ${Math.round((step / totalSteps) * 100)}% complété`}
            />
          </CardHeader>
          <CardContent>
            {/* Skip to form button for keyboard users */}
            <a 
              href="#quiz-form" 
              className="sr-only focus:not-sr-only focus:absolute focus:z-10 focus:bg-background focus:p-2 focus:border focus:border-primary"
            >
              {language === 'en' ? 'Skip to quiz form' : 'Passer au formulaire de quiz'}
            </a>
            
            <Form {...form}>
              <form 
                id="quiz-form"
                onSubmit={form.handleSubmit(onSubmit)} 
                className="space-y-6"
                aria-labelledby="quiz-title"
              >
                <div 
                  className="space-y-6" 
                  role="region" 
                  aria-labelledby={`step-${step}-heading`}
                  aria-describedby={`step-${step}-description`}
                >
                  <div className="sr-only" id={`step-${step}-description`}>
                    {language === 'en' 
                      ? `This is step ${step} of ${totalSteps}. Use the tab key to navigate between form fields and the arrow keys to select options.` 
                      : `Ceci est l'étape ${step} sur ${totalSteps}. Utilisez la touche tabulation pour naviguer entre les champs du formulaire et les touches fléchées pour sélectionner les options.`}
                  </div>
                  {renderStepContent()}
                </div>

                <div 
                  className="flex justify-between mt-6"
                  role="navigation" 
                  aria-label={language === 'en' ? 'Form navigation' : 'Navigation du formulaire'}
                >
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      if (step > 1) {
                        setStep((s) => Math.max(1, s - 1));
                        // Announce step change to screen readers
                        const announcement = language === 'en' 
                          ? `Moving to step ${step - 1} of ${totalSteps}` 
                          : `Passage à l'étape ${step - 1} sur ${totalSteps}`;
                          
                        // Focus the first input in the form after step change
                        setTimeout(() => {
                          const firstInput = document.querySelector('#quiz-form select, #quiz-form input');
                          if (firstInput instanceof HTMLElement) {
                            firstInput.focus();
                          }
                        }, 100);
                      }
                    }}
                    disabled={step === 1 || isSubmitting}
                    aria-label={language === 'en' 
                      ? `Go to previous step (Step ${step-1})` 
                      : `Aller à l'étape précédente (Étape ${step-1})`}
                    className="focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none"
                  >
                    {t('previous', language)}
                  </Button>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    aria-label={step < totalSteps 
                      ? (language === 'en' ? `Proceed to step ${step+1}` : `Passer à l'étape ${step+1}`)
                      : (language === 'en' ? 'Complete quiz' : 'Terminer le quiz')}
                    className="focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none"
                  >
                    {step < totalSteps ? (
                      t('next', language)
                    ) : isSubmitting ? (
                      t('saving', language)
                    ) : (
                      t('complete', language)
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
