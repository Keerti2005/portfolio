function AchievementCard({ achievement, index }) {
  const titleColor = index % 2 === 0 ? "text-pink-500" : "text-green-400";

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      <div className="p-2 sm:p-3 flex flex-col">
        <p className={`my-2 lg:my-3 text-lg sm:text-xl font-bold ${titleColor}`}>
          {achievement.title}
        </p>
        <p className="text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6">
          {achievement.description}
        </p>
      </div>
    </div>
  );
}

export default AchievementCard;
