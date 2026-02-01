import { motion } from 'framer-motion'
import { Award, Heart, Sparkles, Users, Star } from 'lucide-react'

const stats = [
  { number: '8+', label: 'Anos de Experiencia' },
  { number: '5.000+', label: 'Clientes Atendidos' },
  { number: '20+', label: 'Servicos Disponiveis' },
  { number: '99%', label: 'Clientes Satisfeitos' },
]

const values = [
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Qualidade',
    description: 'Produtos e tecnicas de ponta',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Inovacao',
    description: 'Sempre atualizados com tendencias',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Carinho',
    description: 'Atendimento personalizado',
  },
]

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-gradient-to-br from-gray-900 via-pink-950 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-pink-500/20 text-pink-400 rounded-full text-sm font-semibold mb-4">
              Sobre Nos
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Realcando a beleza de cada{' '}
              <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
                mulher
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              O Bella Studio nasceu do sonho de criar um espaco onde cada cliente se sinta especial. 
              Com mais de 8 anos de experiencia, oferecemos servicos de beleza de alta qualidade 
              em um ambiente acolhedor e moderno.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Nossa equipe de profissionais apaixonados esta sempre atualizada com as ultimas 
              tendencias e tecnicas para garantir resultados incriveis.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-pink-500/50 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-600 rounded-xl flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-1">{value.title}</h3>
                  <p className="text-sm text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-3xl p-1">
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <motion.div 
                      key={index} 
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700">
                  <div className="flex items-center justify-center gap-4">
                    <div className="flex -space-x-3">
                      {[
                        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
                        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
                        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
                        'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100',
                      ].map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          alt=""
                          className="w-10 h-10 rounded-full border-2 border-gray-800 object-cover"
                        />
                      ))}
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-rose-400 to-pink-600 border-2 border-gray-800 flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-1 text-yellow-400">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400" />
                        ))}
                      </div>
                      <div className="text-sm text-gray-400">500+ avaliacoes 5 estrelas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Top Rated</div>
                  <div className="text-sm text-gray-500">Melhor salao da regiao</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
