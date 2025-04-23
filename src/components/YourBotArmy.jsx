import React from "react";
import BotCard from "./BotCard";

export default function YourBotArmy({ bots, onRemove, onDischarge }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-3">Your Bot Army</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onClick={onRemove}
            onDischarge={onDischarge}
            showDischarge={true}
          />
        ))}
      </div>
    </div>
  );
}
