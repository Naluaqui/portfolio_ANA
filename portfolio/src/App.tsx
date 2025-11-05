import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import ProjectDetail from "./pages/ProjectDetail"
import Contact from "./pages/Contact"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#0f0a1f] to-[#0a0a0f] relative overflow-hidden">
        <div className="fixed inset-0 cyber-grid opacity-20 pointer-events-none" />
        
        <div className="fixed top-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] animate-pulse-glow pointer-events-none" />
        <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse-glow pointer-events-none" style={{ animationDelay: "1s" }} />
        <div className="fixed top-1/2 left-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-[120px] animate-pulse-glow pointer-events-none" style={{ animationDelay: "2s" }} />
        
        <div className="fixed inset-0 scanline pointer-events-none" />
        
        <div className="relative z-10">
          <Navigation />
          <main className="min-h-[calc(100vh-200px)]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
        
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#1a1a2e",
              color: "#00f5ff",
              border: "1px solid #00f5ff",
              boxShadow: "0 0 20px rgba(0, 245, 255, 0.3)",
            },
          }}
        />
      </div>
    </Router>
  )
}

export default App
