import { ArrowRight, Leaf, Shield, Heart, Zap, Award, Globe, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion } from "motion/react";

export function AboutPage() {
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
      icon: <Award className="w-8 h-8 text-emerald-600" />,
      title: "Yenilikçilik",
      desc: "Modern tasarımlarımızla ambalaj sektörüne yeni soluk getiriyoruz.",
    },
  ];

  return (
    <div className="flex flex-col pt-20">
      {/* Hero Header */}
      <section className="bg-stone-900 py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1772076208993-f8dfa7b2643f"
            alt="Manufacturing background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center gap-6">
          <span className="text-emerald-400 font-bold uppercase tracking-[0.4em] text-xs">Kurumsal</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Geleceği <span className="text-emerald-400">Şekillendiren</span> Ambalaj Ortağı
          </h1>
          <p className="text-stone-400 text-lg md:text-xl max-w-3xl leading-relaxed">
            Gazze Kağıt Ambalaj olarak, doğaya saygılı, estetik ve dayanıklı kağıt ambalaj ürünlerimizle işletmenize değer katıyoruz.
          </p>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <div className="flex flex-col gap-6">
              <span className="text-emerald-600 font-bold  tracking-[0.3em] text-sm">Biz Kimiz?</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-stone-900 leading-tight">
                Bir Başarı Hikayesi: <br />
                <span className="text-emerald-700">Kalite ve Tutku</span>
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                2021 yılında Konya'da küçük bir atölye olarak kurulan Gazze Kağıt Ambalaj, bugün kaliteyi ve sürdürülebilirliği bir araya getirme vizyonuyla yoluna devam etmektedir. Temellerimizi attığımız o günden bu yana, kağıdın doğallığını profesyonel çözümlerle birleştirerek sektörde fark yaratıyoruz. İç Anadolu’nun en büyük tedarikçi merkezi olma hedefimizle; özel ölçü ambalajlardan markaya özel tasarımlara kadar geniş bir yelpazede hizmet sunuyoruz. Konya’daki stratejik konumumuz sayesinde, hem yurt içine hem de yurt dışına kesintisiz ve hızlı sevkiyat sağlıyoruz. Bizim için ambalaj sadece bir kutu değil, iş ortaklarımızın kalitesine vurduğumuz bir mühürdür. Doğaya saygılı, estetik ve dayanıklı çözümlerimizle ambalaj süreçlerinizin tamamında güvenilir bir yol arkadaşı olmayı sürdürüyoruz.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                <div className="flex flex-col gap-2 p-6 rounded-2xl bg-stone-50 border border-stone-100">
                  <span className="text-3xl font-bold text-emerald-700">10+</span>
                  <span className="text-xs font-bold text-stone-500 uppercase tracking-widest">Fabrika Sayısı</span>
                </div>
                <div className="flex flex-col gap-2 p-6 rounded-2xl bg-stone-50 border border-stone-100">
                  <span className="text-3xl font-bold text-emerald-700">5+</span>
                  <span className="text-xs font-bold text-stone-500 uppercase tracking-widest">Yıllık Tecrübe</span>
                </div>
              </div>
            </div>
            <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="/images/gida.png"
                alt="gazze doğa"
                className="w-full object-contain"
              />
            </div>
              <div className="absolute -top-6 -right-6 w-1/2 aspect-square bg-emerald-600 rounded-3xl -z-10 hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Icons Row */}
      <section className="py-24 bg-stone-100 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center gap-6 group">
              <div className="w-20 h-20 rounded-3xl bg-white shadow-xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                <Leaf className="w-10 h-10" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-stone-900">Doğa Dostu</h3>
                <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
                  Sıfır atık prensibiyle çalışıyor ve %100 geri dönüştürülebilir kağıtlar kullanıyoruz.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center gap-6 group">
              <div className="w-20 h-20 rounded-3xl bg-white shadow-xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                <Globe className="w-10 h-10" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-stone-900">Global Vizyon</h3>
                <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
                  Üretimimizin %30'unu Avrupa ve Ortadoğu ülkelerine ihraç ederek ülkemizi temsil ediyoruz.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center gap-6 group">
              <div className="w-20 h-20 rounded-3xl bg-white shadow-xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                <Users className="w-10 h-10" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-stone-900">Uman Kadro</h3>
                <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
                  Deneyimli mühendislerimiz ve tasarımcılarımızla teknik mükemmeliyet hedefliyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-stone-50 p-12 rounded-[2.5rem] border border-stone-100 flex flex-col gap-6">
              <h3 className="text-3xl font-extrabold text-stone-900 border-b border-emerald-200 pb-4">Vizyonumuz</h3>
              <p className="text-stone-600 text-lg leading-relaxed italic">
                "Anadoludan yükselen bir gurup olarak hedefimiz; böIgenin en büyük ve en güvenilir ambalaj tedarik merkezi konumuna gelmektir. Tükiye’nin dört bir yanına ve yurt dışına uzanan operasyon amacımız her geçen gün genişletirken, ambalaj dendiğinde akla gelen "en güvenilir " olma yolunda kararlılıkla ilerliyoruz. Geleceği, sürdürülebilir ambalaj stratejilerimizle şekillendiriyoruz."
              </p>
            </div>
            <div className="bg-emerald-900 p-12 rounded-[2.5rem] flex flex-col gap-6 text-white">
              <h3 className="text-3xl font-extrabold text-emerald-400 border-b border-emerald-700 pb-4">Misyonumuz</h3>
              <p className="text-emerald-100 text-lg leading-relaxed italic">
                "Misyonumuz; kağıt ambalajın her alanında (özel ölçü, baskılı çözümler ve endüstriyel ambalajlar) en yüksek standartları piyasaya sürmektir. Geniş ürün yelpazemiz ve sektördeki derin tecrübemizle, müşterilerimize en doğru termin sürelerini ve en rekabetçi fiyat dengesini sunuyoruz. Her bir paketi, markanızın imzası olarak görüyor ve bu sorumlulukla hareket ediyoruz."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
