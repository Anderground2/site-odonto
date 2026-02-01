import { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, Phone, MapPin, MessageCircle, Calendar, Send } from 'lucide-react'

const services = [
  'Corte & Estilo',
  'Coloracao',
  'Tratamentos Capilares',
  'Manicure & Pedicure',
  'Maquiagem',
  'Design de Sobrancelhas',
  'Alongamento de Cilios',
  'Penteados',
]

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00',
  '14:00', '15:00', '16:00', '17:00', '18:00',
]

const WHATSAPP_NUMBER = '5511999999999'

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const message = `Ola! Gostaria de agendar um horario no Bella Studio.

*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*Servico:* ${formData.service}
*Data:* ${formData.date}
*Horario:* ${formData.time}
${formData.message ? `*Observacao:* ${formData.message}` : ''}

Aguardo confirmacao!`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
  }

  const openDirectWhatsApp = () => {
    const message = 'Ola! Gostaria de agendar um horario no Bella Studio.'
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank')
  }

  return (
    <section id="agendamento" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-pink-50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-100 rounded-full blur-3xl opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-4">
            Agendamento
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Agende pelo{' '}
            <span className="text-gradient">WhatsApp</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Agende seu horario de forma rapida e pratica diretamente pelo WhatsApp.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4 p-5 bg-pink-50 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-600 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Horario de Funcionamento</h3>
                  <p className="text-gray-600">Segunda a Sexta: 09:00 - 19:00</p>
                  <p className="text-gray-600">Sabado: 09:00 - 17:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-green-50 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">WhatsApp</h3>
                  <p className="text-gray-600">(11) 99999-9999</p>
                  <p className="text-gray-500 text-sm">Resposta rapida garantida</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-purple-50 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Localizacao</h3>
                  <p className="text-gray-600">Av. das Flores, 1000 - Centro</p>
                  <p className="text-gray-600">Sao Paulo - SP</p>
                </div>
              </div>
            </div>

            <motion.button
              onClick={openDirectWhatsApp}
              className="w-full py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg rounded-2xl shadow-lg shadow-green-500/30 flex items-center justify-center gap-3 hover:shadow-xl transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-6 h-6" />
              Chamar no WhatsApp Agora
            </motion.button>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-pink-600 rounded-3xl transform rotate-2 opacity-10" />
            
            <form
              onSubmit={handleWhatsAppSubmit}
              className="relative bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-rose-400 to-pink-600 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Preencha para agendar</h3>
              </div>

              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 outline-none ${
                      focusedField === 'name'
                        ? 'border-pink-500 shadow-lg shadow-pink-500/10'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="Seu nome"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 outline-none ${
                      focusedField === 'phone'
                        ? 'border-pink-500 shadow-lg shadow-pink-500/10'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="Seu telefone"
                  />
                </div>

                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('service')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 outline-none appearance-none bg-white cursor-pointer ${
                      focusedField === 'service'
                        ? 'border-pink-500 shadow-lg shadow-pink-500/10'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <option value="">Selecione o servico</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                  <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('date')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 outline-none ${
                      focusedField === 'date'
                        ? 'border-pink-500 shadow-lg shadow-pink-500/10'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  />

                  <div className="relative">
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('time')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 outline-none appearance-none bg-white cursor-pointer ${
                        focusedField === 'time'
                          ? 'border-pink-500 shadow-lg shadow-pink-500/10'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <option value="">Horario preferido</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={3}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 outline-none resize-none ${
                    focusedField === 'message'
                      ? 'border-pink-500 shadow-lg shadow-pink-500/10'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  placeholder="Alguma observacao? (opcional)"
                />

                <motion.button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-rose-400 to-pink-600 text-white font-bold rounded-xl shadow-lg shadow-pink-500/30 flex items-center justify-center gap-2 hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  Enviar para WhatsApp
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
