import { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, BookOpen } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface Journal {
  id: string;
  title: string;
  description: string | null;
  pdf_url: string;
  cover_image_url: string | null;
  created_at: string;
}

const Journals = () => {
  const [journals, setJournals] = useState<Journal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJournals();
  }, []);

  const fetchJournals = async () => {
    try {
      const { data, error } = await supabase
        .from('journals')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setJournals(data || []);
    } catch (error) {
      console.error('Error fetching journals:', error);
      toast.error('Jurnallarni yuklashda xatolik yuz berdi');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (pdfUrl: string, title: string) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-accent text-white py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <BookOpen className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Ilmiy Jurnallar</h1>
            <p className="text-lg md:text-xl">Qishloq xo'jaligi va oziq-ovqat xavfsizligi bo'yicha ilmiy nashrlar</p>
          </div>
        </section>

        {/* Journals Grid */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            {loading ? (
              <div className="text-center">
                <p className="text-lg text-muted-foreground">Yuklanmoqda...</p>
              </div>
            ) : journals.length === 0 ? (
              <div className="text-center">
                <p className="text-lg text-muted-foreground">Hozircha jurnallar mavjud emas</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {journals.map((journal) => (
                  <Card key={journal.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                    {journal.cover_image_url && (
                      <div className="aspect-[3/4] overflow-hidden bg-muted">
                        <img
                          src={journal.cover_image_url}
                          alt={journal.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="line-clamp-2">{journal.title}</CardTitle>
                      {journal.description && (
                        <CardDescription className="line-clamp-3">
                          {journal.description}
                        </CardDescription>
                      )}
                    </CardHeader>
                    <CardContent>
                      <Button 
                        className="w-full" 
                        onClick={() => handleDownload(journal.pdf_url, journal.title)}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Yuklab olish
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Journals;