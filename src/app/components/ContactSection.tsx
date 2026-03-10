import { Phone, Mail, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-900 rounded-[3rem] overflow-hidden shadow-2xl relative">
          {/* Decorative Pattern Overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_20%_30%,#fff_1px,transparent_0)] bg-[length:24px_24px]"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Info Side */}
            <div className="p-12 md:p-16 flex flex-col gap-10 text-white relative z-10">
              <div className="flex flex-col gap-6">
                <span className="text-emerald-400 font-bold tracking-[0.3em] text-xl">
                  Bize Ulaşın
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                  Projenizi Birlikte <br />
                  <span className="text-emerald-300">Tasarlayalım</span>
                </h2>
                <p className="text-emerald-100/70 text-lg leading-relaxed max-w-md">
                  Özel ambalaj ihtiyaçlarınız, fiyat teklifi veya iş birliği talepleriniz için uzman ekibimiz size yardımcı olmaya hazır.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-800 flex items-center justify-center group-hover:bg-emerald-700 transition-colors">
                    <Phone className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-400 font-bold uppercase tracking-widest">
                      Telefon
                    </p>
                    <p className="text-xl font-bold">+90 (553) 235 12 10</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-800 flex items-center justify-center group-hover:bg-emerald-700 transition-colors">
                    <Mail className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-400 font-bold uppercase tracking-widest">
                      E-posta
                    </p>
                    <p className="text-xl font-bold">info@gazzekagit.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-800 flex items-center justify-center group-hover:bg-emerald-700 transition-colors shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-400 font-bold uppercase tracking-widest">
                      Adres
                    </p>
                    <p className="text-lg font-bold">
                      Fevziçakmak Mah. 10563.Sk. No: 48 Karatay, Konya, Türkiye
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Side */}
            <div className="bg-white p-6 md:p-8">
              <div className="w-full h-[420px] md:h-full min-h-[420px] rounded-[2rem] overflow-hidden border border-stone-200 shadow-sm">
                <iframe
                  title="Gazze Kağıt Ambalaj Konum"
                  src="https://www.google.com/maps?q=Fevziçakmak%20Mah.%2010563.Sk.%20No:%2048%20Karatay%20Konya%20Türkiye&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}