import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border mt-12 md:mt-20">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ISCAD
            </h3>
            <p className="text-muted-foreground">
              Oziq-ovqat va Qishloq Xo'jaligi Sohasida Strategik Rivojlanish va Tadqiqotlar Xalqaro Markazi
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Havolalar</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/" className="hover:text-primary transition-colors">Bosh sahifa</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">Markaz haqida</a></li>
              <li><a href="/journals" className="hover:text-primary transition-colors">Jurnallar</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Aloqa</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Aloqa</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>100140, Toshkent viloyati, Kibriy tumani, Universitet ko'chasi, 2-uy.</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(+0371) 2605230, 2605261</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>ooqxssrtxm@agro.uz</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ISCAD. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
}