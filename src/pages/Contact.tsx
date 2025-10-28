import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';

const contactSchema = z.object({
  name: z.string().trim().min(2, { message: "Ism kamida 2 ta belgidan iborat bo'lishi kerak" }).max(100),
  email: z.string().trim().email({ message: "Noto'g'ri email manzil" }).max(255),
  message: z.string().trim().min(10, { message: "Xabar kamida 10 ta belgidan iborat bo'lishi kerak" }).max(1000),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const validatedData = contactSchema.parse(formData);
      
      // Save to database
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: validatedData.name,
            email: validatedData.email,
            message: validatedData.message,
          },
        ]);

      if (error) throw error;
      
      toast.success('Xabaringiz yuborildi!', {
        description: 'Tez orada siz bilan bog\'lanamiz.',
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach(err => {
          toast.error(err.message);
        });
      } else {
        toast.error('Xatolik yuz berdi', {
          description: 'Iltimos, qaytadan urinib ko\'ring.',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-accent text-white py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Biz bilan bog'lanish</h1>
            <p className="text-base md:text-lg lg:text-xl">Savollaringiz bormi? Biz yordam berishga tayyormiz!</p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Aloqa Ma'lumotlari</h2>
                
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-6 w-6 text-primary" />
                      <CardTitle>Manzil</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      100140, Toshkent viloyati, Kibriy tumani,<br />
                      Universitet ko'chasi, 2-uy.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-6 w-6 text-primary" />
                      <CardTitle>Telefon</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      (+0371) 2605230<br />
                      (+0371) 2605261
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-6 w-6 text-primary" />
                      <CardTitle>Email</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      ooqxssrtxm@agro.uz
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Xabar Yuborish</h2>
                <Card>
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Ism
                        </label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Ismingizni kiriting"
                          maxLength={100}
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="email@example.com"
                          maxLength={255}
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Xabar
                        </label>
                        <Textarea
                          id="message"
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Xabaringizni yozing..."
                          rows={6}
                          maxLength={1000}
                        />
                      </div>

                      <Button type="submit" className="w-full" disabled={loading}>
                        <Send className="mr-2 h-4 w-4" />
                        {loading ? 'Yuborilmoqda...' : 'Xabar Yuborish'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;