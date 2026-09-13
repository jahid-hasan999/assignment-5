import React from 'react';
import type { CardType } from '../CardType';

interface CardItemProps {
  tech: CardType;
  isAdded: boolean;
  onToggle: () => void;
}


const Card: React.FC<CardItemProps> = ({ tech, isAdded, onToggle }) => {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow container mx-auto">
      <div>
        <div className="flex items-center justify-between mb-3 h-10">
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-8 h-8 object-contain"
          />
          {tech.badge && (
            <span className="bg-cyan-50 text-cyan-600 text-xs px-2.5 py-1 rounded-full font-medium">
              {tech.badge}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-1">{tech.name}</h3>

        <p className="text-gray-400 text-xs leading-relaxed mb-4">
          {tech.description}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs text-gray-400 mb-4 pt-3 border-t border-gray-50">
          <div className="flex items-center gap-2">
            <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600 font-medium">
              {tech.category}
            </span>

            <span>{tech.difficulty}</span>
          </div>
          <div className="flex items-center gap-1 font-semibold text-gray-700">
            <span className="text-amber-400">★</span>
            <span>{tech.rating}</span>
          </div>
        </div>

        {/* Add  Button */}
        <button
          onClick={onToggle}
          disabled={isAdded}
          className={`w-full py-2.5 rounded-lg text-xs font-semibold transition-all ${
            isAdded
              ? 'bg-emerald-600 text-white cursor-not-allowed opacity-90'
              : 'bg-[#0b131f]    hover:bg-slate-800 text-white'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
};

export default Card;
