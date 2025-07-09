import React, { useEffect, useRef, useState } from 'react';

const SEGMENTS = 120;
const SPEED = 4; // سرعت حرکت مار (پیکسل در هر فریم)
const TURN_CHANCE = 0.08; // احتمال تغییر زاویه در هر فریم
const TURN_ANGLE = Math.PI / 16; // حداکثر زاویه تغییر در هر فریم

function getStripeColor(i: number) {
  return i % 2 === 0 ? '#2ecc40' : '#27ae60';
}

const Snake: React.FC = () => {
  const requestRef = useRef<number | null>(null);
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });
  const [, setTick] = useState(0);

  // موقعیت و زاویه سر مار
  const headRef = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    angle: Math.random() * Math.PI * 2,
  });
  // مسیر بدن مار (queue از مختصات)
  const bodyRef = useRef<{ x: number; y: number; angle: number }[]>([]);

  // مقداردهی اولیه ابعاد صفحه
  useEffect(() => {
    const setDims = () => setDimensions({ w: window.innerWidth, h: window.innerHeight });
    setDims();
    window.addEventListener('resize', setDims);
    return () => window.removeEventListener('resize', setDims);
  }, []);

  // انیمیشن مار
  useEffect(() => {
    const animate = () => {
      // حرکت سر مار
      let { x, y, angle } = headRef.current;
      // هر چند فریم یکبار کمی زاویه را تصادفی تغییر بده
      if (Math.random() < TURN_CHANCE) {
        angle += (Math.random() - 0.5) * 2 * TURN_ANGLE;
      }
      // حرکت به جلو
      x += Math.cos(angle) * SPEED;
      y += Math.sin(angle) * SPEED;
      // برخورد با دیوار و تغییر جهت
      if (x < 20) {
        x = 20;
        angle = Math.PI - angle + (Math.random() - 0.5) * 0.5;
      }
      if (x > dimensions.w - 20) {
        x = dimensions.w - 20;
        angle = Math.PI - angle + (Math.random() - 0.5) * 0.5;
      }
      if (y < 20) {
        y = 20;
        angle = -angle + (Math.random() - 0.5) * 0.5;
      }
      if (y > dimensions.h - 20) {
        y = dimensions.h - 20;
        angle = -angle + (Math.random() - 0.5) * 0.5;
      }
      headRef.current = { x, y, angle };
      // به ابتدای queue اضافه کن
    //   const prev = bodyRef.current[0] || { x, y, angle };
      bodyRef.current = [
        { x, y, angle },
        ...bodyRef.current.slice(0, SEGMENTS - 1),
      ];
      setTick(t => t + 1);
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [dimensions]);

  if (dimensions.w === 0 || dimensions.h === 0) return null;
  if (bodyRef.current.length < SEGMENTS) {
    // مقداردهی اولیه بدن مار
    const { x, y, angle } = headRef.current;
    bodyRef.current = Array.from({ length: SEGMENTS }, (_, i) => ({
      x: x - i * Math.cos(angle) * 16,
      y: y - i * Math.sin(angle) * 16,
      angle,
    }));
  }
  const segments = bodyRef.current;
  // مسیر بدن مار
  // موج طبیعی بدن مار
  const now = Date.now() / 600; // زمان برای موج
  const wavySegments = segments.map((seg, i) => {
    // زاویه حرکت این بخش
    const angle = seg.angle;
    // موج سینوسی عمود بر جهت حرکت
    const wave = Math.sin(now + i * 0.35) * (18 - i * 0.12);
    const x = seg.x + Math.cos(angle + Math.PI / 2) * wave;
    const y = seg.y + Math.sin(angle + Math.PI / 2) * wave;
    return { ...seg, x, y };
  });
  const bodyPath = wavySegments.map(seg => `${seg.x},${seg.y}`).join(' ');
  // سر مار
  const head = wavySegments[0];
  const headAngle = head.angle * 180 / Math.PI;

  return (
    <svg
      width={dimensions.w}
      height={dimensions.h}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 3,
        pointerEvents: 'none',
        overflow: 'visible',
      }}
    >
      {/* بدن مار */}
      <polyline
        points={bodyPath}
        fill="none"
        stroke="#229954"
        strokeWidth={32}
        strokeLinejoin="round"
        strokeLinecap="round"
        opacity={0.85}
      />
      {/* راه‌راه کردن بدن مار با بیضی */}
      {wavySegments.slice(1).map((seg, idx) => (
        <ellipse
          key={idx}
          cx={seg.x}
          cy={seg.y}
          rx={12 - idx * 0.3}
          ry={8 - idx * 0.2}
          fill={getStripeColor(idx)}
          opacity={0.7}
        />
      ))}
      {/* سر مار */}
      <g transform={`translate(${head.x},${head.y}) rotate(${headAngle})`}>
        <ellipse rx="18" ry="13" fill="#229954" stroke="#145a32" strokeWidth="3" />
        {/* چشم‌ها */}
        <ellipse cx="7" cy="-4" rx="2.5" ry="2.5" fill="#fff" />
        <ellipse cx="7" cy="-4" rx="1.1" ry="1.1" fill="#222" />
        <ellipse cx="7" cy="4" rx="2.5" ry="2.5" fill="#fff" />
        <ellipse cx="7" cy="4" rx="1.1" ry="1.1" fill="#222" />
        {/* زبان */}
        <polyline points="18,0 28,-3 26,0 28,3" fill="none" stroke="#e74c3c" strokeWidth="2" />
      </g>
    </svg>
  );
};

export default Snake; 