"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [activeProject, setActiveProject] = useState(2);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateCursorPosition);
    return () => window.removeEventListener("mousemove", updateCursorPosition);
  }, []);

  const projects = [
    { id: 1, num: "01", title: "RESIDENTIAL", img: "https://images.unsplash.com/photo-1600607687920-4e2a09c15468?q=80&w=2070&auto=format&fit=crop" },
    { id: 2, num: "02", title: "COMMERCIAL", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" },
    { id: 3, num: "03", title: "ALPHA", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2067&auto=format&fit=crop" },
    { id: 4, num: "04", title: "HOSPITALITY", img: "https://images.unsplash.com/photo-1542314831-c6a4d27d532b?q=80&w=2187&auto=format&fit=crop" },
    { id: 5, num: "05", title: "RETAIL", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" }
  ];

  return (
    <main className="relative bg-slate-950 overflow-hidden">
      {/* Custom Cursor */}
      <div 
        className="cursor-ring pointer-events-none fixed top-0 left-0 w-16 h-16 border-2 border-white/50 rounded-full z-50 mix-blend-difference backdrop-blur-[2px] transition-transform duration-75 ease-out flex items-center justify-center"
        style={{ transform: `translate(${cursorPos.x - 32}px, ${cursorPos.y - 32}px)` }}
      >
        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
      </div>

      {/* SECTION 1: HOME HEADER */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center px-4">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-40" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=2067&auto=format&fit=crop")' }}
        ></div>
        
        {/* Navigation */}
        <nav className="absolute top-0 w-full max-w-7xl mx-auto p-6 flex justify-between items-center z-20">
          <div className="font-display font-bold text-xl tracking-wider">EVASION ELEGANCE</div>
          <div className="hidden md:flex space-x-8 font-sans text-sm tracking-widest uppercase">
            <a href="#" className="hover:text-accent transition-colors">Home</a>
            <a href="#about" className="hover:text-accent transition-colors">About Me</a>
            <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>
        </nav>

        {/* Central Glass Panel */}
        <div className="glass relative z-10 w-full max-w-4xl p-12 md:p-20 rounded-2xl flex flex-col items-center text-center">
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            CREATE INTERIORS <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">THAT INSPIRE</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-slate-300 font-light max-w-2xl">
            create individual stories that we write between the walls
          </p>
        </div>
      </section>

      {/* SECTION 2: ABOUT */}
      <section id="about" className="relative min-h-screen w-full flex items-center justify-center py-20 px-6 bg-slate-900">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold">THE STUDIO</h2>
            <div className="w-16 h-1 bg-accent"></div>
            <p className="font-sans text-slate-400 text-lg leading-relaxed">
              Evasion Elegance is an award-winning interior design practice rooted in the principles of modern minimalism and emotional resonance. We believe that spaces should do more than just function; they should elevate the human experience.
            </p>
            <p className="font-sans text-slate-400 text-lg leading-relaxed">
              By combining raw, natural materials with sophisticated glassmorphism and light orchestration, we craft environments that are both striking and deeply personal.
            </p>
            <button className="px-8 py-4 bg-primary text-on-primary font-bold tracking-widest uppercase text-sm hover:bg-secondary transition-colors duration-300">
              Discover Our Process
            </button>
          </div>
          <div className="relative h-[600px] w-full dark-glass rounded-2xl overflow-hidden p-4">
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
              alt="Studio Interior"
              className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: PROJECTS (DIAGONAL ACCORDION) */}
      <section id="projects" className="relative h-screen w-full bg-slate-950 flex overflow-hidden">
        {/* Left Side Branding */}
        <div className="w-1/4 h-full bg-slate-900 flex flex-col justify-center px-12 z-10 shadow-2xl">
          <h2 className="font-display text-4xl font-bold tracking-widest mb-4 uppercase">
            Curated <br /> <span className="text-accent">Projects</span>
          </h2>
          <p className="font-sans text-slate-400 max-w-xs mb-12 text-sm leading-relaxed">
            A selection of our most profound interior transformations, balancing structural brutalism with delicate elegance.
          </p>
          <div className="flex gap-4">
            {/* Social Icons (Placeholders) */}
            <div className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">In</div>
            <div className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">Be</div>
          </div>
        </div>

        {/* Right Side Diagonal Slices */}
        <div className="w-[120%] -ml-[10%] h-full flex transform">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`diagonal-slice flex-1 ${activeProject === index ? 'active flex-[3_3_0%]' : ''}`}
              onMouseEnter={() => setActiveProject(index)}
            >
              <div 
                className="diagonal-content"
                style={{ backgroundImage: `url(${project.img})` }}
              ></div>
              {/* Overlay for inactive states */}
              <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${activeProject === index ? 'opacity-20' : 'opacity-70'}`}></div>
              
              {/* Text Content inside Slice */}
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 transform skewX(15deg) text-center whitespace-nowrap">
                <span className={`block font-display font-light text-6xl md:text-8xl mb-2 transition-colors duration-500 ${activeProject === index ? 'text-accent' : 'text-slate-500'}`}>
                  {project.num}
                </span>
                <span className="block font-sans font-bold tracking-[0.3em] text-white uppercase text-sm md:text-lg">
                  {project.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
