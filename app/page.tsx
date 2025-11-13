// src/app/page.tsx (修正後)

import PaletteCard from '@/components/PaletteCard';
import { samplePalettes } from '@/data/palettes'; 

/**
 * 🎨 ホームページ: カラーパレットの一覧を表示
 */
export default function Home() {
  return (
    // 💡 layout.tsx に main があるため、ここでは単に div でコンテンツを囲みます
    <div className="bg-gray-50 p-8 min-h-screen"> 
      
      {/* メインコンテンツのヘッダー */}
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-1">
          すべてのパレット
        </h1>
        <p className="text-lg text-gray-600">
          人気のパレットをスクロールして見てみましょう。
        </p>
      </div>

      {/* カラーパレットのグリッド表示 */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-full">
        {samplePalettes.map((palette) => (
          <PaletteCard
            key={palette.id}
            colors={palette.colors}
            likes={palette.likes}
          />
        ))}
      </section>
    </div>
  );
}