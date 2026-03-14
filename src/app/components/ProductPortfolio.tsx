import { ArrowRight, MoveRight, Layers, Box, ShoppingBag, Truck } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function ProductPortfolio() {
  const categories = [
    {
      id: 1,
      title: "Kraft Çantalar",
      image: "/images/kraft-kapak.jpeg",
      icon: <ShoppingBag className="w-5 h-5" />,
      desc: "Esmer ve beyaz kraft, burgu ve düz saplı geri dönüştürülebilen çanta çözümleri.",
    },
    {
      id: 2,
      title: "Kese kağıdı",
      image: "/images/kese-kapak.jpg",
      icon: <Box className="w-5 h-5" />,
      desc: "Gıda ile temasa uygun, sertifikalı gıda kutuları ve paket servis ambalajları.",
    },
    {
      id: 3,
      title: "Rulo Islak Havlular",
      image: "/images/lara0.jpg",
      icon: <Layers className="w-5 h-5" />,
      desc: "Islak havlularınızı sıradan sunumların ötesine taşıyın. Markanıza özel tasarımlarla müşterilerinize unutulmaz bir deneyim sunun.",
    },
    {
      id: 4,
      title: "Ambalaj Kağıtları",
      image: "/images/kraft.jpg",
      icon: <Truck className="w-5 h-5" />,
      desc: "Özel baskılı sargı kağıtları ve kurumsal kimliğinize uygun desenler.",
    },
  ];

  return (
    <section className="py-24 bg-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16">
          <div className="flex flex-col gap-4 max-w-2xl">
            <span className="text-emerald-600 font-bold tracking-[0.3em] text-2xl">Ürünlerimiz</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900 leading-tight">
              Her Sektöre Özel <br />
              <span className="text-emerald-700">Ambalaj Çözümleri</span>
            </h2>
            <p className="text-lg text-stone-600">
              Gazze Kağıt Ambalaj olarak, Konya merkezli lojistik gücümüzle hızlı teslimat ve kesintisiz stok garantisi sunuyoruz. Sadece ürün tedarik etmekle kalmıyor, markanıza özel tasarımlar ve doğa dostu çözümlerle iş süreçlerinizi kolaylaştırıyoruz. Kaliteyi rekabetçi fiyatlarla birleştirerek, her aşamada güvenilir ve profesyonel bir çözüm ortağı olarak yanınızda yer alıyoruz.
            </p>
          </div>
          <Link
            to="/urunler"
            className="hidden md:inline-flex items-center gap-2 bg-white text-stone-900 px-8 py-4 rounded-xl font-bold border border-stone-200 hover:border-emerald-600 hover:text-emerald-700 transition-all shadow-sm"
          >
            Tüm Ürünleri Gör
            <MoveRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <ImageWithFallback
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">

                </div>
                <div className="absolute top-6 left-6 w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  {cat.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col gap-3 flex-grow border-t border-stone-50">
                <h3 className="text-xl font-bold text-stone-900 group-hover:text-emerald-700 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:hidden">
          <Link
            to="/urunler"
            className="flex items-center justify-center gap-2 bg-white text-stone-900 px-8 py-4 rounded-xl font-bold border border-stone-200 w-full"
          >
            Tüm Ürünleri Gör
            <MoveRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
