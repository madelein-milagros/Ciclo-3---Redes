
import React, { useState, useMemo, useEffect } from 'react';
import { COURSES, FINAL_MISSION, COLORS } from './constants';
import CourseNode from './components/CourseNode';

const App: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(COURSES[0].id);
  const [showFinalModal, setShowFinalModal] = useState<boolean>(false);

  const activeCourse = useMemo(() => 
    COURSES.find(c => c.id === activeId) || COURSES[0]
  , [activeId]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowFinalModal(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const shareOnLinkedIn = () => {
    const careerTag = "Administración de Redes y Comunicaciones";
    const text = encodeURIComponent(`¡Módulo "${activeCourse.title}" completado en @Tecsup! 🚀 #${careerTag.replace(/\s+/g, '')} #Redes #Ciclo3`);
    const url = `https://www.linkedin.com/feed/?shareActive=true&text=${text}`;
    window.open(url, '_blank');
  };

  const roadNodes = [
    { x: 12, y: 30 }, 
    { x: 32, y: 70 }, 
    { x: 52, y: 30 }, 
    { x: 72, y: 70 }, 
    { x: 88, y: 45 }  
  ];

  const roadPath = "M 0 50 C 10 50, 10 20, 20 20 S 30 80, 40 80 S 50 20, 60 20 S 70 80, 80 80 S 90 45, 100 45";

  return (
    <div className="h-screen bg-[#fafafa] overflow-hidden flex flex-col font-sans select-none text-gray-900">
      {/* Header Compacto */}
      <header className="h-12 md:h-14 shrink-0 px-4 md:px-10 flex justify-between items-center bg-white border-b border-gray-100 z-40">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#830c24] rounded-md flex items-center justify-center shadow-sm">
            <span className="text-white font-black text-[10px]">T</span>
          </div>
          <h1 className="text-[10px] md:text-xs font-black tracking-widest uppercase text-gray-400">
            Roadmap <span className="text-[#a81d3a]">Redes</span> <span className="text-gray-800">III</span>
          </h1>
        </div>
        <div className="flex items-center gap-1.5">
           <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
        </div>
      </header>

      {/* Área del Mapa Interactivo */}
      <main className="flex-grow relative flex items-center justify-center p-2 overflow-hidden bg-white/30">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>

        <div className="relative w-full max-w-5xl aspect-[4/3] md:aspect-video max-h-full">
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d={roadPath} fill="none" stroke="#e5e7eb" strokeWidth="10" strokeLinecap="round" />
            <path d={roadPath} fill="none" stroke="#1f2937" strokeWidth="8" strokeLinecap="round" />
            <path d={roadPath} fill="none" stroke="#fbbf24" strokeWidth="0.5" strokeDasharray="3 4" strokeLinecap="round" />
          </svg>

          {COURSES.map((course, index) => (
            <CourseNode 
              key={course.id}
              course={course}
              isActive={activeId === course.id}
              onSelect={() => setActiveId(course.id)}
              position={{ x: roadNodes[index].x, y: roadNodes[index].y }}
            />
          ))}

          <div 
            className="absolute z-30 cursor-pointer group"
            style={{ left: '96%', top: '45%', transform: 'translate(-50%, -50%)' }}
            onClick={() => setShowFinalModal(true)}
          >
            <div className="w-10 h-10 md:w-14 md:h-14 bg-white border-4 border-gray-900 rounded-xl flex items-center justify-center shadow-lg transform -rotate-6 transition-transform hover:rotate-0 hover:scale-110">
              <span className="text-xl md:text-3xl">🏁</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Optimizada */}
      <footer className="bg-white border-t border-gray-100 shadow-[0_-15px_40px_rgba(0,0,0,0.08)] z-50 shrink-0 pb-safe">
        <div className="max-w-4xl mx-auto p-4 md:p-6 flex flex-col gap-3">
          
          <div className="flex gap-4 items-center">
            <div className="shrink-0 w-10 h-10 md:w-14 md:h-14 bg-[#830c24] text-white rounded-xl flex items-center justify-center font-black text-lg md:text-2xl shadow-sm">
              {activeCourse.id}
            </div>
            <div className="min-w-0 flex-grow">
              <h2 className="text-sm md:text-xl font-black text-gray-900 leading-none truncate uppercase tracking-tight">{activeCourse.title}</h2>
              <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 truncate mt-1">{activeCourse.officialName}</p>
            </div>
          </div>

          <p className="text-gray-500 text-[11px] md:text-sm font-medium leading-tight md:leading-normal line-clamp-2">
            {activeCourse.description}
          </p>

          {/* Botonera: Con max-w para que en laptop no se estire excesivamente */}
          <div className="flex flex-col sm:flex-row gap-2 md:gap-4 mt-1 items-stretch sm:items-center max-w-full">
            <div className="flex gap-2 w-full sm:w-auto">
              <a 
                href="https://youtu.be/dQw4w9WgXcQ?si=YHkLxdTjHQ-IzVrd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:w-32 py-3 bg-white text-gray-700 rounded-xl font-bold text-[10px] uppercase tracking-widest border border-gray-200 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors shadow-sm"
              >
                <span className="text-sm">📺</span> <span className="hidden sm:inline">Tutorial</span>
              </a>
              <button 
                onClick={shareOnLinkedIn}
                className="flex-1 sm:w-32 py-3 bg-[#f0f9ff] text-[#0077b5] rounded-xl font-bold text-[10px] uppercase tracking-widest border border-[#e0f2fe] flex items-center justify-center gap-2 hover:bg-[#e0f2fe] transition-colors shadow-sm"
              >
                <span className="text-sm">🔗</span> <span className="hidden sm:inline">Share</span>
              </button>
            </div>
            <a 
              href={activeCourse.links[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:max-w-xs py-3 md:py-4 bg-gray-900 text-white rounded-xl font-black text-[10px] md:text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 hover:bg-black transition-all transform hover:-translate-y-1 active:scale-95"
            >
              Acceder al Curso <span className="text-xs md:text-sm">↗</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Modal Misión Final */}
      {showFinalModal && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
          <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-[4px]" onClick={() => setShowFinalModal(false)}></div>
          <div className="relative bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden animate-slide-up sm:m-4">
            <div className="bg-[#830c24] p-6 text-center text-white">
               <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
                  <span className="text-3xl">🏆</span>
               </div>
               <h3 className="text-lg md:text-xl font-black uppercase tracking-tight">{FINAL_MISSION.title}</h3>
            </div>
            <div className="p-6 md:p-8">
               <p className="text-gray-700 text-sm md:text-base font-bold text-center leading-relaxed mb-6 italic bg-gray-50 p-6 rounded-2xl border border-gray-100">
                 "{FINAL_MISSION.content}"
               </p>
               <button 
                onClick={() => setShowFinalModal(false)}
                className="w-full py-4 bg-gray-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg hover:bg-black transition-all"
               >
                 Aceptar Misión
               </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .animate-slide-up { animation: slide-up 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
        @keyframes slide-up { from { transform: translateY(100%); } to { transform: translateY(0); } }
        .pb-safe { padding-bottom: env(safe-area-inset-bottom, 1.2rem); }
        @media (max-width: 640px) {
          .h-screen { height: -webkit-fill-available; }
        }
      `}</style>
    </div>
  );
};

export default App;
