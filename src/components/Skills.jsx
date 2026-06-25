import React from 'react';
import { motion } from 'framer-motion';
import {  
  Layout,  
  Terminal,  
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-end Development",
      icon: <Layout className="text-cyan-400" size={24} />,
      skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3"]
    },
    {
      title: "Ferramentas",
      icon: <Terminal className="text-green-400" size={24} />,
      skills: ["Git & GitHub", "Vite"]
    }
  ];

  return (
    <section id="skills" className="py-20 mb-20 bg-slate-900 px-6">
      <main className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Minhas <span className="text-cyan-400">Habilidades</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Combinando bases sólidas de Engenharia de Software com as tecnologias mais modernas do mercado.
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02, 
                backgroundColor: "rgba(30, 41, 59, 0.8)",
                borderColor: "rgba(34, 211, 238, 0.4)"
              }}
              className="p-6 bg-slate-800/40 border border-slate-700 rounded-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-slate-900 rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-slate-900 text-slate-300 text-sm rounded-lg border border-slate-700 hover:text-cyan-400 hover:border-cyan-400/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </section>
      </main>
    </section>
  );
};

export default Skills;