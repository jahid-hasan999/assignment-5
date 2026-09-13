import React from 'react';
import type { CardType } from '../CardType';

interface SidebarProps {
  selectedStack: CardType[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  selectedStack,
  onRemove,
  onRemoveAll,
}) => {
  const count = selectedStack.length;

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm sticky top-6">
      <h2 className="text-lg font-bold text-slate-900">Your Stack</h2>
      <p className="text-xs text-gray-400 mt-0.5 mb-4">
        {count === 0
          ? 'No technologies selected yet.'
          : `${count} Technology Selected`}
      </p>

      {count === 0 ? (
        <div className="border border-dashed border-gray-200 rounded-xl p-8 text-center">
          <p className="text-xs text-gray-300">Your stack is empty.</p>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
            {selectedStack.map(item => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-6 h-6 object-contain"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 leading-none">
                      {item.name}
                    </h4>
                    <span className="text-[10px] text-gray-400">
                      {item.category}
                    </span>
                  </div>
                </div>
                // Remove Cross (X) Button
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-gray-300 hover:text-red-500 font-medium text-sm transition-colors px-1"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* Remove All Button */}
          <button
            onClick={onRemoveAll}
            className="w-full mt-4 py-2 border border-red-200 text-red-500 rounded-xl text-xs font-medium hover:bg-red-50 transition-colors"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
