import type { Project } from '../types';

// ============================================================
// Projects data — populated from https://github.com/sak4u
// All projects are public repositories on GitHub.
// ============================================================
export const projects: Project[] = [
  {
    id: 'restaurant-management',
    title: 'DineHub — Restaurant Management Platform',
    tagline: 'Full-stack platform with real-time WebSocket order updates and kitchen workflow.',
    description:
      'A full-stack restaurant operations platform built to manage orders, table statuses, and menus in real time. Features live order notifications with audio alerts using Socket.IO, role-based dashboards (manager/staff), and a robust NestJS backend with Prisma ORM.',
    problem:
      'Coordinating kitchen order statuses, table assignments, and menu availability manually causes order delays and communication breakdowns between servers and chefs.',
    solution:
      'A synchronized full-stack architecture with WebSockets for instant table-to-kitchen order updates, JWT authentication with Passport, and Prisma-backed PostgreSQL/MongoDB data integrity.',
    features: [
      'Real-time order updates with Socket.IO & audio alerts',
      'Role-based access control (manager & staff)',
      'Table assignment and status management',
      'Menu and product configuration',
      'Automated CI test workflow',
      'Docker Compose deployment',
    ],
    tech: ['React', 'TypeScript', 'NestJS', 'Prisma', 'Socket.IO', 'Tailwind CSS', 'Docker'],
    githubUrl: 'https://github.com/sak4u/restau',
    demoUrl: null,
    imageAlt: 'DineHub Restaurant Management Platform interface',
    status: 'completed',
    highlight: true,
  },
  {
    id: 'inventory-management',
    title: 'Inventiq — Enterprise Inventory & CI/CD',

    tagline: 'Full-stack inventory tracking backed by automated Jenkins pipelines and Selenium E2E tests.',
    description:
      'An enterprise-grade inventory management platform built with modern React and NestJS, featuring an automated DevOps workflow with Jenkins pipelines (Jenkinsfile.api and Jenkinsfile.e2e) and Selenium automated browser testing.',
    problem:
      'Managing warehouse stock levels without automated validation leads to inventory discrepancies, while fragile manual deployment processes risk introducing regressions.',
    solution:
      'A structured full-stack inventory platform featuring automated Jenkins CI/CD pipelines executing API tests and Selenium end-to-end browser tests on every commit.',
    features: [
      'Real-time stock tracking with low-inventory threshold alerts',
      'Multi-warehouse and supplier relationship tracking',
      'Automated Jenkins CI/CD pipelines for API and E2E testing',
      'Selenium automated browser regression test suites',
      'Role-based access control with JWT and Prisma ORM',
      'Dockerized environments for reproducible local and staging setups',
    ],
    tech: ['React', 'TypeScript', 'NestJS', 'Prisma', 'Jenkins', 'Selenium', 'Docker'],
    githubUrl: 'https://github.com/sak4u/gestion-des-inventaires',
    demoUrl: null,
    imageAlt: 'Enterprise Inventory Management System interface with Jenkins CI/CD',
    status: 'completed',
    highlight: true,
  },
  {
    id: 'taskfire-android',
    title: 'TaskFire — Android Task Management',
    tagline: 'Native Android application for task tracking with real-time Firebase cloud sync.',
    description:
      'A native Android application built in Kotlin (SDK 35) engineered for personal productivity and task management, featuring real-time cloud persistence powered by Google Firebase and clean ViewBinding architecture.',
    problem:
      'Users struggle to organize daily priorities across multiple categories on mobile devices without reliable real-time synchronization.',
    solution:
      'A responsive native Android application leveraging Firebase Realtime Database for instantaneous cloud sync, structured category management, and fluid Material UI.',
    features: [
      'Task creation, editing, prioritization, and completion tracking',
      'Real-time cloud synchronization using Firebase',
      'Category-based task filtering and deadline reminders',
      'Android ViewBinding and DataBinding clean architecture',
      'Polished Material Design interface supporting dynamic layout',
    ],
    tech: ['Kotlin', 'Android SDK', 'Firebase', 'Gradle', 'Material Design'],
    githubUrl: 'https://github.com/sak4u/taskfire',
    demoUrl: null,
    imageAlt: 'TaskFire Android task management mobile interface',
    status: 'completed',
    highlight: true,
  },
  {
    id: 'nlp-news-classification',
    title: 'NLP News Classification & Deep Learning',
    tagline: 'End-to-end NLP pipeline benchmarking LSTM neural networks against classical ML models.',
    description:
      'A machine learning and Natural Language Processing project on the 20Newsgroups dataset, implementing a complete pipeline from text preprocessing to training deep learning (LSTM) and classical ML classifiers (Naive Bayes, SVM, Random Forest, Logistic Regression).',
    problem:
      'Large volumes of unstructured news text require automated classification to organize content into accurate topical categories.',
    solution:
      'A systematic NLP pipeline implementing linguistic preprocessing, vector embeddings (TF-IDF & Word2Vec), and comparative benchmarking across multiple ML algorithms with comprehensive metric evaluation.',
    features: [
      'Text cleaning, tokenization, stop-word removal, and lemmatization',
      'Linguistic representations with TF-IDF and Word2Vec vectorization',
      'Deep learning classification using Long Short-Term Memory (LSTM)',
      'Comparative analysis of Naive Bayes, Logistic Regression, SVM, and Random Forest',
      'Evaluation with Accuracy, F1-score, confusion matrices, and ROC curves',
    ],
    tech: ['Python', 'LSTM', 'Scikit-learn', 'TF-IDF', 'Word2Vec', 'Pandas', 'Jupyter'],
    githubUrl: 'https://github.com/sak4u/Projet-NLP',
    demoUrl: null,
    imageAlt: 'NLP News Classification pipeline and model evaluation charts',
    status: 'completed',
    highlight: false,
  },
  {
    id: 'leave-management-pfa',
    title: 'Leave Management System (PFA)',
    tagline: 'Academic end-of-year project streamlining employee leave requests and approvals.',
    description:
      'An academic end-of-year (PFA) full-stack HR application enabling employees to submit leave requests and managers to review and approve them through structured approval workflows with real-time balance calculations.',
    problem:
      'Manual leave tracking causes approval delays, double-bookings, and lack of visibility into team availability.',
    solution:
      'A structured digital workflow with separate employee and manager dashboards, balance calculations, and clear status tracking.',
    features: [
      'Employee leave request submission with date picker and type selection',
      'Manager approval and rejection workflow',
      'Department-level availability tracking',
      'Real-time remaining balance calculations',
      'Role-based access control and secure authentication',
    ],
    tech: ['React', 'TypeScript', 'NestJS', 'MongoDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com/sak4u/pfa-leave-app-application',
    demoUrl: null,
    imageAlt: 'Leave Management System interface showing request and approval workflow',
    status: 'completed',
    highlight: false,
  },
  {
    id: 'event-management',
    title: 'Event Booking & Management Portal',
    tagline: 'Web portal for event discovery, ticket booking, and automated email confirmations.',
    description:
      'A web application for event browsing, user registration, and ticket reservations, featuring user authentication, contact workflows, and automated email notifications upon booking.',
    problem:
      'Event organizers need a simple way for attendees to browse listings, register, and receive immediate booking confirmations.',
    solution:
      'A lightweight portal with interactive event schedules, registration forms, and automated email confirmation handlers.',
    features: [
      'Event schedule and details browser',
      'User registration and login flow',
      'Ticket reservation and booking form',
      'Automated email notifications upon registration',
      'Responsive UI for desktop and mobile',
    ],
    tech: ['PHP', 'JavaScript', 'HTML5', 'CSS3'],
    githubUrl: 'https://github.com/sak4u/gestionnaire-des-evenements',
    demoUrl: null,
    imageAlt: 'Event booking and reservation portal interface',
    status: 'completed',
    highlight: false,
  },
  {
    id: 'json-converter',
    title: 'JSON Data Converter & Validator',
    tagline: 'Client-side utility for validating, formatting, and converting JSON data structures.',
    description:
      'A responsive browser utility tool for validating, formatting, and transforming structured JSON data with instant error feedback, operating 100% client-side for privacy.',
    problem:
      'Developers often need quick, client-side tools to inspect, validate, and format raw JSON without sending private data to third-party servers.',
    solution:
      'A pure client-side utility providing real-time JSON syntax validation, clean indentation formatting, and error diagnosis.',
    features: [
      'Client-side JSON validation and syntax checking',
      'One-click indentation formatting and minification',
      'Instant visual error highlighting',
      'Pure privacy-friendly in-browser processing',
    ],
    tech: ['JavaScript', 'HTML5', 'CSS3'],
    githubUrl: 'https://github.com/sak4u/convertisseur-.json-',
    demoUrl: null,
    imageAlt: 'JSON Data Converter and Validator tool interface',
    status: 'completed',
    highlight: false,
  },
  {
    id: 'simple-calculator',
    title: 'Interactive Web Calculator',
    tagline: 'Responsive web calculator featuring arithmetic operations and keyboard input.',
    description:
      'A clean, accessible web calculator implementing standard arithmetic operations, keyboard input support, error state handling, and responsive tactile styling.',
    problem:
      'Designing an intuitive, accessible numerical keypad layout that handles edge cases like division by zero and continuous calculation chaining.',
    solution:
      'An interactive calculator with modular operator evaluation, display overflow handling, and mobile-friendly touch targets.',
    features: [
      'Standard arithmetic operations (+, -, *, /)',
      'Keyboard and on-screen keypad input support',
      'Error state handling and memory clearance',
      'Clean modern CSS interface',
    ],
    tech: ['JavaScript', 'HTML5', 'CSS3'],
    githubUrl: 'https://github.com/sak4u/Simple-Calculatrice',
    demoUrl: null,
    imageAlt: 'Interactive web calculator interface',
    status: 'completed',
    highlight: false,
  },
];

