import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BookOpen, Target, Users, TrendingUp } from 'lucide-react';
import heroImage from '@/assets/hero-agriculture.jpg';
import iscadLogo from '@/assets/iscad-logo.png';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80" />
        </div>
        
        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <div className="flex justify-center mb-4 md:mb-6">
            <img src={iscadLogo} alt="ISCAD Logo" className="h-24 md:h-32 lg:h-40 w-auto animate-fade-in" />
          </div>
          <p className="text-base md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto px-4">
            Oziq-ovqat va Qishloq Xo'jaligi Sohasida Strategik Rivojlanish va Tadqiqotlar Xalqaro Markazi
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <Link to="/journals" className="w-full sm:w-auto">
              <Button size="lg" variant="secondary" className="text-base md:text-lg w-full sm:w-auto">
                Jurnallarni ko'rish
              </Button>
            </Link>
            <Link to="/about" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="text-base md:text-lg bg-white/10 hover:bg-white/20 text-white border-white w-full sm:w-auto">
                Batafsil
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Bizning Missiyamiz</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ISCAD O'zbekiston Respublikasi Qishloq xo'jaligi vazirligi huzuridagi davlat tashkiloti sifatida 
              qishloq xo'jaligi sektoridagi islohotlarni qo'llab-quvvatlash, ilmiy tadqiqotlar, strategik rivojlanish 
              va innovatsion yechimlar taqdim etish orqali oziq-ovqat xavfsizligini ta'minlash va barqaror 
              qishloq xo'jaligi rivojlanishiga hissa qo'shishni maqsad qilgan.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">Bizning Yo'nalishlarimiz</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Strategik Rivojlanish</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Qishloq xo'jaligi sektorini rivojlantirish bo'yicha strategiyalar ishlab chiqish va amalga oshirish
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Ilmiy Tadqiqotlar</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Oziq-ovqat xavfsizligi va qishloq xo'jaligi bo'yicha fundamental va amaliy tadqiqotlar
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Kadrlar Tayyorlash</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Qishloq xo'jaligi mutaxassislari va tadqiqotchilarni tayyorlash hamda malakalarini oshirish
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Xalqaro Hamkorlik</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Xalqaro tashkilotlar va tadqiqot markazlari bilan hamkorlikni rivojlantirish
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Ilmiy Jurnallarimiz</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Qishloq xo'jaligi va oziq-ovqat xavfsizligi sohasidagi eng so'nggi tadqiqotlar va maqolalar bilan tanishing
          </p>
          <Link to="/journals">
            <Button size="lg" variant="secondary" className="text-lg">
              Jurnallarni o'qish
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;