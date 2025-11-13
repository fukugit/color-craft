// src/components/PaletteCard.tsx
import React from 'react';

interface PaletteCardProps {
  colors: string[];
  likes: number;
}

const PaletteCard: React.FC<PaletteCardProps> = ({ colors, likes }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer w-full max-w-sm mx-auto">
      {/* 4色のカラーブロック */}
      <div className="flex h-32">
        {colors.map((color, index) => (
          // 各カラーブロックをクリックでコピーするなどの機能を追加可能
          <div
            key={index}
            style={{ backgroundColor: color }}
            className="flex-1 transition-transform duration-200 hover:scale-[1.02]"
          />
        ))}
      </div>

      {/* 詳細情報 (いいね、タグ、コピーボタンなど) */}
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center text-gray-600">
          <svg className="w-5 h-5 mr-1 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            {/* ハートアイコン */}
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
          <span className="font-semibold">{likes}</span>
        </div>
        
        {/* コピーボタンのプレースホルダー */}
        <button className="text-sm text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-full transition-colors">
          コピー
        </button>
      </div>
    </div>
  );
};

export default PaletteCard;