import { Phone, Mail } from "lucide-react";
import { motion } from "motion/react";

export function ContactPage() {
  const offices = [
    {
      city: "Konya (Merkez)",
      address: "Fevziçakmak Mah. 10563.Sk. No: 48 Karatay, Konya, Türkiye",
      phone: "+90 (553) 235 12 10",
      mail: "info@gazzekagit.com",
    },
  ];

  return (
    <div className="flex flex-col pt-20">
      {/* Header */}
      <section className="bg-stone-900 py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-600/10 skew-x-12 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center gap-6">
          <span className="text-emerald-400 font-bold uppercase tracking-[0.4em] text-xs">Bize Ulaşın</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Sorularınız İçin <span className="text-emerald-400">Buradayız</span>
          </h1>
          <p className="text-stone-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            İster fiyat teklifi ister ürün detayları olsun, merak ettiğiniz her şey için uzman ekibimize ulaşabilirsiniz.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Info Section */}
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-6">
                <h2 className="text-3xl font-extrabold text-stone-900 leading-tight">İletişim</h2>
                <div className="grid grid-cols-1 gap-8 mt-4">
                  {offices.map((office, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col gap-4 p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:border-emerald-200 transition-all group"
                    >
                      <div className="flex flex-col gap-1">
                        <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs">
                          {office.city}
                        </span>
                        <h4 className="text-xl font-bold text-stone-900">
                          {office.city.split(" ")[0]} Ofis
                        </h4>
                      </div>
                      <p className="text-stone-500 text-sm leading-relaxed">{office.address}</p>
                      <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-stone-200">
                        <a
                          href={`tel:${office.phone}`}
                          className="flex items-center gap-2 text-stone-700 font-bold text-sm hover:text-emerald-600 transition-colors"
                        >
                          <Phone className="w-4 h-4 text-emerald-600" />
                          {office.phone}
                        </a>
                        <a
                          href={`mailto:${office.mail}`}
                          className="flex items-center gap-2 text-stone-700 font-bold text-sm hover:text-emerald-600 transition-colors"
                        >
                          <Mail className="w-4 h-4 text-emerald-600" />
                          {office.mail}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="font-bold text-stone-900">Çalışma Saatlerimiz</h4>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between text-sm py-2 border-b border-stone-100">
                    <span className="text-stone-500">Pazartesi - Cuma</span>
                    <span className="font-bold text-stone-900">08:30 - 18:30</span>
                  </div>
                  <div className="flex items-center justify-between text-sm py-2 border-b border-stone-100">
                    <span className="text-stone-500">Cumartesi-pazar</span>
                    <span className="font-bold text-stone-900">09:00 - 18:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}