
import React from 'react';
import { Course } from '../types';

interface CourseNodeProps {
  course: Course;
  isActive: boolean;
  onSelect: () => void;
  position: { x: number; y: number };
}

const CourseNode: React.FC<CourseNodeProps> = ({ course, isActive, onSelect }) => {
  return (
    <div className="relative flex flex-col items-center group">
      {/* Banner de Categoría (Solo cuando está activo) */}
      {isActive && (
        <div className="absolute -top-14 z-20">
          <div className="bg-[#1e293b] text-white px-4 py-1.5 rounded-lg text-[8px] font-black uppercase tracking-widest shadow-lg border-2 border-white/10 animate-bounce">
            ADMINISTRACIÓN
          </div>
          <div className="w-2 h-2 bg-[#1e293b] rotate-45 mx-auto -mt-1 border-r border-b border-white/10"></div>
        </div>
      )}

      {/* Hito Cuadrado */}
      <button
        onClick={onSelect}
        className={`relative w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] flex items-center justify-center transition-all duration-500 border-[6px] outline-none
          ${isActive 
            ? 'bg-[#a81d3a] border-white scale-110 shadow-[0_20px_40px_rgba(168,29,58,0.4)] z-10' 
            : 'bg-white border-[#1e293b] shadow-[8px_8px_0px_rgba(0,0,0,0.1)] hover:rotate-6 hover:shadow-[12px_12px_0px_rgba(0,0,0,0.15)] z-0'}`}
      >
        <span className={`text-2xl md:text-3xl font-black italic tracking-tighter ${isActive ? 'text-white' : 'text-[#1e293b]'}`}>
          {course.id}
        </span>
      </button>

      {/* Título en hover (si no está activo) */}
      {!isActive && (
        <div className="absolute top-24 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-white px-3 py-1 rounded-md shadow-md border border-gray-100">
           <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">{course.title}</span>
        </div>
      )}
    </div>
  );
};

export default CourseNode;
