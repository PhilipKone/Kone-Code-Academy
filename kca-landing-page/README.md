# KCA Landing Page

A modern, responsive landing page for Kone-Code-Academy built with React.

## Features

- 🎨 Modern, beautiful UI with gradient designs
- 📱 Fully responsive for all devices
- ⚡ Fast and optimized
- 🚀 Ready for GitHub Pages deployment

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Deployment to GitHub Pages

### First Time Setup

1. Make sure you have `gh-pages` installed (already in devDependencies)

2. Ensure your `package.json` has the correct homepage URL:
```json
"homepage": "https://PH-consult.github.io/Kone-Code-Academy"
```

3. Deploy to GitHub Pages:
```bash
npm run deploy
```

This will:
- Build the production version
- Deploy it to the `gh-pages` branch
- Make it available at the homepage URL

### Updating the Site

Simply run `npm run deploy` again after making changes.

## Project Structure

```
kca-landing-page/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── Vision.js
│   │   ├── Divisions.js
│   │   ├── Services.js
│   │   ├── CTA.js
│   │   └── Footer.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## Technologies Used

- React 18.2.0
- CSS3 (with modern features)
- React Scripts 5.0.1

## License

This project is licensed under the terms of the LICENSE file in the root directory.

