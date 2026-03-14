import { useState } from "react";
import {
  ShoppingBag,
  Box,
  Layers,
  Truck,
  Search,
  Droplets,
  Phone,
  X,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion, AnimatePresence } from "motion/react";

type Product = {
  id: number;
  category: string;
  title: string;
  image: string;
  desc: string;
  examples: string[];
};

export function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "Tümü", icon: null },
    { id: "bag", name: "Kraft çanta", icon: <ShoppingBag className="w-4 h-4" /> },
    { id: "bags", name: "Kese Kağıdı", icon: <ShoppingBag className="w-4 h-4" /> },
    { id: "food", name: "Doypack", icon: <Box className="w-4 h-4" /> },
    { id: "industrial", name: "Ofset Matbaa Kutu", icon: <Layers className="w-4 h-4" /> },
    { id: "wrapping", name: "Ambalaj Kağıdı", icon: <Truck className="w-4 h-4" /> },
    { id: "towels", name: "Islak Havlular", icon: <Droplets className="w-4 h-4" /> },
    { id: "box", name: "koli", icon: <Truck className="w-4 h-4" /> },

  ];

  const products: Product[] = [
    {
      id: 1,
      category: "bag",
      title: "Kraft (kağıt) çanta",
      image: "/images/kraft-kapak.jpeg",
      desc: "Özel dokulu kağıt, varak baskı ve koton saplı lüks çözümler.",
      examples: [
        "/images/kese-1.jpeg",
        "/images/magaza-cantasi-2.jpeg",
        "/images/magaza-cantasi-3.jpeg",
        "/images/magaza-cantasi-4.jpeg",
        "/images/magaza-cantasi-1.jpeg",
        "/images/magaza-cantasi-5.jpeg",
        "/images/magaza-cantasi-6.jpeg",
        "/images/magaza-cantasi-7.jpeg",
        "/images/magaza-cantasi-8.jpeg",
      ],
    },
    {
      id: 5,
      category: "bags",
      title: "Kese kağıdı",
      image: "/images/kese-kapak.jpg",
      desc: "Dipli, Dipsiz ve Pencereli kese kağıtları.",
      examples: [
      "/images/kese-0.jpeg",
       "/images/gida-1.jpeg",
       "/images/gida-4.jpeg",
       "/images/gida-6.jpeg",
       "/images/kese-00.jpeg", 

      ],
    },
        {
      id: 4,
      category: "wrapping",
      title: "Ambalaj Kağıdı",
      image: "/images/kraft.jpg",
      desc: "İnce, şık ve markanıza özel baskılı iç sargı kağıtları.",
      examples: [
        "/images/pelur-2.jpeg",
        "/images/pelur-3.jpeg",
        "/images/pelur-4.jpeg",
        "/images/pelur-5.jpeg",
      ],
    },
    {
      id: 7,
      category: "towels",
      title: "Islak Havlu",
      image: "/images/lara0.jpg",
      desc: "Islak havlularınızı sıradan sunumların ötesine taşıyın. Markanıza özel tasarımlarla müşterilerinize unutulmaz bir deneyim sunun.",
      examples: [
        "/images/islak-0.jpg",
        "/images/islak-2.jpeg",
        "/images/islak-3.jpeg",
        "/images/islak-4.jpeg",
        "/images/islak.jpeg",
      ],
    },
        {
      id: 3,
      category: "industrial",
      title: "Ofset matbaa Kutu",
      image: "/images/ofset-0.jpg",
      desc: "Kaliteli ve lüks tasarımlı kutu ve dijital baskı teknolojisi ile metal kutular.",
      examples: [
        "/images/metal-1.jpeg",
        "/images/metal-2.jpeg",
        "/images/metal-3.jpeg",
        "/images/metal-4.jpeg",
      ],
    },
    {
      id: 8,
      category: "food",
      title: "Doypack",
      image: "/images/doypack.jpg",
      desc: "Dijital baskı teknolojisi ile renk, adet ve klişe sınırı olmadan müşterilernize kaliteyi sonuna kadar hissettirin.",
      examples: [
        "/images/kese-kagidi-5.jpeg",
        "/images/kese-kagidi-6.jpeg",
        "/images/kese-kagidi-2.jpeg",
        "/images/pasam-0.jpeg",
      ],
    },
      {
      id: 9,
      category: "box",
      title: "Koli",
      image: "/images/karton.jpeg",
      desc: "Dayanıklı kraft ambalaj kutuları ile ürünlerinizi güvenle taşıyın ve markanızı şık bir şekilde sunun.",
      examples: [
        "/images/karton-3.jpeg",
        "/images/karton-2.png",
        "/images/kol.jpg",
      ],
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col pt-20">
      {/* Header */}
      <section className="bg-stone-100 py-20 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-6">
          <span className="text-emerald-600 font-bold tracking-[0.3em] text-xl">
            Ürünlerimiz
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 leading-tight">
            Kapsamlı <span className="text-emerald-700">Ambalaj Portföyü</span>
          </h1>
          <p className="text-stone-600 text-lg max-w-2xl">
            İhtiyacınıza uygun, kaliteli ve çevre dostu ambalaj seçeneklerimizi inceleyin.
            Her ürünümüz markanız için özel olarak optimize edilebilir.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all shadow-sm ${
                  activeCategory === cat.id
                    ? "bg-emerald-600 text-white shadow-emerald-600/20"
                    : "bg-white text-stone-600 border border-stone-200 hover:border-emerald-600 hover:text-emerald-700"
                }`}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-white min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={() => setSelectedProduct(product)}
                  className="group flex flex-col bg-white rounded-3xl border border-stone-100 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-emerald-800 uppercase tracking-widest border border-emerald-100">
                      {categories.find((c) => c.id === product.category)?.name}
                    </div>
                  </div>

                  <div className="p-8 flex flex-col gap-4 flex-grow">
                    <h3 className="text-xl font-bold text-stone-900 group-hover:text-emerald-700 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-stone-500 text-sm leading-relaxed flex-grow italic">
                      {product.desc}
                    </p>
                    <div className="pt-4 border-t border-stone-100">
                      <span className="text-emerald-700 font-bold text-sm">
                        Örnekleri Gör →
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 flex flex-col items-center gap-4">
              <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center text-stone-300">
                <Search className="w-10 h-10" />
              </div>
              <p className="text-stone-500 font-bold">
                Aradığınız kriterlere uygun ürün bulunamadı.
              </p>
              <button
                onClick={() => setActiveCategory("all")}
                className="text-emerald-600 font-bold underline"
              >
                Tüm ürünleri göster
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Özel Tasarım <span className="text-emerald-400">Ambalaj mı İstiyorsunuz?</span>
          </h2>
          <p className="text-emerald-100/70 text-lg max-w-2xl">
            Tasarım ekibimiz markanızın kimliğine ve ürünlerinize en uygun ambalajı sizinle birlikte tasarlamak için hazır.
          </p>
          <button className="flex items-center justify-center gap-3 bg-white text-emerald-950 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-600/20 active:scale-95">
            <Phone className="w-5 h-5" />
            +90 (553) 235 12 10
          </button>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between rounded-t-3xl">
                <div>
                  <h2 className="text-2xl font-extrabold text-stone-900">
                    {selectedProduct.title}
                  </h2>
                  <p className="text-stone-500 text-sm mt-1">
                    {selectedProduct.desc}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedProduct(null)}
                  className="w-11 h-11 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-50"
                >
                  <X className="w-5 h-5 text-stone-700" />
                </button>
              </div>

              <div className="p-6">
                <div className="overflow-hidden rounded-3xl mb-8">
                  <ImageWithFallback
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="w-full h-[320px] object-cover"
                  />
                </div>

                <h3 className="text-xl font-bold text-stone-900 mb-5">
                  Ürün Örnekleri
                </h3>

                <div className="grid w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {selectedProduct.examples.map((example, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveImage(example)}
                      className="w-full h-full rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-stone-50 p-4 text-left cursor-zoom-in"
                    >
                      <div className="w-full h-[460px] rounded-xl overflow-hidden bg-white">
                        <ImageWithFallback
                          src={example}
                          alt={`${selectedProduct.title} örnek ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
  {activeImage && (
    <motion.div
      className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setActiveImage(null)}
    >
      <button
        type="button"
        onClick={() => setActiveImage(null)}
        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 text-white border border-white/20 flex items-center justify-center hover:bg-white/20"
      >
        <X className="w-6 h-6" />
      </button>

      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full h-full flex items-center justify-center"
      >
        <ImageWithFallback
          src={activeImage}
          alt="Büyük görsel"
          className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
        />
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
}