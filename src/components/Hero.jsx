import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen ..."> 
      <section className="min-h-screen flex flex-col justify-center items-center bg-slate-900 text-white px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          Desenvolvendo experiências digitais com precisão.
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
          Sou estudante de Engenharia de Software me especializando em React e JavaScript. 
          Foco em código limpo, performance e interfaces intuitivas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
      
      {/* Botão Ver Projetos (Primário) */}
      <motion.a
        href="#projects"
        whileHover={{ 
          y: -5, // Levanta 5 pixels
          boxShadow: "0px 10px 20px rgba(34, 211, 238, 0.3)" // Sombra suave com a cor do tema
        }}
        whileTap={{ scale: 0.95 }} // Efeito de clique (afunda levemente)
        className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 px-8 py-3 rounded-xl font-bold transition-colors duration-300 w-full sm:w-auto justify-center"
      >
        Ver Projetos
        <ChevronRight size={20} />
      </motion.a>

      {/* Botão Download CV (Secundário/Outlined) */}
      <motion.a
        href="/curriculo.pdf"
        download="Roberval_Sousa_CV.pdf"
        target="_blank" rel="noopener noreferrer"
        whileHover={{ 
          y: -5, 
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)" 
        }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 border-2 border-slate-700 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 w-full sm:w-auto justify-center"
      >
        <Download size={20} />
        Download CV
      </motion.a>

    </div>
      </div>
    </section>
    </section>
    
  );
};

export default Hero;