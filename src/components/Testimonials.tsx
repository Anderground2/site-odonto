import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Ana Paula Silva',
    role: 'Cliente ha 3 anos',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    text: 'O Bella Studio transformou meu cabelo! A equipe e super atenciosa e o resultado sempre fica perfeito. Recomendo demais!',
    rating: 5,
    service: 'Coloracao e Corte'
  },
  {
    name: 'Mariana Costa',
    role: 'Cliente ha 2 anos',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
    text: 'Melhor salao que ja fui! O ambiente e maravilhoso e as profissionais sao muito capacitadas. Minha make de noiva ficou perfeita!',
    rating: 5,
    service: 'Maquiagem Noiva'
  },
  {
    name: 'Juliana Mendes',
    role: 'Cliente ha 4 anos',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
    text: 'Faco minhas unhas aqui toda semana. O trabalho de nail art e impecavel e sempre saio me sentindo renovada!',
    rating: 5,
    service: 'Manicure & Nail Art'
  },
  {
    name: 'Fernanda Lima',
    role: 'Cliente ha 1 ano',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200',
    text: 'Adorei o tratamento capilar! Meu cabelo estava muito danificado e agora esta lindo e saudavel. Profissionais incriveis!',
    rating: 5,
    service: 'Tratamento Capilar'
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  }

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="depoimentos" className="py-24 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-4">
            Depoimentos
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            O que nossas{' '}
            <span className="text-gradient">clientes</span>
            {' '}dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A satisfacao das nossas clientes e nossa maior recompensa.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2">
            <Quote className="w-16 h-16 text-pink-200" />
          </div>

          <div className="relative h-[400px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-8"
              >
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-xl mb-6"
                />
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-xl sm:text-2xl text-gray-700 italic mb-6 max-w-2xl leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>

                <div>
                  <p className="font-bold text-gray-900 text-lg">{testimonials[currentIndex].name}</p>
                  <p className="text-pink-600">{testimonials[currentIndex].service}</p>
                  <p className="text-gray-500 text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-pink-600 hover:shadow-xl transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-pink-600 hover:shadow-xl transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-rose-400 to-pink-600'
                    : 'w-2 bg-gray-300 hover:bg-pink-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
