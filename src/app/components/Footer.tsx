import { Link } from "react-router-dom";
import NProgress from "nprogress";
import {
  Package,
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Hızlı Erişim",
      links: [
        { name: "Anasayfa", path: "/" },
        { name: "Kurumsal", path: "/kurumsal" },
        { name: "Ürünlerimiz", path: "/urunler" },
        { name: "İletişim", path: "/iletisim" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      url: "https://www.instagram.com/gazze_kagitambalaj?utm_source=qr&igsh=Y3g1cXk1aWZxZDkw",
    },
    {
      icon: Facebook,
      url: "https://www.facebook.com/share/1CFVJev51L/",
    },
  ];

  const handleLinkClick = () => {
    NProgress.start();
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-20 pb-10 border-t-8 border-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2" onClick={handleLinkClick}>
            <Link to="/" className="flex items-center gap-3" onClick={handleLinkClick}>
          <img
            src="/images/gazze-logo.png"
            alt="Gazze Kağıt Ambalaj"
            className="h-14 w-auto object-contain"
          />
            </Link>

              <div className="flex flex-col">
              </div>
            </Link>

            <p className="text-sm leading-relaxed max-w-xs">
              Gazze Kağıt Ambalaj, çevre dostu ve yenilikçi ambalaj çözümleriyle
              markanızı geleceğe taşır. Kalite ve estetiği bir araya getiriyoruz.
            </p>

            {/* SOSYAL MEDYA */}
            <div className="flex gap-4">
              {socialLinks.map((item, idx) => {
                const Icon = item.icon;

                return (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all transform hover:-translate-y-1"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title} className="flex flex-col gap-6">
              <h3 className="font-bold text-white text-lg relative after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-emerald-600 pb-2">
                {section.title}
              </h3>

              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      onClick={handleLinkClick}
                      className="text-sm hover:text-emerald-400 transition-colors flex items-center group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-white text-lg relative after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-emerald-600 pb-2">
              İletişim
            </h3>

            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-sm">
                  Fevziçakmak Mah. 10563.Sk. No: 48 Karatay, Konya, Türkiye
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-sm font-semibold text-white">
                  +90 (553) 235 12 10
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-sm">
                  info@gazzekagit.com
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-10 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <p>© {currentYear} Gazze Kağıt Ambalaj. Tüm hakları saklıdır.</p>

          <p className="flex items-center gap-1">
            Made with <span className="text-emerald-600">❤</span> for a greener planet.
          </p>
        </div>

      </div>
    </footer>
  );
}