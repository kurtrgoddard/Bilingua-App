import { useLanguage } from "@/hooks/use-language";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function LegalPage() {
  const { language } = useLanguage();
  // More reliable URL parameter parsing
  const searchParams = new URLSearchParams(window.location.search);
  const tabParam = searchParams.get('tab');
  const defaultTab = tabParam === 'privacy' ? 'privacy' : 
                    tabParam === 'safety' ? 'safety' : 'terms';

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container max-w-4xl mx-auto">
        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="terms">
              {language === 'en' ? "Terms of Use" : "Conditions d'utilisation"}
            </TabsTrigger>
            <TabsTrigger value="privacy">
              {language === 'en' ? "Privacy Policy" : "Politique de confidentialité"}
            </TabsTrigger>
            <TabsTrigger value="safety">
              {language === 'en' ? "Safety Guidelines" : "Consignes de sécurité"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="terms">
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === 'en' ? "Terms of Use" : "Conditions d'utilisation"}
                </CardTitle>
                <CardDescription>
                  {language === 'en' 
                    ? "Please read these terms carefully before using Bilingua NB"
                    : "Veuillez lire attentivement ces conditions avant d'utiliser Bilingua NB"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[60vh] w-full rounded-md border p-4">
                  <div className="space-y-6">
                    <section>
                      <h3 className="text-lg font-semibold mb-2">
                        {language === 'en' ? "Disclaimer of Liability" : "Avis de non-responsabilité"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === 'en'
                          ? "Bilingua NB is a platform to connect language learners. We do not conduct background checks on users and are not responsible for the conduct of any user. You use this app at your own risk."
                          : "Bilingua NB est une plateforme pour connecter les apprenants en langues. Nous n'effectuons pas de vérification des antécédents des utilisateurs et ne sommes pas responsables de leur conduite. Vous utilisez cette application à vos propres risques."}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {language === 'en'
                          ? "Meetings arranged through Bilingua NB are at your own discretion and risk. We are not responsible for any incidents that occur during or as a result of these meetings."
                          : "Les rencontres organisées via Bilingua NB sont à votre discrétion et à vos risques. Nous ne sommes pas responsables des incidents qui surviennent pendant ou à la suite de ces rencontres."}
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-2">
                        {language === 'en' ? "User Conduct" : "Conduite de l'utilisateur"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === 'en'
                          ? "You agree to use Bilingua NB respectfully and lawfully. Harassment, discrimination, and any illegal activity are strictly prohibited."
                          : "Vous acceptez d'utiliser Bilingua NB de manière respectueuse et légale. Le harcèlement, la discrimination et toute activité illégale sont strictement interdits."}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {language === 'en'
                          ? "You are responsible for your own safety when meeting other users. We recommend meeting in public places and informing someone of your plans."
                          : "Vous êtes responsable de votre propre sécurité lors de rencontres avec d'autres utilisateurs. Nous recommandons de se rencontrer dans des lieux publics et d'informer quelqu'un de vos plans."}
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-2">
                        {language === 'en' ? "Intellectual Property" : "Propriété intellectuelle"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === 'en'
                          ? "The Bilingua NB name and logo are trademarks of Kurt Goddard. You may not use them without permission."
                          : "Le nom et le logo Bilingua NB sont des marques déposées de Kurt Goddard. Vous ne pouvez pas les utiliser sans permission."}
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-2">
                        {language === 'en' ? "Governing Law" : "Loi applicable"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === 'en'
                          ? "These Terms of Use shall be governed by the laws of the Province of New Brunswick and the federal laws of Canada applicable therein."
                          : "Ces conditions d'utilisation sont régies par les lois de la province du Nouveau-Brunswick et les lois fédérales du Canada qui y sont applicables."}
                      </p>
                    </section>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy">
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === 'en' ? "Privacy Policy" : "Politique de confidentialité"}
                </CardTitle>
                <CardDescription>
                  {language === 'en'
                    ? "How we collect, use, and protect your information"
                    : "Comment nous collectons, utilisons et protégeons vos informations"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[60vh] w-full rounded-md border p-4">
                  <div className="space-y-6">
                    <section>
                      <h3 className="text-lg font-semibold mb-2">
                        {language === 'en' ? "Information Collected" : "Informations collectées"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === 'en'
                          ? "We collect your name, email address, location (city/town), language preferences, and optional age range and gender."
                          : "Nous collectons votre nom, adresse e-mail, lieu (ville), préférences linguistiques, et facultativement votre tranche d'âge et genre."}
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-2">
                        {language === 'en' ? "Use of Information" : "Utilisation des informations"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === 'en'
                          ? "We use your information to match you with language partners and to improve the app's functionality."
                          : "Nous utilisons vos informations pour vous mettre en relation avec des partenaires linguistiques et améliorer les fonctionnalités de l'application."}
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-2">
                        {language === 'en' ? "Data Security" : "Sécurité des données"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === 'en'
                          ? "We take reasonable measures to protect your information, but we cannot guarantee absolute security."
                          : "Nous prenons des mesures raisonnables pour protéger vos informations, mais nous ne pouvons garantir une sécurité absolue."}
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-2">
                        {language === 'en' ? "User Rights" : "Droits des utilisateurs"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === 'en'
                          ? "You have the right to access, correct, and delete your personal information. Contact us at kurtRgoddard@gmail.com to exercise these rights."
                          : "Vous avez le droit d'accéder, de corriger et de supprimer vos informations personnelles. Contactez-nous à kurtRgoddard@gmail.com pour exercer ces droits."}
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-2">
                        {language === 'en' ? "Compliance with Laws" : "Conformité aux lois"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === 'en'
                          ? "We will comply with all applicable privacy laws, including PIPEDA and RTIPPA."
                          : "Nous nous conformerons à toutes les lois sur la protection de la vie privée applicables, y compris la LPRPDE et la LDIPVP."}
                      </p>
                    </section>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="safety">
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === 'en' ? "Safety Guidelines" : "Consignes de sécurité"}
                </CardTitle>
                <CardDescription>
                  {language === 'en'
                    ? "Important safety information for all language exchange meetups"
                    : "Informations de sécurité importantes pour tous les rendez-vous d'échange linguistique"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[60vh] w-full rounded-md border p-4">
                  <div className="space-y-6">
                    <section>
                      <h3 className="text-lg font-semibold mb-2">
                        {language === 'en' ? "Before the Meetup" : "Avant la rencontre"}
                      </h3>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>
                          {language === 'en'
                            ? "• Research your language partner online before meeting"
                            : "• Renseignez-vous sur votre partenaire linguistique en ligne avant de le rencontrer"}
                        </li>
                        <li>
                          {language === 'en'
                            ? "• Share your meetup details with a friend or family member"
                            : "• Partagez les détails de votre rencontre avec un ami ou un membre de votre famille"}
                        </li>
                        <li>
                          {language === 'en'
                            ? "• Plan to meet only in public places during daylight hours"
                            : "• Prévoyez de vous rencontrer uniquement dans des lieux publics pendant la journée"}
                        </li>
                        <li>
                          {language === 'en'
                            ? "• Have your own transportation arranged"
                            : "• Organisez votre propre transport"}
                        </li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-2">
                        {language === 'en' ? "During the Meetup" : "Pendant la rencontre"}
                      </h3>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>
                          {language === 'en'
                            ? "• Meet only in busy public places like cafés"
                            : "• Rencontrez-vous uniquement dans des lieux publics fréquentés comme des cafés"}
                        </li>
                        <li>
                          {language === 'en'
                            ? "• Keep your phone charged and with you at all times"
                            : "• Gardez votre téléphone chargé et avec vous en tout temps"}
                        </li>
                        <li>
                          {language === 'en'
                            ? "• Trust your instincts – if you feel uncomfortable, leave"
                            : "• Faites confiance à votre instinct – si vous vous sentez mal à l'aise, partez"}
                        </li>
                        <li>
                          {language === 'en'
                            ? "• Do not share personal financial information"
                            : "• Ne partagez pas d'informations financières personnelles"}
                        </li>
                        <li>
                          {language === 'en'
                            ? "• Consider using location sharing with a trusted person"
                            : "• Envisagez de partager votre localisation avec une personne de confiance"}
                        </li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-2">
                        {language === 'en' ? "Report Concerns" : "Signaler des préoccupations"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === 'en'
                          ? "If you encounter any behavior that makes you uncomfortable or violates our terms, please report it immediately to kurtRgoddard@gmail.com."
                          : "Si vous rencontrez un comportement qui vous met mal à l'aise ou qui viole nos conditions, veuillez le signaler immédiatement à kurtRgoddard@gmail.com."}
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-2">
                        {language === 'en' ? "Emergency Resources" : "Ressources d'urgence"}
                      </h3>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>
                          {language === 'en'
                            ? "• Emergency Services: 911"
                            : "• Services d'urgence : 911"}
                        </li>
                        <li>
                          {language === 'en'
                            ? "• Non-Emergency Police: Local numbers available in app"
                            : "• Police non urgente : Numéros locaux disponibles dans l'application"}
                        </li>
                        <li>
                          {language === 'en'
                            ? "• Chimo Helpline (Crisis Support): 1-800-667-5005"
                            : "• Ligne d'aide Chimo (soutien en cas de crise) : 1-800-667-5005"}
                        </li>
                      </ul>
                    </section>

                    <section className="bg-red-50 dark:bg-red-950 p-4 rounded-md border border-red-200 dark:border-red-800">
                      <h3 className="text-lg font-semibold mb-2 text-red-700 dark:text-red-300">
                        {language === 'en' ? "Important Reminder" : "Rappel important"}
                      </h3>
                      <p className="text-sm text-red-700 dark:text-red-300">
                        {language === 'en'
                          ? "Bilingua NB is strictly for adults aged 18 and over. We do not perform background checks on users. You are responsible for your own safety."
                          : "Bilingua NB est strictement réservé aux adultes de 18 ans et plus. Nous n'effectuons pas de vérification des antécédents des utilisateurs. Vous êtes responsable de votre propre sécurité."}
                      </p>
                    </section>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
