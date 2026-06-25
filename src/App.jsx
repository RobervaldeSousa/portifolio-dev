import React from 'react'
import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <h1></h1>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Footer />
      </main>
    </div>
  );
}

export default App;
