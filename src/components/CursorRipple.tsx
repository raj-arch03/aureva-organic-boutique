import { useEffect, useState } from 'react';

interface Ripple {
  x: number;
  y: number;
  id: number;
}

const CursorRipple = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [rippleId, setRippleId] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let moveTimeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => setIsMoving(false), 100);
    };

    const handleClick = (e: MouseEvent) => {
      const newRipple = {
        x: e.clientX,
        y: e.clientY,
        id: rippleId,
      };
      setRipples(prev => [...prev, newRipple]);
      setRippleId(prev => prev + 1);

      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      clearTimeout(moveTimeout);
    };
  }, [rippleId]);

  return (
    <>
      {/* Custom cursor with glow effect */}
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-100"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isMoving ? 1.2 : 1})`,
        }}
      >
        {/* Outer glow ring */}
        <div className="absolute inset-0 w-12 h-12 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <div className="w-full h-full rounded-full bg-primary/10 blur-md animate-pulse" />
        </div>
        
        {/* Main cursor ring */}
        <div className="relative w-8 h-8">
          <div className="w-full h-full rounded-full border-2 border-primary shadow-[0_0_10px_rgba(var(--primary),0.3)]" />
          <div className="absolute inset-0 w-full h-full rounded-full border border-primary/30 animate-ping" />
        </div>
        
        {/* Center dot */}
        <div className="absolute inset-0 w-2 h-2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-full h-full rounded-full bg-primary" />
        </div>
      </div>

      {/* Enhanced ripple effects on click */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="fixed pointer-events-none z-[9998]"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Multiple ripple layers for depth */}
          <div className="absolute inset-0 w-16 h-16 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <div className="w-full h-full rounded-full border-2 border-primary animate-[ripple_1s_ease-out]" />
          </div>
          <div className="absolute inset-0 w-16 h-16 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <div className="w-full h-full rounded-full bg-primary/20 animate-[ripple_1s_ease-out_0.1s]" />
          </div>
          <div className="absolute inset-0 w-16 h-16 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <div className="w-full h-full rounded-full border border-primary/50 animate-[ripple_1s_ease-out_0.2s]" />
          </div>
        </div>
      ))}
    </>
  );
};

export default CursorRipple;
