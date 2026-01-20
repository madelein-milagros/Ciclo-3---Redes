
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { COURSES, FINAL_MISSION } from './constants';
import CycleMilestone from './components/CycleMilestone';
import CourseDot from './components/CourseDot';

const TECH_DECORATIONS = [
  { icon: '🛰️', label: 'Satélite de Datos', tip: 'Latencia: El tiempo de viaje de tus paquetes.' },
  { icon: '🛡️', label: 'Firewall Activo', tip: 'Seguridad perimetral: Tu primera línea de defensa.' },
  { icon: '☁️', label: 'Cloud Computing', tip: 'Escalabilidad: La red que crece contigo.' },
  { icon: '🐧', label: 'Kernel Linux', tip: 'Estabilidad: El corazón de los servidores mundiales.' },
  { icon: '📡', label: 'Antena 5G', tip: 'Ancho de Banda: Más datos en menos tiempo.' },
  { icon: '🔒', label: 'Cifrado AES', tip: 'Privacidad: Datos ilegibles para intrusos.' },
  { icon: '🐍', label: 'Python Automation', tip: 'Eficiencia: Menos errores, más velocidad.' },
  { icon: '🌐', label: 'Protocolo IPv6', tip: 'Infinitud: Direcciones para cada átomo del planeta.' },
  { icon: '🔧', label: 'Soporte Técnico', tip: 'Hardware: La base sólida de toda comunicación.' },
  { icon: '💻', label: 'Terminal SSH', tip: 'Control: Gestión remota segura y eficiente.' },
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
    const title = activeCourse.title.toLowerCase();
    return {
      networking: title.includes('red') || title.includes('protocolo') || title.includes('enrutamiento') ? 90 : 40,
      security: title.includes('seguridad') || title.includes('hacking') || title.includes('firewall') ? 95 : 30,
      programming: title.includes('programación') || title.includes('python') || title.includes('iot') ? 85 : 20
    };
  }, [activeCourse]);

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

  const { pathPoints, positionedItems, roadWidth, decorations } = useMemo(() => {
    const spacing = isMobile ? 65 : 55; 
    const amplitude = isMobile ? 40 : 45; 
    const baselineY = isMobile ? 120 : 130;
    const strokeWidth = isMobile ? 45 : 65;
    
    const path: {x: number, y: number}[] = [];
    const items: any[] = [];
    const totalLength = roadmapItems.length * spacing + (isMobile ? 150 : 200);
    const freq = isMobile ? 80 : 100;

    for (let i = 0; i < totalLength; i += 5) {
      const x = i;
      const y = baselineY + Math.sin(i / freq) * amplitude;
      path.push({ x, y });
    }

    roadmapItems.forEach((item, index) => {
      const x = (isMobile ? 60 : 80) + (index * spacing);
      const y = baselineY + Math.sin(x / freq) * amplitude;
      items.push({ ...item, x, y });
    });

    const decors = [];
    for (let i = 0; i < (isMobile ? 6 : 12); i++) { 
      const segment = Math.floor(Math.random() * roadmapItems.length);
      const x = (isMobile ? 60 : 80) + (segment * spacing) + (Math.random() * 20 - 10);
      const side = Math.random() > 0.5 ? 1 : -1;
      const yOffset = side * (Math.random() * 40 + 70); 
      const y = (baselineY + Math.sin(x / freq) * amplitude) + yOffset;
      decors.push({ ...TECH_DECORATIONS[i % TECH_DECORATIONS.length], x, y, delay: Math.random() * 5, id: `decor-${i}` });
    }

    return { pathPoints: path.map(p => `${p.x},${p.y}`).join(' '), positionedItems: items, roadWidth: strokeWidth, decorations: decors };
  }, [roadmapItems, isMobile]);

  const totalWidth = positionedItems[positionedItems.length - 1].x + (isMobile ? 100 : 150);

  return (
    <div className="h-screen bg-white flex flex-col font-sans select-none text-gray-900 overflow-hidden">
      <header className="h-14 shrink-0 px-4 md:px-8 flex justify-between items-center bg-white border-b border-gray-100 z-50">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-8 h-8 bg-[#1e293b] rounded-lg flex items-center justify-center shadow-md shrink-0">
            <span className="text-white font-black text-xs">T</span>
          </div>
          <h1 className="text-[9px] md:text-[10px] font-black tracking-[0.1em] md:tracking-[0.15em] uppercase text-gray-400 line-clamp-1">
            Roadmap <span className="text-gray-900">Tecsup • Admin. Redes y Comunicaciones</span>
          </h1>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[8px] md:text-[9px] font-black text-[#a81d3a] uppercase tracking-widest bg-red-50 px-2 py-1 rounded-md">TECSUP 2026</span>
        </div>
      </header>

      <main className="flex-grow relative overflow-x-auto overflow-y-hidden scrollbar-hide bg-[#fcfcfc] touch-pan-x" ref={scrollRef}>
        <div className="h-full relative" style={{ width: `${totalWidth}px` }}>
          {isMobile && (
            <div className="absolute top-4 left-4 animate-pulse pointer-events-none">
              <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest flex items-center gap-2">
                Desliza para explorar <span className="text-lg">➡️</span>
              </span>
            </div>
          )}

          {decorations.map((d) => (
            <div key={d.id} className="absolute z-10 group cursor-help transition-all duration-700" style={{ left: d.x, top: d.y, transform: 'translate(-50%, -50%)', animation: `float 8s ease-in-out infinite`, animationDelay: `${d.delay}s` }}>
              <div className="w-10 h-10 md:w-14 md:h-14 bg-white/60 border border-gray-100 rounded-2xl flex items-center justify-center shadow-sm backdrop-blur-[2px] group-hover:bg-white group-hover:scale-110 group-hover:shadow-xl transition-all duration-500 overflow-hidden">
                 <span className="text-xl md:text-3xl grayscale group-hover:grayscale-0 transition-all">{d.icon}</span>
              </div>
            </div>
          ))}

          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
            <polyline points={pathPoints} fill="none" stroke="rgba(0,0,0,0.02)" strokeWidth={roadWidth + 10} strokeLinecap="round" strokeLinejoin="round" />
            <polyline points={pathPoints} fill="none" stroke="#1e293b" strokeWidth={roadWidth} strokeLinecap="round" strokeLinejoin="round" />
            <polyline points={pathPoints} fill="none" stroke="#facc15" strokeWidth={isMobile ? 2.5 : 3} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={isMobile ? "6 12" : "8 16"} />
          </svg>

          {positionedItems.map((item) => (
            <div key={item.id} className="absolute z-20" style={{ left: item.x, top: item.y, transform: 'translate(-50%, -50%)' }}>
              {item.type === 'cycle' ? <CycleMilestone number={item.value} /> : <CourseDot course={item.value} isActive={activeCourseId === item.value.id} onSelect={() => setActiveCourseId(item.value.id)} />}
            </div>
          ))}

          <div className="absolute z-30 cursor-pointer group" style={{ left: totalWidth - (isMobile ? 60 : 100), top: isMobile ? 120 : 130, transform: 'translateY(-50%)' }} onClick={() => setShowFinalModal(true)}>
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white border-[4px] border-[#1e293b] rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
               <span className="text-xl md:text-2xl">🏁</span>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative bg-white border-t-[6px] md:border-t-[8px] border-[#a81d3a] shadow-[0_-20px_60px_rgba(0,0,0,0.12)] z-50 shrink-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1e293b 0.7px, transparent 0.7px)', backgroundSize: '28px 28px' }}></div>
        
        <div className="absolute -right-6 -bottom-6 text-[120px] md:text-[200px] opacity-[0.03] pointer-events-none select-none transform -rotate-12 transition-all duration-700">
          {activeCourse.title.includes('Seguridad') ? '🛡️' : activeCourse.title.includes('Python') ? '🐍' : '🌐'}
        </div>

        <div className="max-w-7xl mx-auto p-5 md:p-12 lg:p-14 flex flex-col gap-6 md:gap-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 items-center">
            
            {/* Columna 1: Info e Identidad */}
            <div className="lg:col-span-5 flex flex-col gap-3 md:gap-5">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="shrink-0 w-12 h-12 md:w-24 md:h-24 bg-[#a81d3a] text-white rounded-xl md:rounded-[1.5rem] flex items-center justify-center font-black text-2xl md:text-5xl shadow-2xl transform -rotate-2 border-b-4 md:border-b-[10px] border-black/20">
                  {activeCourse.id}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="bg-[#1e293b] text-white text-[8px] md:text-[10px] px-2.5 py-0.5 rounded-full font-black uppercase tracking-widest">CICLO {activeCourse.ciclo}</div>
                  </div>
                  <h2 className="text-lg md:text-3xl lg:text-4xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-1 md:mb-2">{activeCourse.title}</h2>
                  <p className="text-[8px] md:text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] md:tracking-[0.3em] leading-tight">{activeCourse.officialName}</p>
                </div>
              </div>
              <p className="text-gray-700 text-[11px] md:text-[15px] font-bold leading-relaxed italic border-l-2 md:border-l-4 border-[#a81d3a] pl-4 md:pl-6 py-1 md:py-3">
                "{activeCourse.description}"
              </p>
            </div>

            {/* Columna 2: Visor de Competencias */}
            <div className="lg:col-span-3 flex flex-col gap-3 md:gap-5 justify-center h-full lg:border-x border-gray-100 px-0 lg:px-10">
               <p className="text-[8px] md:text-[9px] font-black text-gray-400 uppercase tracking-[0.3em] mb-1">Professional Level</p>
               <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 lg:space-y-5">
                  {[
                    { label: 'Net', color: 'blue', val: skillImpact.networking },
                    { label: 'Sec', color: 'red', val: skillImpact.security },
                    { label: 'Auto', color: 'indigo', val: skillImpact.programming }
                  ].map((s) => (
                    <div key={s.label} className="space-y-1 md:space-y-2">
                      <div className="flex justify-between text-[7px] md:text-[10px] font-black uppercase tracking-tighter text-gray-700"><span>{s.label}</span> <span className={`text-${s.color}-600`}>{s.val}%</span></div>
                      <div className="h-1.5 md:h-3 w-full bg-gray-100 rounded-full overflow-hidden shadow-inner">
                        <div className={`h-full bg-${s.color}-500 rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(0,0,0,0.1)]`} style={{ width: `${s.val}%` }}></div>
                      </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Columna 3: Acciones y Badges */}
            <div className="lg:col-span-4 flex flex-col gap-4 md:gap-6">
              <div className="flex flex-wrap gap-2 md:gap-3">
                {activeCourse.links.map((link, idx) => (
                  <a key={idx} href={link.url} target="_blank" className="flex-grow md:flex-none h-10 md:h-12 px-4 md:px-6 bg-[#1e293b] text-white rounded-xl flex items-center justify-center gap-2 md:gap-3 text-[9px] md:text-[11px] font-black uppercase tracking-[0.1em] shadow-xl hover:bg-black transition-all group">
                    {link.label} <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[10px] md:text-[12px]">↗</span>
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="flex gap-2">
                  {activeCourse.youtubeUrl && (
                    <a href={activeCourse.youtubeUrl} target="_blank" className="w-10 h-10 md:w-14 md:h-14 bg-red-50 text-red-600 border border-red-100 rounded-xl flex items-center justify-center transition-all hover:bg-red-600 hover:text-white" title="Tutorial">
                       <span className="text-xl md:text-2xl">📺</span>
                    </a>
                  )}
                  {activeCourse.linkedinUrl && (
                    <a href={activeCourse.linkedinUrl} target="_blank" className="w-10 h-10 md:w-14 md:h-14 bg-blue-50 text-blue-600 border border-blue-100 rounded-xl flex items-center justify-center transition-all hover:bg-blue-600 hover:text-white" title="Compartir Logro">
                       <span className="text-xl md:text-2xl">🔗</span>
                    </a>
                  )}
                </div>
                <div className="flex-grow h-14 md:h-16 px-4 md:px-6 bg-amber-50 border-2 border-amber-200 rounded-2xl flex items-center gap-3 md:gap-5 shadow-sm overflow-hidden">
                  <span className="text-2xl md:text-4xl animate-bounce-subtle shrink-0">🏆</span>
                  <div className="flex flex-col min-w-0">
                      <span className="text-[7px] md:text-[8px] text-amber-600 font-black uppercase tracking-[0.2em] leading-none mb-0.5 md:mb-1">Professional Goal</span>
                      <span className="text-[9px] md:text-[12px] font-black text-amber-900 uppercase tracking-tight truncate">TECSUP SPECIALIST</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-4 md:pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
             <div className="flex items-center gap-1.5 md:gap-2.5">
               {[1,2,3,4,5,6].map(c => (
                 <div key={c} className={`h-1.5 rounded-full transition-all duration-1000 ${activeCourse.ciclo >= c ? 'w-6 md:w-10 bg-[#a81d3a]' : 'w-2 md:w-3 bg-gray-100'}`}></div>
               ))}
               <span className="ml-2 md:ml-4 text-[7px] md:text-[9px] font-black text-gray-400 uppercase tracking-[0.3em] md:tracking-[0.5em]">TECSUP ROADMAP 2026</span>
             </div>
             <p className="text-[7px] md:text-[9px] font-bold text-gray-400 tracking-widest uppercase">TECSUP 2026 • ADMIN. REDES Y COMUNICACIONES • PERÚ</p>
          </div>
        </div>
      </footer>

      {showFinalModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-md" onClick={() => setShowFinalModal(false)}></div>
          <div className="relative bg-white w-full max-w-sm rounded-[2.5rem] md:rounded-[3rem] shadow-2xl overflow-hidden animate-pop-in border-[6px] md:border-[10px] border-[#a81d3a]">
            <div className="bg-[#a81d3a] p-8 md:p-10 text-center text-white">
               <span className="text-5xl md:text-6xl block mb-3 md:mb-4">🏆</span>
               <h3 className="text-lg md:text-xl font-black uppercase tracking-tighter italic leading-none">{FINAL_MISSION.title}</h3>
            </div>
            <div className="p-8 md:p-10 text-center">
               <p className="text-gray-800 text-[13px] md:text-[14px] font-bold leading-relaxed mb-8 md:mb-10">"{FINAL_MISSION.content}"</p>
               <button onClick={() => setShowFinalModal(false)} className="w-full h-12 md:h-14 bg-gray-900 text-white rounded-xl md:rounded-2xl font-black text-[11px] md:text-[12px] uppercase tracking-[0.2em] md:tracking-[0.25em] hover:bg-black transition-all shadow-xl">Misión Completada</button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes pop-in { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-pop-in { animation: pop-in 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-15px); }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-bounce-subtle { animation: bounce-subtle 2.5s infinite ease-in-out; }
        ::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

export default App;
