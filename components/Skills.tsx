import React from 'react';
import { Skill } from '../types';
import { Cpu, Globe, Database, Layout, PenTool, Server, BookOpen } from 'lucide-react';

const skillsData: Skill[] = [
  { name: 'React.js', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
  { name: 'Next.js', level: 85, category: 'Frontend' },
  { name: 'Node.js', level: 80, category: 'Backend' },
  { name: 'Python', level: 85, category: 'Backend' },
  { name: 'PostgreSQL', level: 75, category: 'Backend' },
  { name: 'Docker', level: 70, category: 'DevOps' },
  { name: 'Git/GitHub', level: 90, category: 'DevOps' },
  { name: 'Figma', level: 60, category: 'Tools' },
  { name: 'Machine Learning', level: 65, category: 'AI/Data' },
  { name: 'TensorFlow', level: 60, category: 'AI/Data' },
];

const categories = Array.from(new Set(skillsData.map(s => s.category))) as Skill['category'][];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative bg-[#0a0101]">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-reveal-up">
          <div className="flex justify-center items-center gap-2 text-red-400 font-mono text-sm mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Knowledge Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Technical <span className="text-gradient">Versatility</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A balanced mix of architectural planning, creative problem solving, and modern development standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, catIdx) => (
            <div
              key={category}
              className="glass-card p-8 group animate-reveal-up"
              style={{ animationDelay: `${catIdx * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-red-400 group-hover:bg-red-500 group-hover:text-white transition-all duration-500 group-hover:rotate-6 shadow-xl">
                  {category === 'Frontend' && <Layout className="w-6 h-6" />}
                  {category === 'Backend' && <Server className="w-6 h-6" />}
                  {category === 'DevOps' && <Cpu className="w-6 h-6" />}
                  {category === 'Tools' && <PenTool className="w-6 h-6" />}
                  {category === 'AI/Data' && <Database className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className="text-xl font-black text-white leading-tight">{category}</h3>
                  <span className="text-[10px] font-mono text-slate-500 tracking-[0.2em] uppercase">Specialization</span>
                </div>
              </div>

              <div className="space-y-6">
                {skillsData.filter(s => s.category === category).map((skill) => (
                  <div key={skill.name} className="relative group/skill">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-sm font-bold text-slate-300 group-hover/skill:text-white transition-colors">{skill.name}</span>
                      <span className="text-[10px] font-mono text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full h-[6px] bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-red-500 to-rose-600 rounded-full relative"
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-[mesh-bg_2s_linear_infinite]"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
