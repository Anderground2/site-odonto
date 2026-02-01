import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Stethoscope} from 'lucide-react'

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Servicos', href: '#servicos' },
  { name: 'Galeria', href: '#galeria' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Depoimentos', href: '#depoimentos' },
  { name: 'Contato', href: '#contato' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.a
            href="#inicio"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 rounded-full bg-linear-to-r from-rose-400 to-pink-600 flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <span className={`text-2xl font-bold ${isScrolled ? 'text-gradient' : 'text-white'}`}>
              Autoestima
            </span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`relative font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-pink-600' : 'text-white/90 hover:text-pink-600'
                }`}
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          <motion.a
            href="#agendamento"
            className="hidden md:block px-6 py-2.5 bg-linear-to-r from-rose-400 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-pink-500/30 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Agendar Agora
          </motion.a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-gray-700 hover:text-pink-600 font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#agendamento"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center py-3 bg-linear-to-r from-rose-400 to-pink-600 text-white font-semibold rounded-full"
              >
                Agendar Agora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
