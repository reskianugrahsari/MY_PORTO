import React from 'react';
import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#0a0101] border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-red-600/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">

          <div className="lg:col-span-5">
            <div className="mb-8">
              <h3 className="font-black text-3xl tracking-tight text-white mb-2">
                RESKI ANUGRAH SARI
              </h3>
              <p className="text-red-500 font-bold text-sm tracking-wider">Full-Stack Developer & Network Specialist</p>
            </div>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed max-w-md">
              Certified in network engineering (BNSP, MTCNA) and passionate about building modern web applications with cutting-edge technologies.
            </p>
            <div className="flex gap-5">
              <a href="https://github.com/reskianugrahsari" target="_blank" rel="noreferrer" className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-600 hover:scale-110 transition-all shadow-xl">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/reski-anugrah-sari-17ab5a382/" target="_blank" rel="noreferrer" className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-neutral-800 hover:scale-110 transition-all shadow-xl">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:reskianugrahsari@gmail.com" className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-neutral-800 hover:scale-110 transition-all shadow-xl">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <h3 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-8">Resources</h3>
            <ul className="space-y-4">
              {['About', 'Projects', 'Skills', 'Certifications', 'Training'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-red-500 transition-colors flex items-center gap-2 group">
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0" />
                  </a>
                </li>
              ))}
              <li>
                <a href="/CV.png" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-red-500 transition-colors flex items-center gap-2 group">
                  Resume
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0" />
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-8">Location</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-red-500 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">Email</p>
                  <p className="text-white font-bold text-sm">reskianugrahsari@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-red-500 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">Location</p>
                  <p className="text-white font-bold text-sm">Makassar, Sulawesi Selatan</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-[11px] font-mono tracking-widest uppercase">
            &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[11px] font-mono text-slate-600 uppercase tracking-widest">Designed with ❤️ Sari</span>
            <div className="h-4 w-[1px] bg-white/10"></div>
            <span className="text-[11px] font-mono text-slate-600 uppercase tracking-widest">Built with React + Vite</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
