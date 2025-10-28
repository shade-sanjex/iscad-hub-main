import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { LogOut, User, Menu } from 'lucide-react';
import iscadLogo from '@/assets/iscad-logo.png';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

export function Navbar() {
  const { user, profile, signOut, isAdmin } = useAuth();
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <>
      <Link 
        to="/" 
        className="text-foreground hover:text-primary transition-colors block py-2"
        onClick={() => setOpen(false)}
      >
        Bosh sahifa
      </Link>
      <Link 
        to="/about" 
        className="text-foreground hover:text-primary transition-colors block py-2"
        onClick={() => setOpen(false)}
      >
        Markaz haqida
      </Link>
      <Link 
        to="/journals" 
        className="text-foreground hover:text-primary transition-colors block py-2"
        onClick={() => setOpen(false)}
      >
        Jurnallar
      </Link>
      <Link 
        to="/contact" 
        className="text-foreground hover:text-primary transition-colors block py-2"
        onClick={() => setOpen(false)}
      >
        Aloqa
      </Link>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img src={iscadLogo} alt="ISCAD Logo" className="h-10 md:h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <NavLinks />

            {user ? (
              <div className="flex items-center space-x-4">
                {isAdmin && (
                  <Link to="/admin">
                    <Button variant="secondary" size="sm">
                      Admin Panel
                    </Button>
                  </Link>
                )}
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span className="text-sm">{profile?.full_name || 'Foydalanuvchi'}</span>
                </div>
                <Button variant="outline" size="sm" onClick={signOut}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Chiqish
                </Button>
              </div>
            ) : (
              <Link to="/auth">
                <Button variant="default">Kirish</Button>
              </Link>
            )}
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center space-x-2">
            {user && !isAdmin && (
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
              </div>
            )}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  <NavLinks />
                  
                  {user ? (
                    <>
                      {isAdmin && (
                        <Link to="/admin" onClick={() => setOpen(false)}>
                          <Button variant="secondary" className="w-full">
                            Admin Panel
                          </Button>
                        </Link>
                      )}
                      <div className="flex items-center space-x-2 py-2">
                        <User className="h-4 w-4" />
                        <span className="text-sm">{profile?.full_name || 'Foydalanuvchi'}</span>
                      </div>
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          signOut();
                          setOpen(false);
                        }}
                        className="w-full"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Chiqish
                      </Button>
                    </>
                  ) : (
                    <Link to="/auth" onClick={() => setOpen(false)}>
                      <Button variant="default" className="w-full">Kirish</Button>
                    </Link>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}