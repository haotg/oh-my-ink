<div align="center">
  <img src="https://ohmy.ink/cdn/shop/files/OH_MY_INK_20231011.png" alt="Oh My Ink Logo" width="140"/>
  <h1>Oh My Ink</h1>
  <p>AI-Powered Tattoo Try-On Platform</p>
</div>

## Overview

Oh My Ink is an innovative platform that allows users to visualize tattoos on their skin in real-time using AI technology. The application provides a seamless experience for users to experiment with different tattoo designs before making a permanent decision.

## Deploy Link

🚀 **Live Demo**: [https://oh-my-ink.vercel.app/](https://oh-my-ink.vercel.app/)

## Features

- 👨‍🎨 **Artist Collections**: Curated designs from professional tattoo artists
- 🐾 **SPCA Collaboration**: Special collection featuring animal-themed tattoos
- 💫 **Interactive Design Selection**: Easy browsing through various tattoo categories
- 💰 **Dynamic Pricing**: Real-time price display for each design
- 📱 **Responsive Design**: Optimized for all devices
- ⚡ **Fast Performance**: Built with Next.js and Turbopack

## Tech Stack

- **Framework**: [Next.js 15.3](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **UI Framework**: [Shadcn UI](https://ui.shadcn.com/)
- **Testing**: [Cypress](https://www.cypress.io/)
- **Font**: [Roboto](https://fonts.google.com/specimen/Roboto)

## Getting Started

```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install

# Run development server with Turbopack
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
src/
├── app/                # Next.js app directory
│   ├── start/         # Design selection pages
│   └── globals.css    # Global styles
├── components/
│   ├── custom/        # Custom components
│   └── ui/            # Reusable UI components
├── constants/         # Application constants
├── lib/              # Utility functions
└── stores/           # Zustand state management
```

## Testing

```bash
# Run Cypress tests
npm run cypress:open
```

## Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Development Process

1. **Research and Analysis**

   - Reviewed provided software documentation and demo videos
   - Analyzed key features and functionalities to be implemented

2. **Technical Planning**

   - Selected optimal UI libraries (Shadcn UI, Radix UI) for component development
   - Chose Zustand for efficient state management

3. **Implementation**

   - Developed core features using Next.js and TypeScript
   - Implemented responsive design with Tailwind CSS

4. **Testing Strategy**

   - Conducted comprehensive unit testing
   - Performed end-to-end testing using Cypress
   - Executed component testing for UI elements
   - Performed cross-browser compatibility testing

5. **Deployment**
   - Deployed application to Vercel
