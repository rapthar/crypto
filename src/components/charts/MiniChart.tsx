import React from 'react';

interface MiniChartProps {
  data: number[];
  color?: string;
  height: number;
}

export function MiniChart({ 
  data, 
  color = '#7CFF6B',
  height
}: MiniChartProps) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min;
  const maxIndex = data.indexOf(max);
  
  // Create smooth curve points
  const points = [];
  for (let i = 0; i < (data.length - 1) * 10; i++) {
    const t = i / ((data.length - 1) * 10);
    const index = t * (data.length - 1);
    const index1 = Math.floor(index);
    const index2 = Math.ceil(index);
    const frac = index - index1;

    const value = data[index1] * (1 - frac) + (data[index2] || data[index1]) * frac;
    const x = (index / (data.length - 1)) * 100;
    const y = ((value - min) / range) * height;
    points.push(`${x},${height - y}`);
  }

  const pathPoints = points.join(' ');
  const maxPoint = {
    x: (maxIndex / (data.length - 1)) * 100,
    y: height - ((max - min) / range) * height
  };

  const gradientId = `gradient-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="relative w-full h-full">
      <svg
        width="100%"
        height={height}
        viewBox={`0 0 100 ${height}`}
        preserveAspectRatio="none"
        className="absolute inset-0"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.15" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        
        <path
          d={`M0,${height} ${pathPoints} 100,${height}`}
          fill={`url(#${gradientId})`}
          className="transition-all duration-300"
        />
        
        <path
          d={`M${pathPoints}`}
          fill="none"
          stroke={color}
          strokeWidth="1.2"
          className="transition-all duration-300"
        />

        <circle
          cx={maxPoint.x}
          cy={maxPoint.y}
          r="2.5"
          fill={color}
          stroke="#000"
          strokeWidth="1"
          className="transition-all duration-300"
        />
      </svg>
    </div>
  );
}