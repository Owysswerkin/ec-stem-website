 import React from 'react';
 import { cn } from '@/lib/utils';
 
 interface FloatingComponentProps {
   image: string;
   size?: 'sm' | 'md' | 'lg';
   delay?: number;
   className?: string;
 }
 
 const sizeMap = {
   sm: 'w-10 h-10',
   md: 'w-16 h-16',
   lg: 'w-24 h-24',
 };
 
 const FloatingComponent: React.FC<FloatingComponentProps> = ({
   image,
   size = 'md',
   delay = 0,
   className,
 }) => {
   return (
     <div
       className={cn(
         sizeMap[size],
         'animate-float-gentle pointer-events-none select-none',
         className
       )}
       style={{ animationDelay: `${delay}s` }}
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
 
 export default FloatingComponent;