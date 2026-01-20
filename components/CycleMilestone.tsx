
import React from 'react';

interface CycleMilestoneProps {
  number: number;
}

const CycleMilestone: React.FC<CycleMilestoneProps> = ({ number }) => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="absolute -top-12 bg-gray-900 text-white px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border-2 border-white shadow-lg whitespace-nowrap">
        CICLO {number}
      </div>
      <div className="w-16 h-16 md:w-20 md:h-20 bg-white border-[6px] border-gray-900 rounded-[1.5rem] flex items-center justify-center shadow-[10px_10px_0px_rgba(0,0,0,0.1)] transform rotate-3">
        <span className="text-2xl md:text-3xl font-black text-gray-900 italic tracking-tighter">
          {number}
        </span>
      </div>
    </div>
  );
};

export default CycleMilestone;
