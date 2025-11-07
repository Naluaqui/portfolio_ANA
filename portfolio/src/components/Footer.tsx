import React from "react"
import {Github, Linkedin, Mail, Terminal} from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Naluaqui",
      label: "GitHub",
      color: "hover:text-pink-400",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ana-luiza-tibirica-da-paixao/",
      label: "LinkedIn",
      color: "hover:text-cyan-400",
    },
    {
      icon: Mail,
      href: "mailto:anatibiricapaixao@outlook.com",
      label: "Email",
      color: "hover:text-green-400",
    },
  ]

  return (
    <footer className="relative mt-20 border-t border-cyan-500/30 bg-black/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Terminal className="w-6 h-6 text-pink-500" />
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
                ANA TIBIRIÇÁ
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Arquiteta digital criando experiências que entregam e escalam.
            </p>
          </div>

      
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-cyan-400 tracking-wider">ACESSO RÁPIDO</h3>
            <div className="space-y-2">
              {["Home", "Projetos", "Contato"].map((link) => (
                <div key={link} className="flex items-center space-x-2 text-gray-400 hover:text-pink-400 transition-colors duration-300 cursor-pointer group">
                  <span className="text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">&gt;</span>
                  <span className="text-sm">{link}</span>
                </div>
              ))}
            </div>
          </div>

       
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-cyan-400 tracking-wider">CONECTAR</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-3 rounded-lg border border-gray-700 text-gray-400 transition-all duration-300 ${social.color} hover:border-current`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                  <div className="absolute inset-0 rounded-lg bg-current opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300" />
                </a>
              ))}
            </div>
            <div className="pt-4">
              <p className="text-xs text-gray-500 font-mono">
                STATUS: <span className="text-green-400 animate-pulse-glow">ONLINE</span>
              </p>
              <p className="text-xs text-gray-500 font-mono mt-1">
                DISPONIBILIDADE: <span className="text-cyan-400">99.9%</span>
              </p>
            </div>
          </div>
        </div>

      
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500 font-mono">
              © {currentYear} Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-2 text-xs text-gray-500 font-mono">
              <span className="text-pink-500">▲</span>
              <span className="text-cyan-400">●</span>
              <span className="text-green-400">■</span>
            </div>
          </div>
        </div>
      </div>

    
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-pink-500/30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-cyan-500/30 pointer-events-none" />
    </footer>
  )
}

export default Footer
