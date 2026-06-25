import React from 'react';
import { motion } from 'framer-motion'; // Importando o motor de animação
import { ExternalLink, Code2 } from 'lucide-react';
import RickMorty from '../assets/rick-and-morty-bg.jpg';

const Projects = () => {
  const projects = [
    
    {
      id: 1,
      title: "Memory Game",
      description: "Jogo de memória desenvolvido para praticar lógica de estados complexos e efeitos de rotação 3D com tailwind.",
      tech: ["JavaScript", "React", "Tailwind CSS"],
      github: "https://jogo-da-mem-ria-alpha.vercel.app/",
      demo: "#",
      image: RickMorty
    },
    {
      id: 2,
      title: "Em breve",
      description: "MVP de uma plataforma que conecta profissionais locais a clientes. Foco em geolocalização e arquitetura escalável.",
      tech: ["React", "Tailwind", "Node.js", "Firebase"],
      github: "#",
      demo: "#",
      image: "https://via.placeholder.com/600x400/1e293b/fff?text=Memory+Game" 
    },
    {
      id: 3,
      title: "Em breve",
      description: "Este site! Focado em performance, acessibilidade e princípios de Clean Code.",
      tech: ["React", "Framer Motion", "Lucide"],
      github: "#",
      demo: "#",
      image: "https://via.placeholder.com/600x400/1e293b/fff?text=Portfolio+Dev"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Tempo entre a animação de cada card
      },
    },
  };

  // Configuração da animação de cada card (Filho)
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-20 bg-slate-900 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Título com animação de entrada lateral */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-12"
        >
          <Code2 className="text-cyan-400" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold text-white">Projetos em Destaque</h2>
        </motion.div>

        {/* Grid Animada */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // Ativa quando 20% da seção estiver visível
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={itemVariants}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all group shadow-xl"
            >
              {/* Preview do Projeto */}
              <div className="relative h-58 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.github} className="p-2 bg-slate-800 rounded-full text-white hover:text-cyan-400 transition transform hover:scale-110">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.demo} className="p-2 bg-slate-800 rounded-full text-white hover:text-cyan-400 transition transform hover:scale-110">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-cyan-400/10 text-cyan-400 rounded-md border border-cyan-400/20">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a href={project.demo} className="text-white text-sm font-semibold flex items-center gap-2 hover:text-cyan-400 transition group-hover:translate-x-1 duration-300">
                    Explorar Projeto <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;