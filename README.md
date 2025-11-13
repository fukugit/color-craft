# 🎨 FlatColor Hunt Clone

A simple, modern, and responsive application for discovering and managing flat color palettes, built with **Next.js (App Router)** and **Tailwind CSS**.

This project is a boilerplate template inspired by popular color palette sites like Color Hunt.

## ✨ Features

* **Responsive Layout:** Fixed left sidebar menu and main content area for palettes.
* **Flat Design:** Utilizes a clean, flat aesthetic suitable for modern web applications.
* **Component-Based:** Structured with reusable React components (e.g., `PaletteCard`, `Sidebar`).
* **TypeScript:** Built with TypeScript for enhanced code quality and type safety.
* **Tailwind CSS:** Styled efficiently using utility-first CSS framework.

## 🚀 Getting Started

### Prerequisites

You will need **Node.js** and **npm** (or yarn/pnpm) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [YOUR-REPO-URL] color-palette-site
    cd color-palette-site
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.


## 📁 Project Structure



This project uses the Next.js App Router structure. The configuration for path aliases (`@/`) is essential for resolving component and data imports.

```
color-craft/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Global page structure (Sidebar, Main Content)
│   │   ├── page.tsx           # Home page displaying palette list
│   │   ├── globals.css        # Tailwind CSS imports and global styles
│   ├── components/
│   │   ├── PaletteCard.tsx    # Component for displaying an individual palette
│   │   └── Sidebar.tsx        # Fixed left navigation menu
│   └── data/
│       └── palettes.ts        # Sample color palette data (Type definitions & Array)
├── public/                    # Static assets (images, fonts, etc.)
├── next.config.js
├── package.json
├── package-lock.json (or yarn.lock)
└── tsconfig.json
```


## ⚙️ Customization & Next Steps

1.  **Add Interactivity:** Implement functionality to **copy** a color code to the clipboard when a color block is clicked in `PaletteCard.tsx`.
2.  **Implement Filtering:** Use the links in `Sidebar.tsx` to filter the palettes displayed on `page.tsx` (e.g., by 'Popular' or 'Tags').
3.  **Dynamic Data:** Replace `samplePalettes` with a dynamic data source (e.g., fetching from an API or a database).
4.  **Palette Generation:** Add a feature to generate new, random, or user-defined palettes.

## 📝 License

[Insert your license information here, e.g., MIT License]