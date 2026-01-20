
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { COURSES, FINAL_MISSION } from './constants';
import CycleMilestone from './components/CycleMilestone';
import CourseDot from './components/CourseDot';

const App: React.FC = () => {
  const [activeCourseId, setActiveCourseId] = useState<number>(COURSES[0].id);
  const [showFinalModal, setShowFinalModal] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const { pathPoints, positionedItems, roadWidth } = useMemo(() => {
    const spacing = isMobile ? 150 : 220; 
    const amplitude = isMobile ? 35 : 90; 
    const baselineY = isMobile ? 120 : 180;
    const strokeWidth = isMobile ? 45 : 80;
    
    const path: {x: number, y: number}[] = [];
    const items: any[] = [];

    const totalLength = roadmapItems.length * spacing + (isMobile ? 300 : 600);
    for (let i = 0; i < totalLength; i += 15) {
      const x = i;
      const y = baselineY + Math.sin(i / (isMobile ? 160 : 250)) * amplitude;
      path.push({ x, y });
    }

    roadmapItems.forEach((item, index) => {
      const x = (isMobile ? 80 : 200) + (index * spacing);
      const y = baselineY + Math.sin(x / (isMobile ? 160 : 250)) * amplitude;
      items.push({ ...item, x, y });
    });

    return { 
      pathPoints: path.map(p => `${p.x},${p.y}`).join(' '),
      positionedItems: items,
      roadWidth: strokeWidth
    };
  }, [roadmapItems, isMobile]);

  const totalWidth = positionedItems[positionedItems.length - 1].x + (isMobile ? 150 : 400);

  return (
    <div className="h-screen bg-white flex flex-col font-sans select-none text-gray-900 overflow-hidden">
      <header className="h-14 shrink-0 px-4 md:px-8 flex justify-between items-center bg-white border-b border-gray-100 z-50">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-8 h-8 bg-[#1e293b] rounded-lg flex items-center justify-center shadow-md">
            <span className="text-white font-black text-xs">T</span>
          </div>
          <h2 className="text-[10px] md:text-[11px] font-black tracking-[0.15em] md:tracking-[0.2em] uppercase text-gray-400">
            Roadmap <span className="text-gray-900">Networking</span>
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] md:text-[10px] font-black text-[#a81d3a] uppercase tracking-widest bg-red-50 px-2 py-1 rounded-md">En Curso</span>
        </div>
      </header>

      <main className="flex-grow relative overflow-x-auto overflow-y-hidden scrollbar-hide bg-[#fcfcfc] touch-pan-x" ref={scrollRef}>
        <div className="h-full relative" style={{ width: `${totalWidth}px` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
            <polyline points={pathPoints} fill="none" stroke="rgba(0,0,0,0.03)" strokeWidth={roadWidth + 15} strokeLinecap="round" strokeLinejoin="round" />
            <polyline points={pathPoints} fill="none" stroke="#1e293b" strokeWidth={roadWidth} strokeLinecap="round" strokeLinejoin="round" />
            <polyline points={pathPoints} fill="none" stroke="#facc15" strokeWidth={isMobile ? 2 : 3} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={isMobile ? "8 16" : "15 30"} />
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
            style={{ 
              left: totalWidth - (isMobile ? 100 : 250), 
              top: isMobile ? 120 : 180, 
              transform: 'translateY(-50%)' 
            }}
            onClick={() => setShowFinalModal(true)}
          >
            <div className="w-14 h-14 md:w-24 md:h-24 bg-white border-[4px] md:border-[6px] border-[#1e293b] rounded-2xl md:rounded-[2.5rem] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
               <span className="text-xl md:text-4xl">🏁</span>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.12)] z-50 shrink-0 overflow-y-auto max-h-[55vh] md:max-h-none">
        <div className="max-w-6xl mx-auto p-5 md:p-8 flex flex-col gap-5 md:gap-6">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 bg-[#a81d3a] text-white rounded-xl md:rounded-[1.25rem] flex items-center justify-center font-black text-2xl md:text-3xl shadow-lg transform -rotate-1">
              {activeCourse.id}
            </div>
            <div className="flex-grow">
              <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-0.5 md:mb-1">
                <div className="bg-[#1e293b] text-white text-[8px] md:text-[10px] px-1.5 py-0.5 rounded font-black uppercase tracking-widest">CICLO {activeCourse.ciclo}</div>
                <h2 className="text-lg md:text-2xl font-black text-gray-900 uppercase tracking-tight leading-none">{activeCourse.title}</h2>
              </div>
              <p className="text-[9px] md:text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-tight">{activeCourse.officialName}</p>
            </div>
          </div>

          <p className="text-gray-500 text-xs md:text-base font-medium leading-relaxed max-w-5xl">
            {activeCourse.description}
          </p>

          <div className="flex flex-col gap-6 pb-2 md:pb-0">
             {/* Contenedor de Botones de Contenido Principal (Ahora mapea todos los links) */}
             <div className="flex flex-wrap gap-3">
                {activeCourse.links.map((link, idx) => (
                  <a 
                    key={idx}
                    href={link.url} 
                    target="_blank" 
                    className="h-12 md:h-14 px-6 md:px-10 bg-[#1e293b] text-white rounded-xl md:rounded-2xl flex items-center justify-center gap-2 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] shadow-md hover:bg-black transition-all active:scale-95 border border-white/10"
                  >
                    {link.label.toUpperCase()} <span className="text-xs md:text-lg">↗</span>
                  </a>
                ))}
             </div>
             
             {/* Contenedor de Recursos Secundarios y Redes */}
             <div className="relative">
               <div className="flex items-center gap-3 md:gap-4 overflow-x-auto pb-6 scrollbar-hide -mx-1 px-1 snap-x">
                  {activeCourse.youtubeUrl && (
                    <a href={activeCourse.youtubeUrl} target="_blank" className="snap-start shrink-0 h-12 md:h-14 px-5 md:px-7 bg-red-50 text-red-600 border-2 border-red-200 rounded-xl md:rounded-2xl flex items-center gap-2.5 text-[10px] md:text-[11px] font-black uppercase tracking-widest active:bg-red-100 transition-all shadow-sm">
                       <span className="text-lg md:text-xl">📺</span> <span>TUTORIAL</span>
                    </a>
                  )}
                  
                  {activeCourse.linkedinUrl && (
                    <a href={activeCourse.linkedinUrl} target="_blank" className="snap-start shrink-0 h-12 md:h-14 px-5 md:px-7 bg-blue-50 text-blue-600 border-2 border-blue-200 rounded-xl md:rounded-2xl flex items-center gap-2.5 text-[10px] md:text-[11px] font-black uppercase tracking-widest active:bg-blue-100 transition-all shadow-sm">
                       <span className="text-lg md:text-xl">🔗</span> <span>LOGRO</span>
                    </a>
                  )}

                  <div className="snap-start shrink-0 h-12 md:h-14 px-5 md:px-7 bg-amber-50 border-2 border-amber-200 rounded-xl md:rounded-2xl flex items-center gap-2.5 shadow-sm">
                    <span className="text-lg md:text-xl">🏆</span>
                    <div className="flex flex-col">
                        <span className="text-[7px] text-amber-600 font-black uppercase tracking-[0.2em] leading-none mb-0.5">INSIGNIA</span>
                        <span className="text-[9px] md:text-[11px] font-black text-amber-800 uppercase tracking-tight truncate max-w-[140px] md:max-w-none">{activeCourse.certification}</span>
                    </div>
                  </div>
               </div>
               <div className="absolute right-0 top-0 bottom-6 w-12 bg-gradient-to-l from-white via-white/40 to-transparent pointer-events-none md:hidden"></div>
             </div>
          </div>
        </div>
      </footer>

      {showFinalModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-md" onClick={() => setShowFinalModal(false)}></div>
          <div className="relative bg-white w-full max-w-sm rounded-[2.5rem] shadow-2xl overflow-hidden animate-pop-in">
            <div className="bg-[#a81d3a] p-8 md:p-10 text-center text-white">
               <span className="text-4xl md:text-5xl block mb-4">🎓</span>
               <h3 className="text-lg md:text-xl font-black uppercase tracking-tighter italic">{FINAL_MISSION.title}</h3>
            </div>
            <div className="p-8 md:p-10 text-center">
               <p className="text-gray-700 text-sm md:text-base font-bold leading-relaxed mb-8">"{FINAL_MISSION.content}"</p>
               <button onClick={() => setShowFinalModal(false)} className="w-full h-12 md:h-14 bg-gray-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest">Entendido</button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes pop-in { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-pop-in { animation: pop-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
      `}</style>
    </div>
  );
};

export default App;
