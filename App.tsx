
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
];

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
      items.push({ type: 'cycle', value: cicloNum, id: `cycle-${cicloNum}` });
      COURSES.filter(c => c.ciclo === cicloNum).forEach(course => {
        items.push({ type: 'course', value: course, id: course.id });
      });
    });
    return items;
  }, []);

  const { pathPoints, positionedItems, roadWidth, decorations } = useMemo(() => {
    const spacing = isMobile ? 80 : 70; 
    const amplitude = isMobile ? 35 : 55; 
    const baselineY = isMobile ? 120 : 160;
    const strokeWidth = isMobile ? 40 : 80;
    
    const path: {x: number, y: number}[] = [];
    const items: any[] = [];
    const totalLength = roadmapItems.length * spacing + (isMobile ? 200 : 350);
    const freq = isMobile ? 80 : 130;

    for (let i = 0; i < totalLength; i += 5) {
      path.push({ x: i, y: baselineY + Math.sin(i / freq) * amplitude });
    }

    roadmapItems.forEach((item, index) => {
      const x = (isMobile ? 60 : 120) + (index * spacing);
      items.push({ ...item, x, y: baselineY + Math.sin(x / freq) * amplitude });
    });

    const decors = [];
    for (let i = 0; i < (isMobile ? 8 : 20); i++) { 
      const segment = Math.floor(Math.random() * roadmapItems.length);
      const x = (isMobile ? 60 : 120) + (segment * spacing) + (Math.random() * 40 - 20);
      const side = Math.random() > 0.5 ? 1 : -1;
      const y = (baselineY + Math.sin(x / freq) * amplitude) + side * (Math.random() * 50 + (isMobile ? 60 : 100));
      decors.push({ ...TECH_DECORATIONS[i % TECH_DECORATIONS.length], x, y, delay: Math.random() * 5, id: `decor-${i}` });
    }

    return { pathPoints: path.map(p => `${p.x},${p.y}`).join(' '), positionedItems: items, roadWidth: strokeWidth, decorations: decors };
  }, [roadmapItems, isMobile]);

  const totalWidth = positionedItems[positionedItems.length - 1].x + (isMobile ? 150 : 300);

  return (
    <div className="h-screen bg-[#f8fafc] flex flex-col font-sans select-none text-gray-900 overflow-hidden">
      {/* Header Fijo */}
      <header className="h-14 shrink-0 px-4 md:px-10 flex justify-between items-center bg-white border-b border-gray-100 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#a81d3a] rounded-lg flex items-center justify-center shadow-lg transform -rotate-3 shrink-0">
            <span className="text-white font-black text-[10px]">T</span>
          </div>
          <h1 className="text-[10px] md:text-[11px] font-black uppercase tracking-tight text-gray-400">
            Roadmap <span className="text-gray-900">Tecsup • Admin. Redes</span>
          </h1>
        </div>
        <div className="bg-red-50 px-2 py-1 rounded border border-red-100">
          <span className="text-[8px] font-black text-[#a81d3a] uppercase">Meta 2026</span>
        </div>
      </header>

      {/* Area del Mapa con Scroll Suave */}
      <main className="flex-grow relative overflow-x-auto overflow-y-hidden scrollbar-hide touch-pan-x bg-[#fcfcfc]" ref={scrollRef}>
        <div className="h-full relative" style={{ width: `${totalWidth}px` }}>
          {/* Decoraciones de Fondo */}
          {decorations.map((d) => (
            <div key={d.id} className="absolute z-10 opacity-60 pointer-events-none md:opacity-100" style={{ left: d.x, top: d.y, transform: 'translate(-50%, -50%)', animation: `float 8s ease-in-out infinite`, animationDelay: `${d.delay}s` }}>
              <div className="w-10 h-10 md:w-16 md:h-16 bg-white border border-gray-100 rounded-2xl flex items-center justify-center shadow-sm backdrop-blur-sm">
                 <span className="text-xl md:text-3xl">{d.icon}</span>
              </div>
            </div>
          ))}

          {/* Carretera Tecnológica */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
            <polyline points={pathPoints} fill="none" stroke="rgba(0,0,0,0.03)" strokeWidth={roadWidth + 15} strokeLinecap="round" strokeLinejoin="round" />
            <polyline points={pathPoints} fill="none" stroke="#1e293b" strokeWidth={roadWidth} strokeLinecap="round" strokeLinejoin="round" />
            <polyline points={pathPoints} fill="none" stroke="#facc15" strokeWidth={isMobile ? 2 : 3} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={isMobile ? "5 10" : "8 16"} />
          </svg>

          {/* Hitos */}
          {positionedItems.map((item) => (
            <div key={item.id} className="absolute z-20" style={{ left: item.x, top: item.y, transform: 'translate(-50%, -50%)' }}>
              {item.type === 'cycle' ? <CycleMilestone number={item.value} /> : <CourseDot course={item.value} isActive={activeCourseId === item.value.id} onSelect={() => setActiveCourseId(item.value.id)} />}
            </div>
          ))}

          {/* Meta Final */}
          <div className="absolute z-30 cursor-pointer group" style={{ left: totalWidth - (isMobile ? 80 : 150), top: isMobile ? 120 : 160, transform: 'translateY(-50%)' }} onClick={() => setShowFinalModal(true)}>
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white border-[5px] border-[#1e293b] rounded-[1.5rem] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
               <span className="text-3xl md:text-4xl animate-bounce">🏁</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Unificado y Responsive */}
      <footer className="relative bg-white border-t-[8px] border-[#a81d3a] shadow-[0_-15px_40px_rgba(0,0,0,0.1)] z-50 shrink-0 max-h-[45vh] md:max-h-none overflow-y-auto scrollbar-hide">
        <div className="max-w-7xl mx-auto p-4 md:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Info Curso */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-4">
                <div className="shrink-0 w-16 h-16 md:w-24 md:h-24 bg-[#a81d3a] text-white rounded-[1.2rem] flex items-center justify-center font-black text-3xl md:text-5xl shadow-xl transform -rotate-1 border-4 border-white">
                  {activeCourse.id}
                </div>
                <div className="min-w-0">
                  <div className="bg-[#1e293b] text-white text-[9px] px-2.5 py-1 rounded-full font-black uppercase tracking-widest inline-block mb-1">CICLO {activeCourse.ciclo}</div>
                  <h2 className="text-xl md:text-3xl lg:text-4xl font-black text-gray-900 uppercase tracking-tighter leading-tight truncate">{activeCourse.title}</h2>
                  <p className="text-[9px] md:text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">{activeCourse.category} • {activeCourse.officialName}</p>
                </div>
              </div>
              <p className="text-gray-700 text-[12px] md:text-[15px] font-bold leading-relaxed border-l-4 border-[#a81d3a] pl-4 italic bg-red-50/20 py-2 rounded-r-xl">
                "{activeCourse.description}"
              </p>
            </div>

            {/* Habilidades Progress */}
            <div className="lg:col-span-3 bg-gray-50/50 p-5 rounded-[1.5rem] md:rounded-[2rem] border border-gray-100">
               <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4">Skill Progress</p>
               <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                  {[
                    { label: 'INFRA', color: 'blue', val: skillImpact.infr },
                    { label: 'PROG', color: 'indigo', val: skillImpact.prog },
                    { label: 'SEGU', color: 'red', val: skillImpact.segu },
                    { label: 'VIRT', color: 'emerald', val: skillImpact.virt }
                  ].map((s) => (
                    <div key={s.label} className="space-y-1.5">
                      <div className="flex justify-between text-[8px] font-black uppercase tracking-tight text-gray-700 px-0.5">
                        <span>{s.label}</span> 
                        <span className={`text-${s.color}-600`}>{s.val}%</span>
                      </div>
                      <div className="h-1.5 md:h-2 w-full bg-gray-200 rounded-full overflow-hidden shadow-inner">
                        <div className={`h-full bg-${s.color}-500 rounded-full transition-all duration-1000 ease-out`} style={{ width: `${s.val}%` }}></div>
                      </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Recursos Dinámicos (Garantiza los 3 links) */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="space-y-2">
                <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Recursos Disponibles ({activeCourse.links.length})</p>
                <div className="flex flex-col gap-2">
                  {activeCourse.links.map((link, idx) => (
                    <a key={idx} href={link.url} target="_blank" className="h-11 px-4 bg-[#1e293b] text-white rounded-xl flex items-center justify-between text-[10px] md:text-[11px] font-black uppercase tracking-widest shadow-lg hover:bg-black hover:scale-[1.02] transition-all active:scale-95 group">
                      <span className="truncate mr-2">{link.label}</span>
                      <span className="group-hover:translate-x-1 transition-transform">↗</span>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2">
                 {activeCourse.youtubeUrl && (
                    <a href={activeCourse.youtubeUrl} target="_blank" className="flex-1 h-12 bg-white text-red-600 border-2 border-red-50 rounded-xl flex items-center justify-center gap-2 hover:bg-red-600 hover:text-white transition-all shadow-sm active:scale-95">
                       <span className="text-xl">📺</span> <span className="text-[9px] font-black uppercase">Clase</span>
                    </a>
                 )}
                 {activeCourse.linkedinUrl && (
                    <a href={activeCourse.linkedinUrl} target="_blank" className="flex-1 h-12 bg-white text-blue-600 border-2 border-blue-50 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition-all shadow-sm active:scale-95">
                       <span className="text-xl">🔗</span> <span className="text-[9px] font-black uppercase">Share</span>
                    </a>
                 )}
              </div>

              <div className="h-14 bg-amber-50 border-2 border-amber-100 rounded-xl flex items-center px-4 gap-3 shadow-inner">
                 <div className="text-2xl drop-shadow-sm">🏆</div>
                 <div className="flex flex-col min-w-0">
                    <span className="text-[7px] text-amber-600 font-black uppercase tracking-widest leading-none mb-0.5">Certificación Oficial</span>
                    <span className="text-[10px] md:text-[11px] font-black text-amber-900 truncate uppercase tracking-tight leading-none">{activeCourse.certification}</span>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </footer>

      {/* Modal Final Premium */}
      {showFinalModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-xl" onClick={() => setShowFinalModal(false)}></div>
          <div className="relative bg-white w-full max-w-sm rounded-[3.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden animate-pop-in border-[12px] border-[#a81d3a]">
            <div className="bg-[#a81d3a] p-10 text-center text-white">
               <div className="text-7xl mb-6">🎓</div>
               <h3 className="text-2xl font-black uppercase tracking-tighter italic leading-tight">{FINAL_MISSION.title}</h3>
            </div>
            <div className="p-10 text-center">
               <p className="text-gray-900 text-[16px] font-bold leading-relaxed mb-10">"{FINAL_MISSION.content}"</p>
               <button onClick={() => setShowFinalModal(false)} className="w-full h-16 bg-gray-900 text-white rounded-2xl font-black text-[14px] uppercase tracking-[0.2em] hover:bg-black transition-all shadow-2xl active:scale-95">¡Misión Cumplida!</button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes pop-in { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-pop-in { animation: pop-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-15px); }
        }
        ::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default App;
