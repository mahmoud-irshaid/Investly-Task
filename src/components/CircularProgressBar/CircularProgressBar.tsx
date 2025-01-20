import { FC } from 'react';
import {
  MdOutlineTrendingDown,
  MdOutlineTrendingFlat,
  MdOutlineTrendingUp,
} from 'react-icons/md';

interface Props {
  strokeWidth?: number;
  sqSize?: number;
  percentage: number;
  levelUp?: boolean;
  levelDown?: boolean;
  levelMedium?: boolean;
}

const CircularProgressBar: FC<Props> = (props) => {
  const {
    strokeWidth = 8,
    sqSize = 160,
    percentage,
    levelUp,
    levelDown,
    levelMedium,
  } = props;

  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * (percentage || 0)) / 100;

  return (
    <div className="relative w-[160px] h-[160px] flex items-center justify-center">
      {/* SVG Progress Bar */}
      <svg width={sqSize} height={sqSize} viewBox={viewBox}>
        {/* Background Circle */}
        <circle
          className={`fill-none  ${
            levelUp
              ? 'stroke-color-green-100'
              : levelDown
                ? 'stroke-color-red-100'
                : 'stroke-color-blue-100'
          }`}
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
        />
        {/* Progress Circle */}
        <circle
          className={`fill-none transition-all duration-300 ease-in-out ${
            levelUp
              ? 'stroke-color-green-500'
              : levelDown
                ? 'stroke-color-red-500'
                : 'stroke-color-blue-500'
          }`}
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeLinecap="round"
          strokeWidth={`${strokeWidth}px`}
          transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
        />
      </svg>

      {levelUp && (
        <MdOutlineTrendingUp size={24} className="absolute text-green-500" />
      )}
      {levelDown && (
        <MdOutlineTrendingDown size={24} className="absolute text-red-500" />
      )}
      {levelMedium && (
        <MdOutlineTrendingFlat size={24} className="absolute text-blue-500" />
      )}
    </div>
  );
};

export default CircularProgressBar;
