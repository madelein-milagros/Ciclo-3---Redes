
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { COURSES, FINAL_MISSION } from './constants';
import CycleMilestone from './components/CycleMilestone';
import CourseDot from './components/CourseDot';

const TECH_DECORATIONS = [
  { icon: '🛰️', label: 'Satélite' },
  { icon: '🛡️', label: 'Firewall' },
  { icon: '☁️', label: 'Cloud' },
  { icon: '🐧', label: 'Linux' },
  { icon: '📡', label: 'Antena' },
  { icon: '🔒', label: 'Cifrado' },
  { icon: '🐍', label: 'Python' },
  { icon: '🌐', label: 'IPv6' },
  { icon: '🔧', label: 'Soporte' },
  { icon: '💻', label: 'SSH' },
  { icon: '💾', label: 'Disco' },
  { icon: '🔌', label: 'Conexión' },
  { icon: '🤖', label: 'IA' },
  { icon: '📊', label: 'Data' },
];

const CATEGORY_ICONS: Record<string, string> = {
  'Infraestructura': '🌐',
  'Programación': '🐍',
  'Seguridad': '🛡️',
  'Virtualización': '☁️'
};

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

  const skillImpact = useMemo(() => {
    const currentIndex = COURSES.findIndex(c => c.id === activeCourseId);
    const completedCourses = COURSES.slice(0, currentIndex + 1);
    const results: any = { infr: 0, prog: 0, segu: 0, virt: 0 };
    const cats = ['Infraestructura', 'Programación', 'Seguridad', 'Virtualización'];
    
    cats.forEach(cat => {
      const total = COURSES.filter(c => c.category === cat).length || 1;
      const done = completedCourses.filter(c => c.category === cat).length;
      results[cat.toLowerCase().slice(0, 4)] = Math.round((done / total) * 100);
    });
    return results;
  }, [activeCourseId]);

  const roadmapItems = useMemo(() => {
    const items: any[] = [];
    [1, 2, 3, 4, 5, 6].forEach((cicloNum) => {
      const cycleCourses = COURSES.filter(c => c.ciclo === cicloNum);
      cycleCourses.forEach(course => {
        items.push({ type: 'course', value: course, id: course.id });
      });
      items.push({ type: 'cycle', value: cicloNum, id: `cycle-${cicloNum}` });
    });
    return items;
  }, []);

  const { pathPoints, positionedItems, roadWidth, decorations } = useMemo(() => {
    const spacing = isMobile ? 45 : 55; 
    const amplitude = isMobile ? 15 : 30; 
    const baselineY = isMobile ? 80 : 120;
    const strokeWidth = isMobile ? 36 : 64;
    
    const path: {x: number, y: number}[] = [];
    const items: any[] = [];
    const totalLength = roadmapItems.length * spacing + (isMobile ? 120 : 200);
    const freq = isMobile ? 140 : 220;

    for (let i = 0; i < totalLength; i += 5) {
      path.push({ x: i, y: baselineY + Math.sin(i / freq) * amplitude });
    }

    roadmapItems.forEach((item, index) => {
      const x = (isMobile ? 40 : 80) + (index * spacing);
      items.push({ ...item, x, y: baselineY + Math.sin(x / freq) * amplitude });
    });

    const decors = [];
    const decorCount = isMobile ? 20 : 40;
    for (let i = 0; i < decorCount; i++) { 
      const x = Math.random() * totalLength;
      const roadY = baselineY + Math.sin(x / freq) * amplitude;
      const side = Math.random() > 0.5 ? 1 : -1;
      const offset = side * (Math.random() * 40 + (isMobile ? 60 : 100));
      const y = roadY + offset;

      decors.push({ 
        ...TECH_DECORATIONS[i % TECH_DECORATIONS.length], 
        x, 
        y, 
        delay: Math.random() * 5, 
        id: `decor-${i}`,
        scale: 0.7 + Math.random() * 0.4,
        opacity: 0.15 + Math.random() * 0.35
      });
    }

    return { 
      pathPoints: path.map(p => `${p.x},${p.y}`).join(' '), 
      positionedItems: items, 
      roadWidth: strokeWidth, 
      decorations: decors 
    };
  }, [roadmapItems, isMobile]);

  const totalWidth = positionedItems.length > 0 ? positionedItems[positionedItems.length - 1].x + (isMobile ? 120 : 220) : 1000;

  return (
    <div className="h-screen bg-[#f8f9fa] flex flex-col font-sans select-none text-gray-900 overflow-hidden">
      {/* Header Premium */}
      <header className="h-10 md:h-12 shrink-0 px-6 md:px-12 flex justify-between items-center bg-white border-b border-gray-100 z-50 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 md:w-8 md:h-8 bg-[#a81d3a] rounded-lg flex items-center justify-center shadow-md">
            <span className="text-white font-black text-[10px]">T</span>
          </div>
          <h1 className="text-[9px] md:text-[11px] font-black uppercase tracking-tight text-gray-400">
            ROADMAP <span className="text-gray-900">TECSUP • REDES</span>
          </h1>
        </div>
        <div className="bg-red-50 border border-red-100 px-2 py-0.5 md:px-3 md:py-1 rounded text-[8px] md:text-[9px] font-black text-[#a81d3a] uppercase tracking-widest flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
          ADMISIONES 2026
        </div>
      </header>

      {/* Main Roadmap Area */}
      <main className="flex-grow relative overflow-x-auto overflow-y-hidden scrollbar-hide touch-pan-x bg-[#fdfdfd]" ref={scrollRef}>
        <div className="h-full relative" style={{ width: `${totalWidth}px` }}>
          
          {/* Ambient Decorations */}
          {decorations.map((d) => (
            <div 
              key={d.id} 
              className="absolute z-10 pointer-events-none" 
              style={{ 
                left: d.x, 
                top: d.y, 
                transform: `translate(-50%, -50%) scale(${d.scale})`, 
                animation: `float 10s ease-in-out infinite`, 
                animationDelay: `${d.delay}s`,
                opacity: d.opacity
              }}
            >
              <div className="w-9 h-9 md:w-12 md:h-12 bg-white border border-gray-100 rounded-xl flex items-center justify-center shadow-sm">
                 <span className="text-lg md:text-xl">{d.icon}</span>
              </div>
            </div>
          ))}

          {/* Road Path */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
            <polyline points={pathPoints} fill="none" stroke="rgba(0,0,0,0.03)" strokeWidth={roadWidth + 10} strokeLinecap="round" strokeLinejoin="round" />
            <polyline points={pathPoints} fill="none" stroke="#1e293b" strokeWidth={roadWidth} strokeLinecap="round" strokeLinejoin="round" />
            <polyline points={pathPoints} fill="none" stroke="#facc15" strokeWidth={isMobile ? 1.5 : 3} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={isMobile ? "5 12" : "12 24"} />
          </svg>

          {/* Nodes */}
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

          {/* Goal */}
          <div className="absolute z-30 cursor-pointer group" style={{ left: totalWidth - (isMobile ? 60 : 100), top: isMobile ? 80 : 120, transform: 'translateY(-50%)' }} onClick={() => setShowFinalModal(true)}>
            <div className="w-14 h-14 md:w-20 md:h-20 bg-white border-[5px] border-[#1e293b] rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
               <span className="text-3xl md:text-5xl animate-bounce">🏁</span>
            </div>
          </div>
        </div>
      </main>

      {/* Optimized Responsive Footer con Área de Seguridad y Créditos */}
      <footer className="relative bg-white border-t-[4px] md:border-t-[6px] border-[#a81d3a] shadow-[0_-20px_60px_rgba(0,0,0,0.25)] z-50 shrink-0 overflow-y-auto scrollbar-hide rounded-t-[2rem] md:rounded-none max-h-[65vh] md:max-h-none">
        {/* Mobile Drag Handle */}
        <div className="md:hidden w-full flex justify-center pt-3 pb-2 sticky top-0 bg-white/95 backdrop-blur-md z-10">
          <div className="w-10 h-1 bg-gray-200 rounded-full"></div>
        </div>

        <div key={activeCourseId} className="max-w-7xl mx-auto px-5 pt-2 pb-6 md:px-12 md:py-10 animate-fade-slide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12 items-start pb-20 md:pb-0">
            
            {/* Header Info */}
            <div className="md:col-span-5 space-y-2 md:space-y-4">
              <div className="flex items-center gap-3 md:gap-6">
                <div className="shrink-0 w-12 h-12 md:w-28 md:h-28 bg-gradient-to-br from-[#a81d3a] to-[#830c24] text-white rounded-xl md:rounded-[1.8rem] flex items-center justify-center font-black text-xl md:text-6xl shadow-lg border-[3px] md:border-4 border-white ring-2 md:ring-4 ring-red-50/50">
                  {activeCourse.id}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 md:gap-2 mb-0.5 md:mb-1">
                    <span className="bg-[#1e293b] text-white text-[6px] md:text-[10px] px-1.5 py-0.5 rounded-full font-black uppercase tracking-widest">CICLO {activeCourse.ciclo}</span>
                    <span className="bg-red-50 text-[#a81d3a] text-[6px] md:text-[10px] px-1.5 py-0.5 rounded-full font-black uppercase tracking-widest border border-red-100 flex items-center gap-1">
                      {CATEGORY_ICONS[activeCourse.category]} {activeCourse.category.toUpperCase()}
                    </span>
                  </div>
                  <h2 className="text-sm md:text-4xl font-black text-gray-900 uppercase tracking-tighter leading-tight line-clamp-2">{activeCourse.title}</h2>
                  <p className="text-[6px] md:text-[12px] font-black text-gray-400 uppercase tracking-widest truncate">{activeCourse.officialName}</p>
                </div>
              </div>
              <p className="text-gray-700 text-[10px] md:text-[19px] font-bold leading-tight border-l-[3px] md:border-l-[6px] border-[#a81d3a] pl-3 md:pl-5 italic py-1 md:py-2 bg-red-50/10 rounded-r-lg md:rounded-r-2xl pr-3 shadow-sm">
                "{activeCourse.description}"
              </p>
            </div>

            {/* Radar Dominios (Solo Desktop) */}
            <div className="md:col-span-3 hidden md:block space-y-4">
               <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Impacto Habilidades</p>
               <div className="grid grid-cols-1 gap-4">
                  {[
                    { label: 'INFRAESTRUCTURA', val: skillImpact.infr, color: '#3b82f6', icon: '🌐' },
                    { label: 'PROGRAMACIÓN', val: skillImpact.prog, color: '#6366f1', icon: '🐍' },
                    { label: 'SEGURIDAD', val: skillImpact.segu, color: '#ef4444', icon: '🛡️' },
                    { label: 'VIRTUALIZACIÓN', val: skillImpact.virt, color: '#10b981', icon: '☁️' }
                  ].map((s) => (
                    <div key={s.label} className="space-y-1">
                      <div className="flex justify-between text-[8px] font-black uppercase text-gray-400">
                        <span>{s.icon} {s.label}</span> 
                        <span style={{ color: s.color }}>{s.val}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full transition-all duration-1000" style={{ width: `${s.val}%`, backgroundColor: s.color }}></div>
                      </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* CTA Buttons */}
            <div className="md:col-span-4 flex flex-col gap-3 md:gap-6 mt-1 md:mt-0">
               <div className="space-y-1 md:space-y-3">
                  <p className="text-[7px] md:text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center justify-between px-1">
                    <span>Vacantes Disponibles 🎯</span>
                    <span className="text-[#a81d3a] animate-pulse">● ACTIVO</span>
                  </p>
                  <div className="grid grid-cols-1 gap-2 md:gap-4">
                    {activeCourse.links.map((link, idx) => (
                      <a 
                        key={idx} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative h-11 md:h-24 px-4 md:px-8 overflow-hidden bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#1e293b] text-white rounded-lg md:rounded-[1.5rem] flex items-center justify-between shadow-lg active:scale-95 border border-white/5 animate-neon-pulse"
                      >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine-fast pointer-events-none"></div>
                        
                        <div className="flex flex-col min-w-0 z-10">
                           <span className="text-[5px] md:text-[10px] text-red-400 font-black uppercase tracking-widest mb-0.5">INSCRIPCIÓN ABIERTA 🟢</span>
                           <span className="text-[10px] md:text-[20px] font-black uppercase tracking-wide truncate">
                             CONÉCTATE AL {link.label.toUpperCase()}
                           </span>
                        </div>
                        
                        <div className="shrink-0 w-7 h-7 md:w-16 md:h-16 bg-white/10 rounded-md md:rounded-2xl flex items-center justify-center group-hover:bg-[#a81d3a] transition-all z-10">
                           <svg className="w-3.5 h-3.5 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </div>
                      </a>
                    ))}
                  </div>
               </div>
               
               <div className="flex flex-col gap-3">
                  {activeCourse.linkedinUrl && (
                    <a href={activeCourse.linkedinUrl} target="_blank" rel="noopener noreferrer" className="w-full h-10 md:h-16 bg-white border-2 border-blue-50 text-blue-600 rounded-lg md:rounded-2xl flex items-center justify-center gap-2 hover:bg-blue-50 transition-all shadow-sm active:scale-95 font-black text-[8px] md:text-[12px] uppercase tracking-widest">
                       <span className="text-base md:text-2xl">🔗</span> COMPARTIR LOGRO
                    </a>
                  )}
                  
                  {/* Créditos del Desarrollador - Micro Elegante */}
                  <div className="pt-2 mt-1 border-t border-gray-100 flex items-center justify-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity">
                    <span className="text-[7px] md:text-[8px] font-black text-gray-400 uppercase tracking-widest">Desarrollado por</span>
                    <a 
                      href="https://www.linkedin.com/in/milagros-ramos-a8676231a" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[7px] md:text-[8px] font-black text-[#a81d3a] hover:underline uppercase tracking-widest flex items-center gap-0.5"
                    >
                      Milagros Ramos <span className="text-[9px] md:text-[10px]">↗</span>
                    </a>
                  </div>
               </div>
            </div>

          </div>
        </div>
        
        {/* Indicador visual inferior */}
        <div className="md:hidden sticky bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </footer>

      <style>{`
        @keyframes shine-fast {
          0% { transform: translateX(-100%) skewX(-20deg); }
          30% { transform: translateX(120%) skewX(-20deg); }
          100% { transform: translateX(120%) skewX(-20deg); }
        }
        .group-hover\\:animate-shine-fast { animation: shine-fast 1.8s infinite; }
        
        @keyframes neon-pulse {
          0%, 100% { box-shadow: 0 5px 15px -5px rgba(0,0,0,0.4); }
          50% { box-shadow: 0 5px 25px -5px rgba(168,29,58,0.2); }
        }
        .animate-neon-pulse { animation: neon-pulse 3s infinite; }

        @keyframes pop-in { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-pop-in { animation: pop-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }

        @keyframes fade-slide { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-slide { animation: fade-slide 0.3s ease-out; }
        
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-15px); }
        }
        
        ::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Graduation Modal */}
      {showFinalModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-md" onClick={() => setShowFinalModal(false)}></div>
          <div className="relative bg-white w-full max-w-sm rounded-[3rem] shadow-2xl overflow-hidden animate-pop-in border-[10px] border-[#a81d3a]">
            <div className="bg-[#a81d3a] p-10 text-center text-white">
               <div className="text-7xl mb-4">🎓</div>
               <h3 className="text-xl md:text-3xl font-black uppercase italic leading-tight">{FINAL_MISSION.title}</h3>
            </div>
            <div className="p-8 text-center">
               <p className="text-gray-900 text-base md:text-xl font-bold mb-8 italic">"{FINAL_MISSION.content}"</p>
               <button onClick={() => setShowFinalModal(false)} className="w-full h-14 bg-gray-900 text-white rounded-xl font-black text-[12px] uppercase tracking-widest active:scale-95">FINALIZAR RUTA</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
