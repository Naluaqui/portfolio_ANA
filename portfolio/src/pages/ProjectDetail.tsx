import React from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import {ArrowLeft, ExternalLink, Calendar, Tag} from 'lucide-react'
import { projects } from "../data/projects"

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-red-500 mb-4 font-mono">
            ERROR_404: PROJECT_NOT_FOUND
          </h1>
          <p className="text-gray-400 mb-8">
            The requested project does not exist in the database.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg font-semibold text-white hover:scale-105 transition-transform duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            RETURN_TO_PROJECTS
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
   
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/projects")}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold">VOLTAR</span>
        </motion.button>

 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-cyan-400 to-green-400 font-mono">
            {project.title}
          </h1>
          
    
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex items-center gap-2 text-gray-400">
              <Calendar className="w-5 h-5 text-pink-500" />
              <span className="font-mono">{project.year}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Tag className="w-5 h-5 text-cyan-400" />
              <span className="font-mono">{project.category}</span>
            </div>
          </div>

          <p className="text-xl text-gray-300 mb-6">
            {project.description}
          </p>

    
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg font-semibold text-white hover:scale-105 transition-transform duration-300"
          >
            <ExternalLink className="w-5 h-5" />
          VER PROJETO
          </a>
        </motion.div>

      
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative mb-12 rounded-lg overflow-hidden border-2 border-gray-800 hover:border-cyan-400/50 transition-colors duration-300 group"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-pink-500/50" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-cyan-500/50" />
        </motion.div>

  
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
     
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-black/50 backdrop-blur-md border border-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6 font-mono tracking-wider">
                DESCRIÇÃO
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.fullDescription}
                </p>
              </div>

         
              <div className="mt-8 pt-8 border-t border-gray-800">
                <h3 className="text-xl font-bold text-pink-400 mb-4 font-mono">
                  PALAVRAS CHAVES
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-lg text-cyan-400 font-mono text-sm hover:border-cyan-400/50 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

 
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
      
            <div className="bg-black/50 backdrop-blur-md border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold text-cyan-400 mb-4 font-mono">
                INFORMAÇÕES
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-500 text-sm mb-1 font-mono">ANO</p>
                  <p className="text-white font-semibold">{project.year}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1 font-mono">CATEGORIA</p>
                  <p className="text-white font-semibold">{project.category}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1 font-mono">STATUS</p>
                  <p className="text-green-400 font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse-glow" />
                    ATIVO
                  </p>
                </div>
              </div>
            </div>


            <div className="bg-gradient-to-br from-pink-500/10 to-cyan-500/10 border border-pink-500/30 rounded-lg p-6">
              <h3 className="text-lg font-bold text-pink-400 mb-2 font-mono">
                SE INTERESSOU?
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Vamos conversar! Estou disponível para discutir como posso ajudar a transformar suas ideias em realidade.
              </p>
              <Link
                to="/contact"
                className="block w-full px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg font-semibold text-white text-center hover:scale-105 transition-transform duration-300"
              >
                COMEÇAR CONVERSA
              </Link>
            </div>

        
            <div className="bg-black/50 backdrop-blur-md border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold text-cyan-400 mb-4 font-mono">
                MAIS PROJETOS
              </h3>
              <div className="space-y-3">
                {projects
                  .filter((p) => p.id !== project.id)
                  .slice(0, 3)
                  .map((relatedProject) => (
                    <Link
                      key={relatedProject.id}
                      to={`/projects/${relatedProject.id}`}
                      className="block p-3 bg-gray-900/50 border border-gray-800 hover:border-cyan-400/50 rounded-lg transition-colors duration-300 group"
                    >
                      <p className="text-cyan-400 font-semibold text-sm mb-1 group-hover:text-pink-400 transition-colors">
                        {relatedProject.title}
                      </p>
                      <p className="text-gray-500 text-xs line-clamp-2">
                        {relatedProject.description}
                      </p>
                    </Link>
                  ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
