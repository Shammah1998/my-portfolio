# Victor Shammah Portfolio Website

A premium, dark-themed personal portfolio website showcasing my skills, experience, and projects. Built with modern web technologies and featuring a luxurious design.

<div align="center">
  <img src="src/assets/images/portfolio-preview.png" alt="Portfolio Preview" width="100%" />
</div>

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Components](#components)
- [Styling](#styling)
- [Form Functionality](#form-functionality)
- [Deployment](#deployment)
  - [GitHub Pages Deployment](#github-pages-deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

This portfolio website serves as a professional showcase of my skills, experience, and projects as a software engineer. The design employs a premium, luxury aesthetic with a dark theme and glass-card effects to create a visually stunning user experience.

The site is fully responsive and optimized for all devices, ensuring a seamless experience across desktop, tablet, and mobile.

## Features

- **Dark Theme Design**: Premium aesthetic with deep blues, indigo accents, and modern design elements
- **Visual Effects**: Glass-card components, animated gradients, subtle glow effects, backdrop blur
- **Responsive Layout**: Fully responsive design for all screen sizes
- **Animated UI Elements**: Subtle animations for enhanced user experience
- **Section Navigation**: Smooth scrolling with intelligent section tracking
- **Contact Form**: Functional contact form with email integration via Web3Forms API
- **Optimized Performance**: Fast loading times and optimized assets
- **Deployment Ready**: Configured for easy deployment to GitHub Pages

## Technologies Used

- **React 18**: Modern JavaScript library for building user interfaces
- **TypeScript**: Static typing for improved development experience
- **Vite**: Next-generation frontend tooling for fast development
- **TailwindCSS**: Utility-first CSS framework for custom styling
- **Lucide Icons**: Lightweight icon library
- **Web3Forms API**: Form submission handling without server-side code
- **GitHub Pages**: Hosting platform for the deployed website

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
portfolio/
├── public/             # Public assets
├── src/                # Source code
│   ├── assets/         # Images and static files
│   │   ├── Hero.tsx    # Hero section
│   │   ├── Navbar.tsx  # Navigation bar
│   │   ├── Skills.tsx  # Skills section
│   │   └── ...         # Other components
│   ├── App.tsx         # Main application component
│   ├── index.css       # Global styles
│   └── main.tsx        # Entry point
├── index.html          # HTML template
├── tailwind.config.js  # TailwindCSS configuration
├── vite.config.ts      # Vite configuration
└── package.json        # Project dependencies
```

## Components

The website is composed of several key sections, each implemented as a separate React component:

- **Navbar**: Responsive navigation with section highlighting
- **Hero**: Introduction section with animated background and professional summary
- **Skills**: Showcase of technical skills with interactive elements
- **Projects**: Portfolio of completed projects with details and links
- **Experience**: Professional experience timeline
- **Certifications**: List of professional certifications
- **Contact**: Contact form with Web3Forms API integration
- **Footer**: Site footer with additional links

## Styling

The website uses TailwindCSS for styling with custom configurations:

- **Custom Colors**: Defined in `tailwind.config.js` to maintain consistent theming
- **Animations**: Custom animations for gradients, fades, and transitions
- **Typography**: Uses Poppins for headings and Inter for body text
- **Responsive Design**: Tailwind's responsive utilities for all screen sizes
- **Glass Effect**: Custom styling for modern glass-card components

## Form Functionality

The contact form uses Web3Forms API to handle form submissions without requiring backend code:

1. User fills out the contact form with name, email, and message
2. Form data is sent to Web3Forms API upon submission
3. Form displays loading state during submission
4. Success/error messages are shown based on the API response
5. Email notification is sent to the portfolio owner

## Deployment

### GitHub Pages Deployment

The project is configured for easy deployment to GitHub Pages:

1. Update the repository information in `vite.config.ts`:
```js
base: '/your-repo-name/',
```

2. Run the deployment script:
```bash
npm run deploy
# or
yarn deploy
```

3. Configure GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Set source to "gh-pages" branch
   - The site will be available at `https://your-username.github.io/your-repo-name/`

For detailed deployment instructions, see the [Deployment](#deployment) section.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Developer: Victor Shammah