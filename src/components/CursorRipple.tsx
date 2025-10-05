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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
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
      }, 600);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, [rippleId]);

  return (
    <>
      {/* Custom cursor */}
      <div
        className="fixed w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-full h-full rounded-full border-2 border-primary-foreground opacity-80" />
      </div>

      {/* Ripple effects on click */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="fixed w-8 h-8 pointer-events-none z-[9998]"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="w-full h-full rounded-full border-2 border-primary opacity-60 animate-ripple" />
        </div>
      ))}
    </>
  );
};

export default CursorRipple;
