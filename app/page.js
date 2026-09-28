"use client";
import { useEffect, useState } from "react";
import { MeshGradient } from '@paper-design/shaders-react';

export default function Home() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [activeProject, setActiveProject] = useState(2);
  const [lang, setLang] = useState("fr");
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });

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
    { id: 1, num: "01", title: "RESIDENTIAL", img: "/evasion/project_1.png" },
    { id: 2, num: "02", title: "COMMERCIAL", img: "/evasion/project_2.png" },
    { id: 3, num: "03", title: "ALPHA", img: "/evasion/project_3.png" },
    { id: 4, num: "04", title: "HOSPITALITY", img: "/evasion/project_4.png" },
    { id: 5, num: "05", title: "RETAIL", img: "/evasion/project_5.png" }
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
        className="md:flex cursor-ring pointer-events-none fixed top-0 left-0 w-24 h-24 border border-white/20 rounded-full z-[100] bg-white/10 backdrop-blur-lg transition-transform duration-75 ease-out items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        style={{ transform: `translate(${cursorPos.x - 48}px, ${cursorPos.y - 48}px)` }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
          <path d="M7 17h10V7" />
          <path d="M17 17 7 7" />
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
            {t[lang].heroLine1} <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted">{t[lang].heroLine2}</span>
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
          <div className="flex-1 bg-[#4A4A4A] flex items-center justify-center text-[#EDEBDD] text-[10px] sm:text-xs md:text-sm tracking-widest font-bold cursor-pointer hover:bg-primary transition-colors text-center" style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, -5% 100%)' }}>
            PERSONAL PROFILE
          </div>
          <div className="flex-1 bg-[#2C2C2C] flex items-center justify-center text-[#EDEBDD] text-[10px] sm:text-xs md:text-sm tracking-widest font-bold cursor-pointer hover:bg-primary transition-colors text-center" style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)', marginLeft: '-2%' }}>
            LINKEDIN
          </div>
          <div className="flex-1 bg-[#1B1717] flex items-center justify-center text-[#EDEBDD] text-[10px] sm:text-xs md:text-sm tracking-widest font-bold cursor-pointer hover:bg-primary transition-colors text-center" style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)', marginLeft: '-2%' }}>
            CONTACT
          </div>
        </div>
      </section>

      {/* SECTION 3: PROJECTS (DIAGONAL ACCORDION) */}
      <section id="projects" className="relative h-screen w-full bg-background flex flex-col md:flex-row overflow-hidden">
        {/* Left Side Branding */}
        <div className="w-full md:w-1/4 h-auto md:h-full py-12 md:py-0 bg-card flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 md:px-12 z-10 shadow-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-widest mb-4 uppercase">
            {t[lang].curated} <br className="hidden md:block" /> <span className="text-accent">{t[lang].projects}</span>
          </h2>
          <p className="font-sans text-foreground/70 max-w-xs mb-8 md:mb-12 text-sm leading-relaxed">
            {t[lang].projDesc}
          </p>
          <div className="flex gap-4">
            {/* Social Icons (Placeholders) */}
            <div className="w-8 h-8 rounded-full border border-muted flex items-center justify-center hover:bg-foreground hover:text-background transition-colors cursor-pointer">In</div>
            <div className="w-8 h-8 rounded-full border border-muted flex items-center justify-center hover:bg-foreground hover:text-background transition-colors cursor-pointer">Be</div>
          </div>
        </div>

        {/* Right Side Diagonal Slices */}
        <div className="w-full md:w-[120%] md:-ml-[10%] h-[60vh] md:h-full flex flex-col md:flex-row transform-none">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`diagonal-slice flex-1 ${activeProject === index ? 'active flex-[3_3_0%]' : ''}`}
              onMouseEnter={() => setActiveProject(index)}
              onClick={() => setActiveProject(index)}
            >
              <div
                className="diagonal-content"
                style={{ backgroundImage: `url(${project.img})` }}
              ></div>
              {/* Overlay for inactive states */}
              <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${activeProject === index ? 'opacity-20' : 'opacity-70'}`}></div>

              {/* Text Content inside Slice */}
              <div className="absolute bottom-8 md:bottom-20 left-1/2 -translate-x-1/2 transform-none md:transform md:skewX(15deg) text-center whitespace-nowrap">
                <span className={`block font-display font-light text-4xl md:text-6xl lg:text-8xl mb-1 md:mb-2 transition-colors duration-500 ${activeProject === index ? 'text-accent' : 'text-muted'}`}>
                  {project.num}
                </span>
                <span className="block font-sans font-bold tracking-[0.3em] text-white uppercase text-xs md:text-sm lg:text-lg">
                  {project.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: CONTACT */}
      <section id="contact" className="relative min-h-screen w-full flex items-center justify-center py-20 px-6 overflow-hidden">
        {/* Mesh Gradient Background matching the palette with grain */}
        <div className="absolute inset-0 z-0">
          <MeshGradient
            width={windowSize.width}
            height={windowSize.height}
            colors={["#710014", "#F2F1ED", "#938F8F", "#710014"]}
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
      <footer className="w-full bg-background py-8 border-t border-white/5 flex flex-row md:flex-row items-center justify-center gap-6 text-sm font-sans text-foreground/50 z-20 relative">
        <a href="#" className="hover:text-accent transition-colors">{t[lang].footerLinks.cgv}</a>
        <span className="hidden md:inline text-foreground/20">•</span>
        <a href="#" className="hover:text-accent transition-colors">{t[lang].footerLinks.privacy}</a>
        <span className="hidden md:inline text-foreground/20">•</span>
        <a href="#" className="hover:text-accent transition-colors">{t[lang].footerLinks.legal}</a>
      </footer>
    </main>
  );
}
