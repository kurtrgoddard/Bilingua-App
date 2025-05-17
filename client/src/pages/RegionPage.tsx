import { useQuery } from "@tanstack/react-query";
import { useLanguage } from "@/hooks/use-language";
import { Link } from "wouter";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Lock, Unlock, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface Region {
  id: number;
  name: string;
  description: string;
  frenchDescription: string;
  requiredUsersToUnlock: number;
  isUnlocked: boolean;
  frenchUserCount: number;
  englishUserCount: number;
  isVirtual?: boolean;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function RegionsPage() {
  const { language } = useLanguage();
  const { data: regions = [], isLoading, error } = useQuery<Region[]>({
    queryKey: ['/api/regions'],
    queryFn: async () => {
      try {
        const response = await fetch('/api/regions');
        if (!response.ok) {
          throw new Error('Failed to fetch regions');
        }
        
        const data = await response.json();
        
        // Handle both array format and object format with regions property
        if (Array.isArray(data)) {
          return data;
        } else if (data.regions && Array.isArray(data.regions)) {
          return data.regions;
        } else {
          console.error('Unexpected API response format:', data);
          throw new Error('Unexpected API response format');
        }
      } catch (error) {
        console.error('Error fetching regions:', error);
        throw error;
      }
    }
  });

  if (isLoading) {
    return (
      <div className="container max-w-4xl mx-auto p-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {language === 'en' ? 'Available Regions' : 'Régions disponibles'}
          </h1>
          <p className="text-muted-foreground">
            {language === 'en' 
              ? 'Join the community and help unlock new regions for language exchange'
              : 'Rejoignez la communauté et aidez à débloquer de nouvelles régions pour l\'échange linguistique'}
          </p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-6 bg-muted rounded w-1/3 mb-2"></div>
                <div className="h-4 bg-muted rounded w-3/4"></div>
              </CardHeader>
              <CardContent>
                <div className="h-2 bg-muted rounded w-full mb-4"></div>
                <div className="h-8 bg-muted rounded w-full mt-4"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container max-w-4xl mx-auto p-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {language === 'en' ? 'Available Regions' : 'Régions disponibles'}
          </h1>
        </div>
        <Card className="bg-destructive/10">
          <CardContent className="p-4">
            <p className="text-destructive">
              {language === 'en' 
                ? 'Error loading regions. Please try again.' 
                : 'Erreur lors du chargement des régions. Veuillez réessayer.'}
            </p>
            <Button 
              variant="outline" 
              className="mt-2"
              onClick={() => window.location.reload()}
            >
              {language === 'en' ? 'Try again' : 'Réessayer'}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container max-w-4xl mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          {language === 'en' ? 'Available Regions' : 'Régions disponibles'}
        </h1>
        <p className="text-muted-foreground">
          {language === 'en' 
            ? 'Join the community and help unlock new regions for language exchange'
            : 'Rejoignez la communauté et aidez à débloquer de nouvelles régions pour l\'échange linguistique'}
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-4 md:grid-cols-2"
      >
        {regions.map((region) => {
          const totalUsers = region.frenchUserCount + region.englishUserCount;
          const progress = Math.min(100, (totalUsers / region.requiredUsersToUnlock) * 100);

          return (
            <motion.div key={region.id} variants={item}>
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-1.5">
                        {region.name}
                        {region.isVirtual ? null : (
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                        )}
                      </CardTitle>
                      <CardDescription className="line-clamp-2 mt-1">
                        {language === 'en' ? region.description : region.frenchDescription}
                      </CardDescription>
                    </div>
                    {region.isUnlocked ? (
                      <Unlock className="h-5 w-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <Lock className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {language === 'en' ? 'Progress' : 'Progression'}
                      </span>
                      <span className="font-medium">
                        {totalUsers} / {region.requiredUsersToUnlock} 
                        {language === 'en' ? ' users' : ' utilisateurs'}
                      </span>
                    </div>
                    <Progress value={progress} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>🇫🇷 {region.frenchUserCount}/{region.requiredUsersToUnlock/2}</span>
                      <span>🇬🇧 {region.englishUserCount}/{region.requiredUsersToUnlock/2}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="mt-auto pt-0">
                  {region.isUnlocked ? (
                    <Link href={`/regions/${region.id}`}>
                      <Button className="w-full">
                        {language === 'en' ? 'Explore region' : 'Explorer la région'}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="outline" disabled className="w-full">
                      {language === 'en' ? 'Locked' : 'Verrouillé'} 
                      <Lock className="h-4 w-4 ml-2" />
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
