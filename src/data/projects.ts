import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'booking-system',
    title: 'Enterprise Booking System',
    description: 'A comprehensive appointment scheduling and resource management platform for businesses.',
    longDescription: 'This Booking System provides an enterprise-ready solution for managing appointments, staff schedules, and client communications. Built with a focus on high availability and user experience, it allows businesses to streamline their booking process and reduce overhead.',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=2000',
    tags: ['.NET Core', 'Angular', 'SQL Server', 'REST API'],
    demoUrl: 'https://booking-system-theta-two.vercel.app/',
    githubUrl: 'https://github.com/seif090',
    features: [
      'Real-time availability checking',
      'Automated email notifications',
      'Advanced scheduling dashboard',
      'Secure payment integration'
    ],
    techStack: {
      frontend: ['Angular', 'TypeScript', 'Tailwind CSS'],
      backend: ['.NET Core 8', 'Entity Framework'],
      database: ['SQL Server'],
      cloud: ['Azure']
    },
    metrics: [
      { label: 'Booking Speed', value: 'Instant' },
      { label: 'Efficiency Gain', value: '35%' }
    ]
  },
  {
    id: 'lawyer-management',
    title: 'Lawyer Management System',
    description: 'A specialized CRM and case tracking system for legal professionals.',
    longDescription: 'Designed to handle the complex needs of law firms, this management system tracks cases, clients, documents, and billable hours. It features a secure document management module and a robust reporting engine.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000',
    tags: ['ASP.NET Core', 'Clean Architecture', 'Identity'],
    demoUrl: 'https://lawyer-management-system-mu.vercel.app/',
    githubUrl: 'https://github.com/seif090',
    features: [
      'Confidential Case Tracking',
      'Document Lifecycle Management',
      'Client Portal',
      'Billable Hours Tracking'
    ],
    techStack: {
      frontend: ['React', 'Redux', 'Bootstrap'],
      backend: ['.NET 8', 'MediatR', 'CQRS'],
      database: ['PostgreSQL'],
      cloud: ['Docker']
    },
    metrics: [
      { label: 'Case Load', value: '1000+' },
      { label: 'Security', value: 'HIPAA compliant' }
    ]
  },
  {
    id: 'fresh-cart',
    title: 'FreshCart E-Commerce',
    description: 'Full-featured online shopping platform with advanced cart and checkout flows.',
    longDescription: 'FreshCart is a modern e-commerce solution providing a seamless shopping experience. It includes catalog management, real-time inventory updates, and a highly optimized checkout process.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=2000',
    tags: ['React', 'Node.js', 'Redux', 'Stripe'],
    demoUrl: 'https://freshcart-kappa-three.vercel.app/',
    githubUrl: 'https://github.com/seif090/Ecommerce',
    features: [
      'Advanced Search Filtering',
      'Interactive Shopping Cart',
      'Admin Inventory Dashboard',
      'Responsive Mobile UI'
    ],
    techStack: {
      frontend: ['React', 'Zustand', 'SASS'],
      backend: ['Node.js', 'Express'],
      database: ['MongoDB'],
      cloud: ['Vercel']
    }
  },
  {
    id: 'vulcan-gym',
    title: 'Vulcan Gym Portal',
    description: 'Membership and attendance tracking system for fitness centers.',
    longDescription: 'This platform empowers fitness center owners to manage their members, track attendance, and handle subscription renewals efficiently. It includes a member progress tracker and class scheduling.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2000',
    tags: ['Next.js', 'Firebase', 'Tailwind'],
    demoUrl: 'https://vulcan-gym.vercel.app/',
    githubUrl: 'https://github.com/seif090',
    features: [
      'NFC/QR Code Check-in',
      'Subscription Renewals',
      'Personal Trainer Dashboard',
      'Workout Plan Management'
    ],
    techStack: {
      frontend: ['Next.js', 'Framer Motion'],
      backend: ['Firebase Functions'],
      database: ['Firestore'],
      cloud: ['Firebase']
    }
  },
  {
    id: 'easy-task',
    title: 'Easy Task Manager',
    description: 'Productivity-focused task management system with real-time collaboration.',
    longDescription: 'Easy Task helps teams stay organized and on track. It features kanban boards, deadline reminders, and real-time activity feeds to keep everyone aligned.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=2000',
    tags: ['TypeScript', 'Context API', 'LocalStorage'],
    demoUrl: 'https://easy-task-xi.vercel.app/',
    githubUrl: 'https://github.com/seif090',
    features: [
      'Drag-and-drop Kanban',
      'Priority Categorization',
      'Cloud Syncing',
      'Dark/Light Mode'
    ],
    techStack: {
      frontend: ['React', 'TypeScript'],
      backend: ['Local Engine'],
      database: ['IndexDB'],
      cloud: ['Netlify']
    }
  },
  {
    id: 'user-management-api',
    title: 'Scalable User API',
    description: 'A high-performance backend service for enterprise authentication and user metadata.',
    longDescription: 'Built with .NET 8, this API provides a secure foundation for any enterprise application. It includes JWT handling, refresh token rotations, and a flexible identity management system.',
    image: 'https://images.unsplash.com/photo-1510832198440-a52376950479?auto=format&fit=crop&q=80&w=2000',
    tags: ['.NET 8', 'SQL Server', 'Swagger', 'JWT'],
    githubUrl: 'https://github.com/seif090/User-API',
    features: [
      'Automated Token Rotation',
      'Detailed API Documentation',
      'Entity Framework Core Optimization',
      'Structured Logging'
    ],
    techStack: {
      frontend: ['Swagger UI'],
      backend: ['.NET 8', 'Identity Core'],
      database: ['SQL Server'],
      cloud: ['Docker']
    }
  },
  {
    id: 'swim-app',
      title: 'Swim Club Management',
      description: 'A platform for managing swimming lessons, instructor schedules, and student progress.',
      longDescription: 'Swim is a specialized management tool for aquatic centers. It tracks lesson attendance, student skill levels, and instructor availability in a unified dashboard.',
      image: 'https://images.unsplash.com/photo-1530549387074-d56199399493?auto=format&fit=crop&q=80&w=2000',
      tags: ['C#', '.NET', 'MVC'],
      githubUrl: 'https://github.com/seif090/Swim',
      features: ['Progress Tracking', 'Session Scheduling', 'Instructor Management'],
      techStack: { frontend: ['JavaScript', 'CSS'], backend: ['.NET MVC'], database: ['SQL Server'] }
    },
    {
      id: 'pizza-menu',
      title: 'Digital Pizza Menu',
      description: 'An interactive and responsive digital menu for pizzerias.',
      longDescription: 'A sleek, visual-first menu application that allows customers to browse selections with ease. Optimized for both tablet and mobile viewing in restaurant settings.',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=2000',
      tags: ['React', 'CSS Modules'],
      demoUrl: 'https://pizza-menu-cyan-two.vercel.app/',
      features: ['Ingredient Filtering', 'Real-time Pricing', 'Responsive Layout'],
      techStack: { frontend: ['React', 'CSS'], backend: ['N/A'], database: ['N/A'] }
    },
    {
      id: 'happy-travel',
      title: 'Happy Travel Agency',
      description: 'A travel booking landing page featuring destination discovery and tour packages.',
      longDescription: 'Happy Travel is a high-conversion landing page designed for travel agencies. It features interactive maps, destination galleries, and a booking inquiry system.',
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2000',
      tags: ['HTML', 'SASS', 'JavaScript'],
      demoUrl: 'https://seif090.github.io/Happy-Travel/',
      features: ['Destination Gallery', 'Package Comparison', 'Inquiry Form'],
      techStack: { frontend: ['HTML', 'SASS', 'JS'], backend: ['N/A'], database: ['N/A'] }
    },
    {
      id: 'game-oop',
      title: 'OOP Strategy Game',
      description: 'A browser-based game built focusing on object-oriented programming principles.',
      longDescription: 'This project demonstrates clean code and design patterns in JavaScript through a strategic game interface. It uses classes, inheritance, and encapsulation to manage game state and entities.',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000',
      tags: ['JavaScript', 'OOP', 'Canvas'],
      demoUrl: 'https://seif090.github.io/Game-oop/',
      features: ['Entity Management', 'Collision Detection', 'State Pattern Implementation'],
      techStack: { frontend: ['Pure JS'], backend: ['N/A'], database: ['N/A'] }
    }
];
