
import React from 'react';
import { Course } from '../types';

interface CourseDotProps {
  course: Course;
  isActive: boolean;
  onSelect: () => void;
}

const CourseDot: React.FC<CourseDotProps> = ({ course, isActive, onSelect }) => {
  return (
    <div className="relative group">
      {/* Tooltip de Título (más pequeño en móvil) */}
      <div className={`absolute -top-12 md:-top-14 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white px-2 py-1 md:px-3 md:py-1.5 rounded-md md:rounded-lg text-[7px] md:text-[9px] font-black uppercase tracking-widest transition-all duration-300 pointer-events-none shadow-xl border-2 border-white/10
        ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'}`}>
        {course.title}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 border-r border-b border-white/10"></div>
      </div>

      <button
        onClick={onSelect}
        className={`w-7 h-7 md:w-10 md:h-10 rounded-full border-[3px] md:border-4 transition-all duration-500 shadow-lg
          ${isActive 
            ? 'bg-[#a81d3a] border-white scale-110 md:scale-125 z-10 shadow-[0_0_15px_rgba(168,29,58,0.5)]' 
            : 'bg-[#fca5a5] border-white/30 hover:bg-[#a81d3a]'}`}
      >
        {isActive && (
          <div className="absolute inset-0 rounded-full animate-ping opacity-30 bg-[#a81d3a]"></div>
        )}
      </button>
    </div>
  );
};

export default CourseDot;
