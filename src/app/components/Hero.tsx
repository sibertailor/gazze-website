import { ArrowRight, Leaf, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-stone-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1696764187865-abb62b3d7f4a"
          alt="Cardboard Texture"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8 pb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-bold w-fit shadow-sm">
              <Leaf className="w-4 h-4 text-emerald-600" />
              <span>%100 Geri Dönüştürülebilir Çözümler</span>
            </div>

            <div className="flex flex-col gap-6">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-stone-900 leading-tight">
                Geleceği Şekillendiren <br />
                <span className="text-emerald-700">Ambalaj</span> Çözümleri
              </h1>
              <p className="text-xl text-stone-600 leading-relaxed max-w-xl">
                Gazze Kağıt Ambalaj olarak, doğaya saygılı, estetik ve dayanıklı kağıt ambalaj ürünlerimizle işletmenize değer katıyoruz.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/urunler"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/30 hover:-translate-y-1 active:scale-95"
              >
                Ürünlerimizi Keşfedin
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/kurumsal"
                className="inline-flex items-center justify-center gap-2 bg-white text-stone-800 px-8 py-4 rounded-xl font-bold text-lg border-2 border-stone-200 hover:border-emerald-600 hover:text-emerald-700 transition-all"
              >
                Hakkımızda
              </Link>
            </div>

            {/* Stats/Badges */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-stone-200 mt-4">
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-emerald-700">5+</span>
                <span className="text-xs text-stone-500 uppercase tracking-widest font-bold">Yıllık Tecrübe</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-emerald-700">100+</span>
                <span className="text-xs text-stone-500 uppercase tracking-widest font-bold">Mutlu Müşteri</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-emerald-700">5M+</span>
                <span className="text-xs text-stone-500 uppercase tracking-widest font-bold">Yıllık Üretim</span>
              </div>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-stone-900/20 aspect-[4/5] sm:aspect-square">
            <ImageWithFallback
              src="/images/gazze-ambalaj.jpeg"
              alt="Gazze Ambalaj Ürünleri"
              className="w-full h-full object-cover"
            />
            </div>+

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 z-20 bg-white p-6 rounded-2xl shadow-xl border border-stone-100 hidden md:flex items-center gap-4 max-w-[240px]"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-stone-900 leading-tight">Gıda Güvenliği Sertifikalı</p>
                <p className="text-xs text-stone-500 mt-1">Uluslararası standartlar</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-10 -right-10 z-20 bg-emerald-900 p-6 rounded-2xl shadow-xl hidden lg:flex items-center gap-4 max-w-[200px]"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-700 flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-tight">Hızlı Teslimat</p>
                <p className="text-xs text-emerald-400 mt-1">Zamanında üretim</p>
              </div>
            </motion.div>

            {/* Background blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-600/5 blur-[100px] -z-10 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
