import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80',
    title: 'Corte Moderno',
    category: 'Cabelo'
  },
  {
    url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
    title: 'Coloracao Vibrante',
    category: 'Coloracao'
  },
  {
    url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80',
    title: 'Nail Art',
    category: 'Unhas'
  },
  {
    url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80',
    title: 'Ambiente Premium',
    category: 'Salao'
  },
  {
    url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80',
    title: 'Balayage Perfeito',
    category: 'Coloracao'
  },
  {
    url: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80',
    title: 'Maquiagem Profissional',
    category: 'Maquiagem'
  },
  {
    url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80',
    title: 'Penteado para Noivas',
    category: 'Cabelo'
  },
  {
    url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80',
    title: 'Tratamento Capilar',
    category: 'Tratamento'
  },
]

const categories = ['Todos', 'Cabelo', 'Coloracao', 'Unhas', 'Maquiagem', 'Tratamento']

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages = selectedCategory === 'Todos' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length)
    }
  }

  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-4">
            Nosso Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Galeria de{' '}
            <span className="text-gradient">Trabalhos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos e inspire-se para sua proxima transformacao.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-rose-400 to-pink-600 text-white shadow-lg shadow-pink-500/30'
                  : 'bg-gray-100 text-gray-600 hover:bg-pink-100 hover:text-pink-600'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.url}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold">{image.title}</p>
                  <p className="text-white/70 text-sm">{image.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-6 right-6 text-white hover:text-pink-400 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </button>
              
              <button
                className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-pink-400 transition-colors"
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
              >
                <ChevronLeft className="w-10 h-10" />
              </button>
              
              <button
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-pink-400 transition-colors"
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
              >
                <ChevronRight className="w-10 h-10" />
              </button>

              <motion.img
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                src={filteredImages[selectedImage].url}
                alt={filteredImages[selectedImage].title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white">
                <p className="text-xl font-semibold">{filteredImages[selectedImage].title}</p>
                <p className="text-white/70">{filteredImages[selectedImage].category}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
