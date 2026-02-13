import React, { useState } from 'react';
import { BookMarked, Calendar, CheckCircle, ExternalLink, GraduationCap, X, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

interface EnhancedTraining {
    id: number;
    title: string;
    issuer: string;
    date: string;
    credentialUrl: string;
    images: string[];
}

const trainings: EnhancedTraining[] = [
    {
        id: 1,
        title: "Mastering Generative Artificial Intelligence Thematic Academy",
        issuer: "BBPSDMP Makassar",
        date: "2024",
        credentialUrl: "/ai-front.png",
        images: ["/ai-front.png", "/ai-back.png"]
    },
    {
        id: 2,
        title: "Web Development",
        issuer: "Informatic Laboratorium / Academy",
        date: "2023",
        credentialUrl: "/train-1.jpg",
        images: ["/train-1.jpg"]
    },
    {
        id: 3,
        title: "MicroTik Networking And IP Mastery Lab",
        issuer: "Informatic Laboratorium / Academy",
        date: "2023",
        credentialUrl: "/train-2.jpg",
        images: ["/train-2.jpg"]
    },
    {
        id: 4,
        title: "Fundamental JavaScript And Programming",
        issuer: "Informatic Laboratorium / Academy",
        date: "2023",
        credentialUrl: "/train-3.jpg",
        images: ["/train-3.jpg"]
    },
    {
        id: 5,
        title: "Java Faundation",
        issuer: "Oracle Academy",
        date: "2022",
        credentialUrl: "/train-java.png",
        images: ["/train-java.png"]
    },
    {
        id: 6,
        title: "Cyber Security",
        issuer: "PT. Synnex Metrodata Indonesia",
        date: "2024",
        credentialUrl: "/train-cyber.png",
        images: ["/train-cyber.png"]
    },
    {
        id: 7,
        title: "Junior Network Administrator (JNA)",
        issuer: "BBPSDMP Makassar",
        date: "2024",
        credentialUrl: "/jna-front.png",
        images: ["/jna-front.png", "/jna-back.png"]
    }
];

const Training: React.FC = () => {
    const [selectedTrain, setSelectedTrain] = useState<EnhancedTraining | null>(null);
    const [currentImgIdx, setCurrentImgIdx] = useState(0);

    const openModal = (train: EnhancedTraining) => {
        setSelectedTrain(train);
        setCurrentImgIdx(0);
    };

    return (
        <section id="training" className="py-24 bg-[#0a0101] relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20 animate-reveal-up">
                    <div className="flex justify-center items-center gap-2 text-red-400 font-mono text-sm mb-4">
                        <GraduationCap className="w-5 h-5" />
                        <span>Learning Track</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">In-Depth <span className="text-gradient">Training</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Comprehensive learning experiences and bootcamps that have shaped my technical proficiency through intensive practice.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {trainings.map((train, idx) => (
                        <div
                            key={train.id}
                            className="glass-card group flex flex-col sm:flex-row items-start p-8 animate-reveal-up"
                            style={{ animationDelay: `${idx * 150}ms` }}
                        >
                            <div className="relative mb-6 sm:mb-0">
                                <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-rose-700 rounded-2xl flex items-center justify-center shadow-xl shadow-red-500/20 group-hover:rotate-12 transition-transform duration-500">
                                    <BookMarked className="w-8 h-8 text-white" />
                                </div>
                                <div className="absolute -bottom-2 -right-2 bg-darker rounded-full p-1 border border-white/10 text-red-400">
                                    <CheckCircle className="w-4 h-4 fill-red-400/10" />
                                </div>
                            </div>

                            <div className="sm:ml-8 flex-1 w-full">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-xl font-black text-white group-hover:text-red-400 transition-colors">{train.title}</h3>
                                        <p className="text-red-400 font-bold text-sm">{train.issuer}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => openModal(train)}
                                            className="p-2 glass rounded-lg text-slate-500 hover:text-white transition-all"
                                            title="View Details"
                                        >
                                            <Eye className="w-4 h-4" />
                                        </button>
                                        <a href={train.credentialUrl} target="_blank" rel="noreferrer" className="p-2 glass rounded-lg text-slate-500 hover:text-white transition-all">
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 text-xs text-slate-500 py-4 border-y border-white/5 my-4">
                                    <span className="flex items-center gap-2 font-mono">
                                        <Calendar className="w-4 h-4 text-red-500/50" /> {train.date}
                                    </span>
                                    <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded-md font-bold text-[10px] tracking-widest uppercase">
                                        COMPLETED
                                    </span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <p className="text-xs text-slate-600 group-hover:text-slate-400 transition-colors">
                                        ID: {Math.random().toString(36).substring(2, 9).toUpperCase()}
                                    </p>
                                    <button
                                        onClick={() => openModal(train)}
                                        className="text-[10px] font-black tracking-widest uppercase text-red-500 hover:text-red-400 transition-colors"
                                    >
                                        {train.images.length > 1 ? 'View Both Sides' : 'Show Preview'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Training Preview Modal */}
            {selectedTrain && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    <div
                        className="absolute inset-0 bg-black/90 backdrop-blur-md"
                        onClick={() => setSelectedTrain(null)}
                    ></div>
                    <div className="relative w-full max-w-4xl glass-card border-white/10 overflow-hidden animate-page-load">
                        <div className="flex items-center justify-between p-6 border-b border-white/5">
                            <div>
                                <h3 className="text-xl font-black text-white">{selectedTrain.title}</h3>
                                <p className="text-red-400 text-sm font-bold">{selectedTrain.issuer}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                {selectedTrain.images.length > 1 && (
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
                                    onClick={() => setSelectedTrain(null)}
                                    className="p-2 glass rounded-xl text-slate-400 hover:text-white transition-all"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                        <div className="p-4 bg-darker/50 flex justify-center items-center relative group/img">
                            {selectedTrain.images.length > 1 && (
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
                                src={selectedTrain.images[currentImgIdx]}
                                alt={`${selectedTrain.title} - Side ${currentImgIdx + 1}`}
                                className="max-w-full max-h-[60vh] rounded-lg shadow-2xl border border-white/5 transition-all duration-500"
                            />
                        </div>
                        <div className="p-6 border-t border-white/5 flex justify-between items-center">
                            <span className="text-[10px] font-mono text-slate-500">
                                {selectedTrain.images.length > 1 ? `Image ${currentImgIdx + 1} of 2` : 'Full Preview'}
                            </span>
                            <a
                                href={selectedTrain.credentialUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-premium py-3 px-6 text-sm flex items-center gap-2"
                            >
                                Verify Training <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Training;
