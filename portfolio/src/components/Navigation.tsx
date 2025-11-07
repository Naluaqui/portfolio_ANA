import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import {Menu, X, Zap} from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/projects", label: "PROJETOS" },
    { path: "/contact", label: "CONTATO" },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-cyan-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Zap className="w-8 h-8 text-pink-500 group-hover:text-cyan-400 transition-colors duration-300" />
              <div className="absolute inset-0 blur-md bg-pink-500 opacity-50 group-hover:bg-cyan-400 transition-all duration-300" />
            </div>
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-cyan-400 to-green-400 group-hover:from-green-400 group-hover:via-cyan-400 group-hover:to-pink-500 transition-all duration-500">
              ANA TIBIRIÇÁ
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-6 py-2 text-sm font-semibold tracking-wider transition-all duration-300 group ${
                  isActive(link.path)
                    ? "text-cyan-400"
                    : "text-gray-400 hover:text-pink-400"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {isActive(link.path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-cyan-500/10 border border-cyan-500/50"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/10 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/50 backdrop-blur-lg border-t border-cyan-500/30"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-semibold tracking-wider transition-all duration-300 ${
                    isActive(link.path)
                      ? "text-cyan-400 bg-cyan-500/10 border border-cyan-500/50"
                      : "text-gray-400 hover:text-pink-400 hover:bg-pink-500/10 border border-transparent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation
