/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  className: any;
  text: string;
  text1: string;
}

export const BenefitCard = ({
  className,
  text = "12x",
  text1 = "Faster growth",
}: Props): JSX.Element => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Parse the target value from the text prop
  const getTargetValue = () => {
    if (text.includes('%')) {
      return parseInt(text);
    } else if (text.includes('x')) {
      return parseInt(text);
    }
    return parseInt(text) || 0;
  };

  const targetValue = getTargetValue();
  const suffix = text.includes('%') ? '%' : text.includes('x') ? 'x' : '';

  useEffect(() => {
    let animationFrame: number;
    let startTime: number;
    const duration = 2000; // 2 seconds

    if (inView) {
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const currentCount = Math.floor(progress * targetValue);
        
        setCount(currentCount);
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(targetValue);
        }
      };
      
      animationFrame = requestAnimationFrame(animate);
    }
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [inView, targetValue]);

  return (
    <div
      ref={ref}
      className={`flex flex-col w-80 items-center gap-6 p-6 relative bg-color-light-50 rounded-lg overflow-hidden border-[none] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(180deg,rgba(255,135,71,1)_0%,rgba(23,23,23,0.1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-color-primary-100 group ${className}`}
    >
      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative self-stretch mt-[-1.00px] bg-[linear-gradient(180deg,rgba(255,135,71,1)_0%,rgba(255,255,255,0.1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-headline-h2 font-[number:var(--headline-h2-font-weight)] text-transparent text-[length:var(--headline-h2-font-size)] tracking-[var(--headline-h2-letter-spacing)] leading-[var(--headline-h2-line-height)] [font-style:var(--headline-h2-font-style)] transition-all duration-300 group-hover:scale-110 text-glow">
          {inView ? `${count}${suffix}` : '0' + suffix}
        </div>

        <div className="relative self-stretch font-headline-h7 font-[number:var(--headline-h7-font-weight)] text-color-light-750 text-[length:var(--headline-h7-font-size)] tracking-[var(--headline-h7-letter-spacing)] leading-[var(--headline-h7-line-height)] [font-style:var(--headline-h7-font-style)]">
          {text1}
        </div>
      </div>
    </div>
  );
};
