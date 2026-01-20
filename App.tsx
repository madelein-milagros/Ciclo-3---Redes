
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
    const spacing = isMobile ? 85 : 75; 
    const amplitude = isMobile ? 25 : 50; 
    const baselineY = isMobile ? 120 : 160;
    const strokeWidth = isMobile ? 45 : 80;
    
    const path: {x: number, y: number}[] = [];
    const items: any[] = [];
    const totalLength = roadmapItems.length * spacing + (isMobile ? 250 : 400);
    const freq = isMobile ? 80 : 130;

    for (let i = 0; i < totalLength; i += 5) {
      path.push({ x: i, y: baselineY + Math.sin(i / freq) * amplitude });
    }

    roadmapItems.forEach((item, index) => {
      const x = (isMobile ? 60 : 120) + (index * spacing);
      items.push({ ...item, x, y: baselineY + Math.sin(x / freq) * amplitude });
    });

    const decors = [];
    for (let i = 0; i < (isMobile ? 12 : 25); i++) { 
      const segment = Math.floor(Math.random() * roadmapItems.length);
      const x = (isMobile ? 60 : 120) + (segment * spacing) + (Math.random() * 40 - 20);
      const side = Math.random() > 0.5 ? 1 : -1;
      const y = (baselineY + Math.sin(x / freq) * amplitude) + side * (Math.random() * 60 + (isMobile ? 70 : 110));
      decors.push({ ...TECH_DECORATIONS[i % TECH_DECORATIONS.length], x, y, delay: Math.random() * 5, id: `decor-${i}` });
    }

    return { pathPoints: path.map(p => `${p.x},${p.y}`).join(' '), positionedItems: items, roadWidth: strokeWidth, decorations: decors };
  }, [roadmapItems, isMobile]);

  const totalWidth = positionedItems[positionedItems.length - 1].x + (isMobile ? 200 : 400);

  return (
    <div className="h-screen bg-[#f8fafc] flex flex-col font-sans select-none text-gray-900 overflow-hidden">
      {/* Header Fijo */}
      <header className="h-14 shrink-0 px-4 md:px-10 flex justify-between items-center bg-white border-b border-gray-100 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#a81d3a] rounded-lg flex items-center justify-center shadow-lg transform -rotate-3 shrink-0">
            <span className="text-white font-black text-[10px]">T</span>
          </div>
          <h1 className="text-[10px] md:text-[12px] font-black uppercase tracking-tight text-gray-400">
            Roadmap <span className="text-gray-900">Tecsup • Redes</span>
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
            <div key={d.id} className="absolute z-10 opacity-30 pointer-events-none md:opacity-100" style={{ left: d.x, top: d.y, transform: 'translate(-50%, -50%)', animation: `float 10s ease-in-out infinite`, animationDelay: `${d.delay}s` }}>
              <div className="w-10 h-10 md:w-16 md:h-16 bg-white border border-gray-100 rounded-2xl flex items-center justify-center shadow-sm">
                 <span className="text-xl md:text-3xl">{d.icon}</span>
              </div>
            </div>
          ))}

          {/* Carretera Tecnológica */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
            <polyline points={pathPoints} fill="none" stroke="rgba(0,0,0,0.02)" strokeWidth={roadWidth + 20} strokeLinecap="round" strokeLinejoin="round" />
            <polyline points={pathPoints} fill="none" stroke="#1e293b" strokeWidth={roadWidth} strokeLinecap="round" strokeLinejoin="round" />
            <polyline points={pathPoints} fill="none" stroke="#facc15" strokeWidth={isMobile ? 2.5 : 4} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={isMobile ? "6 12" : "10 20"} />
          </svg>

          {/* Hitos */}
          {positionedItems.map((item) => (
            <div key={item.id} className="absolute z-20" style={{ left: item.x, top: item.y, transform: 'translate(-50%, -50%)' }}>
              {item.type === 'cycle' ? <CycleMilestone number={item.value} /> : <CourseDot course={item.value} isActive={activeCourseId === item.value.id} onSelect={() => setActiveCourseId(item.value.id)} />}
            </div>
          ))}

          {/* Meta Final Flag */}
          <div className="absolute z-30 cursor-pointer group" style={{ left: totalWidth - (isMobile ? 100 : 200), top: isMobile ? 120 : 160, transform: 'translateY(-50%)' }} onClick={() => setShowFinalModal(true)}>
            <div className="w-16 h-16 md:w-24 md:h-24 bg-white border-[6px] border-[#1e293b] rounded-[1.8rem] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500 hover:rotate-3">
               <span className="text-3xl md:text-5xl animate-bounce">🏁</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Unificado y Flexible */}
      <footer className="relative bg-white border-t-[8px] border-[#a81d3a] shadow-[0_-15px_50px_rgba(0,0,0,0.15)] z-50 shrink-0 max-h-[60vh] md:max-h-none overflow-y-auto scrollbar-hide">
        <div className="max-w-7xl mx-auto p-5 md:p-10 lg:p-12 pb-12 md:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Info Curso */}
            <div className="lg:col-span-5 space-y-4 md:space-y-6">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="shrink-0 w-16 h-16 md:w-28 md:h-28 bg-[#a81d3a] text-white rounded-2xl md:rounded-[2rem] flex items-center justify-center font-black text-3xl md:text-6xl shadow-xl transform -rotate-1 border-4 border-white">
                  {activeCourse.id}
                </div>
                <div className="min-w-0">
                  <div className="bg-[#1e293b] text-white text-[9px] md:text-[11px] px-3 py-1 rounded-full font-black uppercase tracking-widest inline-block mb-1.5 shadow-sm">CICLO {activeCourse.ciclo}</div>
                  <h2 className="text-xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter leading-tight truncate mb-1">{activeCourse.title}</h2>
                  <p className="text-[9px] md:text-[13px] font-black text-gray-400 uppercase tracking-[0.2em]">{activeCourse.category} • {activeCourse.officialName}</p>
                </div>
              </div>
              <p className="text-gray-700 text-[12px] md:text-[17px] font-bold leading-relaxed border-l-[6px] border-[#a81d3a] pl-5 italic bg-red-50/30 py-3 rounded-r-2xl pr-3">
                "{activeCourse.description}"
              </p>
            </div>

            {/* Habilidades (Hidden in mobile for space, visible in desktop) */}
            <div className="lg:col-span-3 bg-gray-50/50 p-6 rounded-[2rem] border border-gray-100 hidden md:block">
               <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-5">Dominio Tecnológico</p>
               <div className="space-y-4">
                  {[
                    { label: 'INFRA', color: 'blue', val: skillImpact.infr },
                    { label: 'PROG', color: 'indigo', val: skillImpact.prog },
                    { label: 'SEGU', color: 'red', val: skillImpact.segu },
                    { label: 'VIRT', color: 'emerald', val: skillImpact.virt }
                  ].map((s) => (
                    <div key={s.label} className="space-y-1.5">
                      <div className="flex justify-between text-[9px] font-black uppercase text-gray-700 px-1">
                        <span>{s.label}</span> 
                        <span className={`text-${s.color}-600`}>{s.val}%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden shadow-inner">
                        <div className={`h-full bg-${s.color}-500 rounded-full transition-all duration-1000 ease-out`} style={{ width: `${s.val}%` }}></div>
                      </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Recursos Dinámicos y Certificación */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="space-y-3">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Recursos Oficiales ({activeCourse.links.length})</p>
                <div className="grid grid-cols-1 gap-2">
                  {activeCourse.links.map((link, idx) => (
                    <a key={idx} href={link.url} target="_blank" className="h-12 px-5 bg-[#1e293b] text-white rounded-xl flex items-center justify-between text-[11px] md:text-[12px] font-black uppercase tracking-widest shadow-lg hover:bg-black hover:scale-[1.02] transition-all active:scale-95 group border border-white/10">
                      <span className="truncate mr-3">{link.label}</span>
                      <span className="group-hover:translate-x-1 transition-transform opacity-70">↗</span>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3">
                 {activeCourse.youtubeUrl && (
                    <a href={activeCourse.youtubeUrl} target="_blank" className="flex-1 h-12 bg-white text-red-600 border-2 border-red-50 rounded-xl flex items-center justify-center gap-2 hover:bg-red-50 transition-all shadow-md active:scale-95">
                       <span className="text-xl">📺</span> <span className="text-[10px] font-black uppercase">Clase</span>
                    </a>
                 )}
                 {activeCourse.linkedinUrl && (
                    <a href={activeCourse.linkedinUrl} target="_blank" className="flex-1 h-12 bg-white text-blue-600 border-2 border-blue-50 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-50 transition-all shadow-md active:scale-95">
                       <span className="text-xl">🔗</span> <span className="text-[10px] font-black uppercase">Share</span>
                    </a>
                 )}
              </div>

              {/* Caja de Certificación Premium y Visible */}
              <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl flex items-center gap-4 shadow-[0_5px_20px_rgba(251,191,36,0.15)] mt-2">
                 <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-3xl animate-pulse">
                    🏆
                 </div>
                 <div className="flex flex-col min-w-0">
                    <span className="text-[8px] text-amber-600 font-black uppercase tracking-[0.2em] mb-0.5">Logro Desbloqueado</span>
                    <span className="text-[11px] md:text-[13px] font-black text-amber-900 truncate uppercase tracking-tight leading-tight">
                       {activeCourse.certification}
                    </span>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </footer>

      <style>{`
        @keyframes pop-in { from { transform: scale(0.85); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-pop-in { animation: pop-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-15px); }
        }
        ::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        
        @media (max-width: 768px) {
          footer {
            border-top-left-radius: 2.5rem;
            border-top-right-radius: 2.5rem;
          }
        }
      `}</style>

      {/* Modal Final */}
      {showFinalModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-xl" onClick={() => setShowFinalModal(false)}></div>
          <div className="relative bg-white w-full max-w-sm rounded-[4rem] shadow-2xl overflow-hidden animate-pop-in border-[12px] border-[#a81d3a]">
            <div className="bg-[#a81d3a] p-12 text-center text-white">
               <div className="text-8xl mb-6">🎓</div>
               <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic leading-none">{FINAL_MISSION.title}</h3>
            </div>
            <div className="p-10 text-center">
               <p className="text-gray-900 text-lg font-bold leading-relaxed mb-10 italic">"{FINAL_MISSION.content}"</p>
               <button onClick={() => setShowFinalModal(false)} className="w-full h-16 bg-gray-900 text-white rounded-2xl font-black text-[14px] uppercase tracking-[0.2em] shadow-xl active:scale-95">¡Misión Cumplida!</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
