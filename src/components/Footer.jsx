import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SquareArrowOutUpRight, ExternalLink, Mail, ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 px-4">
      <section className="max-w-7xl mx-auto flex flex-col items-center">
        
        <section className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Vamos construir algo <span className="text-cyan-400">incrível?</span>
          </h2>
          <p className="text-slate-400 mb-8">
            Estou em busca de oportunidades de estágio e colaborações em projetos de Engenharia de Software.
          </p>
          
          <div className="flex gap-6 justify-center">
            <motion.a
              href="https://github.com"
              target="_blank"
              whileHover={{ y: -5, color: "#22d3ee" }}
              className="text-slate-500 transition-colors"
            >
              <FaGithub size={28} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              whileHover={{ y: -5, color: "#22d3ee" }}
              className="text-slate-500 transition-colors"
            >
              <FaLinkedin size={28} />
            </motion.a>
            <motion.a
              href="mailto:robervalsousa269@gmail.com"
              whileHover={{ y: -5, color: "#22d3ee" }}
              className="text-slate-500 transition-colors"
            >
              <Mail size={28} />
            </motion.a>
          </div>
        </section>

        {/* Linha Divisória */}
        <div className="w-full h-px bg-slate-900 mb-8"></div>

        {/* Copyright e Voltar ao Topo */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm flex items-center gap-2">
            © {currentYear} — Desenvolvido por Roberval de Sousa
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-slate-900 border border-slate-800 text-cyan-400 rounded-full hover:border-cyan-400/50 transition-colors shadow-lg"
            title="Voltar ao topo"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
        
        <div className="mt-4 text-[10px] text-slate-700 uppercase tracking-[0.2em]">
          Software Engineering Student • React • JavaScript 
        </div>
      </section>
    </footer>
  );
};

export default Footer;