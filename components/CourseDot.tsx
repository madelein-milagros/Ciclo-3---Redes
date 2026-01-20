
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
      {/* Tooltip de Título */}
      <div className={`absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#1e293b] text-white px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-[0.15em] transition-all duration-300 pointer-events-none shadow-2xl border border-white/10 z-50
        ${isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-90 md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-hover:scale-100'}`}>
        {course.title}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1e293b] rotate-45 border-r border-b border-white/10"></div>
      </div>

      <button
        onClick={onSelect}
        className={`w-5 h-5 md:w-7 md:h-7 rounded-full border-[3px] transition-all duration-500 shadow-sm relative
          ${isActive 
            ? 'bg-[#a81d3a] border-white scale-125 z-10 shadow-[0_0_20px_rgba(168,29,58,0.7)]' 
            : 'bg-[#ff9f9f] border-white/80 hover:bg-[#a81d3a] hover:scale-110'}`}
      >
        {isActive && (
          <div className="absolute inset-0 rounded-full animate-ping opacity-40 bg-[#a81d3a]"></div>
        )}
      </button>
    </div>
  );
};

export default CourseDot;
