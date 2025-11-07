import React, { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
    Code2,
    Zap,
    Palette,
    Braces,
    Workflow,
    Ship,
    Leaf,
    Database,
    ListChecks,
    Rocket,
    Pause,
    Play,
    ChevronRight,
} from "lucide-react";

const Home: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleMusic = () => {
    setIsPlaying(!isPlaying)
   
  }

  const features = [
    {
        icon: Code2,
        title: "Python",
        description: "APIs REST, automações e integrações confiáveis.",
        color: "from-yellow-400 to-orange-500",
    },
    {
        icon: Zap,
        title: "JavaScript / TypeScript",
        description: "Interfaces reativas e rotas modernas com React + Router.",
        color: "from-amber-400 to-sky-500",
    },
    {
        icon: Palette,
        title: "CSS",
        description: "Layouts responsivos, acessibilidade e design consistente.",
        color: "from-fuchsia-500 to-pink-600",
    },
    {
        icon: Braces,
        title: "C#",
        description: "APIs .NET e integrações seguras para serviços internos.",
        color: "from-violet-500 to-indigo-600",
    },
    {
        icon: Workflow,
        title: "Odoo",
        description: "Modelos, wizards, QWeb/PDF e fluxos sob medida para o negócio.",
        color: "from-purple-500 to-violet-700",
    },
    {
        icon: Ship,
        title: "Docker",
        description: "Ambientes reproduzíveis, imagens leves e dev/prod alinhados.",
        color: "from-sky-500 to-cyan-600",
    },
    {
        icon: Leaf,
        title: "MongoDB",
        description: "Modelagem flexível e consultas eficientes.",
        color: "from-emerald-500 to-green-600",
    },
    {
        icon: Database,
        title: "SQL (Postgres)",
        description: "Consultas otimizadas, índices e integridade relacional.",
        color: "from-indigo-500 to-blue-600",
    },
    {
        icon: ListChecks,
        title: "Organização & Prioridade",
        description: "Notion/Trello, planejamento claro e entregas no prazo.",
        color: "from-amber-500 to-orange-600",
    },
    {
        icon: Rocket,
        title: "Proatividade & Aprendizado Contínuo",
        description: "Pesquisa em fontes oficiais e iteração constante.",
        color: "from-teal-500 to-emerald-600",
    },
  ]

  return (
    <div className="pt-20">
   
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">

        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          onClick={toggleMusic}
          className="absolute top-28 right-8 z-20 p-4 rounded-full border-2 border-cyan-400 bg-black/50 backdrop-blur-md hover:bg-cyan-400/20 transition-all duration-300 group"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
          ) : (
            <Play className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
          )}
          <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>

        <div className="max-w-7xl mx-auto text-center relative z-10">
         
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1
              className="text-6xl sm:text-5xl md:text-5xl lg:text-7xl font-black mb-4 glitch text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-cyan-400 to-green-400"
              data-text="DEV FULL STACK"
            >
              DEV FULL STACK
            </h1>
            <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse-glow" />
          </motion.div>


          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 font-light tracking-wide"
          >
            Com grandes <span className="text-pink-500 text-glow-pink font-semibold">códigos</span>, vem grandes{" "}
            <span className="text-cyan-400 text-glow-cyan font-semibold">bugs</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Engenheira de software e especialista em Odoo, conecto processos reais a experiências digitais. Do back-end ao front-end, transformo operação em produto: lógica que sustenta, interface que convida. Meu foco é tornar a complexidade fluida, integrando dados, pessoas e produtos com criatividade e inovação.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
          >
            <Link
              to="/projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                PROJETOS
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              to="/contact"
              className="group relative px-8 py-4 border-2 border-cyan-400 rounded-lg font-semibold text-cyan-400 overflow-hidden transition-all duration-300 hover:text-black"
            >
              <span className="relative z-10 flex items-center gap-2">
                CONTATO
              </span>
              <div className="absolute inset-0 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="relative w-64 h-64 mx-auto animate-float"
          >
            <div className="absolute inset-0 border-4 border-pink-500/30 rounded-full" />
            <div className="absolute inset-4 border-4 border-cyan-400/30 rounded-full animate-spin" style={{ animationDuration: "20s" }} />
            <div className="absolute inset-8 border-4 border-green-400/30 rounded-full animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-pink-500/20 via-cyan-400/20 to-green-400/20 rounded-full blur-xl animate-pulse-glow" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500"
          >
            HABILIDADES
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative p-8 bg-black/50 backdrop-blur-md border border-gray-800 hover:border-cyan-400/50 rounded-lg transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4 font-mono tracking-wider">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10+", label: "PROJETOS PRÁTICOS" },
              { value: "180+", label: "HORAS DE ESTUDOS" },
              { value: "4", label: "INTEGRAÇÕES (APIS)" },
              { value: "12", label: "PULL REQUESTS" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-black/30 backdrop-blur-md border border-gray-800 rounded-lg"
              >
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-400 font-mono tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
