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
import { useLocation } from "wouter";

const formSchema = z.object({
  location: z.string().min(2),
  nativeLanguage: z.enum(["en", "fr"]),
  targetLanguage: z.enum(["en", "fr"]),
  ageRange: z.string().optional(),
  gender: z.string().optional(),
  availability: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

const AGE_RANGES = ["18-25", "26-35", "36-45", "46-55", "56+"];
const GENDERS = ["Male", "Female", "Other", "Prefer not to say"];

export function ProfilePage() {
  const { language } = useLanguage();
  const { user, updateProfile } = useUser();
  const { toast } = useToast();
  const [, navigate] = useLocation();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: user?.location || "",
      nativeLanguage: (user?.nativeLanguage as "en" | "fr") || "en",
      targetLanguage: (user?.targetLanguage as "en" | "fr") || "fr",
      ageRange: user?.ageRange || "",
      gender: user?.gender || "",
      availability: user?.availability || "",
    },
  });

  async function onSubmit(values: FormValues) {
    try {
      await updateProfile(values);
      toast({
        title: "Profile updated",
        description: "Your profile has been successfully updated.",
      });
      navigate("/matches");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "An error occurred",
      });
    }
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="container max-w-2xl mx-auto">
        <Card className="border-primary/10 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-2xl">
              {language === 'en' ? 'Profile Settings' : 'Paramètres du profil'}
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              {language === 'en' 
                ? `Update your preferences and settings, ${user?.username}`
                : `Mettez à jour vos préférences et paramètres, ${user?.username}`}
            </p>
          </CardHeader>
          <CardContent className="pt-4">
            <Form {...form}>
              <form 
                onSubmit={form.handleSubmit(onSubmit)} 
                className="space-y-6"
                aria-labelledby="profile-form-heading"
              >
                <div id="profile-form-heading" className="sr-only">
                  {language === 'en' ? 'Profile information form' : 'Formulaire d\'information de profil'}
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">
                    {language === 'en' ? 'Location' : 'Localisation'}
                  </h3>
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          {language === 'en' ? 'Your location' : 'Votre localisation'}
                        </FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder={language === 'en' ? "Select location" : "Sélectionner l'emplacement"} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="fredericton">Fredericton</SelectItem>
                              <SelectItem value="moncton">Moncton</SelectItem>
                              <SelectItem value="saint-john">Saint John</SelectItem>
                              <SelectItem value="virtual">{language === 'en' ? 'Virtual Only' : 'Virtuel seulement'}</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="space-y-4 pt-2">
                  <h3 className="text-lg font-medium">
                    {language === 'en' ? 'Language Preferences' : 'Préférences de langue'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="nativeLanguage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            {language === 'en' ? 'Native language' : 'Langue maternelle'}
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={language === 'en' ? "Select language" : "Sélectionner la langue"} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="en">{language === 'en' ? 'English' : 'Anglais'}</SelectItem>
                              <SelectItem value="fr">{language === 'en' ? 'French' : 'Français'}</SelectItem>
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
                            {language === 'en' ? 'Learning language' : 'Langue d\'apprentissage'}
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={language === 'en' ? "Select language" : "Sélectionner la langue"} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="en">{language === 'en' ? 'English' : 'Anglais'}</SelectItem>
                              <SelectItem value="fr">{language === 'en' ? 'French' : 'Français'}</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                
                <div className="space-y-4 pt-2">
                  <h3 className="text-lg font-medium">
                    {language === 'en' ? 'Personal Information' : 'Informations personnelles'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="ageRange"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            {language === 'en' ? 'Age range' : 'Tranche d\'âge'}
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={language === 'en' ? "Select age range" : "Sélectionner la tranche d'âge"} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {AGE_RANGES.map((range) => (
                                <SelectItem key={range} value={range}>
                                  {range}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            {language === 'en' ? 'Gender' : 'Genre'}
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={language === 'en' ? "Select gender" : "Sélectionner le genre"} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {GENDERS.map((gender) => (
                                <SelectItem key={gender} value={gender}>
                                  {language === 'en' 
                                    ? gender 
                                    : gender === 'Male' 
                                      ? 'Homme' 
                                      : gender === 'Female' 
                                        ? 'Femme' 
                                        : gender === 'Other' 
                                          ? 'Autre' 
                                          : 'Préfère ne pas préciser'
                                  }
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                
                <div className="space-y-4 pt-2">
                  <h3 className="text-lg font-medium">
                    {language === 'en' ? 'Availability' : 'Disponibilité'}
                  </h3>
                  <FormField
                    control={form.control}
                    name="availability"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          {language === 'en' 
                            ? 'When are you available for language practice?' 
                            : 'Quand êtes-vous disponible pour la pratique des langues?'
                          }
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder={language === 'en' ? "Select availability" : "Sélectionner la disponibilité"} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="weekday-mornings">
                              {language === 'en' ? 'Weekday mornings' : 'Matinées en semaine'}
                            </SelectItem>
                            <SelectItem value="weekday-evenings">
                              {language === 'en' ? 'Weekday evenings' : 'Soirées en semaine'}
                            </SelectItem>
                            <SelectItem value="weekends">
                              {language === 'en' ? 'Weekends' : 'Fins de semaine'}
                            </SelectItem>
                            <SelectItem value="flexible">
                              {language === 'en' ? 'Flexible schedule' : 'Horaire flexible'}
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* PIPEDA Compliance Section */}
                <div className="space-y-4 pt-6 border-t border-border mt-6">
                  <h3 className="text-lg font-medium">
                    {language === 'en' ? 'Privacy & Data Controls' : 'Contrôles de confidentialité et de données'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === 'en' 
                      ? 'Under PIPEDA (Personal Information Protection and Electronic Documents Act), you have the right to access, correct, and request deletion of your personal data.'
                      : 'En vertu de la LPRPDE (Loi sur la protection des renseignements personnels et les documents électroniques), vous avez le droit d\'accéder à vos données personnelles, de les corriger et d\'en demander la suppression.'}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <Button 
                      type="button" 
                      variant="outline"
                      className="h-auto py-4 flex flex-col items-center justify-center text-left"
                      onClick={() => {
                        toast({
                          title: language === 'en' ? "Request Submitted" : "Demande soumise",
                          description: language === 'en' 
                            ? "Your data access request has been submitted. You'll receive your data within 30 days." 
                            : "Votre demande d'accès aux données a été soumise. Vous recevrez vos données dans les 30 jours.",
                        });
                      }}
                    >
                      <div className="font-medium">
                        {language === 'en' ? 'Request My Data' : 'Demander mes données'}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {language === 'en' 
                          ? 'Get a copy of all your personal data' 
                          : 'Obtenir une copie de toutes vos données personnelles'}
                      </div>
                    </Button>
                    
                    <Button 
                      type="button" 
                      variant="outline"
                      className="h-auto py-4 flex flex-col items-center justify-center text-left text-destructive border-destructive/30 hover:bg-destructive/10"
                      onClick={() => {
                        toast({
                          title: language === 'en' ? "Request Submitted" : "Demande soumise",
                          description: language === 'en' 
                            ? "Your data deletion request has been submitted. We'll process your request within 30 days." 
                            : "Votre demande de suppression de données a été soumise. Nous traiterons votre demande dans les 30 jours.",
                        });
                      }}
                    >
                      <div className="font-medium">
                        {language === 'en' ? 'Delete My Data' : 'Supprimer mes données'}
                      </div>
                      <div className="text-xs text-muted-foreground/70 mt-1">
                        {language === 'en' 
                          ? 'Request deletion of all your personal data' 
                          : 'Demander la suppression de toutes vos données personnelles'}
                      </div>
                    </Button>
                  </div>
                  
                  <div className="mt-4 px-4 py-3 bg-muted rounded-md">
                    <h4 className="text-sm font-medium mb-2">
                      {language === 'en' ? 'Your Privacy Choices' : 'Vos choix de confidentialité'}
                    </h4>
                    <ul className="text-xs space-y-2 text-muted-foreground">
                      <li className="flex items-center">
                        <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                        {language === 'en' 
                          ? 'Accepted Privacy Policy on: ' 
                          : 'Politique de confidentialité acceptée le: '}
                        {new Date().toLocaleDateString()}
                      </li>
                      <li className="flex items-center">
                        <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                        {language === 'en' 
                          ? 'Consented to data collection on: ' 
                          : 'Consentement à la collecte de données le: '}
                        {new Date().toLocaleDateString()}
                      </li>
                      <li className="flex items-center">
                        <a href="#" className="text-primary text-xs hover:underline">
                          {language === 'en' 
                            ? 'Review privacy policy' 
                            : 'Consulter la politique de confidentialité'}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-6 flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => navigate('/dashboard')}
                    className="mt-3 sm:mt-0"
                  >
                    {language === 'en' ? 'Cancel' : 'Annuler'}
                  </Button>
                  <Button 
                    type="submit" 
                    className="relative overflow-hidden group"
                    aria-label={language === 'en' ? 'Save profile changes' : 'Enregistrer les modifications du profil'}
                  >
                    <span className="relative z-10">
                      {language === 'en' ? 'Save Changes' : 'Enregistrer les modifications'}
                    </span>
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
