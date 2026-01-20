
import React from 'react';

interface CycleMilestoneProps {
  number: number;
}

const CycleMilestone: React.FC<CycleMilestoneProps> = ({ number }) => {
  return (
    <div className="relative flex flex-col items-center">
      {/* Etiqueta Superior */}
      <div className="absolute -top-6 bg-gray-900 text-white px-2 py-0.5 rounded-md text-[6px] md:text-[8px] font-black uppercase tracking-[0.2em] border border-white/10 shadow-md whitespace-nowrap z-40">
        CICLO {number}
      </div>
      
      {/* Caja de Número */}
      <div className="w-9 h-9 md:w-12 md:h-12 bg-white border-[3px] border-[#1e293b] rounded-xl flex items-center justify-center shadow-[4px_4px_0px_rgba(30,41,59,0.2)] transform rotate-2 hover:rotate-0 transition-transform duration-300">
        <span className="text-sm md:text-xl font-black text-[#1e293b] italic tracking-tighter leading-none">
          {number}
        </span>
      </div>
    </div>
  );
};

export default CycleMilestone;
