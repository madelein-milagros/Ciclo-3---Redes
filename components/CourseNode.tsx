
import React from 'react';
import { Course } from '../types';
import { COLORS } from '../constants';

interface CourseNodeProps {
  course: Course;
  isActive: boolean;
  onSelect: () => void;
  position: { x: number; y: number };
}

const CourseNode: React.FC<CourseNodeProps> = ({ course, isActive, onSelect, position }) => {
  return (
    <div 
      className="absolute transition-all duration-500 ease-in-out z-20"
      style={{ 
        left: `${position.x}%`, 
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <button
        onClick={onSelect}
        className="group relative flex flex-col items-center outline-none touch-none"
      >
        {/* Aura de selección */}
        {isActive && (
          <div 
            className="absolute inset-0 rounded-full animate-ping opacity-20 scale-125 bg-red-500"
          />
        )}
        
        {/* Marcador de Estación - Dinámico */}
        <div 
          className={`relative w-7 h-7 xs:w-8 xs:h-8 md:w-14 md:h-14 rounded-lg md:rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm md:shadow-xl border-2 md:border-4
            ${isActive ? 'rotate-0 scale-110' : 'rotate-12 scale-100'}`}
          style={{ 
            backgroundColor: isActive ? COLORS.ACCENT : 'white',
            borderColor: isActive ? 'white' : '#1f2937'
          }}
        >
          <span className={`text-[10px] md:text-xl font-black ${isActive ? 'text-white' : 'text-gray-900'}`}>
            {course.id}
          </span>
        </div>

        {/* Etiqueta solo en escritorio para no congestionar el móvil */}
        <div 
          className={`hidden lg:block absolute -bottom-10 whitespace-nowrap px-3 py-1 rounded-md text-[9px] font-black uppercase tracking-widest transition-all duration-300 pointer-events-none
            ${isActive 
              ? 'bg-gray-900 text-white opacity-100 shadow-xl translate-y-0' 
              : 'bg-white text-gray-400 opacity-0 group-hover:opacity-100 translate-y-1 border border-gray-100'}`}
        >
          {course.title.split(' ')[0]}
        </div>
      </button>
    </div>
  );
};

export default CourseNode;
