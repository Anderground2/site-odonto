import { motion } from 'framer-motion'
import { Sparkles, Star, Heart, ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
          alt="Salao de beleza"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-pink-900/30 to-transparent" />
      </div>
      
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-72 h-72 bg-rose-400/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Sparkles className="w-4 h-4 text-pink-400" />
              Realce sua beleza natural
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Onde a{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-linear-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
                  beleza
                </span>
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-3 bg-linear-to-r from-rose-400/40 to-pink-500/40 rounded"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                />
              </span>
              {' '}encontra a arte
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Transformamos cada visita em uma experiencia unica de autocuidado. 
              Cabelos, unhas, maquiagem e muito mais com os melhores profissionais.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#agendamento"
                className="group px-8 py-4 bg-linear-to-r from-rose-400 to-pink-600 text-white font-bold rounded-full shadow-2xl shadow-pink-500/30 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Agende pelo WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#galeria"
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <Play className="w-5 h-5" />
                Ver trabalhos
              </motion.a>
            </motion.div>

            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-8 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white">8+</div>
                <div className="text-white/70 text-sm">Anos de experiencia</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">5k+</div>
                <div className="text-white/70 text-sm">Clientes felizes</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">20+</div>
                <div className="text-white/70 text-sm">Servicos</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hidden lg:block relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-lg mx-auto">
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-linear-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">+500 avaliacoes</div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {['https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100', 
                      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
                      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'
                    ].map((src, i) => (
                      <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                    ))}
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold text-gray-800">Clientes</span>
                    <span className="text-gray-500"> satisfeitas</span>
                  </div>
                </div>
              </motion.div>

              <div className="relative aspect-3/4 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80"
                  alt="Modelo salao"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-pink-600/30 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <a href="#servicos" className="text-white/60 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </section>
  )
}
