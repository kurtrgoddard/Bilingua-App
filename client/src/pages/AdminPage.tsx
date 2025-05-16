import { useLanguage } from "@/hooks/use-language";
import { useAdmin } from "@/hooks/use-admin";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { useLocation } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Settings, 
  MapPin, 
  BarChart,
  UserCheck,
  Shield,
  MessageSquare,
  Bell
} from "lucide-react";

export function AdminPage() {
  const { language } = useLanguage();
  const { admin } = useAdmin();
  const [, navigate] = useLocation();

  if (!admin) {
    navigate('/admin/login');
    return null;
  }

  return (
    <AdminLayout title={language === "en" ? "Admin Dashboard" : "Tableau de bord administrateur"}>
      <CardDescription className="mb-8">
        {language === "en" 
          ? `Welcome back, ${admin.username}. You are logged in as an Administrator.`
          : `Bienvenue, ${admin.username}. Vous êtes connecté en tant qu'Administrateur.`
        }
      </CardDescription>
      
      {/* Admin Features Grid - All features available to administrators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* User Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Users className="h-5 w-5 text-primary" />
              {language === "en" ? "User Management" : "Gestion des utilisateurs"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              {language === "en" 
                ? "View and manage user accounts" 
                : "Voir et gérer les comptes utilisateurs"}
            </p>
            <Button 
              className="w-full"
              onClick={() => navigate('/admin/users')}
            >
              {language === "en" ? "Manage Users" : "Gérer les utilisateurs"}
            </Button>
          </CardContent>
        </Card>

        {/* Content Moderation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <MessageSquare className="h-5 w-5 text-primary" />
              {language === "en" ? "Content Moderation" : "Modération de Contenu"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              {language === "en" 
                ? "Review and moderate user messages" 
                : "Réviser et modérer les messages des utilisateurs"}
            </p>
            <Button 
              className="w-full"
              onClick={() => navigate('/admin/moderation')}
            >
              {language === "en" ? "Moderate Content" : "Modérer le Contenu"}
            </Button>
          </CardContent>
        </Card>

        {/* Region Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <MapPin className="h-5 w-5 text-primary" />
              {language === "en" ? "Regions" : "Régions"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              {language === "en"
                ? "Manage regions and location settings"
                : "Gérer les régions et les paramètres de localisation"}
            </p>
            <Button 
              className="w-full"
              onClick={() => navigate('/admin/regions')}
            >
              {language === "en" ? "Manage Regions" : "Gérer les régions"}
            </Button>
          </CardContent>
        </Card>

        {/* Analytics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <BarChart className="h-5 w-5 text-primary" />
              {language === "en" ? "Analytics" : "Analytique"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              {language === "en"
                ? "View platform statistics and metrics"
                : "Voir les statistiques et métriques de la plateforme"}
            </p>
            <Button 
              className="w-full"
              onClick={() => navigate('/admin/analytics')}
            >
              {language === "en" ? "View Analytics" : "Voir l'analytique"}
            </Button>
          </CardContent>
        </Card>

        {/* Verification Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <UserCheck className="h-5 w-5 text-primary" />
              {language === "en" ? "Verifications" : "Vérifications"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              {language === "en"
                ? "Manage user verification requests"
                : "Gérer les demandes de vérification des utilisateurs"}
            </p>
            <Button 
              className="w-full"
              onClick={() => navigate('/admin/verifications')}
            >
              {language === "en" ? "Manage Verifications" : "Gérer les vérifications"}
            </Button>
          </CardContent>
        </Card>

        {/* System Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Settings className="h-5 w-5 text-primary" />
              {language === "en" ? "Settings" : "Paramètres"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              {language === "en"
                ? "Configure system settings"
                : "Configurer les paramètres du système"}
            </p>
            <Button 
              className="w-full"
              onClick={() => navigate('/admin/settings')}
            >
              {language === "en" ? "System Settings" : "Paramètres système"}
            </Button>
          </CardContent>
        </Card>

        {/* Security */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Shield className="h-5 w-5 text-primary" />
              {language === "en" ? "Security" : "Sécurité"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              {language === "en"
                ? "View security logs and settings"
                : "Voir les journaux et paramètres de sécurité"}
            </p>
            <Button 
              className="w-full"
              onClick={() => navigate('/admin/security')}
            >
              {language === "en" ? "Security Dashboard" : "Tableau de bord de sécurité"}
            </Button>
          </CardContent>
        </Card>
        
        {/* Admin Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Shield className="h-5 w-5 text-primary" />
              {language === "en" ? "Admin Management" : "Gestion des Administrateurs"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              {language === "en"
                ? "Manage administrator accounts"
                : "Gérer les comptes administrateurs"}
            </p>
            <Button 
              className="w-full"
              onClick={() => navigate('/admin/super')}
            >
              {language === "en" ? "Admin Management" : "Gestion des Admins"}
            </Button>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Bell className="h-5 w-5 text-primary" />
              {language === "en" ? "Notifications" : "Notifications"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              {language === "en" 
                ? "View system notifications and alerts" 
                : "Voir les notifications et alertes système"}
            </p>
            <Button 
              className="w-full"
              onClick={() => navigate('/admin/notifications')}
            >
              {language === "en" ? "View Notifications" : "Voir les Notifications"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}

export default AdminPage;
