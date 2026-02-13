import React from 'react';
import { ArrowRight, Download, Sparkles, MousePointer2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 mesh-gradient">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-600/10 rounded-full blur-[100px] animate-pulse animation-delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Side: Content */}
        <div className="text-left animate-reveal-left">


          <div className="mb-4">
            <h2 className="text-rose-400 font-mono text-2xl animate-typing">{"Hello, I'm a Full-Stack Developer"}</h2>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
            Building <br />
            <span className="text-gradient drop-shadow-[0_0_20px_rgba(239,68,68,0.3)]">Web & Networks</span>
          </h1>

          <p className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed animate-reveal-up animation-delay-500">
            Certified Network Specialist & Web Developer crafting <span className="text-white font-bold">modern web applications</span> and designing <span className="text-white font-bold">robust network infrastructures</span>.
            Bridging the gap between seamless user experiences and secure, scalable connectivity.
          </p>

          <div className="flex flex-wrap gap-6 animate-reveal-up animation-delay-1000 mb-12">
            <a href="#projects" className="btn-premium group flex items-center gap-3 magnetic">
              Explore Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
            <a
              href="/CV.png"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 glass hover:bg-white/10 text-white font-bold rounded-xl transition-all flex items-center gap-3 border border-white/10 active:scale-95 magnetic"
            >
              <Download className="w-5 h-5" />
              Resume
            </a>
          </div>

          {/* Refined Tech Stack Marquee */}
          <div className="overflow-hidden w-full py-6 border-y border-white/5 bg-white/[0.01] backdrop-blur-md -ml-4 px-4 mask-fade-out">
            <div className="marquee-content gap-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              {['React', 'TypeScript', 'Node.js', 'MikroTik', 'Cisco', 'JavaScript', 'Tailwind', 'Network Security', 'BNSP Certified', 'MTCNA'].map(tech => (
                <span key={tech} className="text-white font-mono text-xs tracking-[0.3em] uppercase flex items-center gap-3">
                  <span className="w-1 h-1 bg-red-500 rounded-full shadow-[0_0_8px_#ef4444]"></span>
                  {tech}
                </span>
              ))}
              {/* Duplicate for infinite effect */}
              {['React', 'TypeScript', 'Node.js', 'MikroTik', 'Cisco', 'JavaScript', 'Tailwind', 'Network Security', 'BNSP Certified', 'MTCNA'].map(tech => (
                <span key={tech + '-dup'} className="text-white font-mono text-xs tracking-[0.3em] uppercase flex items-center gap-3">
                  <span className="w-1 h-1 bg-red-500 rounded-full shadow-[0_0_8px_#ef4444]"></span>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Visuals */}
        <div className="relative flex justify-center items-center group animate-reveal-left animation-delay-500">
          {/* Enhanced Background Glows */}
          <div className="absolute inset-0 bg-red-500/10 rounded-full blur-[80px] scale-150 group-hover:scale-[1.8] transition-transform duration-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-rose-500/5 rounded-full blur-[40px] animate-pulse"></div>

          <div className="relative w-56 h-56 md:w-[320px] md:h-[320px]">
            {/* Dynamic Orbiting Rings */}
            <div className="absolute inset-[-30px] border-[1px] border-white/5 rounded-full animate-spin-slow opacity-40"></div>
            <div className="absolute inset-[-60px] border-[1px] border-white/10 rounded-full animate-spin-slow-rev opacity-20"></div>

            {/* Rotating Gradient Border Container */}
            <div className="absolute inset-[-8px] rounded-[45px] overflow-hidden group-hover:inset-[-12px] transition-all duration-500">
              <div className="absolute inset-[-200%] bg-gradient-to-r from-red-600 via-rose-500 to-orange-500 animate-rotating-border opacity-50"></div>
            </div>

            {/* Main Photo Card */}
            <div className="relative w-full h-full rounded-[40px] overflow-hidden border-[1px] border-white/20 bg-darker p-[2px] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <div className="w-full h-full rounded-[38px] overflow-hidden relative">
                <img
                  src="/sari.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Subtle Shimmer/Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-red-900/40 via-transparent to-rose-400/20 opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Floating Interaction Badges */}
            <div className="absolute top-1/2 -left-12 -translate-y-1/2 glass-card py-3 px-3 animate-float animation-delay-1000 border-red-500/20">
              <Sparkles className="w-4 h-4 text-orange-400 animate-pulse" />
            </div>

            {/* Scroll Indicator */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 group-hover:opacity-80 transition-opacity">
              <div className="w-[1px] h-10 bg-gradient-to-b from-red-500 to-transparent"></div>
              <span className="text-[8px] font-mono tracking-[0.3em] uppercase">Explore</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
