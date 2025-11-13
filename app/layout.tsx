// src/app/layout.tsx

import type { Metadata } from 'next';
import './globals.css'; // Tailwind CSSのインポート
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'FlatColor Hunt Clone',
  description: 'モダンなWebのためのフラットカラーパレット',
};

// 💡 注意: Tailwind CSSの構成によってはフォント設定も必要です。
// 例: font-sans を body クラスに追加するなど

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {/* サイドバーは固定幅 (w-64) で fixed */}
        <Sidebar /> 
        
        {/* メインコンテンツエリア */}
        {/* pl-64: サイドバーの幅 (w-64) 分だけ左側にパディングを設定し、コンテンツが重ならないようにする */}
        <div className="pl-64">
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}