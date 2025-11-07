import * as React from "react";
import { useState, useMemo } from "react";
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {Search, ExternalLink, ChevronRight} from 'lucide-react'
import { projects } from "../data/projects"

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProjects = useMemo(() => {
    return projects.filter(
      (project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  }, [searchTerm])

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
   
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-cyan-400 to-green-400">
            PROJETOS
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Conheça meu portfólio. Você vai encontrar trabalhos de estudo, nos quais experimentei ideias e tecnologias, e também soluções aplicadas em cenários reais, integrando sistemas, automatizando rotinas e simplificando fluxos. O foco é sempre o mesmo: entregar valor com clareza, desempenho e manutenção fácil.
          </p>
        </motion.div>

      
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Pesquisar"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-black/50 backdrop-blur-md border-2 border-gray-800 focus:border-cyan-400 rounded-lg text-white placeholder-gray-500 outline-none transition-all duration-300 font-mono"
            />
            <div className="absolute inset-0 rounded-lg bg-cyan-400/5 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        </motion.div>

       
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-black/50 backdrop-blur-md border border-gray-800 hover:border-cyan-400/50 rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105"
              >
       
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  
              
                  <div className="absolute top-4 right-4 px-3 py-1 bg-pink-500/80 backdrop-blur-sm rounded-full text-xs font-bold text-white">
                    {project.year}
                  </div>

                
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

         
                <div className="p-6">
                  <h3 className="text-xl font-bold text-cyan-400 mb-2 font-mono tracking-wider">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

             
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-800/50 border border-gray-700 rounded text-xs text-gray-400 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

           
                  <div className="flex items-center gap-4">
                    <Link
                      to={`/projects/${project.id}`}
                      className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors duration-300 text-sm font-semibold group/link"
                    >
                      <span>VER DETALHES</span>
                      <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-semibold"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>LINK EXTERNO</span>
                    </a>
                  </div>
                </div>

              
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gray-800/50 border-2 border-gray-700 mb-6">
              <Search className="w-12 h-12 text-gray-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-400 mb-2 font-mono">
              NENHUM PROJETO ENCONTRADO
            </h3>
            <p className="text-gray-500">
              Tente buscar outros parâmetros
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg font-semibold text-white hover:scale-105 transition-transform duration-300"
            >
              RESETAR BUSCA
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Projects
