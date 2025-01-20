import React, { FC } from 'react';
import CircularProgressBar from '../CircularProgressBar/CircularProgressBar';

interface CardDataStatsProps {
  title: string;
  total: string;
  rate: number;
  levelUp?: boolean;
  levelDown?: boolean;
  levelMedium?: boolean;
}

const CardDataStats: FC<CardDataStatsProps> = ({
  title,
  total,
  rate,
  levelUp,
  levelDown,
  levelMedium,
}) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 xsm:pl-6 ">
      <div className="flex items-center justify-center xsm:justify-between flex-wrap md:flex-nowrap">
        <div className="w-full xsm:w-auto items-center xsm:items-start flex flex-col gap-12">
          <h4 className="text-title-sm font-bold text-neutral ">{title}</h4>
          <h5 className="text-title-lg font-bold text-main">{total}</h5>
        </div>

        <CircularProgressBar
          sqSize={95}
          strokeWidth={8}
          percentage={rate}
          levelUp={levelUp}
          levelDown={levelDown}
          levelMedium={levelMedium}
        />
      </div>
    </div>
  );
};

export default CardDataStats;
