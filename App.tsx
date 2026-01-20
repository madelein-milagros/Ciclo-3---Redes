
import React, { useState, useMemo, useRef } from 'react';
import { COURSES, FINAL_MISSION } from './constants';
import CycleMilestone from './components/CycleMilestone';
import CourseDot from './components/CourseDot';

const App: React.FC = () => {
  const [activeCourseId, setActiveCourseId] = useState<number>(COURSES[0].id);
  const [showFinalModal, setShowFinalModal] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const activeCourse = useMemo(() => 
    COURSES.find(c => c.id === activeCourseId) || COURSES[0]
  , [activeCourseId]);

  const roadmapItems = useMemo(() => {
    const items: any[] = [];
    const cycles = [1, 2, 3, 4, 5, 6];

    cycles.forEach((cicloNum) => {
      items.push({ type: 'cycle', value: cicloNum, id: `cycle-${cicloNum}` });
      const cycleCourses = COURSES.filter(c => c.ciclo === cicloNum);
      cycleCourses.forEach(course => {
        items.push({ type: 'course', value: course, id: course.id });
      });
    });

    return items;
  }, []);

  const { pathPoints, positionedItems } = useMemo(() => {
    const spacing = 220; 
    const amplitude = 90; 
    const baselineY = 180; 
    const path: {x: number, y: number}[] = [];
    const items: any[] = [];

    const totalLength = roadmapItems.length * spacing + 600;
    for (let i = 0; i < totalLength; i += 15) {
      const x = i;
      const y = baselineY + Math.sin(i / 250) * amplitude;
      path.push({ x, y });
    }

    roadmapItems.forEach((item, index) => {
      const x = 200 + (index * spacing);
      const y = baselineY + Math.sin(x / 250) * amplitude;
      items.push({ ...item, x, y });
    });

    return { 
      pathPoints: path.map(p => `${p.x},${p.y}`).join(' '),
      positionedItems: items
    };
  }, [roadmapItems]);

  const totalWidth = positionedItems[positionedItems.length - 1].x + 400;

  return (
    <div className="h-screen bg-white flex flex-col font-sans select-none text-gray-900 overflow-hidden">
      {/* Header Compacto y Adaptable */}
      <header className="h-14 md:h-16 shrink-0 px-4 md:px-8 flex justify-between items-center bg-white border-b border-gray-100 z-50">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-7 h-7 md:w-8 md:h-8 bg-[#1e293b] rounded-lg flex items-center justify-center shadow-md">
            <span className="text-white font-black text-[10px] md:text-xs">T</span>
          </div>
          <h2 className="text-[9px] md:text-[11px] font-black tracking-[0.15em] md:tracking-[0.2em] uppercase text-gray-400">
            Roadmap <span className="text-gray-900">Networking</span>
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden xs:inline text-[9px] font-bold text-gray-300">ESTADO:</span>
          <span className="text-[9px] md:text-[10px] font-black text-[#a81d3a] uppercase tracking-widest bg-red-50 px-2 py-0.5 rounded">En Curso</span>
        </div>
      </header>

      {/* Área del Roadmap (Scrollable con inercia para móviles) */}
      <main className="flex-grow relative overflow-x-auto overflow-y-hidden scrollbar-hide bg-[#fcfcfc] touch-pan-x" ref={scrollRef}>
        <div className="h-full relative" style={{ width: `${totalWidth}px` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
            <polyline points={pathPoints} fill="none" stroke="rgba(0,0,0,0.03)" strokeWidth="100" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points={pathPoints} fill="none" stroke="#1e293b" strokeWidth="80" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points={pathPoints} fill="none" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="12 25" />
          </svg>

          {positionedItems.map((item) => (
            <div key={item.id} className="absolute z-20" style={{ left: item.x, top: item.y, transform: 'translate(-50%, -50%)' }}>
              {item.type === 'cycle' ? (
                <CycleMilestone number={item.value} />
              ) : (
                <CourseDot 
                  course={item.value} 
                  isActive={activeCourseId === item.value.id} 
                  onSelect={() => setActiveCourseId(item.value.id)} 
                />
              )}
            </div>
          ))}

          <div 
            className="absolute z-30 cursor-pointer group"
            style={{ left: totalWidth - 250, top: 180, transform: 'translateY(-50%)' }}
            onClick={() => setShowFinalModal(true)}
          >
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white border-[5px] md:border-[6px] border-[#1e293b] rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
               <span className="text-3xl md:text-4xl">🏁</span>
            </div>
          </div>
        </div>
      </main>

      {/* Panel de Info Responsivo */}
      <footer className="bg-white border-t border-gray-100 shadow-[0_-15px_40px_rgba(0,0,0,0.06)] z-50 shrink-0 overflow-y-auto max-h-[45vh] md:max-h-none">
        <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8 flex flex-col gap-4 md:gap-6">
          <div className="flex items-start md:items-center gap-4 md:gap-6">
            <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 bg-[#a81d3a] text-white rounded-xl md:rounded-[1.25rem] flex items-center justify-center font-black text-xl md:text-3xl shadow-xl transform -rotate-1">
              {activeCourse.id}
            </div>
            <div className="flex-grow pt-1 md:pt-0">
              <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-1">
                <div className="bg-[#1e293b] text-white text-[8px] md:text-[10px] px-2 py-0.5 md:px-3 md:py-1 rounded font-black uppercase tracking-widest">CICLO {activeCourse.ciclo}</div>
                <h2 className="text-lg md:text-2xl font-black text-gray-900 uppercase tracking-tight leading-tight">{activeCourse.title}</h2>
              </div>
              <p className="text-[9px] md:text-[11px] font-bold text-gray-400 uppercase tracking-widest line-clamp-1">{activeCourse.officialName}</p>
            </div>
          </div>

          <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed max-w-5xl line-clamp-3 md:line-clamp-none">
            {activeCourse.description}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 md:gap-4 mt-1 md:mt-2">
             <a href={activeCourse.links[0]?.url} target="_blank" className="h-12 md:h-14 px-6 md:px-10 bg-[#1e293b] text-white rounded-xl md:rounded-2xl flex items-center justify-center gap-3 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] shadow-lg hover:bg-black transition-all active:scale-95">
                CONTENIDO <span className="text-sm md:text-lg">↗</span>
             </a>
             
             <div className="flex items-center gap-2 md:gap-3 overflow-x-auto pb-1 sm:pb-0 scrollbar-hide">
                <a href={activeCourse.youtubeUrl} target="_blank" className="shrink-0 h-12 md:h-14 px-4 md:px-6 bg-red-50 text-red-600 border-2 border-red-100 rounded-xl md:rounded-2xl flex items-center gap-2 text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:bg-red-100 transition-all">
                   <span className="text-lg">📺</span> <span className="hidden md:inline">TUTORIAL</span>
                </a>
                
                <a href={activeCourse.linkedinUrl} target="_blank" className="shrink-0 h-12 md:h-14 px-4 md:px-6 bg-blue-50 text-blue-600 border-2 border-blue-100 rounded-xl md:rounded-2xl flex items-center gap-2 text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:bg-blue-100 transition-all">
                   <span className="text-lg">🔗</span> <span className="hidden md:inline">LINKEDIN</span>
                </a>

                <div className="shrink-0 h-12 md:h-14 px-4 md:px-6 bg-gray-50 border-2 border-gray-100 rounded-xl md:rounded-2xl flex items-center gap-2">
                  <span className="text-lg">🏆</span>
                  <span className="text-[8px] md:text-[10px] font-black text-gray-500 uppercase tracking-widest truncate max-w-[100px] md:max-w-none">{activeCourse.certification}</span>
                </div>
             </div>
          </div>
        </div>
      </footer>

      {showFinalModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-md" onClick={() => setShowFinalModal(false)}></div>
          <div className="relative bg-white w-full max-w-md rounded-[2.5rem] md:rounded-[3rem] shadow-2xl overflow-hidden animate-pop-in">
            <div className="bg-[#a81d3a] p-8 md:p-12 text-center text-white">
               <span className="text-5xl md:text-6xl block mb-4 md:mb-6">🎓</span>
               <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter italic">{FINAL_MISSION.title}</h3>
            </div>
            <div className="p-8 md:p-12 text-center">
               <p className="text-gray-700 text-base md:text-lg font-bold leading-relaxed mb-8 md:mb-10">"{FINAL_MISSION.content}"</p>
               <button onClick={() => setShowFinalModal(false)} className="w-full h-14 md:h-16 bg-gray-900 text-white rounded-2xl font-black text-xs md:text-sm uppercase tracking-widest hover:bg-black transition-all">Aceptar</button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .animate-pop-in { animation: pop-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        @keyframes pop-in { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}</style>
    </div>
  );
};

export default App;
