# Portfolio Website

Modern, dark-themed portfolio website built with React, TypeScript, and TailwindCSS.

## GitHub Pages Deployment Guide

Follow these steps to deploy your portfolio website to GitHub Pages:

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com/) and sign in to your account
2. Click on the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., "portfolio")
4. Choose public visibility 
5. Click "Create repository"

### 2. Initialize Local Git Repository

Open your terminal and run the following commands in your project directory:

```bash
# Initialize Git repository
git init

# Add all files to staging
git add .

# Commit changes
git commit -m "Initial commit"

# Link to your GitHub repository (replace USERNAME and REPO_NAME)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# Push to GitHub
git push -u origin main
```

### 3. Configure for GitHub Pages

Make sure your project is set up for GitHub Pages deployment:

1. The `vite.config.ts` file should include the base path:
```js
base: '/REPO_NAME/', // Replace REPO_NAME with your repository name
```

2. The `package.json` should have the deployment scripts:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Make sure you have the required dependency:
```bash
npm install gh-pages --save-dev
```

### 4. Deploy to GitHub Pages

Run the deployment command:

```bash
npm run deploy
```

This will:
1. Build your project (`predeploy` script runs `npm run build`)
2. Deploy the contents of the `dist` folder to GitHub Pages

### 5. Configure GitHub Pages in Repository Settings

1. Go to your GitHub repository
2. Navigate to "Settings" > "Pages"
3. In the "Build and deployment" section:
   - Set "Source" to "Deploy from a branch"
   - Set "Branch" to "gh-pages" and folder to "/ (root)"
4. Click "Save"

Your site will be published at: `https://USERNAME.github.io/REPO_NAME/`

### 6. Custom Domain (Optional)

If you want to use a custom domain:

1. Update the `base` in `vite.config.ts` to `'/'` (empty string)
2. Add your domain in GitHub repository settings > Pages > Custom domain
3. Create a CNAME record with your domain provider

## Local Development

To run this project locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```