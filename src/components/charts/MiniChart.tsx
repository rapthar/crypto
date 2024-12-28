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
  const tension = 0.4; // Controls curve smoothness
  
  // Generate control points for the curve
  const controlPoints = data.map((value, index) => ({
    x: (index / (data.length - 1)) * 100,
    y: height - ((value - min) / range) * height
  }));

  // Create bezier curve points
  for (let i = 0; i < controlPoints.length - 1; i++) {
    const current = controlPoints[i];
    const next = controlPoints[i + 1];
    
    // Calculate control points for the curve
    const cp1x = current.x + (next.x - current.x) * tension;
    const cp1y = current.y;
    const cp2x = next.x - (next.x - current.x) * tension;
    const cp2y = next.y;
    
    if (i === 0) {
      points.push(`M${current.x},${current.y}`);
    }
    
    points.push(`C${cp1x},${cp1y} ${cp2x},${cp2y} ${next.x},${next.y}`);
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
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        
        <path
          d={`M0,${height} ${pathPoints} L100,${height}`}
          fill={`url(#${gradientId})`}
          className="transition-all duration-300"
        />
        
        <path
          d={pathPoints}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-all duration-300"
        />

        {/* Outer ring */}
        <circle
          cx={maxPoint.x}
          cy={maxPoint.y}
          r="6"
          fill="none"
          stroke={color}
          strokeWidth="1"
          strokeOpacity="0.3"
          className="transition-all duration-300"
        />

        {/* Inner ring */}
        <circle
          cx={maxPoint.x}
          cy={maxPoint.y}
          r="4"
          fill="none"
          stroke={color}
          strokeWidth="1"
          strokeOpacity="0.6"
          className="transition-all duration-300"
        />

        {/* Center point */}
        <circle
          cx={maxPoint.x}
          cy={maxPoint.y}
          r="2"
          fill={color}
          className="transition-all duration-300"
        />
      </svg>
    </div>
  );
}