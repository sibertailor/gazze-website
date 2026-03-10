import { useState } from "react";
import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
import { ProductPortfolio } from "../components/ProductPortfolio";
import { ContactSection } from "../components/ContactSection";
import { CheckCircle, Truck, Clock, ShieldCheck } from "lucide-react";

function BrandCard({
  name,
  logo,
  size,
}: {
  name: string;
  logo: string | null;
  size?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex h-[80px] min-w-[180px] items-center justify-center">
      {logo && !failed ? (
      <img
        src={logo}
        alt={name}
        className={`object-contain transition duration-300 hover:opacity-100 ${
          size === "big"
            ? "max-h-[72px]"
            : "max-h-[56px]"
        }`}
        onError={() => setFailed(true)}
      />
      ) : (
        <span className="text-sm font-semibold text-stone-500">
          {name}
        </span>
      )}
    </div>
  );
}

export function Home() {
  const features = [
    { icon: <CheckCircle className="w-6 h-6 text-emerald-600" />, text: "Yüksek Kalite Standartları" },
    { icon: <Truck className="w-6 h-6 text-emerald-600" />, text: "Hızlı Sevkiyat" },
    { icon: <Clock className="w-6 h-6 text-emerald-600" />, text: "Zamanında Teslimat" },
    { icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />, text: "Güvenilir Üretim" },
  ];

  const brands = [
    { name: "Paşam Pastanesi", logo: "../images/pasam.png" },
    { name: "Petek Pastanesi", logo: "../images/petek.png" },
    { name: "Lara Pastanesi", logo: "../images/lara.png" },
    { name: "İstanbul Pastanesi", logo: "../images/istanbul-pastanesi.png" },
    { name: "Küpeli Fırın", logo: "../images/kupeli-firin.png" },
    { name: "Dudu Fırın", logo: "../images/dudu-firin.png" },
    { name: "Fırıncı Adem", logo: "../images/firinci-adem.png" },
    { name: "Asaf Kebap", logo: "../images/asaf-kebap.png" },
    { name: "Şükür Etliekmek", logo: "../images/sukur-etliekmek.png" },
    { name: "Fera", logo: "/images/fera.png" },
    { name: "Çeçen Lokantası", logo: "../images/cecen-lokantasi.png" },
    { name: "Kubbealtı Restaurant", logo: "../images/kubbealti.png" },
    { name: "Meram Taşkonak Restaurant", logo: "../images/meram-taskonak.png" },
  ];

  return (
    <div className="flex flex-col">
      <Hero />

      <div className="relative z-20 border-y border-stone-100 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-center justify-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50">
                  {f.icon}
                </div>
                <span className="text-sm font-bold text-stone-700 md:text-base">
                  {f.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AboutSection />
      <ProductPortfolio />

      <section className="bg-white py-24">

        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 text-center sm:px-6 lg:px-8">
          <div className="flex max-w-2xl flex-col gap-4">
            <span className="text-2xl font-bold tracking-[0.3em] text-emerald-600">
              Neden Biz?
            </span>

            <h2 className="text-4xl font-extrabold leading-tight text-stone-900 md:text-5xl">
              Sektörün Güvenilir <br />
              <span className="text-emerald-700">Ambalaj Ortağı</span>
            </h2>

            <p className="text-lg text-stone-600">
              Müşterilerimizin memnuniyeti bizim en büyük önceliğimizdir. Her
              aşamada titizlikle çalışarak, beklentilerin ötesine geçmeyi
              hedefliyoruz. Pastane, fırın, restoran ve uluslararası iş
              ortaklarımızla güçlü bir referans ağı oluşturuyoruz.
            </p>
          </div>

        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white via-white/90 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white via-white/90 to-transparent" />

          <div className="flex w-max animate-marquee gap-8 py-2">
            {[...brands, ...brands].map((brand, index) => (
          <BrandCard
            key={index}
            name={brand.name}
            logo={brand.logo}
          />
            ))}
          </div>
        </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}