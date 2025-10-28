import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { z } from 'zod';
import { useEffect } from 'react';

const loginSchema = z.object({
  email: z.string().trim().email({ message: "Noto'g'ri email manzil" }),
  password: z.string().min(6, { message: "Parol kamida 6 ta belgidan iborat bo'lishi kerak" }),
});

const signupSchema = loginSchema.extend({
  fullName: z.string().trim().min(2, { message: "Ism kamida 2 ta belgidan iborat bo'lishi kerak" }).max(100),
});

const Auth = () => {
  const navigate = useNavigate();
  const { signIn, signUp, user } = useAuth();
  const [loading, setLoading] = useState(false);

  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ email: '', password: '', fullName: '' });

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const validatedData = loginSchema.parse(loginData);
      const { error } = await signIn(validatedData.email, validatedData.password);

      if (error) {
        if (error.message.includes('Invalid login credentials')) {
          toast.error('Email yoki parol noto\'g\'ri');
        } else {
          toast.error('Kirish xatosi', { description: error.message });
        }
        return;
      }

      toast.success('Xush kelibsiz!');
      navigate('/');
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach(err => toast.error(err.message));
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const validatedData = signupSchema.parse(signupData);
      const { error } = await signUp(validatedData.email, validatedData.password, validatedData.fullName);

      if (error) {
        if (error.message.includes('already registered')) {
          toast.error('Bu email allaqachon ro\'yxatdan o\'tgan');
        } else {
          toast.error('Ro\'yxatdan o\'tishda xato', { description: error.message });
        }
        return;
      }

      toast.success('Ro\'yxatdan o\'tdingiz!', {
        description: 'Endi tizimga kirishingiz mumkin.',
      });
      setSignupData({ email: '', password: '', fullName: '' });
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach(err => toast.error(err.message));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">ISCAD</CardTitle>
              <CardDescription className="text-center">
                Tizimga kirish yoki ro'yxatdan o'tish
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Kirish</TabsTrigger>
                  <TabsTrigger value="signup">Ro'yxatdan o'tish</TabsTrigger>
                </TabsList>

                <TabsContent value="login">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <label htmlFor="login-email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="login-email"
                        type="email"
                        required
                        value={loginData.email}
                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                        placeholder="email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="login-password" className="block text-sm font-medium mb-2">
                        Parol
                      </label>
                      <Input
                        id="login-password"
                        type="password"
                        required
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        placeholder="••••••"
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? 'Yuklanmoqda...' : 'Kirish'}
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="signup">
                  <form onSubmit={handleSignup} className="space-y-4">
                    <div>
                      <label htmlFor="signup-name" className="block text-sm font-medium mb-2">
                        To'liq ism
                      </label>
                      <Input
                        id="signup-name"
                        type="text"
                        required
                        value={signupData.fullName}
                        onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
                        placeholder="Ismingiz"
                        maxLength={100}
                      />
                    </div>

                    <div>
                      <label htmlFor="signup-email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="signup-email"
                        type="email"
                        required
                        value={signupData.email}
                        onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                        placeholder="email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="signup-password" className="block text-sm font-medium mb-2">
                        Parol
                      </label>
                      <Input
                        id="signup-password"
                        type="password"
                        required
                        value={signupData.password}
                        onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                        placeholder="••••••"
                        minLength={6}
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? 'Yuklanmoqda...' : 'Ro\'yxatdan o\'tish'}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Auth;