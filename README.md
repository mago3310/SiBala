<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# SiBala - 3D Dice App

A React-powered 3D dice rolling application using Gemini AI for interaction.

## Features

- **3D Dice Rolling**: Realistic 3D dice physics and rendering.
- **AI Integration**: Powered by Google Gemini for smart interaction.
- **CI/CD**: Automatic deployment to GitHub Pages.

## Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### Setup

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd SiBala
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory and add your Gemini API key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

4. **Run the app:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Locally previews the production build.

## Deployment

This project uses **GitHub Actions** for automated deployment. 

- **Trigger**: Every push to the `main` branch.
- **Target**: GitHub Pages.
- **Configuration**: See [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

Ensure that you have enabled GitHub Pages in your repository settings and set the source to **GitHub Actions**.
