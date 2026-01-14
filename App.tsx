
import React, { useState } from 'react';
import { COURSES, CICLO_CHECKPOINT, COLORS } from './constants';
import CourseCard from './components/CourseCard';

const App: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleCourse = (id: number) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen pb-24 bg-[#fcfcfd]">
      {/* Header section with subtle decorative elements */}
      <header className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-red-50 rounded-full blur-[120px] -z-10 opacity-60"></div>
        <div className="max-w-4xl mx-auto relative">
          <div 
            className="inline-block px-4 py-1.5 mb-6 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase border"
            style={{ color: COLORS.ACCENT, borderColor: COLORS.ACCENT + '44', backgroundColor: COLORS.ACCENT + '08' }}
          >
            Nivel Académico • Ciclo 3
          </div>
          <h1 
            className="text-5xl md:text-6xl font-black mb-6 tracking-tight"
            style={{ color: COLORS.COURSE_END }}
          >
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${COLORS.ACCENT}, ${COLORS.COURSE_START})` }}>Redes</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Domina las infraestructuras críticas. Tu camino hacia el éxito en Redes y Comunicaciones de Datos.
          </p>
        </div>
      </header>

      {/* Roadmap track */}
      <main className="max-w-4xl mx-auto px-4 mt-8">
        <div className="relative">
          {/* Background vertical dashed line */}
          <div 
            className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 z-0 hidden md:block"
            style={{ 
              backgroundImage: `linear-gradient(to bottom, ${COLORS.ACCENT}44 0%, ${COLORS.ACCENT}44 50%, transparent 50%)`,
              backgroundSize: '1px 24px',
              backgroundRepeat: 'repeat-y'
            }}
          />

          <div className="flex flex-col pt-4">
            {COURSES.map((course) => (
              <CourseCard 
                key={course.id}
                course={course}
                isExpanded={expandedId === course.id}
                onToggle={() => toggleCourse(course.id)}
              />
            ))}

            {/* Final Checkpoint with Gradient */}
            <div className="relative w-full max-w-xl mx-auto mt-16 mb-24 group">
              <div 
                className="absolute -top-16 left-1/2 w-0.5 h-16 transform -translate-x-1/2"
                style={{ backgroundColor: COLORS.ACCENT + '66' }}
              />

              <div 
                className="absolute -top-14 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full text-white text-[11px] font-black uppercase tracking-[0.25em] shadow-xl z-10"
                style={{ backgroundColor: COLORS.ACCENT }}
              >
                Objetivo Final
              </div>

              <div 
                className="p-10 rounded-[2.5rem] shadow-2xl transition-all duration-500 hover:scale-[1.01] border-t border-white/20"
                style={{ 
                  backgroundImage: `linear-gradient(145deg, ${COLORS.CHECKPOINT_START}, ${COLORS.CHECKPOINT_END})`,
                  color: COLORS.TEXT_LIGHT
                }}
              >
                <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                  <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-md shadow-inner border border-white/20">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl font-black tracking-tight mb-1">
                      {CICLO_CHECKPOINT.title}
                    </h2>
                    <p className="text-white/60 text-xs font-bold tracking-[0.2em] uppercase">Desafío de Integración</p>
                  </div>
                </div>
                
                <div className="relative p-6 bg-black/15 rounded-3xl border border-white/10 leading-relaxed text-white/95 font-medium text-lg">
                  <span className="absolute -top-4 -left-2 text-6xl text-white/10 font-serif leading-none">“</span>
                  {CICLO_CHECKPOINT.content}
                  <span className="absolute -bottom-10 -right-2 text-6xl text-white/10 font-serif leading-none">”</span>
                </div>

                <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-3">
                  {["#PacketTracer", "#OSPF", "#PythonScripting", "#LinuxAdmin"].map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-bold border border-white/20 hover:bg-white/20 transition-colors uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-12 text-center border-t border-gray-100 bg-white">
        <p className="text-gray-400 text-xs font-medium tracking-widest uppercase mb-2">Plataforma Educativa</p>
        <p className="text-gray-900 font-bold">Redes y Comunicaciones de Datos</p>
        <p className="mt-3 text-[11px] font-bold px-4 py-1 rounded-full inline-block" style={{ color: COLORS.ACCENT, backgroundColor: COLORS.ACCENT + '11' }}>
          EXCELENCIA ACADÉMICA • CICLO 3
        </p>
      </footer>
    </div>
  );
};

export default App;
