import { Link, useLocation } from "react-router";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Anasayfa", path: "/" },
    { name: "Kurumsal", path: "/kurumsal" },
    { name: "Ürünlerimiz", path: "/urunler" },
    { name: "İletişim", path: "/iletisim" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
          <img
            src="/images/gazze-logo.png"
            alt="Gazze Kağıt Ambalaj"
            className="h-14 w-auto object-contain"
          />
            <div className="flex flex-col">
              <span className={cn(
                "font-bold text-xl tracking-tight leading-none transition-colors",
                isScrolled ? "text-emerald-900" : "text-emerald-900"
              )}>
                GAZZE
              </span>
              <span className={cn(
                "text-[10px] uppercase tracking-[0.2em] font-medium",
                isScrolled ? "text-stone-500" : "text-stone-600"
              )}>
                Kağıt Ambalaj
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-semibold transition-colors relative py-1",
                  location.pathname === link.path
                    ? "text-emerald-700 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-emerald-600"
                    : "text-stone-700 hover:text-emerald-600"
                )}
              >
                {link.name}
              </Link>
            ))}

          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-stone-700 hover:text-emerald-600"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 px-4 py-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg font-semibold",
                location.pathname === link.path ? "text-emerald-600" : "text-stone-700"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-stone-100 flex flex-col gap-4">
            <div className="flex items-center gap-3 text-stone-600">
              <Phone className="w-4 h-4 text-emerald-600" />
              <span className="text-sm">+90 (553) 235 12 10</span>
            </div>
            <div className="flex items-center gap-3 text-stone-600">
              <Mail className="w-4 h-4 text-emerald-600" />
              <span className="text-sm">info@gazzekagit.com</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
