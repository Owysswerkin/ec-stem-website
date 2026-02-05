 import React from 'react';
 import { cn } from '@/lib/utils';
 
 interface AnimatedGearProps {
   image: string;
   size?: 'sm' | 'md' | 'lg' | 'xl';
   speed?: 'slow' | 'normal' | 'fast';
   direction?: 'cw' | 'ccw';
   className?: string;
 }
 
 const sizeMap = {
   sm: 'w-8 h-8',
   md: 'w-12 h-12',
   lg: 'w-20 h-20',
   xl: 'w-28 h-28',
 };
 
 const speedMap = {
   slow: 'animate-spin-slow',
   normal: 'animate-spin-normal',
   fast: 'animate-spin-fast',
 };
 
 const AnimatedGear: React.FC<AnimatedGearProps> = ({
   image,
   size = 'md',
   speed = 'slow',
   direction = 'cw',
   className,
 }) => {
   return (
     <div
       className={cn(
         sizeMap[size],
         speedMap[speed],
         direction === 'ccw' && 'animate-spin-reverse',
         'pointer-events-none select-none',
         className
       )}
     >
       <img
         src={image}
         alt=""
         className="w-full h-full object-contain"
         aria-hidden="true"
       />
     </div>
   );
 };
 
 export default AnimatedGear;