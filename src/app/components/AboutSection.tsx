import { ArrowRight, Leaf, Shield, Heart, Zap } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  const values = [
    {
      icon: <Leaf className="w-8 h-8 text-emerald-600" />,
      title: "Sürdürülebilirlik",
      desc: "Doğayı korumak için %100 geri dönüştürülebilir malzemeler kullanıyoruz.",
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-600" />,
      title: "Kalite Güvencesi",
      desc: "Üretimimizin her aşamasında en yüksek kalite standartlarını uyguluyoruz.",
    },
    {
      icon: <Zap className="w-8 h-8 text-emerald-600" />,
      title: "Yenilikçilik",
      desc: "Modern tasarımlarımızla ambalaj sektörüne yeni soluk getiriyoruz.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Images */}
          <div className="relative group">
        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
          <ImageWithFallback
            src="/images/gida.png"
            alt="gazze doğa"
            className="w-full object-contain"
          />
        </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 z-20 bg-emerald-700 text-white p-10 rounded-3xl shadow-2xl hidden md:flex flex-col gap-2 items-center justify-center aspect-square text-center">
              <span className="text-5xl font-extrabold">5+</span>
              <span className="text-xs uppercase tracking-widest font-bold">Yıllık <br />Tecrübe</span>
            </div>
            {/* Decorative background box */}
            <div className="absolute -top-10 -left-10 w-full h-full border-2 border-emerald-100 rounded-3xl -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500"></div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <span className="text-emerald-600 font-bold  tracking-[0.3em] text-2xl">Biz Kimiz?</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900 leading-tight">
                Gazze Kağıt Ambalaj: <br />
                <span className="text-emerald-700">Doğaya Saygılı, Geleceğe Odaklı</span>
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                2021 yılında Konya'da küçük bir atölye olarak kurulan Gazze Kağıt Ambalaj, bugün kaliteyi ve sürdürülebilirliği bir araya getirme vizyonuyla yoluna devam etmektedir. Temellerimizi attığımız o günden bu yana, kağıdın doğallığını profesyonel çözümlerle birleştirerek sektörde fark yaratıyoruz. İç Anadolu’nun en büyük tedarikçi merkezi olma hedefimizle; özel ölçü ambalajlardan markaya özel tasarımlara kadar geniş bir yelpazede hizmet sunuyoruz. Konya’daki stratejik konumumuz sayesinde, hem yurt içine hem de yurt dışına kesintisiz ve hızlı sevkiyat sağlıyoruz. Bizim için ambalaj sadece bir kutu değil, iş ortaklarımızın kalitesine vurduğumuz bir mühürdür. Doğaya saygılı, estetik ve dayanıklı çözümlerimizle ambalaj süreçlerinizin tamamında güvenilir bir yol arkadaşı olmayı sürdürüyoruz.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                Sadece bir üretici değil, aynı zamanda bir çözüm ortağıyız. Markanızın kimliğini yansıtan, ürünlerinizi koruyan ve doğayı üzmeyen ambalajlar tasarlıyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {values.map((v, i) => (
                <div key={i} className="flex flex-col gap-4 p-6 rounded-2xl bg-stone-50 hover:bg-emerald-50 transition-colors border border-stone-100 hover:border-emerald-200 group">
                  <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 mb-1">{v.title}</h4>
                    <p className="text-sm text-stone-500 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/kurumsal"
              className="inline-flex items-center gap-2 text-emerald-700 font-bold text-lg hover:gap-4 transition-all group"
            >
              Daha Fazla Bilgi Edinin
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
