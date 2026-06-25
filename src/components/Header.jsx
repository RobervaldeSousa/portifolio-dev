import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'projects', 'skills', 'about'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home', id: 'home' },
    { name: 'Sobre', href: '#about', id: 'about' },
    { name: 'Projetos', href: '#projects', id: 'projects' },
    { name: 'Habilidades', href: '#skills', id: 'skills' }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        <div className="text-xl font-bold text-white tracking-tight cursor-pointer">
          DEV<span className="text-cyan-400">.Roberval Sousa</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`relative text-sm font-medium transition-colors duration-300 pb-1 group ${
                activeSection === link.id ? 'text-cyan-400' : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.name}
              
              <span 
                className={`absolute left-0 bottom-0 h-[2px] bg-cyan-400 transition-all duration-300 ease-out ${
                  activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          ))}
          
          <div className="flex items-center gap-4 ml-4    border-l border-slate-800 pl-6 text-slate-400">
            <a href={'https://github.com/RobervaldeSousa'} target="_blank" rel="noopener noreferrer" title='Github'>
              <FaGithub size={20} className="hover:text-white hover:scale-110 cursor-pointer transition-colors" />
            </a>
            <a href={'https://www.linkedin.com/in/    roberval-sousa-76819831a/'} target="_blank" rel="noopener noreferrer" title='LinkedIn'>
              <FaLinkedin size={20} className="hover:text-white hover:scale-110 cursor-pointer transition-colors" />
            </a>
          </div>
        </nav>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white z-[70] relative p-2      focus:outline-none"
          aria-label="Alternar menu"
        >
            <AnimatePresence mode="wait">
            <motion.div
              key={isOpen ? 'close' : 'open'}
              initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="flex items-center justify-center"
            >
              {isOpen ? (
                <X size={28} className="text-cyan-400" />
              ) : (
                <Menu size={28} />
              )}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ 
              type: 'spring', 
              damping: 25, 
              stiffness: 200, 
              mass: 0.8 
            }}
            className="fixed inset-0 w-screen h-screen bg-slate-950/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden z-50 shadow-2xl"
          >
      {navLinks.map((link, i) => (
        <motion.a
          key={link.id}
          href={link.href}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * i }}
          onClick={() => setIsOpen(false)}
          className={`text-3xl font-bold transition-colors ${
            activeSection === link.id ? 'text-cyan-400' : 'text-slate-200 hover:text-white'
          }`}
        >
          {link.name}
        </motion.a>
      ))}

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex gap-8 mt-8 border-t border-slate-800 pt-8"
      >
        <a href="https://github.com/RobervaldeSousa" target="_blank" rel="noreferrer">
          <FaGithub size={32} className="text-slate-400 hover:text-white transition-colors" />
        </a>
        <a href="https://www.linkedin.com/in/roberval-sousa-76819831a/" target="_blank" rel="noreferrer">
          <FaLinkedin size={32} className="text-slate-400 hover:text-white transition-colors" />
        </a>
      </motion.div>
      </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
