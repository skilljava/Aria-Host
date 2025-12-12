import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorDot = useRef<HTMLDivElement>(null);
  const cursorOutline = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;

      // Move dot instantly
      if (cursorDot.current) {
        cursorDot.current.style.left = `${posX}px`;
        cursorDot.current.style.top = `${posY}px`;
      }

      // Move outline with delay (GSAP)
      if (cursorOutline.current) {
        gsap.to(cursorOutline.current, {
          x: posX,
          y: posY,
          duration: 0.15,
          ease: "power2.out"
        });
      }
    };

    const onMouseDown = () => {
      if (cursorOutline.current) {
        gsap.to(cursorOutline.current, { scale: 0.8, duration: 0.1 });
      }
    };

    const onMouseUp = () => {
      if (cursorOutline.current) {
        gsap.to(cursorOutline.current, { scale: 1, duration: 0.1 });
      }
    };

    // Add generic hover effect for links and buttons
    const addHover = () => {
        if(cursorOutline.current) {
            cursorOutline.current.style.backgroundColor = 'rgba(245, 158, 11, 0.2)';
            cursorOutline.current.style.borderColor = 'transparent';
            gsap.to(cursorOutline.current, { scale: 1.5, duration: 0.2 });
        }
    };

    const removeHover = () => {
        if(cursorOutline.current) {
            cursorOutline.current.style.backgroundColor = 'transparent';
            cursorOutline.current.style.borderColor = 'rgba(245, 158, 11, 0.5)';
            gsap.to(cursorOutline.current, { scale: 1, duration: 0.2 });
        }
    }

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', addHover);
        el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
    });
    };
  }, []);

  // Hide on mobile/touch devices usually, but for this demo we keep it simple
  return (
    <>
      <div ref={cursorDot} className="cursor-dot hidden md:block"></div>
      <div ref={cursorOutline} className="cursor-outline hidden md:block -translate-x-1/2 -translate-y-1/2 fixed top-0 left-0 pointer-events-none z-[9999]"></div>
    </>
  );
};

export default CustomCursor;
