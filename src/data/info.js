export const projects = [
    {
      title: "E-Commerce Platform",
      description: "• Comprehensive e-commerce platform with Spring Boot + React and PHP implementations\n• Supports multi-role functionality for customers and vendors\n• Features product management, cart, order processing, and analytics\n• Secure JWT-based authentication and role-based access control\n• Responsive UI with Tailwind CSS and TypeScript",
      techStack: ["Spring Boot", "React", "TypeScript", "MySQL", "JWT", "Tailwind CSS", "PHP", "JavaScript"],
      githubUrl: "https://github.com/itisar-345/E-commerce-Project/",
      imageUrl: "/ecommerce.png"
    },
    {
      title: "AI Resume Scanner",
      description: "• Analyzes uploaded resumes, scores ATS compatibility\n• Provides actionable suggestions to improve hiring chances\n• Achieved 97% accuracy with instant results\n• Secure browser-based data handling\n• Includes downloadable report generation",
      techStack: ["Python", "JavaScript", "React", "LLMs"],
      githubUrl: "https://github.com/itisar-345/ATS-Checker",
      liveUrl: "https://ats-checker-alpha.vercel.app/",
      imageUrl: "/atschecker.png"
    },
    {
      title: "Invoice Data Extractor",
      description: "• Lightweight Windows desktop app (.exe) for data extraction\n• Extracts data from PDF/JPG invoices with over 95% accuracy\n• Uses OCR, Gemini (Generative AI), and smart processing\n• Supports multi-file processing and user-defined storage\n• Standardized output for seamless client integration",
      techStack: ["Python", "OCR", "Gemini", "LLMs"],
      githubUrl: "https://github.com/Cherry28831/Invoice-Data-Extractor/releases/tag/v1.0.0",
      imageUrl: "/invoiceextractor.jpeg"
    },
    {
      title: "Diabetes Check Web App",
      description: "• Web app to classify users as Diabetic, Pre-diabetic, or Healthy\n• Based on a 20-question form with real-time results\n• Achieved 84% correct prediction rate\n• Provides personalized health feedback",
      techStack: ["Python", "JavaScript", "Flask", "Scikit-learn", "HTML", "CSS"],
      githubUrl: "https://github.com/itisar-345/Diabetes-Predictor",
      liveUrl: "https://diabetes-predictor-g5yv.onrender.com/",
      imageUrl: "/diabetespredictor.png"
    },
    {
      title: "Budget Calculator Pro",
      description: "• Professional budget calculator with income, expense, and savings tracking \n• Provides cash flow projections, financial health insights and personalized recommendations \n• Supports data export, interactive charts, and responsive design \n• All data stored locally for privacy, with GitHub Pages deployment support",
      techStack: ["React", "TypeScript", "Vite", "Github Actions"],
      githubUrl: "https://github.com/itisar-345/Budget-Calculator",
      liveUrl: "https://itisar-345.github.io/Budget-Calculator/",
      imageUrl: "/budgetcal.png"
    }
];

export const experiences = [
    {
      id: "e3",
      company: "Home First Finance Company",
      position: "Software Engineer Intern",
      location: "Mumbai, India",
      startDate: "2025-06",
      endDate: "2025-08",
      description: [
        "Designed and implemented end-to-end loan processing workflows including lead capture, application submission, document verification, underwriting, disbursement, and closure",
        "Developed Salesforce components and integrated third-party APIs to enable seamless data exchange and automation",
        "Collaborated in a real-time team environment to deliver a scalable and user-friendly loan origination system"
      ],
      technologies: ["Salesforce", "Apex", "Lightning Web Components", "Screen Flows", "JavaScript"],
      documents: [
        { name: "Internship Completion Certificate", url: "/documents/HFFC-completion.pdf" },
        { name: "Offer Letter", url: "/documents/HFFC-offer.pdf" }
      ]
    },
    {
      id: "e2",
      company: "Edunet Foundation",
      position: "AI Intern",
      location: "Remote",
      startDate: "2024-06",
      endDate: "2024-07",
      description: [
        "Developed an AI chatbot that delivers personalized cardiovascular risk assessments based on user input, using insights from the Framingham dataset",
        "Trained and deployed a predictive model to enable real-time interaction and 10-year CHD risk evaluation, enhancing user awareness and engagement",
        "Explored multiple machine learning pipelines and selected the most effective approach to achieve 90% accuracy, demonstrating clinical relevance and reliability"
      ],
      technologies: ["Python", "IBM Watson", "IBM Cloud", "Pipelines", "APIs", "Twilio"],
      documents: [
        { name: "Internship Completion Certificate", url: "/documents/Edunet-completion.pdf" }
      ]
    },
    {
      id: "e1",
      company: "Acmegrade",
      position: "Web Development Intern",
      location: "Remote",
      startDate: "2023-04",
      endDate: "2023-06",
      description: [
      "Developed and maintained a full-stack e-commerce website with functionalities for customer product browsing, cart management, order placement, and vendor-side product/order controls",
      "Implemented secure authentication mechanisms and enabled role-based access for customers and vendors",
      "Collaborated with a team to troubleshoot issues, enhance features, and gain hands-on experience in web development processes"
      ],
      technologies: ["HTML", "CSS", "PHP", "JavaScript", "MySQL"],
      documents: [
        { name: "Internship Completion Certificate", url: "/documents/Acmegrade-completion.pdf" }
      ]
      }
];
