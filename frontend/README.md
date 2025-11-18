# Yalla Mobility Limited - Website

A modern, responsive website for Yalla Mobility Limited, South Sudan's premier ride-hailing service based in Juba.

## Features

- **Modern Design**: Clean, professional design with orange color scheme
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Contact Form**: Functional contact form for customer inquiries
- **Service Showcase**: Detailed information about Boda Boda and car services
- **Company Information**: About section with company mission and values
- **App Download Section**: Coming soon section for mobile app
- **Social Media Integration**: Links to social media platforms

## Tech Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icons
- **React Router**: Client-side routing
- **React Query**: Data fetching and caching

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Yalla_Mobility_Limited
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── About.jsx       # About section
│   ├── AppDownload.jsx # App download section
│   ├── Contact.jsx     # Contact form and info
│   ├── Footer.jsx      # Footer component
│   ├── Hero.jsx        # Hero section
│   ├── HowItWorks.jsx  # How it works section
│   ├── Navbar.jsx      # Navigation bar
│   └── Services.jsx    # Services section
├── pages/              # Page components
│   ├── Index.jsx       # Home page
│   └── NotFound.jsx    # 404 page
├── lib/                # Utility functions
├── App.jsx             # Main app component
├── main.jsx           # Entry point
└── index.css          # Global styles
```

## Customization

### Colors
The website uses an orange color scheme. You can modify the colors in `src/index.css`:

```css
--primary: 24 95% 53%;  /* Orange */
--secondary: 217 91% 60%; /* Blue */
```

### Content
Update the content in each component file to match your specific business needs:

- Company information in `About.jsx`
- Contact details in `Contact.jsx` and `Footer.jsx`
- Service descriptions in `Services.jsx`

### Images
Add your own images to the `src/assets/` directory and update the imports in the components.

## Contact Form

The contact form includes:
- Name and email validation
- Phone number field
- Subject selection
- Message textarea
- Form submission handling (currently shows alert, can be connected to backend)

## Deployment

The website can be deployed to any static hosting service:

- **Netlify**: Connect your Git repository for automatic deployments
- **Vercel**: Import your project for seamless deployment
- **GitHub Pages**: Use GitHub Actions for deployment
- **AWS S3**: Upload the built files to an S3 bucket

## License

This project is licensed under the MIT License.

## Support

For support or questions about this website, contact:
- Email: info@yallamobility.ss
- Phone: +211 XXX XXX XXX