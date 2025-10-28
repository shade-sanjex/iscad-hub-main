import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BookOpen, Target, Users, TrendingUp, Mail, Phone } from 'lucide-react';
import heroImage from '@/assets/hero-agriculture.jpg';
import iscadLogo from '@/assets/iscad-logo.png';
import { EditorialBoard } from '@/components/EditorialBoard';

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
      <EditorialBoard />

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

      {/* Journal Requirements Section */}
      <section id='talablar' className="py-12 md:py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Jurnal Talablari
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 shadow-xl">
              <CardContent className="pt-6">
                <ul className="space-y-6 divide-y divide-border">
                  {[
                    "Maqolalar o'zbek, rus va ingliz tillarida qabul qilinadi. Maqolaning hajmi shakllar va adabiyotlar ro'yxati bilan birgalikda 8-10 betdan kam bo'lmasligi kerak.",
                    "Maqolalar Microsoft Word dasturida terilgan bo'lishi, qog'oz o'lchami A4 format, matn Times New Roman shriftida, o'lcham 14 pt, qatorlar orasi 1.5 interval, sahifa chetlari: yuqoridan - 2 sm, pastdan - 2 sm, chap - 3 sm, o'ng - 1.5 sm bo'lishi lozim.",
                    "Maqolada jadvallar, rasmlar va diagrammalar bo'lishi mumkin. Jadvallar tartib raqami va nomi jadval tepasida, illustratsiyalar (rasmlar, diagrammalar) sarlavhasi esa tagida ko'rsatilishi kerak.",
                    "Adabiyotlar ro'yxati maqola oxirida beriladi. Maqola ichida havolalar kvadrat qavsda beriladi. Masalan: [1], [2, 5], [3-7]. Adabiyotlar ro'yxati maqolada ishlatilgan tartibda keltiriladi.",
                    "Maqolada UDK indeksi, maqola nomi, mualliflar F.I.SH., tashkilot nomi, annotatsiya (150-200 so'z) va kalit so'zlar (6-8 ta) bo'lishi shart. Maqola nomidan so'ng qisqacha annotatsiya va kalit so'zlar o'zbek, rus va ingliz tillarida berilishi kerak.",
                    "Mualliflar haqida ma'lumot (F.I.SH., ilmiy darajasi va unvoni, ish joyi, lavozimi, telefon va elektron pochta) alohida sahifada keltiriladi.",
                    "Taqdim etilgan maqolalar tahrir qilinadi va plagiatga tekshiriladi. Zarur hollarda maqola qayta ishlab chiqish uchun muallifga qaytarilishi mumkin."
                  ].map((item, index) => (
                    <li key={index} className="pt-6 first:pt-0">
                      <div className="flex items-start space-x-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-primary text-sm font-medium">
                          {index + 1}
                        </span>
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    </li>
                  ))}

                  <div className="mt-8 pt-6 border-t border-border">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <span>ooqxssrtxm@agro.uz</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <span>(+0371) 2605230, 2605261</span>
                      </div>
                    </div>
                  </div>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;