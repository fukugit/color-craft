// src/components/Sidebar.tsx または app/components/Sidebar.tsx

import React from 'react';

const Sidebar: React.FC = () => {
  const menuItems = ['New', 'Popular', 'Random', 'Tags'];
  
  return (
    // サイドバーのコンテナ
    // w-64: 幅を固定 (16rem), bg-white: 背景色, shadow-lg: 影
    <div className="w-64 bg-white shadow-xl h-screen fixed top-0 left-0 p-6 flex flex-col">
      
      {/* サイトロゴ/タイトル */}
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 tracking-tight">
        ColorHunt<span className="text-blue-500">.</span>
      </h2>
      
      {/* 検索フォーム (オプション) */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="パレットを検索..."
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* メインメニュー */}
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`} // リンク先は適宜修正
            className="block px-3 py-2 text-lg font-medium text-gray-600 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>
      
      {/* その他のコンテンツやフッターをここに追加可能 */}
      <div className="mt-auto pt-6 border-t text-sm text-gray-400">
          © 2025 FlatColor Hunter
      </div>
    </div>
  );
};

export default Sidebar;