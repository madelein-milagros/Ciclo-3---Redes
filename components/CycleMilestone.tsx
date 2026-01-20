
import React from 'react';

interface CycleMilestoneProps {
  number: number;
}

const CycleMilestone: React.FC<CycleMilestoneProps> = ({ number }) => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="absolute -top-7 bg-gray-900 text-white px-2 py-0.5 rounded-full text-[6px] md:text-[7px] font-black uppercase tracking-widest border border-white shadow-md whitespace-nowrap z-40 transform -translate-y-0.5">
        CICLO {number}
      </div>
      <div className="w-9 h-9 md:w-11 md:h-11 bg-white border-[3px] border-gray-900 rounded-lg md:rounded-xl flex items-center justify-center shadow-[3px_3px_0px_rgba(0,0,0,0.1)] transform rotate-2 hover:rotate-0 transition-all duration-300">
        <span className="text-base md:text-lg font-black text-gray-900 italic tracking-tighter leading-none">
          {number}
        </span>
      </div>
    </div>
  );
};

export default CycleMilestone;
