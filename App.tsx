
import React, { useState, useMemo, useEffect } from 'react';
import { COURSES, CICLO_CHECKPOINT, COLORS } from './constants';
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
    // Lógica para compartir en LinkedIn con formato solicitado
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
    <div className="h-screen bg-[#fcfcfc] overflow-hidden flex flex-col font-sans select-none text-gray-900">
      {/* Header Compacto */}
      <header className="h-12 md:h-16 shrink-0 px-4 md:px-10 flex justify-between items-center bg-white border-b border-gray-100 z-40">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 md:w-8 md:h-8 bg-[#830c24] rounded md:rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-white font-black text-[10px] md:text-sm">T</span>
          </div>
          <h1 className="text-[10px] md:text-sm font-black tracking-widest uppercase text-gray-400">
            Roadmap <span className="text-[#a81d3a]">Redes</span> <span className="text-gray-800">III</span>
          </h1>
        </div>
        <div className="flex items-center gap-1.5">
           <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
        </div>
      </header>

      {/* Área del Mapa */}
      <main className="flex-grow relative flex items-center justify-center p-2 overflow-hidden bg-white/50">
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
            <div className="w-10 h-10 md:w-16 md:h-16 bg-white border-4 border-gray-900 rounded-xl flex items-center justify-center shadow-lg transform -rotate-6 transition-transform hover:rotate-0 hover:scale-110">
              <span className="text-xl md:text-4xl">🏁</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Optimizada: Diseño que "sube" la información para que sea visible en móviles */}
      <footer className="bg-white border-t border-gray-100 shadow-[0_-15px_40px_rgba(0,0,0,0.08)] z-50 shrink-0 pb-safe">
        <div className="max-w-4xl mx-auto p-4 md:p-6 flex flex-col gap-3 md:gap-4">
          
          <div className="flex gap-3 items-center">
            <div className="shrink-0 w-10 h-10 md:w-16 md:h-16 bg-[#830c24] text-white rounded-xl flex items-center justify-center font-black text-lg md:text-3xl shadow-sm">
              {activeCourse.id}
            </div>
            <div className="min-w-0 flex-grow">
              <h2 className="text-sm md:text-2xl font-black text-gray-900 leading-none truncate uppercase tracking-tight">{activeCourse.title}</h2>
              <p className="text-[8px] md:text-xs font-bold uppercase tracking-widest text-gray-400 truncate mt-1">{activeCourse.officialName}</p>
            </div>
          </div>

          <p className="text-gray-500 text-[11px] md:text-base font-medium leading-tight md:leading-relaxed line-clamp-2 md:line-clamp-none">
            {activeCourse.description}
          </p>

          <div className="grid grid-cols-4 md:grid-cols-3 gap-2 md:gap-4 mt-1">
            <button 
              onClick={() => alert("Próximamente...")}
              className="col-span-1 py-3 md:py-4 bg-gray-50 text-gray-700 rounded-xl font-bold text-[10px] md:text-xs uppercase tracking-widest border border-gray-200 flex items-center justify-center transition-all hover:bg-gray-100"
            >
              <span className="text-sm md:text-lg">📺</span>
            </button>
            <button 
              onClick={shareOnLinkedIn}
              className="col-span-1 py-3 md:py-4 bg-[#f0f9ff] text-[#0077b5] rounded-xl font-bold text-[10px] md:text-xs uppercase tracking-widest border border-[#e0f2fe] flex items-center justify-center transition-all hover:bg-[#e0f2fe]"
            >
              <span className="text-sm md:text-lg">🔗</span>
            </button>
            <a 
              href={activeCourse.links[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-2 md:col-span-1 py-3 md:py-4 bg-gray-900 text-white rounded-xl font-black text-[10px] md:text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-2 hover:bg-black transition-all transform hover:-translate-y-1 active:scale-95"
            >
              Acceder al Curso <span className="text-xs md:text-sm">↗</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Modal Desafío Final */}
      {showFinalModal && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
          <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-[4px]" onClick={() => setShowFinalModal(false)}></div>
          <div className="relative bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden animate-slide-up sm:m-4">
            <div className="bg-[#830c24] p-5 md:p-8 text-center text-white">
               <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
                  <span className="text-4xl">🏆</span>
               </div>
               <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight">{CICLO_CHECKPOINT.title}</h3>
            </div>
            <div className="p-6 md:p-10">
               <p className="text-gray-700 text-sm md:text-lg font-bold text-center leading-relaxed mb-8 italic bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-inner">
                 "{CICLO_CHECKPOINT.content}"
               </p>
               <button 
                onClick={() => setShowFinalModal(false)}
                className="w-full py-4 bg-gray-900 text-white rounded-2xl font-black text-xs md:text-sm uppercase tracking-widest shadow-lg hover:bg-black transition-all transform active:scale-95"
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
        .pb-safe { padding-bottom: env(safe-area-inset-bottom, 1.5rem); }
        @media (max-width: 640px) {
          .h-screen { height: -webkit-fill-available; }
        }
      `}</style>
    </div>
  );
};

export default App;
