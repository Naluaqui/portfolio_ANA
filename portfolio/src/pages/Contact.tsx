import React, { useState } from "react"
import { motion } from "framer-motion"
import {Send, User, Mail, MessageSquare, CheckCircle} from 'lucide-react'
import toast from "react-hot-toast"

interface FormData {
  name: string
  email: string
  message: string
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const alertMessage = `
=== MENSAGEM RECEBIDA ===

NOME: ${formData.name}
EMAIL: ${formData.email}
MENSSAGEM: ${formData.message}

==============================
    `
    alert(alertMessage)

    toast.success("Mensagem Entregue com Sucesso!", {
      icon: "🚀",
      duration: 4000,
    })

    setFormData({
      name: "",
      email: "",
      message: "",
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "EMAIL",
      value: "anatibiricapaixao@outlook.com",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: CheckCircle,
      label: "TEMPO DE RESPOSTA",
      value: "< 24 horas",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: MessageSquare,
      label: "DISPONIBILIDADE",
      value: "100% Digital",
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-cyan-400 to-green-400">
            CONTATO
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Quer tirar sua ideia do papel? Fale comigo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
    
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-black/50 backdrop-blur-md border border-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6 font-mono tracking-wider">
                ENVIAR MENSAGEM
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
          
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-400 mb-2 font-mono">
                    NOME
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-black/50 border-2 border-gray-800 focus:border-cyan-400 rounded-lg text-white placeholder-gray-600 outline-none transition-all duration-300"
                      placeholder="Escreva seu nome..."
                    />
                  </div>
                </div>

          
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-400 mb-2 font-mono">
                    EMAIL
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-400 w-5 h-5" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-black/50 border-2 border-gray-800 focus:border-pink-400 rounded-lg text-white placeholder-gray-600 outline-none transition-all duration-300"
                      placeholder="seu.email@dominio.com"
                    />
                  </div>
                </div>

            
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-400 mb-2 font-mono">
                    MENSSAGEM
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 text-green-400 w-5 h-5" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full pl-12 pr-4 py-3 bg-black/50 border-2 border-gray-800 focus:border-green-400 rounded-lg text-white placeholder-gray-600 outline-none transition-all duration-300 resize-none"
                      placeholder="Descreva com riqueza de detalhes a sua idéia..."
                    />
                  </div>
                </div>

          
                <button
                  type="submit"
                  className="group relative w-full px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    ENVIAR
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </form>
            </div>
          </motion.div>

     
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
     
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-black/50 backdrop-blur-md border border-gray-800 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-mono mb-1">{info.label}</p>
                    <p className="text-lg text-white font-semibold">{info.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}

    
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-br from-pink-500/10 to-cyan-500/10 border border-pink-500/30 rounded-lg p-8"
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-4 font-mono">
                POR QUE CONECTAR?
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 mt-1">▸</span>
                  <span>Soluções de desenvolvimento web de ponta</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▸</span>
                  <span>Designs personalizados</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▸</span>
                  <span>Aplicações otimizadas para alto desempenho</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Suporte e manutenção 24 horas por dia, 7 dias por semana</span>
                </li>
              </ul>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="relative h-64 bg-black/50 backdrop-blur-md border border-gray-800 rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 cyber-grid opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-pink-500/20 to-cyan-500/20 border-2 border-cyan-400/50 mb-4 animate-pulse-glow">
                    <Send className="w-10 h-10 text-cyan-400" />
                  </div>
                  <p className="text-gray-400 font-mono text-sm">
                    AGUARDANDO MENSAGENS!
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
