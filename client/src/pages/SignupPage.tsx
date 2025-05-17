import { useState } from "react";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLanguage } from "@/hooks/use-language";
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
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useAuth } from "@/hooks/use-auth";
import { StepIndicator } from "@/components/ui/step-indicator";
import { t } from "@/lib/translations";

const signupSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  location: z.enum(["fredericton", "moncton", "saint-john", "virtual"]),
  nativeLanguage: z.enum(["en", "fr"]),
  targetLanguage: z.enum(["en", "fr"]),
  isNativeSpeaker: z.boolean(),
  acceptTerms: z.boolean().refine(val => val, "You must accept the terms"),
  acceptSafety: z.boolean().refine(val => val, "You must accept the safety guidelines"),
  acceptPrivacyPolicy: z.boolean().refine(val => val, "You must accept the privacy policy"),
  acceptDataCollection: z.boolean().refine(val => val, "You must provide consent for data collection")
});

export function SignupPage() {
  const [, navigate] = useLocation();
  const { language } = useLanguage();
  const { register, isLoggingIn } = useAuth();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      location: "fredericton",
      nativeLanguage: "en",
      targetLanguage: "fr",
      isNativeSpeaker: false,
      acceptTerms: false,
      acceptSafety: false,
      acceptPrivacyPolicy: false,
      acceptDataCollection: false
    },
  });

  const stepLabels = [
    t('onboarding.signupStep1', language), // Account Details
    t('onboarding.signupStep2', language), // Language Preferences
    t('onboarding.signupStep3', language)  // Terms & Safety
  ];

  const nextStep = () => {
    // Validate current step before proceeding
    if (step === 1) {
      const { username, email, password } = form.getValues();
      if (!username || !email || !password) {
        form.trigger(['username', 'email', 'password']);
        return;
      }
    } else if (step === 2) {
      const { location, nativeLanguage, targetLanguage } = form.getValues();
      if (!location || !nativeLanguage || !targetLanguage) {
        form.trigger(['location', 'nativeLanguage', 'targetLanguage']);
        return;
      }
    }
    
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  async function onSubmit(values: z.infer<typeof signupSchema>) {
    try {
      console.log("Submitting registration form:", values);
      
      // PIPEDA-compliant consent timestamps
      const now = new Date();
      const registrationData = {
        ...values,
        birthDate: new Date(),
        // Record exact consent timestamps as required by PIPEDA
        acceptedTermsAt: values.acceptTerms ? now : null,
        acceptedSafetyAt: values.acceptSafety ? now : null,
        acceptedPrivacyAt: values.acceptPrivacyPolicy ? now : null,
        acceptedDataCollectionAt: values.acceptDataCollection ? now : null,
      };
      
      // Log consent for audit purposes
      console.log("PIPEDA consent recorded:", {
        acceptedTermsAt: registrationData.acceptedTermsAt,
        acceptedSafetyAt: registrationData.acceptedSafetyAt,
        acceptedPrivacyAt: registrationData.acceptedPrivacyAt,
        acceptedDataCollectionAt: registrationData.acceptedDataCollectionAt,
      });
      
      await register(registrationData);

      toast({
        title: language === 'en' ? "Success!" : "Succès !",
        description: language === 'en' 
          ? "Your account has been created" 
          : "Votre compte a été créé",
      });

      navigate("/dashboard");
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        variant: "destructive",
        title: language === 'en' ? "Error" : "Erreur",
        description: error instanceof Error ? error.message : "Failed to create account",
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
        {language === 'en' ? 'Back to Home' : 'Retour à l\'accueil'}
      </Button>

      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <CardTitle>{language === 'en' ? 'Create Account' : 'Créer un compte'}</CardTitle>
          <CardDescription>
            {language === 'en' 
              ? 'Join our language exchange community'
              : 'Rejoignez notre communauté d\'échange linguistique'}
          </CardDescription>
          
          <StepIndicator 
            currentStep={step} 
            totalSteps={totalSteps} 
            className="mt-6" 
            variant="connected"
            showLabels={true}
            stepLabels={stepLabels}
          />
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Step 1: Account Details */}
              {step === 1 && (
                <>
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          {language === 'en' ? 'Username' : 'Nom d\'utilisateur'}
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
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          {language === 'en' ? 'Email' : 'Courriel'}
                        </FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
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
                </>
              )}

              {/* Step 2: Language Preferences */}
              {step === 2 && (
                <>
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          {language === 'en' ? 'Location' : 'Emplacement'}
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="fredericton">Fredericton</SelectItem>
                            <SelectItem value="moncton">Moncton</SelectItem>
                            <SelectItem value="saint-john">Saint John</SelectItem>
                            <SelectItem value="virtual">
                              {language === 'en' ? 'Virtual' : 'Virtuel'}
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="nativeLanguage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            {language === 'en' ? 'Native Language' : 'Langue maternelle'}
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="en">English</SelectItem>
                              <SelectItem value="fr">Français</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="targetLanguage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            {language === 'en' ? 'Learning Language' : 'Langue à apprendre'}
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="en">English</SelectItem>
                              <SelectItem value="fr">Français</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="isNativeSpeaker"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            {language === 'en'
                              ? 'I want to help others practice my native language'
                              : 'Je veux aider les autres à pratiquer ma langue maternelle'}
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                </>
              )}

              {/* Step 3: Terms and Safety */}
              {step === 3 && (
                <>
                  <FormField
                    control={form.control}
                    name="acceptPrivacyPolicy"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="flex items-center gap-1">
                            {language === 'en'
                              ? <>I have read and accept the <Button variant="link" className="h-auto p-0" onClick={(e) => { e.preventDefault(); navigate('/privacy-policy'); }}>Privacy Policy</Button> and understand how my personal information will be collected, used, and stored in accordance with PIPEDA requirements</>
                              : <>J'ai lu et j'accepte la <Button variant="link" className="h-auto p-0" onClick={(e) => { e.preventDefault(); navigate('/privacy-policy'); }}>Politique de confidentialité</Button> et je comprends comment mes informations personnelles seront collectées, utilisées et stockées conformément aux exigences de la LPRPDE</>}
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="acceptDataCollection"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            {language === 'en'
                              ? 'I expressly consent to the collection and processing of my personal data for finding language exchange partners and facilitating communication. I understand I can withdraw this consent at any time through my account settings.'
                              : 'Je consens expressément à la collecte et au traitement de mes données personnelles pour trouver des partenaires d\'échange linguistique et faciliter la communication. Je comprends que je peux retirer ce consentement à tout moment via les paramètres de mon compte.'}
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="acceptTerms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            {language === 'en'
                              ? 'I accept the terms and conditions'
                              : 'J\'accepte les termes et conditions'}
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="acceptSafety"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            {language === 'en'
                              ? 'I accept the safety guidelines'
                              : 'J\'accepte les consignes de sécurité'}
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  <p className="text-sm text-muted-foreground mt-4">
                    {language === 'en'
                      ? 'Under PIPEDA, you have the right to access, correct, and request deletion of your personal information at any time through your account settings.'
                      : 'En vertu de la LPRPDE, vous avez le droit d\'accéder à vos informations personnelles, de les corriger et d\'en demander la suppression à tout moment via les paramètres de votre compte.'}
                  </p>
                  
                  <p className="text-sm text-muted-foreground mt-2">
                    {language === 'en'
                      ? 'Note: Language learners are expected to offer to buy coffee for native speakers as a courtesy.'
                      : 'Note : Les apprenants de langue sont invités à offrir le café aux locuteurs natifs par courtoisie.'}
                  </p>
                </>
              )}

              <div className="flex justify-between mt-6">
                {step > 1 ? (
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={prevStep}
                  >
                    {language === 'en' ? 'Previous' : 'Précédent'}
                  </Button>
                ) : (
                  <div></div> // Empty div for spacing
                )}
                
                {step < totalSteps ? (
                  <Button 
                    type="button" 
                    onClick={nextStep}
                  >
                    {language === 'en' ? 'Continue' : 'Continuer'}
                  </Button>
                ) : (
                  <Button 
                    type="submit" 
                    disabled={isLoggingIn}
                  >
                    {isLoggingIn ? (
                      language === 'en' ? 'Creating Account...' : 'Création du compte...'
                    ) : (
                      language === 'en' ? 'Create Account' : 'Créer un compte'
                    )}
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default SignupPage;
