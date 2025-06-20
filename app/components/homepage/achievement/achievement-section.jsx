'use client';

import { FaArrowRight } from 'react-icons/fa';
import AchievementCard from './achievement-card';
import { achievements } from '@/utils/data/achievement'; // ✅ make sure this matches the export

function AchievementSection() {
  return (
    <div id='achievements' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Achievements
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {achievements.map((achievement, i) => (
  <AchievementCard achievement={achievement} key={i} index={i} />
))}
      </div>

      
    </div>
  );
}

export default AchievementSection;
