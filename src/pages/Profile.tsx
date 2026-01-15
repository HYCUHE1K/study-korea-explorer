import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

const profileSchema = z.object({
  full_name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().optional(),
  date_of_birth: z.string().optional(),
  nationality: z.string().optional(),
  current_education_level: z.string().optional(),
  target_degree: z.string().optional(),
  field_of_interest: z.string().optional(),
  preferred_location: z.string().optional(),
  budget_range: z.string().optional(),
  english_proficiency: z.string().optional(),
  gpa: z.string().optional(),
  study_timeline: z.string().optional(),
  additional_info: z.string().optional(),
});

type ProfileFormData = z.infer<typeof profileSchema>;

const Profile = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
  });

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user!.id)
        .single();

      if (error) throw error;

      if (data) {
        Object.keys(data).forEach((key) => {
          if (data[key] !== null && key !== 'id' && key !== 'email' && key !== 'created_at' && key !== 'updated_at') {
            setValue(key as keyof ProfileFormData, data[key]);
          }
        });
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setIsFetching(false);
    }
  };

  const onSubmit = async (data: ProfileFormData) => {
    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .upsert({
          id: user!.id,
          email: user!.email!,
          ...data,
          gpa: data.gpa ? parseFloat(data.gpa) : null,
        });

      if (error) throw error;

      toast.success(t('profile.updateSuccess'));
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error(t('profile.updateError'));
    } finally {
      setIsLoading(false);
    }
  };

  if (isFetching) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-br from-primary/5 to-green-light/10 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t('profile.title')}</CardTitle>
              <CardDescription>{t('profile.description')}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Basic Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">{t('profile.basicInfo')}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="full_name">{t('profile.fullName')} *</Label>
                      <Input
                        id="full_name"
                        {...register('full_name')}
                        placeholder={t('profile.fullNamePlaceholder')}
                      />
                      {errors.full_name && (
                        <p className="text-sm text-destructive">{errors.full_name.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">{t('profile.phone')}</Label>
                      <Input
                        id="phone"
                        {...register('phone')}
                        placeholder={t('profile.phonePlaceholder')}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="date_of_birth">{t('profile.dateOfBirth')}</Label>
                      <Input
                        id="date_of_birth"
                        type="date"
                        {...register('date_of_birth')}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="nationality">{t('profile.nationality')}</Label>
                      <Input
                        id="nationality"
                        {...register('nationality')}
                        placeholder={t('profile.nationalityPlaceholder')}
                      />
                    </div>
                  </div>
                </div>

                {/* Academic Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">{t('profile.academicInfo')}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="current_education_level">{t('profile.currentEducationLevel')}</Label>
                      <Input
                        id="current_education_level"
                        {...register('current_education_level')}
                        placeholder={t('profile.currentEducationLevelPlaceholder')}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="target_degree">{t('profile.targetDegree')}</Label>
                      <Input
                        id="target_degree"
                        {...register('target_degree')}
                        placeholder={t('profile.targetDegreePlaceholder')}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="field_of_interest">{t('profile.fieldOfInterest')}</Label>
                      <Input
                        id="field_of_interest"
                        {...register('field_of_interest')}
                        placeholder={t('profile.fieldOfInterestPlaceholder')}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="gpa">{t('profile.gpa')}</Label>
                      <Input
                        id="gpa"
                        type="number"
                        step="0.01"
                        min="0"
                        max="4.5"
                        {...register('gpa')}
                        placeholder="4.0"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="english_proficiency">{t('profile.englishProficiency')}</Label>
                      <Input
                        id="english_proficiency"
                        {...register('english_proficiency')}
                        placeholder={t('profile.englishProficiencyPlaceholder')}
                      />
                    </div>
                  </div>
                </div>

                {/* Study Preferences */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">{t('profile.studyPreferences')}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="preferred_location">{t('profile.preferredLocation')}</Label>
                      <Input
                        id="preferred_location"
                        {...register('preferred_location')}
                        placeholder={t('profile.preferredLocationPlaceholder')}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget_range">{t('profile.budgetRange')}</Label>
                      <Input
                        id="budget_range"
                        {...register('budget_range')}
                        placeholder={t('profile.budgetRangePlaceholder')}
                      />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="study_timeline">{t('profile.studyTimeline')}</Label>
                      <Input
                        id="study_timeline"
                        {...register('study_timeline')}
                        placeholder={t('profile.studyTimelinePlaceholder')}
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">{t('profile.additionalInfo')}</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="additional_info">{t('profile.additionalInfoLabel')}</Label>
                    <Textarea
                      id="additional_info"
                      {...register('additional_info')}
                      placeholder={t('profile.additionalInfoPlaceholder')}
                      rows={4}
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-4">
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t('profile.saving')}
                      </>
                    ) : (
                      t('profile.saveButton')
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
