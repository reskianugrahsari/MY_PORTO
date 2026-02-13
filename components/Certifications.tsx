import React, { useState } from 'react';
import { Award, Calendar, CheckCircle, ExternalLink, ShieldCheck, X, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

interface EnhancedCertification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  images: string[]; // Support Multiple images (Front/Back)
}

const certifications: EnhancedCertification[] = [
  {
    id: 1,
    title: "Sertifikasi Kompetensi BNSP - Network Specialist",
    issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
    date: "2024 - 2027",
    credentialUrl: "/Sertifikat_BNSP_Network.pdf",
    images: ["/bnsp-front.png", "/bnsp-back.png"]
  },
  {
    id: 2,
    title: "MikroTik Certified Network Associate (MTCNA)",
    issuer: "MikroTik",
    date: "2025 - 2028",
    credentialUrl: "/cert-mikrotik.png",
    images: ["/cert-mikrotik.png"]
  }
];

const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<EnhancedCertification | null>(null);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  const openModal = (cert: EnhancedCertification) => {
    setSelectedCert(cert);
    setCurrentImgIdx(0);
  };

  return (
    <section id="certifications" className="py-24 bg-darker relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-reveal-up">
          <div className="flex justify-center items-center gap-2 text-red-400 font-mono text-sm mb-4">
            <ShieldCheck className="w-5 h-5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Professional <span className="text-gradient">Certifications</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Officially recognized credentials documenting specialized knowledge and competitive industrial skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, idx) => (
            <div
              key={cert.id}
              className="glass-card group flex flex-col sm:flex-row items-start p-8 animate-reveal-up"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="relative mb-6 sm:mb-0">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-xl shadow-red-500/20 group-hover:rotate-12 transition-transform duration-500">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-darker rounded-full p-1 border border-white/10 text-green-400">
                  <CheckCircle className="w-4 h-4 fill-green-400/10" />
                </div>
              </div>

              <div className="sm:ml-8 flex-1 w-full">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-black text-white group-hover:text-red-400 transition-colors">{cert.title}</h3>
                    <p className="text-red-400 font-bold text-sm">{cert.issuer}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => openModal(cert)}
                      className="p-2 glass rounded-lg text-slate-500 hover:text-white transition-all"
                      title="View Certificate"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <a href={cert.credentialUrl} target="_blank" rel="noreferrer" className="p-2 glass rounded-lg text-slate-500 hover:text-white transition-all">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-xs text-slate-500 py-4 border-y border-white/5 my-4">
                  <span className="flex items-center gap-2 font-mono">
                    <Calendar className="w-4 h-4 text-red-500/50" /> {cert.date}
                  </span>
                  <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded-md font-bold text-[10px] tracking-widest uppercase">
                    ACTIVE
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-xs text-slate-600 group-hover:text-slate-400 transition-colors">
                    ID: {Math.random().toString(36).substring(2, 9).toUpperCase()}
                  </p>
                  <button
                    onClick={() => openModal(cert)}
                    className="text-[10px] font-black tracking-widest uppercase text-red-500 hover:text-red-400 transition-colors"
                  >
                    {cert.images.length > 1 ? 'View Both Sides' : 'Show Preview'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Preview Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          ></div>
          <div className="relative w-full max-w-4xl glass-card border-white/10 overflow-hidden animate-page-load">
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <div>
                <h3 className="text-xl font-black text-white">{selectedCert.title}</h3>
                <p className="text-red-400 text-sm font-bold">{selectedCert.issuer}</p>
              </div>
              <div className="flex items-center gap-4">
                {selectedCert.images.length > 1 && (
                  <div className="flex glass rounded-lg p-1">
                    <button
                      onClick={() => setCurrentImgIdx(0)}
                      className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${currentImgIdx === 0 ? 'bg-red-500 text-white' : 'text-slate-400 hover:text-white'}`}
                    >
                      FRONT
                    </button>
                    <button
                      onClick={() => setCurrentImgIdx(1)}
                      className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${currentImgIdx === 1 ? 'bg-red-500 text-white' : 'text-slate-400 hover:text-white'}`}
                    >
                      BACK
                    </button>
                  </div>
                )}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 glass rounded-xl text-slate-400 hover:text-white transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-4 bg-darker/50 flex justify-center items-center relative group/img">
              {selectedCert.images.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImgIdx(prev => prev === 0 ? 1 : 0)}
                    className="absolute left-4 z-10 p-2 glass rounded-full text-white opacity-0 group-hover/img:opacity-100 transition-opacity"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => setCurrentImgIdx(prev => prev === 0 ? 1 : 0)}
                    className="absolute right-4 z-10 p-2 glass rounded-full text-white opacity-0 group-hover/img:opacity-100 transition-opacity"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
              <img
                src={selectedCert.images[currentImgIdx]}
                alt={`${selectedCert.title} - ${currentImgIdx === 0 ? 'Front' : 'Back'}`}
                className="max-w-full max-h-[60vh] rounded-lg shadow-2xl border border-white/5 transition-all duration-500"
              />
            </div>

            <div className="p-6 border-t border-white/5 flex justify-between items-center">
              <span className="text-[10px] font-mono text-slate-500">
                {selectedCert.images.length > 1 ? `Image ${currentImgIdx + 1} of ${selectedCert.images.length}` : 'Full Preview'}
              </span>
              <a
                href={selectedCert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-premium py-3 px-6 text-sm flex items-center gap-2"
              >
                Verify Credential <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
