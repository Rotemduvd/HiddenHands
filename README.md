# AI & Morality Quiz App

A React-based quiz application exploring the use of AI by democratic countries, designed with a modern, tech-focused aesthetic.

## Features
- **Randomized Quiz Sessions**: 5 unique cases selected from a bank of 10+ educational cases.
- **Dynamic Decoys**: Options generated dynamically with 1 correct country and 3 random decoys.
- **Immediate Feedback**: Learn as you play with detailed explanations for each case.
- **Scoring & Summary**: Get a final score and awareness rating.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)

### Installation
1. Clone the repository (or navigate to the project folder).
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
To start the development server:
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### Building for Production
To build the static files:
```bash
npm run build
```
The output will be in the `dist/` directory.

## Deployment (GitHub Pages)

1. **Update `vite.config.js`**:
   Add the `base` property with your repository name:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/repository-name/' // Replace with your repo name
   })
   ```

2. **Deploy**:
   Simply run this command:
   ```bash
   npm run deploy
   ```
   This will:
   - Build the project.
   - Automatically push the `dist` folder to a `gh-pages` branch on your repository.
   - Your site will be live at `https://Rotemduvd.github.io/HiddenHands/` (allow a few minutes for the first deploy).
