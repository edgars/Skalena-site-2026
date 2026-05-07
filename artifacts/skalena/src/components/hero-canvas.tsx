import { useEffect, useRef } from "react";

const GREEN = "#0cfa64";
const GREEN_RGB = "12,250,100";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulseOffset: number;
  isHub: boolean;
  glowRadius: number;
}

interface Packet {
  fromIdx: number;
  toIdx: number;
  progress: number;
  speed: number;
}

interface Star {
  x: number;
  y: number;
  r: number;
  opacity: number;
  twinkle: number;
  phase: number;
}

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;
    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let packets: Packet[] = [];
    let stars: Star[] = [];

    const MAX_DIST = 220;
    const MAX_PACKETS = 18;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      init();
    };

    const init = () => {
      const isMobile = width < 768;
      const nodeCount = isMobile ? 14 : 24;

      nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        const isHub = i < 4;
        nodes.push({
          x: isMobile ? Math.random() * width : width * 0.15 + Math.random() * width * 0.7,
          y: isMobile ? Math.random() * height : height * 0.1 + Math.random() * height * 0.8,
          vx: (Math.random() - 0.5) * (isMobile ? 0.25 : 0.3),
          vy: (Math.random() - 0.5) * (isMobile ? 0.25 : 0.3),
          radius: isHub ? (isMobile ? 5 : 7) : (Math.random() * 2 + 2.5),
          pulseOffset: Math.random() * Math.PI * 2,
          isHub,
          glowRadius: isHub ? (isMobile ? 22 : 32) : (Math.random() * 10 + 8),
        });
      }

      packets = [];

      stars = [];
      const starCount = isMobile ? 100 : 200;
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 1.1 + 0.2,
          opacity: Math.random() * 0.3 + 0.04,
          twinkle: Math.random() * 0.02 + 0.005,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    const spawnPacket = () => {
      if (packets.length >= MAX_PACKETS) return;
      const edges: [number, number][] = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          if (Math.sqrt(dx * dx + dy * dy) < MAX_DIST) {
            edges.push([i, j]);
          }
        }
      }
      if (edges.length === 0) return;
      const [a, b] = edges[Math.floor(Math.random() * edges.length)];
      const flip = Math.random() > 0.5;
      packets.push({
        fromIdx: flip ? a : b,
        toIdx: flip ? b : a,
        progress: 0,
        speed: Math.random() * 0.007 + 0.004,
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.016;

      // Stars
      for (const s of stars) {
        const alpha = s.opacity + Math.sin(time * s.twinkle * 60 + s.phase) * 0.1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${Math.max(0, Math.min(0.5, alpha))})`;
        ctx.fill();
      }

      // Move nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
        n.x = Math.max(0, Math.min(width, n.x));
        n.y = Math.max(0, Math.min(height, n.y));
      }

      // Draw edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.22;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${GREEN_RGB},${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Move + draw packets
      packets = packets.filter((p) => {
        p.progress += p.speed;
        if (p.progress >= 1) return false;

        const from = nodes[p.fromIdx];
        const to = nodes[p.toIdx];
        if (!from || !to) return false;

        const px = from.x + (to.x - from.x) * p.progress;
        const py = from.y + (to.y - from.y) * p.progress;

        // Tail
        const tailLen = 0.12;
        const t0 = Math.max(0, p.progress - tailLen);
        const tx = from.x + (to.x - from.x) * t0;
        const ty = from.y + (to.y - from.y) * t0;

        const grad = ctx.createLinearGradient(tx, ty, px, py);
        grad.addColorStop(0, `rgba(${GREEN_RGB},0)`);
        grad.addColorStop(1, `rgba(${GREEN_RGB},0.85)`);
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(px, py);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Head glow
        const headGrad = ctx.createRadialGradient(px, py, 0, px, py, 6);
        headGrad.addColorStop(0, `rgba(${GREEN_RGB},1)`);
        headGrad.addColorStop(1, `rgba(${GREEN_RGB},0)`);
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fillStyle = headGrad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();

        return true;
      });

      // Spawn packets periodically
      if (Math.random() < 0.04) spawnPacket();

      // Draw nodes
      for (const n of nodes) {
        const pulse = Math.sin(time * 2 + n.pulseOffset);
        const glowR = n.glowRadius + pulse * (n.isHub ? 6 : 3);

        // Outer glow
        const outerGrad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowR);
        outerGrad.addColorStop(0, `rgba(${GREEN_RGB},${n.isHub ? 0.35 : 0.18})`);
        outerGrad.addColorStop(0.5, `rgba(${GREEN_RGB},${n.isHub ? 0.1 : 0.05})`);
        outerGrad.addColorStop(1, `rgba(${GREEN_RGB},0)`);
        ctx.beginPath();
        ctx.arc(n.x, n.y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = outerGrad;
        ctx.fill();

        // Core ring
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${GREEN_RGB},${n.isHub ? 0.9 : 0.65})`;
        ctx.lineWidth = n.isHub ? 1.5 : 1;
        ctx.stroke();

        // Center dot
        const coreGrad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius);
        coreGrad.addColorStop(0, `rgba(${GREEN_RGB},${n.isHub ? 0.7 : 0.4})`);
        coreGrad.addColorStop(1, `rgba(${GREEN_RGB},0)`);
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = coreGrad;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
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
