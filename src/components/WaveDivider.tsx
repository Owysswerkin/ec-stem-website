 import React from 'react';
 import { cn } from '@/lib/utils';
 
 interface WaveDividerProps {
   variant?: 'wave1' | 'wave2' | 'wave3';
   colorClass?: string;
   flip?: boolean;
   className?: string;
 }
 
 const WaveDivider: React.FC<WaveDividerProps> = ({
   variant = 'wave1',
   colorClass = 'fill-background',
   flip = false,
   className,
 }) => {
   const waves = {
     wave1: (
       <path d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,112C672,107,768,117,864,133.3C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
     ),
     wave2: (
       <path d="M0,160L48,165.3C96,171,192,181,288,186.7C384,192,480,192,576,176C672,160,768,128,864,128C960,128,1056,160,1152,170.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
     ),
     wave3: (
       <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,186.7C960,171,1056,149,1152,149.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
     ),
   };
 
   return (
     <div
       className={cn(
         'w-full overflow-hidden leading-none',
         flip && 'rotate-180',
         className
       )}
     >
       <svg
         className={cn('relative block w-full h-16 md:h-24', colorClass)}
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 1440 320"
         preserveAspectRatio="none"
       >
         {waves[variant]}
       </svg>
     </div>
   );
 };
 
 export default WaveDivider;