// src/data/palettes.ts

export interface ColorPalette {
  id: string;
  colors: string[]; // 4つのHEXカラーコードの配列
  likes: number;
  tags: string[];
}

// サンプルのフラットカラーパレットデータ
export const samplePalettes: ColorPalette[] = [
  {
    id: 'flat-001',
    colors: ['#3498db', '#2ecc71', '#f1c40f', '#e74c3c'], // 青, 緑, 黄, 赤
    likes: 150,
    tags: ['blue', 'vibrant', 'primary'],
  },
  {
    id: 'flat-002',
    colors: ['#bdc3c7', '#ecf0f1', '#95a5a6', '#7f8c8d'], // グレー系
    likes: 80,
    tags: ['neutral', 'pastel', 'light'],
  },
  // さらにパレットを追加...
];