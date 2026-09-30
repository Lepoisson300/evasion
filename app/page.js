"use client";
import { useEffect, useState, useRef } from "react";
import { MeshGradient } from '@paper-design/shaders-react';

export default function Home() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [activeProject, setActiveProject] = useState(2);
  const [lang, setLang] = useState("fr");
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });
  const [selectedProject, setSelectedProject] = useState(null);
  const carouselRef = useRef(null);

  // Scroll carousel to active item when it changes
  useEffect(() => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const activeCard = container.children[activeProject];
      if (activeCard) {
        const containerRect = container.getBoundingClientRect();
        const cardRect = activeCard.getBoundingClientRect();

        const cardCenter = cardRect.left + (cardRect.width / 2);
        const containerCenter = containerRect.left + (containerRect.width / 2);

        container.scrollTo({
          left: container.scrollLeft + (cardCenter - containerCenter),
          behavior: 'smooth'
        });
      }
    }
  }, [activeProject]);

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const updateCursorPosition = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("mousemove", updateCursorPosition);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const projects = [
    { id: 1, num: "01", title: "RESIDENTIAL", img: "/evasion/project_1.png", descEn: "A profound exploration of structural brutalism and delicate elegance in a modern living space.", descFr: "Une exploration profonde du brutalisme structurel et de l'élégance délicate dans un espace de vie moderne." },
    { id: 2, num: "02", title: "COMMERCIAL", img: "/evasion/project_2.png", descEn: "Redefining workspace aesthetics to foster creativity and emotional resonance.", descFr: "Redéfinir l'esthétique de l'espace de travail pour favoriser la créativité et la résonance émotionnelle." },
    { id: 3, num: "03", title: "ALPHA", img: "/evasion/project_3.png", descEn: "Our signature concept, blending raw natural materials with advanced glassmorphism.", descFr: "Notre concept signature, mêlant matériaux naturels bruts et glassmorphisme avancé." },
    { id: 4, num: "04", title: "HOSPITALITY", img: "/evasion/project_4.png", descEn: "Elevating the human experience in hotels and resorts through careful light orchestration.", descFr: "Élever l'expérience humaine dans les hôtels et les complexes hôteliers grâce à une orchestration minutieuse de la lumière." },
    { id: 5, num: "05", title: "RETAIL", img: "/evasion/project_5.png", descEn: "Striking retail environments that tell a story and captivate the consumer.", descFr: "Des environnements de vente au détail saisissants qui racontent une histoire et captivent le consommateur." }
  ];

  const t = {
    en: {
      home: "Home",
      about: "About Me",
      projects: "Projects",
      contact: "Contact",
      heroLine1: "CREATE INTERIORS",
      heroLine2: "THAT INSPIRE",
      heroSub: "create individual stories that we write between the walls",
      studio: "THE STUDIO",
      studioP1: "Evasion Design is an award-winning interior design practice rooted in the principles of modern minimalism and emotional resonance. We believe that spaces should do more than just function; they should elevate the human experience.",
      studioP2: "By combining raw, natural materials with sophisticated glassmorphism and light orchestration, we craft environments that are both striking and deeply personal.",
      discover: "Discover Our Process",
      curated: "Curated",
      projDesc: "A selection of our most profound interior transformations, balancing structural brutalism with delicate elegance.",
      getInTouch: "GET IN TOUCH",
      contactSub: "Ready to transform your space into a story? Reach out to schedule a consultation with our design team.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      footerLinks: { cgv: "Terms of Sale", privacy: "Privacy Policy", legal: "Legal Notice" }
    },
    fr: {
      home: "Accueil",
      about: "À Propos",
      projects: "Projets",
      contact: "Contact",
      heroLine1: "CRÉEZ DES INTÉRIEURS",
      heroLine2: "QUI INSPIRENT",
      heroSub: "créez des histoires individuelles que nous écrivons entre les murs",
      studio: "LE STUDIO",
      studioP1: "Evasion Design est un cabinet d'architecture d'intérieur primé, ancré dans les principes du minimalisme moderne et de la résonance émotionnelle. Nous pensons que les espaces doivent faire plus que simplement fonctionner ; ils doivent élever l'expérience humaine.",
      studioP2: "En combinant des matériaux bruts et naturels avec un glassmorphisme sophistiqué et une orchestration de la lumière, nous créons des environnements à la fois saisissants et profondément personnels.",
      discover: "Découvrez Notre Processus",
      curated: "Projets",
      projDesc: "Une sélection de nos transformations intérieures les plus profondes, équilibrant le brutalisme structurel avec une délicate élégance.",
      getInTouch: "CONTACTEZ-NOUS",
      contactSub: "Prêt à transformer votre espace en histoire ? Contactez-nous pour planifier une consultation avec notre équipe.",
      name: "Nom",
      email: "Email",
      message: "Message",
      send: "Envoyer",
      footerLinks: { cgv: "CGV", privacy: "Politique de confidentialité", legal: "Mentions légales" }
    }
  };

  return (
    <main className="relative bg-background overflow-hidden">
      {/* Custom Cursor */}
      <div
        className="hidden md:flex pointer-events-none fixed z-9999 top-0 left-0 w-14 h-14 border border-black/20 rounded-full z-[100] bg-white/10 backdrop-blur-lg items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        style={{ transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0) translate(-50%, -50%)` }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </div>

      {/* Language Switcher */}
      <div className="fixed top-6 right-6 z-50">
        <div className="glass rounded-full flex items-center p-1 border border-white/20 shadow-lg">
          <button
            onClick={() => setLang('en')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase font-sans transition-all ${lang === 'en' ? 'bg-primary text-on-primary' : 'text-foreground/70 hover:text-foreground'}`}
          >
            EN
          </button>
          <button
            onClick={() => setLang('fr')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase font-sans transition-all ${lang === 'fr' ? 'bg-primary text-on-primary' : 'text-foreground/70 hover:text-foreground'}`}
          >
            FR
          </button>
        </div>
      </div>

      {/* SECTION 1: HOME HEADER */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center px-4">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-40"
          style={{ backgroundImage: 'url("/evasion/hero_bg.png")' }}
        ></div>

        {/* Navigation */}
        <nav className="absolute top-0 w-full max-w-7xl mx-auto p-6 flex justify-between items-center z-20">
          <div className="font-display font-bold text-xl tracking-wider uppercase">EVASION DESIGN</div>
          <div className="hidden md:flex space-x-8 font-sans text-sm tracking-widest uppercase">
            <a href="#" className="hover:text-accent transition-colors">{t[lang].home}</a>
            <a href="#about" className="hover:text-accent transition-colors">{t[lang].about}</a>
            <a href="#projects" className="hover:text-accent transition-colors">{t[lang].projects}</a>
            <a href="#contact" className="hover:text-accent transition-colors">{t[lang].contact}</a>
          </div>
        </nav>

        {/* Central Glass Panel */}
        <div className="bg-white/1 backdrop-blur-sm relative z-10 w-full max-w-7xl p-10 py-16 md:p-32 lg:p-52 rounded-2xl flex flex-col items-center text-center">
          <h1 className="font-display text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
            {t[lang].heroLine1} <br /> <span className="bg-clip-text  to-muted">{t[lang].heroLine2}</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-foreground/80 font-light max-w-2xl">
            {t[lang].heroSub}
          </p>
        </div>
      </section>

      {/* SECTION 2: ABOUT */}
      <section id="about" className="relative min-h-screen w-full bg-[#EDEBDD] text-[#1B1717] overflow-hidden flex flex-col justify-center">
        {/* Background diagonal split */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-[15%] w-[50%] h-full bg-[#e5e3d5]" style={{ clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0% 100%)' }}></div>
        </div>

        {/* Top Left Title */}
        <div className="absolute top-16 md:top-24 left-8 md:left-16 z-20">
          <h2 className="text-4xl md:text-7xl font-bold md:leading-tight ">
            Maud<br />Terrade Martinez Cruz
          </h2>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center pt-32 md:pt-48 pb-32 md:py-0">

          {/* Left Side: Photo */}
          <div className="w-full md:w-1/2 h-[40vh] md:h-[80vh] relative flex items-center justify-center px-4 md:px-0">
            <div className="w-full h-full max-w-md bg-black" style={{ clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0% 100%)' }}>
              <img
                src="/evasion/maud_profile.png"
                alt="Maud Terrade Martinez Cruz"
                className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </div>

          {/* Right Side: Text */}
          <div className="w-full md:w-1/2 px-8 md:px-16 mt-12 md:mt-0">
            <h3 className="font-display text-2xl font-bold mb-8">
              {lang === 'fr' ? 'Directrice Artistique' : 'Art Director'}
            </h3>
            <p className="font-sans text-[#1B1717]/80 text-lg leading-relaxed mb-6 font-light">
              {t[lang].studioP1}
            </p>
            <p className="font-sans text-[#1B1717]/80 text-lg leading-relaxed font-light">
              {t[lang].studioP2}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 w-11/12 md:w-3/4 max-w-4xl flex h-12 md:h-14 z-20">
          <div className="flex-1 bg-[#EFE3CE] flex items-center justify-center text-[#3f3f3f] text-[10px] sm:text-xs md:text-sm tracking-widest font-bold cursor-pointer hover:text-white hover:bg-primary transition-colors text-center" style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, -5% 100%)' }}>
            PERSONAL PROFILE
          </div>
          <div className="flex-1 bg-[#E0D1B8] flex items-center justify-center text-[#3f3f3f] text-[10px] sm:text-xs md:text-sm tracking-widest font-bold cursor-pointer hover:text-white hover:bg-primary transition-colors text-center" style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)', marginLeft: '-2%' }}>
            LINKEDIN
          </div>
          <div className="flex-1 bg-[#C8B39A] flex items-center justify-center text-[#3f3f3f] text-[10px] sm:text-xs md:text-sm tracking-widest font-bold cursor-pointer hover:text-white hover:bg-primary transition-colors text-center" style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)', marginLeft: '-2%' }}>
            CONTACT
          </div>
        </div>
      </section>

      {/* SECTION 3: PROJECTS (CAROUSEL) */}
      <section id="projects" className="relative h-screen w-full flex items-center overflow-hidden bg-black">
        {/* Full-screen Background Images for smooth crossfade */}
        {projects.map((project, index) => (
          <div
            key={`bg-${project.id}`}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${activeProject === index ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover opacity-60 md:opacity-100"
            />
          </div>
        ))}
        {/* Dark Overlay for readability - gradient on the left, darker at bottom */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-black/95 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>

        <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col md:flex-row items-center h-full px-6 md:px-12 xl:px-24 pt-24 md:pt-0">

          {/* Left Side: Active Project Details */}
          <div className="w-full md:w-5/12 text-left text-white flex flex-col justify-center mb-12 md:mb-0">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[2px] bg-white"></div>
              <span className="font-sans text-white/90 text-sm md:text-base tracking-widest uppercase font-semibold">
                {t[lang].curated} - {projects[activeProject].title}
              </span>
            </div>

            <h2 className="font-display text-5xl md:text-7xl lg:text-[90px] font-bold uppercase tracking-tight mb-6 leading-[0.9]">
              {projects[activeProject].title}
            </h2>

            <p className="font-sans text-white/70 text-sm md:text-base font-light leading-relaxed max-w-md mb-10">
              {lang === 'fr' ? projects[activeProject].descFr : projects[activeProject].descEn}
            </p>

            {/* Discover Button */}
            <div className="flex items-center gap-0 group cursor-pointer w-fit" onClick={() => setSelectedProject(projects[activeProject])}>
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110 shadow-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
              <div className="border border-white/30 rounded-r-full pl-6 pr-8 py-3 -ml-4 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/50 group-hover:pl-8">
                <span className="font-sans text-xs uppercase tracking-widest font-bold text-white">
                  {lang === 'fr' ? 'Découvrir le lieu' : 'Discover Location'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Cards Carousel */}
          <div
            ref={carouselRef}
            className="w-full h-full md:w-7/12 flex items-center gap-6 md:gap-10 overflow-x-auto pb-8 md:pb-0 pl-4 md:pl-12 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`relative flex-shrink-0 w-64 md:w-80 h-96 md:h-[450px] rounded-3xl overflow-hidden cursor-pointer snap-center transition-all duration-500 ease-out group ${activeProject === index ? 'opacity-100 ring-4 ring-accent ring-offset-4 ring-offset-black/50 -translate-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10' : 'opacity-40 hover:opacity-70 hover:-translate-y-2 border border-white/20'}`}
                onClick={() => setActiveProject(index)}
              >
                <img src={project.img} alt={project.title} className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${activeProject === index ? 'grayscale-0' : 'grayscale-[50%]'}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity"></div>

                {activeProject === index && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-accent/90 backdrop-blur-md flex items-center justify-center border border-white/30 animate-in fade-in zoom-in duration-300 shadow-xl">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--background)" stroke="var(--background)" strokeWidth="2"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                )}

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-6 h-[2px] ${activeProject === index ? 'bg-accent' : 'bg-white/70'}`}></div>
                    <span className={`block text-xs font-bold tracking-widest uppercase ${activeProject === index ? 'text-accent' : 'text-white/90'}`}>{project.num}</span>
                  </div>
                  <h3 className={`font-display text-xl md:text-2xl font-bold uppercase tracking-widest leading-tight ${activeProject === index ? 'text-white' : 'text-white/70'}`}>{project.title}</h3>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Navigation & Progress */}
        <div className="absolute bottom-8 md:bottom-12 w-full max-w-[1600px] left-1/2 -translate-x-1/2 px-6 md:px-12 xl:px-24 z-20 flex items-center justify-between pointer-events-none">

          {/* Left: Navigation Arrows */}
          <div className="flex gap-4 md:gap-6 pointer-events-auto w-1/3">
            <button
              className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm shadow-lg"
              onClick={() => setActiveProject(prev => (prev > 0 ? prev - 1 : projects.length - 1))}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button
              className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm shadow-lg"
              onClick={() => setActiveProject(prev => (prev < projects.length - 1 ? prev + 1 : 0))}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>

          {/* Center: Progress Bar */}
          <div className="flex-1 flex justify-center pointer-events-auto">
            <div className="hidden md:flex w-64 lg:w-96 h-[2px] bg-white/20 relative rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-accent transition-all duration-500 ease-out"
                style={{ width: `${((activeProject + 1) / projects.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Right: Project Number */}
          <div className="font-display text-5xl md:text-7xl lg:text-[100px] text-white font-light pointer-events-auto w-1/3 text-right">
            {projects[activeProject].num}
          </div>

        </div>
      </section>

      {/* SECTION 4: CONTACT */}
      <section id="contact" className="relative min-h-screen w-full flex items-center justify-center py-20 px-6 overflow-hidden">
        {/* Mesh Gradient Background matching the palette with grain */}
        <div className="absolute inset-0 z-0">
          <MeshGradient
            width={windowSize.width}
            height={windowSize.height}
            colors={["#FAF7F2", "#EFE3CE", "#C8B39A", "#9A8472"]}
            distortion={0.25}
            speed={0.45}
          />
          {/* Grain Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.15] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}
          ></div>
        </div>

        {/* Contact Form Container (Glassmorphism) */}
        <div className="dark-glass relative z-10 w-full max-w-5xl p-10 md:p-16 rounded-3xl border border-white/10 flex flex-col md:flex-row gap-16 shadow-2xl">
          {/* Info Side */}
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">{t[lang].getInTouch}</h2>
              <div className="w-16 h-1 bg-accent mb-6"></div>
              <p className="font-sans text-foreground/80 text-lg leading-relaxed mb-8 font-light">
                {t[lang].contactSub}
              </p>
            </div>
            <div className="space-y-6 font-sans text-foreground/70 tracking-wide">
              <p className="flex items-center gap-4 hover:text-accent transition-colors cursor-pointer">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                +1 (555) 123-4567
              </p>
              <p className="flex items-center gap-4 hover:text-accent transition-colors cursor-pointer">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                hello@evasiondesign.com
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full md:w-1/2">
            <form className="space-y-6 flex flex-col" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col">
                <label className="font-sans text-sm font-bold tracking-widest uppercase mb-3 text-foreground/90">{t[lang].name}</label>
                <input type="text" className="bg-white/5 border border-white/10 rounded-xl p-4 text-foreground focus:outline-none focus:border-accent focus:bg-white/10 transition-all shadow-inner" placeholder="John Doe" />
              </div>
              <div className="flex flex-col">
                <label className="font-sans text-sm font-bold tracking-widest uppercase mb-3 text-foreground/90">{t[lang].email}</label>
                <input type="email" className="bg-white/5 border border-white/10 rounded-xl p-4 text-foreground focus:outline-none focus:border-accent focus:bg-white/10 transition-all shadow-inner" placeholder="john@example.com" />
              </div>
              <div className="flex flex-col">
                <label className="font-sans text-sm font-bold tracking-widest uppercase mb-3 text-foreground/90">{t[lang].message}</label>
                <textarea rows="4" className="bg-white/5 border border-white/10 rounded-xl p-4 text-foreground focus:outline-none focus:border-accent focus:bg-white/10 transition-all resize-none shadow-inner" placeholder="..."></textarea>
              </div>
              <button className="px-8 py-4 bg-primary text-on-primary font-bold tracking-widest uppercase text-sm hover:bg-secondary hover:shadow-[0_0_15px_rgba(129,1,0,0.5)] transition-all duration-300 rounded-xl w-full mt-4">
                {t[lang].send}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION 5: FOOTER */}
      <footer className="w-full py-8 border-t border-white/5 flex flex-row md:flex-row items-center justify-center gap-6 text-sm font-sans text-foreground/50 z-20 relative">
        <a href="#" className="hover:text-accent transition-colors">{t[lang].footerLinks.cgv}</a>
        <span className="hidden md:inline text-foreground/20">•</span>
        <a href="#" className="hover:text-accent transition-colors">{t[lang].footerLinks.privacy}</a>
        <span className="hidden md:inline text-foreground/20">•</span>
        <a href="#" className="hover:text-accent transition-colors">{t[lang].footerLinks.legal}</a>
      </footer>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-[50] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300" onClick={() => setSelectedProject(null)}>
          <div
            className="relative w-full max-w-5xl bg-card border border-white/10 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-[0_0_50px_rgba(0,0,0,0.8)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-primary text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            {/* Modal Image */}
            <div className="w-full md:w-1/2 h-64 md:h-[60vh] bg-black relative">
              <img src={selectedProject.img} alt={selectedProject.title} className="w-full h-full object-cover" />
            </div>

            {/* Modal Content */}
            <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-card relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
              <span className="font-display text-accent text-xl md:text-2xl font-bold mb-2 tracking-widest">{selectedProject.num}</span>
              <h3 className="font-sans text-3xl md:text-5xl font-bold text-foreground tracking-widest uppercase mb-6">{selectedProject.title}</h3>
              <div className="w-16 h-1 bg-accent mb-8"></div>
              <p className="font-sans text-foreground/80 text-lg md:text-xl leading-relaxed font-light">
                {lang === 'fr' ? selectedProject.descFr : selectedProject.descEn}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
