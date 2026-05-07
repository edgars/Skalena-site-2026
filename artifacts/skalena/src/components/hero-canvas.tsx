import { useEffect, useRef } from "react";

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    canvas.width = width;
    canvas.height = height;
    
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };
    window.addEventListener('resize', handleResize);
    
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
    }
    
    let particles: Particle[] = [];
    
    const initParticles = () => {
      particles = [];
      const count = window.innerWidth > 768 ? 120 : 60;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 0.5 + 1.5,
          opacity: 0.6,
        });
      }
    };
    initParticles();
    
    let time = 0;
    
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.005;
      
      const centerX = width / 2;
      const centerY = height / 2;
      
      const scale = 1 + Math.sin(time * 2) * 0.05;
      const v1 = {
        x: centerX + (-180 * Math.cos(time * 0.8) - 120 * Math.sin(time * 0.8)) * scale,
        y: centerY + (-180 * Math.sin(time * 0.8) + 120 * Math.cos(time * 0.8)) * scale
      };
      const v2 = {
        x: centerX + (220 * Math.cos(time * 1.2) - 100 * Math.sin(time * 1.2)) * scale,
        y: centerY + (220 * Math.sin(time * 1.2) + 100 * Math.cos(time * 1.2)) * scale
      };
      const v3 = {
        x: centerX + (-20 * Math.cos(time * 0.5) + 180 * Math.sin(time * 0.5)) * scale,
        y: centerY + (-20 * Math.sin(time * 0.5) - 180 * Math.cos(time * 0.5)) * scale
      };
      
      const vertices = [v1, v2, v3];
      
      ctx.beginPath();
      ctx.moveTo(v1.x, v1.y);
      ctx.lineTo(v2.x, v2.y);
      ctx.lineTo(v3.x, v3.y);
      ctx.closePath();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
      ctx.lineWidth = 1;
      ctx.stroke();
      
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
        
        let isNearVertex = false;
        vertices.forEach(v => {
          const dx = p.x - v.x;
          const dy = p.y - v.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < 80) {
            p.x -= dx * 0.005;
            p.y -= dy * 0.005;
            if (dist < 20) {
              isNearVertex = true;
            }
          }
        });
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, isNearVertex ? 3 : p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${isNearVertex ? 0.9 : p.opacity})`;
        ctx.fill();
        
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const lineOpacity = (1 - dist / 120) * 0.15;
            ctx.strokeStyle = `rgba(255, 255, 255, ${lineOpacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });
      
      animationFrameId = requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}