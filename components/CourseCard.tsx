
import React from 'react';
import { Course } from '../types';
import { COLORS } from '../constants';

interface CourseCardProps {
  course: Course;
  isExpanded: boolean;
  onToggle: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, isExpanded, onToggle }) => {
  return (
    <div className="relative w-full max-w-xl mx-auto mb-8 transition-all duration-300">
      {/* Connector Line Top */}
      <div 
        className="absolute -top-8 left-1/2 w-0.5 h-8 transform -translate-x-1/2"
        style={{ backgroundColor: COLORS.ACCENT + '66' }}
      />
      
      {/* Node Dot */}
      <div 
        className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full z-10 shadow-sm border-2"
        style={{ backgroundColor: COLORS.TEXT_LIGHT, borderColor: COLORS.ACCENT }}
      />

      {/* Main Card with Gradient Header */}
      <div 
        onClick={onToggle}
        className={`cursor-pointer rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 border ${isExpanded ? 'ring-4 ring-offset-2 border-transparent' : 'border-white/10'}`}
        style={{ 
          backgroundImage: isExpanded ? 'none' : `linear-gradient(135deg, ${COLORS.COURSE_START}, ${COLORS.COURSE_END})`,
          backgroundColor: isExpanded ? COLORS.COURSE_END : 'transparent',
          // Corregimos ringColor usando una variable CSS que Tailwind entiende para 'ring'
          ['--tw-ring-color' as any]: COLORS.ACCENT + '44'
        }}
      >
        {/* Card Header (Always visible) */}
        <div className={`p-6 flex items-center justify-between transition-colors duration-300 ${isExpanded ? '' : 'bg-white/5'}`}>
          <div className="flex items-center gap-4">
            <span 
              className={`flex items-center justify-center w-8 h-8 rounded-lg font-bold text-sm backdrop-blur-sm border transition-all duration-300 ${isExpanded ? 'bg-white text-[#830c24] border-white' : 'bg-white/20 text-white border-white/20'}`}
            >
              {course.id}
            </span>
            <h3 className={`text-xl font-bold tracking-tight transition-colors duration-300 ${isExpanded ? 'text-white' : 'text-white drop-shadow-sm'}`}>
              {course.title}
            </h3>
          </div>
          <div className={`transition-transform duration-500 rounded-full p-1 ${isExpanded ? 'rotate-180 bg-white/20' : 'bg-white/10'}`}>
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Expandable Content (White Background) */}
        <div 
          className={`overflow-hidden transition-all duration-500 bg-white ${isExpanded ? 'max-h-[650px] opacity-100 border-t-4' : 'max-h-0 opacity-0 border-t-0'}`}
          style={{ borderColor: COLORS.ACCENT }}
        >
          <div className="p-8 space-y-6">
            <div className="flex items-start gap-4 group">
              <div className="mt-1 p-2.5 rounded-xl transition-colors" style={{ backgroundColor: COLORS.ACCENT + '15' }}>
                <span className="text-lg">📘</span>
              </div>
              <div>
                <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">Nombre Oficial</p>
                <p className="font-bold text-lg" style={{ color: COLORS.COURSE_END }}>{course.officialName}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="mt-1 p-2.5 rounded-xl transition-colors" style={{ backgroundColor: COLORS.ACCENT + '15' }}>
                <span className="text-lg">🛠️</span>
              </div>
              <div>
                <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">Descripción</p>
                <p className="text-gray-700 text-sm leading-relaxed font-medium">{course.description}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="mt-1 p-2.5 rounded-xl transition-colors" style={{ backgroundColor: COLORS.ACCENT + '15' }}>
                <span className="text-lg">🏆</span>
              </div>
              <div>
                <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">Certificación</p>
                <p className="text-sm font-bold italic border-l-4 pl-4" style={{ color: COLORS.COURSE_START, borderColor: COLORS.ACCENT + '44' }}>
                  {course.certification}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-3 px-1">Recursos Disponibles</p>
              <div className="flex flex-col gap-3">
                {course.links.map((link, idx) => (
                  <a 
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-between w-full px-5 py-3 rounded-2xl text-sm font-bold transition-all border-2"
                    style={{ 
                      color: COLORS.COURSE_END, 
                      borderColor: COLORS.ACCENT + '22',
                      backgroundColor: 'transparent'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = COLORS.ACCENT + '08';
                      e.currentTarget.style.borderColor = COLORS.ACCENT;
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.borderColor = COLORS.ACCENT + '22';
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>{link.label}</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
