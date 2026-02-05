 import React from 'react';
 import AnimatedGear from './AnimatedGear';
 import FloatingComponent from './FloatingComponent';
 import stemGearsYellowBlue from '@/assets/stem-gears-yellow-blue.png';
 import stemWheels from '@/assets/stem-wheels.png';
 import stemBeamRings from '@/assets/stem-beam-rings.png';
 import stemConnectors from '@/assets/stem-connectors.png';
 import stemGearCoral from '@/assets/stem-gear-coral.png';
 
 interface StemDecorationsProps {
   variant: 'hero' | 'section' | 'footer';
 }
 
 const StemDecorations: React.FC<StemDecorationsProps> = ({ variant }) => {
   if (variant === 'hero') {
     return (
       <>
         {/* Top-right: Large yellow/blue gears, slow clockwise */}
         <AnimatedGear
           image={stemGearsYellowBlue}
           size="xl"
           speed="slow"
           direction="cw"
           className="absolute -top-4 -right-4 z-10 opacity-90"
         />
         {/* Bottom-left: Wheels, counter-clockwise */}
         <AnimatedGear
           image={stemWheels}
           size="lg"
           speed="slow"
           direction="ccw"
           className="absolute -bottom-6 -left-6 z-10 opacity-85"
         />
         {/* Left side: Coral gear, floating */}
         <FloatingComponent
           image={stemGearCoral}
           size="md"
           delay={0.5}
           className="absolute top-1/3 -left-8 z-10 opacity-80"
         />
         {/* Right bottom: Connectors floating */}
         <FloatingComponent
           image={stemConnectors}
           size="sm"
           delay={1.2}
           className="absolute bottom-1/4 -right-6 z-10 opacity-75"
         />
       </>
     );
   }
 
   if (variant === 'section') {
     return (
       <>
         <FloatingComponent
           image={stemBeamRings}
           size="sm"
           delay={0}
           className="absolute top-8 right-8 opacity-50"
         />
         <FloatingComponent
           image={stemGearCoral}
           size="sm"
           delay={0.8}
           className="absolute bottom-8 left-8 opacity-50"
         />
       </>
     );
   }
 
   if (variant === 'footer') {
     return (
       <>
         <AnimatedGear
           image={stemGearsYellowBlue}
           size="lg"
           speed="slow"
           direction="cw"
           className="absolute top-4 right-8 opacity-20"
         />
         <FloatingComponent
           image={stemWheels}
           size="sm"
           delay={0.3}
           className="absolute bottom-4 left-12 opacity-15"
         />
       </>
     );
   }
 
   return null;
 };
 
 export default StemDecorations;