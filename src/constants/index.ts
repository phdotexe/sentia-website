// Navigation links
export const navigationLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  // { path: '/docs', label: 'Docs' },
  // { path: '/qbanks', label: 'Free QBanks' },
  { path: '/testimonials', label: 'Reviews' },
  { path: '/donations', label: 'Donate' }
];

// Documentation - Interactive Tutorials steps
// NOTE: For icon fields, import the icons in the component and map by name.
export const tutorialSteps = [
  {
    id: 1,
    title: "Welcome to Sentia",
    content: "Get ready to revolutionize your learning experience with Sentia's powerful quiz bank system.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
    icon: "Target",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Installation & Setup",
    content: "Download and install Sentia on your device. The app runs completely offline for maximum privacy and speed.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    icon: "BookOpen",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    title: "Creating Your First Quiz Bank",
    content: "Learn how to create your first quiz bank with custom questions, categories, and difficulty levels.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
    icon: "Zap",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    title: "Mastering Spaced Repetition",
    content: "Understand how Sentia's spaced repetition algorithm works to optimize your learning and retention.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
    icon: "Target",
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "Advanced Features",
    content: "Explore advanced features like analytics, custom scheduling, and importing external question banks.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
    icon: "BookOpen",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 6,
    title: "Study Strategies",
    content: "Learn proven study strategies and how to combine them with Sentia for maximum learning efficiency.",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=600&h=400&fit=crop",
    icon: "Zap",
    color: "from-teal-500 to-blue-500"
  }
];

// QBank categories
export const categories = [
  "All", "Medicine", "Biology", "Chemistry", "Physics", "Math", "Computer Science", "History"
];

// QBank data
export const qbanks = [
  {
    id: 1,
    title: "Medical Terminology Mastery",
    description: "Comprehensive medical terminology quiz bank with 500+ questions",
    category: "Medicine",
    questions: 534,
    rating: 4.8,
    downloads: 12500,
    size: "2.4 MB",
    thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop",
    author: "Dr. Sarah Chen",
    difficulty: "Intermediate",
    lastUpdated: "2024-01-15"
  },
  {
    id: 2,
    title: "Organic Chemistry Reactions",
    description: "Master organic chemistry with detailed reaction mechanisms",
    category: "Chemistry",
    questions: 425,
    rating: 4.9,
    downloads: 8200,
    size: "3.1 MB",
    thumbnail: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=300&h=200&fit=crop",
    author: "Prof. Michael Rodriguez",
    difficulty: "Advanced",
    lastUpdated: "2024-01-12"
  },
  {
    id: 3,
    title: "Python Programming Fundamentals",
    description: "Learn Python basics with hands-on coding questions",
    category: "Computer Science",
    questions: 380,
    rating: 4.7,
    downloads: 15600,
    size: "1.8 MB",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
    author: "Alex Thompson",
    difficulty: "Beginner",
    lastUpdated: "2024-01-20"
  },
  {
    id: 4,
    title: "World History: Ancient Civilizations",
    description: "Explore ancient civilizations from around the world",
    category: "History",
    questions: 290,
    rating: 4.6,
    downloads: 6800,
    size: "2.2 MB",
    thumbnail: "https://images.unsplash.com/photo-1471919743851-c4df8b6ee133?w=300&h=200&fit=crop",
    author: "Dr. Jennifer Liu",
    difficulty: "Intermediate",
    lastUpdated: "2024-01-10"
  },
  {
    id: 5,
    title: "Calculus Problem Solving",
    description: "Master calculus concepts with step-by-step solutions",
    category: "Math",
    questions: 456,
    rating: 4.8,
    downloads: 11200,
    size: "2.8 MB",
    thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=300&h=200&fit=crop",
    author: "Prof. David Kim",
    difficulty: "Advanced",
    lastUpdated: "2024-01-18"
  },
  {
    id: 6,
    title: "Cell Biology Essentials",
    description: "Comprehensive study guide for cellular biology",
    category: "Biology",
    questions: 367,
    rating: 4.7,
    downloads: 9400,
    size: "2.6 MB",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
    author: "Dr. Emily Watson",
    difficulty: "Intermediate",
    lastUpdated: "2024-01-14"
  }
];

// Testimonials
export const testimonials = [
  {
    name: "Sarah Chen",
    role: "Medical Student",
    university: "Johns Hopkins University",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5b5?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "Sentia completely transformed my study routine. The spaced repetition algorithm helped me retain complex medical terminology like never before. I went from struggling with anatomy to acing my exams."
  },
  {
    name: "Marcus Rodriguez",
    role: "Software Engineer",
    company: "Google",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "As someone who needs to constantly learn new technologies, Sentia has been a game-changer. I use it to study programming concepts, and the local storage means I can access my materials even without internet."
  },
  {
    name: "Dr. Emily Watson",
    role: "Resident Physician",
    university: "Harvard Medical School",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "The privacy aspect of Sentia is crucial for medical education. Having my study data stored locally gives me peace of mind, and the analytics help me identify which topics need more review."
  },
  {
    name: "James Kim",
    role: "Law Student",
    university: "Stanford Law School",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "Bar exam prep was overwhelming until I found Sentia. The ability to create custom quiz banks for different legal topics and track my progress made all the difference. Highly recommend!"
  },
  {
    name: "Lisa Thompson",
    role: "Language Teacher",
    company: "International School",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "I use Sentia both for my own language learning and for creating quizzes for my students. The interface is intuitive, and the results speak for themselves - my retention has improved dramatically."
  },
  {
    name: "David Park",
    role: "Graduate Student",
    university: "MIT",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    content: "Research requires memorizing countless papers and concepts. Sentia's spaced repetition keeps everything fresh in my mind. The fact that it's free on Windows made it accessible during my tight graduate school budget."
  }
];

// Testimonial stats
export const stats = [
  { number: "98%", label: "User Satisfaction Rate" },
  { number: "10,000+", label: "Active Users" },
  { number: "4.8/5", label: "Average Rating" },
  { number: "2M+", label: "Questions Studied" }
];

// Donation tiers
// NOTE: For icon fields, import the icons in the component and map by name.
export const donationTiers = [
  {
    icon: "Coffee",
    title: "Buy us a Coffee",
    amount: "$5",
    description: "Help fuel late-night coding sessions",
    benefits: [
      "Our eternal gratitude",
      "Supporter badge in Discord",
      "Knowledge that you're supporting education"
    ]
  },
  {
    icon: "Heart",
    title: "Support Development",
    amount: "$25",
    description: "Contribute to ongoing feature development",
    benefits: [
      "All Coffee tier benefits",
      "Early access to beta features",
      "Priority support in Discord",
      "Your name in app credits"
    ]
  },
  {
    icon: "Server",
    title: "Infrastructure Supporter",
    amount: "$50",
    description: "Help us maintain servers and tools",
    benefits: [
      "All previous tier benefits",
      "Monthly development updates",
      "Vote on upcoming features",
      "Direct line to the development team"
    ]
  },
  {
    icon: "Code",
    title: "Platinum Sponsor",
    amount: "$100+",
    description: "Become a major supporter of the project",
    benefits: [
      "All previous tier benefits",
      "Logo placement on website",
      "Quarterly video calls with dev team",
      "Custom feature requests consideration"
    ]
  }
];

// Donation expenses
export const expenses = [
  { category: "Development Tools", amount: "$200/month", description: "IDEs, testing tools, design software" },
  { category: "Website Hosting", amount: "$50/month", description: "Web hosting, CDN, domain costs" },
  { category: "Code Signing", amount: "$300/year", description: "Certificate for trusted app distribution" },
  { category: "App Store Fees", amount: "$99/year", description: "Apple Developer Program membership" }
];