
import React, { useState, useMemo, useEffect } from 'react';
import { COURSES, CICLO_CHECKPOINT, COLORS } from './constants';
import CourseNode from './components/CourseNode';

const App: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(COURSES[0].id);
  const [showFinalModal, setShowFinalModal] = useState<boolean>(false);

  const activeCourse = useMemo(() => 
    COURSES.find(c => c.id === activeId) || COURSES[0]
  , [activeId]);

  // Manejo de tecla Escape para cerrar modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowFinalModal(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const shareOnLinkedIn = () => {
    const text = `¡Explorando la ruta de aprendizaje de Redes Ciclo III! 🚀 Módulo actual: ${activeCourse.title}\n\n#Tecsup #Redes #Roadmap #Networking`;
    const url = window.location.href;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
  };

  // Coordenadas fluidas para la pista (porcentajes)
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
      {/* Header Fijo */}
      <header className="h-14 md:h-16 shrink-0 px-6 md:px-10 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-gray-100 z-40">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#830c24] rounded-lg flex items-center justify-center shadow-lg rotate-1">
            <span className="text-white font-black text-sm md:text-base">T</span>
          </div>
          <h1 className="text-[10px] md:text-sm font-black tracking-[0.2em] uppercase text-gray-400">
            Roadmap <span className="text-[#a81d3a]">Redes</span> <span className="text-gray-800 ml-1">III</span>
          </h1>
        </div>
        <div className="flex items-center gap-2">
           <div className="hidden sm:flex flex-col items-end mr-4">
              <span className="text-[8px] font-bold text-gray-400 uppercase">Ciclo Actual</span>
              <span className="text-[10px] font-black text-gray-800 uppercase">Semestre 2024-2</span>
           </div>
           <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        </div>
      </header>

      {/* Área del Mapa */}
      <main className="flex-grow relative flex items-center justify-center p-4 md:p-12 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>

        <div className="relative w-full max-w-6xl h-full max-h-[350px] md:max-h-[500px]">
          {/* Pista SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d={roadPath} fill="none" stroke="#e5e7eb" strokeWidth="12" strokeLinecap="round" />
            <path d={roadPath} fill="none" stroke="#1f2937" strokeWidth="10" strokeLinecap="round" />
            <path d={roadPath} fill="none" stroke="#fbbf24" strokeWidth="0.5" strokeDasharray="4 4" strokeLinecap="round" />
          </svg>

          {/* Cursos */}
          {COURSES.map((course, index) => (
            <CourseNode 
              key={course.id}
              course={course}
              isActive={activeId === course.id}
              onSelect={() => setActiveId(course.id)}
              position={{ x: roadNodes[index].x, y: roadNodes[index].y }}
            />
          ))}

          {/* Botón de Meta Final */}
          <div 
            className="absolute z-30 cursor-pointer group"
            style={{ left: '96%', top: '45%', transform: 'translate(-50%, -50%)' }}
            onClick={() => setShowFinalModal(true)}
          >
            <div className="relative flex flex-col items-center">
              <div className="absolute -inset-6 bg-yellow-400/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white border-4 border-gray-900 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-active:scale-95 transition-all duration-300 transform -rotate-6">
                <span className="text-2xl md:text-4xl group-hover:animate-bounce">🏁</span>
              </div>
              <div className="mt-3 bg-gray-900 text-white text-[8px] md:text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">Finalizar</div>
            </div>
          </div>
        </div>
      </main>

      {/* Consola de Control Inferior */}
      <footer className="bg-white border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.04)] z-40">
        <div className="max-w-7xl mx-auto p-4 md:p-8 flex flex-col lg:flex-row gap-6 lg:items-center">
          
          <div className="flex-grow flex gap-4 md:gap-6 items-start">
            <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 bg-[#830c24] text-white rounded-2xl flex items-center justify-center font-black text-xl md:text-3xl shadow-xl transform rotate-3 select-none">
              {activeCourse.id}
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl md:text-2xl font-black text-gray-900 leading-tight mb-1">{activeCourse.title}</h2>
              <p className="text-gray-400 text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-2 line-clamp-1">{activeCourse.officialName}</p>
              <p className="text-gray-600 text-xs md:text-sm font-medium leading-relaxed line-clamp-2 md:line-clamp-3">
                {activeCourse.description}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
            <div className="flex gap-2 flex-1 sm:flex-none">
              <button 
                onClick={() => alert("Módulo de video tutorial próximamente.")}
                className="flex-1 lg:w-32 flex items-center justify-center gap-2 px-4 py-3 bg-gray-50 text-gray-700 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-gray-100 transition-colors border border-gray-200"
              >
                <span>📺</span> Tutorial
              </button>
              <button 
                onClick={shareOnLinkedIn}
                className="flex-1 lg:w-32 flex items-center justify-center gap-2 px-4 py-3 bg-[#0077b5] text-white rounded-xl font-bold text-[10px] uppercase tracking-widest hover:brightness-110 transition-all shadow-md"
              >
                <span>🔗</span> Share
              </button>
            </div>
            <a 
              href={activeCourse.links[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-48 flex items-center justify-center gap-2 px-6 py-4 bg-gray-900 text-white rounded-xl font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-black hover:scale-[1.02] transition-all shadow-xl"
            >
              Acceder al Curso <span className="text-sm">↗</span>
            </a>
          </div>
        </div>
      </footer>

      {/* MODAL / ALERT DE DESAFÍO FINAL */}
      {showFinalModal && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div 
            className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm animate-fade-in"
            onClick={() => setShowFinalModal(false)}
          ></div>
          <div className="relative bg-white w-full max-w-lg rounded-t-[2.5rem] sm:rounded-[2.5rem] shadow-2xl overflow-hidden animate-slide-up sm:animate-zoom-in">
            {/* Cabecera del Modal */}
            <div className="bg-[#830c24] p-8 md:p-10 text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
               <div className="relative z-10 flex flex-col items-center">
                 <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-md">
                   <span className="text-5xl drop-shadow-xl animate-bounce-slow">🏆</span>
                 </div>
                 <h3 className="text-white text-2xl md:text-3xl font-black uppercase tracking-tight">{CICLO_CHECKPOINT.title}</h3>
                 <div className="mt-2 flex items-center gap-2">
                    <span className="h-[1px] w-8 bg-white/30"></span>
                    <p className="text-red-200 text-[10px] font-black uppercase tracking-widest">Nivel Profesional</p>
                    <span className="h-[1px] w-8 bg-white/30"></span>
                 </div>
               </div>
               <button 
                 onClick={() => setShowFinalModal(false)}
                 className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
               >
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l18 18" /></svg>
               </button>
            </div>

            {/* Contenido del Modal */}
            <div className="p-8 md:p-12">
               <div className="bg-gray-50 rounded-3xl p-6 md:p-8 border border-gray-100 mb-8">
                 <p className="text-gray-700 text-sm md:text-lg font-bold leading-relaxed text-center italic">
                   "{CICLO_CHECKPOINT.content}"
                 </p>
               </div>
               <div className="flex flex-col gap-4">
                 <button 
                  onClick={() => {
                    alert("¡Misión aceptada! ¡A darle con todo!");
                    setShowFinalModal(false);
                  }}
                  className="w-full py-5 bg-gray-900 text-white rounded-2xl font-black text-xs md:text-sm uppercase tracking-widest shadow-xl hover:bg-black hover:scale-[1.01] active:scale-95 transition-all"
                 >
                   Aceptar Misión
                 </button>
                 <p className="text-center text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                   Completa este proyecto para dominar el Ciclo III
                 </p>
               </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes zoom-in { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        @keyframes slide-up { from { transform: translateY(100%); } to { transform: translateY(0); } }
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
        .animate-zoom-in { animation: zoom-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .animate-slide-up { animation: slide-up 0.4s cubic-bezier(0.22, 1, 0.36, 1); }
        .animate-bounce-slow { animation: bounce-slow 2s infinite ease-in-out; }
      `}</style>
    </div>
  );
};

export default App;
