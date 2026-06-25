import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDev } from 'react-icons/fa';
import { SquareArrowOutUpRight, MapPin } from 'lucide-react';

const About = () => {
  const [userData, setUserData] = useState(null);
  const username = "RobervaldeSousa";

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((err) => console.error("Erro ao buscar dados do GitHub:", err));
  }, []);

  if (!userData) return null;

return (
  <section id="about" className="py-20 bg-slate-950 px-6">
    <main className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center"
        >
          
          <div className="flex flex-col items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img 
                src={userData.avatar_url} 
                alt="Profile" 
                className="relative w-48 h-48 rounded-full border-2 border-slate-800 object-cover"
              />
            </div>
            
            <div className="mt-6 flex gap-4 text-slate-400">
              <div className="flex flex-col items-center">
                <span className="text-white font-bold">{userData.public_repos}</span>
                <span className="text-xs uppercase">Repos</span>
              </div>
              <div className="h-8 w-px bg-slate-800"></div>
              <div className="flex flex-col items-center">
                <span className="text-white font-bold">{userData.followers}</span>
                <span className="text-xs uppercase">Seguidores</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Sobre <span className="text-cyan-400">Mim</span>
            </h2>
            
            <p className="text-slate-400 leading-relaxed text-lg">
              Olá! Sou estudante de <strong>Engenharia de Software</strong>. 
              Meu foco principal é o ecossistema Front-end, onde utilizo tecnologias como 
              React e Tailwind para construir interfaces que não apenas funcionam, mas encantam.
            </p>

            <p className="text-slate-400 leading-relaxed">
              {userData.bio || "Desenvolvendo soluções escaláveis e estudando constantemente as melhores práticas de Clean Code e Qualidade de Software."}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="p-2 bg-slate-900 rounded-lg text-cyan-400">
                  <FaDev size={20} />
                </div>
                <span>Engenharia de Software</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="p-2 bg-slate-900 rounded-lg text-cyan-400">
                  <MapPin size={20} />
                </div>
                <span>{userData.location || "Brasil"}</span>
              </div>
            </div>

            <div className="pt-6">
              <a 
                href={userData.html_url} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition"
              >
                <SquareArrowOutUpRight size={20} />
                Ver perfil completo no GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </main>
    </section>
  );
};

export default About;