import React from "react";

export default function BotCard({ bot, onClick, onDischarge, showDischarge = false }) {
  return (
    <div
      className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition cursor-pointer relative w-full max-w-md min-h-[360px]"
      onClick={() => onClick(bot)}
    >
      <img
        src={bot.avatar_url}
        alt={bot.name}
        className="w-36 h-36 mx-auto rounded-full object-cover"
      />
      <h2 className="text-xl font-semibold text-center mt-4">{bot.name}</h2>
      <p className="text-xs text-center text-gray-500 italic mb-2 px-2 truncate">
        {bot.catchphrase}
      </p>
      <div className="flex justify-around text-sm font-medium text-gray-600 mb-1">
        <span>❤️ {bot.health}</span>
        <span>⚔️ {bot.damage}</span>
        <span>🛡️ {bot.armor}</span>
      </div>
      <div className="text-center text-xs font-bold text-blue-600">
        {bot.bot_class}
      </div>

      {showDischarge && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDischarge(bot.id);
          }}
          className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-lg font-bold"
        >
          ×
        </button>
      )}
    </div>
  );
}
