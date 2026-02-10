import { motion } from 'framer-motion'
import { Sparkles, Instagram, Facebook, MessageCircle, ArrowUp, MapPin, Phone, Mail } from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'Corte & Estilo', href: '#servicos' },
    { label: 'Coloracao', href: '#servicos' },
    { label: 'Tratamentos', href: '#servicos' },
    { label: 'Manicure & Pedicure', href: '#servicos' },
    { label: 'Maquiagem', href: '#servicos' },
  ],
  company: [
    { label: 'Sobre Nos', href: '#sobre' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Agendamento', href: '#agendamento' },
  ],
  contact: [
    { label: 'WhatsApp', href: 'https://wa.me/5511999999999' },
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
  ],
}

const WHATSAPP_NUMBER = '5511999999999'

export default function Footer() {
  const openWhatsApp = () => {
    const message = 'Ola! Gostaria de mais informacoes sobre o Bella Studio.'
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <footer id="contato" className="bg-gray-900 text-white relative">
      <div className="absolute inset-0 bg-linear-to-b from-pink-950/20 to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <a href="#inicio" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-linear-to-r from-rose-400 to-pink-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">
                <span className="bg-linear-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">Autoestima</span>
              </span>
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transformando beleza e elevando autoestima. Venha viver uma experiencia unica de cuidado pessoal.
            </p>

            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <button
                onClick={openWhatsApp}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Servicos</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Links</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Av. das Flores, 1000<br />Centro, Sao Paulo - SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-pink-400 shrink-0" />
                <span className="text-gray-400">(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-pink-400 shrink-0" />
                <span className="text-gray-400">contato@Autoestima.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              2024 Autoestima | Todos os direitos reservados.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>

      <motion.a
        href="#inicio"
        className="fixed bottom-8 right-8 w-12 h-12 bg-linear-to-r from-rose-400 to-pink-600 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/30 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </motion.a>

      <motion.button
        onClick={openWhatsApp}
        className="fixed bottom-8 left-8 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </motion.button>
    </footer>
  )
}
