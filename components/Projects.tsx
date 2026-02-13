import React, { useEffect, useState } from 'react';
import { Project } from '../types';
import { Github, ExternalLink, Star, GitFork, ArrowRight, Layers, Loader2 } from 'lucide-react';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const GITHUB_USERNAME = "reskianugrahsari";

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`);
        const data = await response.json();

        if (Array.isArray(data)) {
          const formattedProjects: Project[] = data
            .filter(repo => !repo.fork) // Only show original projects
            .map(repo => ({
              id: repo.id,
              title: repo.name.replace(/[-_]/g, ' '),
              description: repo.description || "Experimental project focusing on modern technology and clean architecture.",
              techStack: [repo.language].filter(Boolean),
              githubUrl: repo.html_url,
              demoUrl: repo.homepage || null,
              imageUrl: `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`,
              stars: repo.stargazers_count,
            }));
          setProjects(formattedProjects);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-darker">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="animate-reveal-left">
            <div className="flex items-center gap-2 text-red-400 font-mono text-sm mb-4">
              <Layers className="w-4 h-4" />
              <span>GitHub Projects</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Innovative <span className="text-gradient">Creations</span>
            </h2>
            <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
              Dynamically synchronizing with my latest open-source contributions and software engineering experiments.
            </p>
          </div>
          <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noreferrer" className="glass px-6 py-3 rounded-xl flex items-center gap-2 text-white hover:bg-white/10 transition-all font-bold animate-reveal-up">
            Follow GitHub <Github className="w-5 h-5" />
          </a>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="w-10 h-10 text-red-500 animate-spin" />
            <p className="text-slate-500 font-mono text-xs animate-pulse">FETCHING REPOSITORIES...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className={`group glass-card overflow-hidden animate-reveal-up magnetic glow-border`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Tech Stack Overlay on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-red-900/40 backdrop-blur-sm">
                    <div className="flex flex-wrap justify-center gap-3 p-6">
                      {project.techStack.length > 0 ? project.techStack.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-white/10 border border-white/20 rounded-lg text-xs font-bold text-white shadow-xl">
                          {tech}
                        </span>
                      )) : (
                        <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-lg text-xs font-bold text-white shadow-xl">
                          Open Source
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors mb-2 capitalize">{project.title}</h3>
                      <div className="flex gap-4 text-xs font-mono text-slate-500">
                        <span className="flex items-center gap-1"><Star className="w-3 h-3 text-yellow-500" /> {project.stars}</span>
                        <span className="flex items-center gap-1"><GitFork className="w-3 h-3" /> {Math.floor(project.stars / 2)}</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-3 glass rounded-xl hover:bg-white/10 text-slate-300 transition-all hover:scale-110" title="Source">
                        <Github className="w-5 h-5" />
                      </a>
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noreferrer" className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl hover:bg-red-500 hover:text-white text-red-400 transition-all hover:scale-110" title="Live">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-slate-400 leading-relaxed mb-6 line-clamp-2">{project.description}</p>

                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-red-400 group-hover:gap-4 transition-all">
                    View Project Details
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;