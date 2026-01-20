
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
      {/* Tooltip de Título - Solo visible en desktop o cuando está activo */}
      <div className={`absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white px-3 py-1 rounded-lg text-[7px] md:text-[8px] font-black uppercase tracking-widest transition-all duration-300 pointer-events-none shadow-xl border border-white/10 z-50
        ${isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-90 md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-hover:scale-100'}`}>
        {course.title}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-900 rotate-45 border-r border-b border-white/10"></div>
      </div>

      <button
        onClick={onSelect}
        className={`w-5 h-5 md:w-6 md:h-6 rounded-full border-[2.5px] transition-all duration-500 shadow-md relative
          ${isActive 
            ? 'bg-[#a81d3a] border-white scale-125 z-10 shadow-[0_0_15px_rgba(168,29,58,0.6)]' 
            : 'bg-[#fca5a5] border-white/50 hover:bg-[#a81d3a] hover:scale-110'}`}
      >
        {isActive && (
          <div className="absolute inset-0 rounded-full animate-ping opacity-40 bg-[#a81d3a]"></div>
        )}
      </button>
    </div>
  );
};

export default CourseDot;
