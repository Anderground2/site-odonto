import { motion } from 'framer-motion'
import { Scissors, Sparkles, Heart, Palette, Crown, Gem } from 'lucide-react'

const services = [
  {
    icon: <Scissors className="w-8 h-8" />,
    title: 'Corte & Estilo',
    description: 'Cortes modernos e personalizados para realcar sua beleza natural com as ultimas tendencias.',
    color: 'from-rose-400 to-pink-600',
    bgHover: 'group-hover:bg-rose-50',
    price: 'A partir de R$ 80',
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Coloracao',
    description: 'Luzes, mechas, balayage e coloracao completa com produtos de alta qualidade.',
    color: 'from-purple-400 to-fuchsia-600',
    bgHover: 'group-hover:bg-purple-50',
    price: 'A partir de R$ 150',
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Tratamentos Capilares',
    description: 'Hidratacao profunda, reconstrucao, botox capilar e alisamentos.',
    color: 'from-amber-400 to-orange-500',
    bgHover: 'group-hover:bg-amber-50',
    price: 'A partir de R$ 120',
  },
  {
    icon: <Gem className="w-8 h-8" />,
    title: 'Manicure & Pedicure',
    description: 'Unhas decoradas, esmaltacao em gel, alongamento e nail art exclusiva.',
    color: 'from-pink-400 to-rose-500',
    bgHover: 'group-hover:bg-pink-50',
    price: 'A partir de R$ 50',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Maquiagem',
    description: 'Maquiagem social, noivas, festas e producoes especiais para qualquer ocasiao.',
    color: 'from-red-400 to-pink-500',
    bgHover: 'group-hover:bg-red-50',
    price: 'A partir de R$ 100',
  },
  {
    icon: <Crown className="w-8 h-8" />,
    title: 'Design de Sobrancelhas',
    description: 'Micropigmentacao, henna, design personalizado e alongamento de cilios.',
    color: 'from-violet-400 to-purple-600',
    bgHover: 'group-hover:bg-violet-50',
    price: 'A partir de R$ 40',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-4">
            Nossos Servicos
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Servicos para realcar sua{' '}
            <span className="text-gradient">beleza</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma experiencia completa de beleza com profissionais especializados e produtos premium.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden ${service.bgHover}`}
              whileHover={{ y: -5 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                {service.icon}
              </div>
              
              <h3 className="relative z-10 text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="relative z-10 text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>

              <p className="relative z-10 text-pink-600 font-semibold">
                {service.price}
              </p>
              
              <div className="mt-4 flex items-center gap-2 text-pink-600 font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <span>Agendar</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              <div className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${service.color} rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href="#agendamento"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-400 to-pink-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-pink-500/30 transform hover:scale-105 transition-all duration-300"
          >
            Agende seu horario pelo WhatsApp
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
