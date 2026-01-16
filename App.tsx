
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
    const text = `¡Explorando la ruta de aprendizaje de Redes Ciclo III! 🚀 Módulo: ${activeCourse.title}`;
    const url = window.location.href;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
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
      <header className="h-14 md:h-16 shrink-0 px-4 md:px-10 flex justify-between items-center bg-white border-b border-gray-100 z-40">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-7 h-7 md:w-8 md:h-8 bg-[#830c24] rounded-lg flex items-center justify-center shadow-md">
            <span className="text-white font-black text-xs md:text-sm">T</span>
          </div>
          <h1 className="text-[9px] md:text-sm font-black tracking-widest uppercase text-gray-400">
            Roadmap <span className="text-[#a81d3a]">Redes</span> <span className="text-gray-800">III</span>
          </h1>
        </div>
        <div className="flex items-center">
           <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        </div>
      </header>

      {/* Área del Mapa con Padding Inferior para no chocar con el footer */}
      <main className="flex-grow relative flex items-center justify-center p-2 md:p-12 overflow-hidden pb-20 md:pb-12">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>

        <div className="relative w-full max-w-6xl h-full max-h-[300px] md:max-h-[500px]">
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
            <div className="relative flex flex-col items-center">
              <div className="w-10 h-10 md:w-16 md:h-16 bg-white border-2 md:border-4 border-gray-900 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform transform -rotate-6">
                <span className="text-xl md:text-4xl">🏁</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Optimizada para Móvil */}
      <footer className="bg-white border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-40 shrink-0">
        <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 flex flex-col gap-4">
          
          <div className="flex gap-3 md:gap-6 items-center">
            <div className="shrink-0 w-10 h-10 md:w-16 md:h-16 bg-[#830c24] text-white rounded-xl md:rounded-2xl flex items-center justify-center font-black text-lg md:text-3xl shadow-lg">
              {activeCourse.id}
            </div>
            <div className="flex flex-col min-w-0">
              <h2 className="text-sm md:text-2xl font-black text-gray-900 leading-tight truncate">{activeCourse.title}</h2>
              <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 truncate">{activeCourse.officialName}</p>
            </div>
          </div>

          <p className="text-gray-600 text-[11px] md:text-sm font-medium leading-tight md:leading-relaxed line-clamp-2 md:line-clamp-none">
            {activeCourse.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex gap-2 w-full sm:w-auto">
              <button 
                onClick={() => alert("Próximamente...")}
                className="flex-1 sm:px-4 py-2.5 bg-gray-50 text-gray-700 rounded-lg font-bold text-[10px] uppercase tracking-widest border border-gray-200"
              >
                📺 Tutorial
              </button>
              <button 
                onClick={shareOnLinkedIn}
                className="flex-1 sm:px-4 py-2.5 bg-[#0077b5] text-white rounded-lg font-bold text-[10px] uppercase tracking-widest"
              >
                🔗 Share
              </button>
            </div>
            <a 
              href={activeCourse.links[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 md:w-48 flex items-center justify-center py-3 bg-gray-900 text-white rounded-lg font-black text-[10px] uppercase tracking-widest shadow-md hover:bg-black transition-all"
            >
              Acceder <span className="ml-1 text-xs">↗</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Modal Desafío Final */}
      {showFinalModal && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm" onClick={() => setShowFinalModal(false)}></div>
          <div className="relative bg-white w-full max-w-lg rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden animate-slide-up sm:animate-zoom-in">
            <div className="bg-[#830c24] p-6 text-center text-white">
               <span className="text-4xl mb-2 inline-block">🏆</span>
               <h3 className="text-xl font-black uppercase tracking-tight">{CICLO_CHECKPOINT.title}</h3>
            </div>
            <div className="p-6 md:p-10">
               <p className="text-gray-700 text-sm md:text-base font-bold text-center leading-relaxed mb-6 italic bg-gray-50 p-4 rounded-xl">
                 "{CICLO_CHECKPOINT.content}"
               </p>
               <button 
                onClick={() => setShowFinalModal(false)}
                className="w-full py-4 bg-gray-900 text-white rounded-xl font-black text-xs uppercase tracking-widest"
               >
                 Aceptar Misión
               </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .animate-slide-up { animation: slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        @keyframes slide-up { from { transform: translateY(100%); } to { transform: translateY(0); } }
        @keyframes zoom-in { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}</style>
    </div>
  );
};

export default App;
