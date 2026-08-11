export const projects = [
  {
    id: 'onetap',
    number: '01',
    category: 'FULL-STACK WEB APPLICATION',

    title: 'Onetap - Web Superapp',
    subtitle: 'A modular web superapp built around a unified experience.',

    description:
      'A dynamic web superapp bringing together e-commerce, live weather, and news into a single responsive interface. Built with a focus on scalable state management, authentication, and a clean user experience.',

    technologies: [
      'React',
      'Context API',
      'useReducer',
      'Firebase',
      'Firestore',
      'Vercel',
    ],

    highlights: [
      'Designed modular application architecture',
      'Implemented global state using Context API and useReducer',
      'Integrated Firebase Authentication and Firestore',
      'Built integrated e-commerce, weather, and news modules',
      'Optimized production builds and deployed through Vercel',
    ],

    featured: true,

    links: {
      github: 'https://github.com/tejaxpatil',
      live: '',
    },
  },

  {
    id: 'API-optimization',
    number: '02',
    category: 'Backend / API ENGINEERING',

    title: 'API Optimization & Microservices Backend',
    subtitle: 'A multi-service application powered by REST APIs.',

    description:
      'A full-stack application inspired by modern super apps, integrating shopping, recommendations, and tracking services through a FastAPI backend and responsive React frontend.',

    technologies: [
      'Python',
      'FastAPI',
      'React',
      'Tailwind CSS',
      'REST APIs',
      'DummyJSON',
    ],

    highlights: [
      'Designed RESTful backend services using FastAPI with modular endpoints, CORS integration, and API optimization techniques.',
      'Built scalable service architecture for product retrieval, recommendations, and request handling using third-party APIs.',
    ],

    featured: true,

    links: {
      github: 'https://github.com/tejaxpatil',
      live: '',
    },
  },

  {
    id: 'fraud-detection',
    number: '03',
    category: 'MACHINE LEARNING',

    title: 'Credit Card Fraud Detection',
    subtitle: 'Detecting fraudulent transactions in highly imbalanced data.',

    description:
      'A machine learning system designed to identify fraudulent credit card transactions using a real-world highly imbalanced financial dataset.',

    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Matplotlib',
    ],

    highlights: [
      'Performed end-to-end data preprocessing',
      'Handled highly imbalanced transaction data',
      'Compared Decision Tree, Random Forest, KNN and K-Means',
      'Applied feature scaling and model evaluation',
      'Analyzed Accuracy, Precision, Recall and F1-score',
    ],

    featured: false,

    links: {
      github: 'https://github.com/tejaxpatil',
      live: '',
    },
  },

  {
    id: 'cassandra',
    number: '04',
    category: 'DATABASE / NOSQL',

    title: 'Distributed NoSQL Data Management System',
    subtitle: 'Query-driven data modeling with Apache Cassandra.',

    description:
      'A distributed data management project focused on Cassandra data modeling, query performance, data lifecycle management, and bulk data operations.',

    technologies: [
      'Apache Cassandra',
      'CQL',
      'NoSQL',
      'Data Modeling',
    ],

    highlights: [
      'Designed query-driven Cassandra schemas',
      'Used List, Set and Map collection types',
      'Implemented TTL for automated data expiration',
      'Performed bulk ingestion using COPY operations',
      'Focused on efficient access patterns and storage management',
    ],

    featured: false,

    links: {
      github: 'https://github.com/tejaxpatil',
      live: '',
    },
  },
];