export const projects = [
    {
      title: "Sentinel AI",
      description: "• Real-time DDoS detection system for 5G network slices using ML and SDN\n• Dual-mode traffic monitoring with slice-level threat classification\n• Full-stack architecture with autonomous detection, IP reputation checks, and live threat visualization\n• In-progress self-healing mechanisms for dynamic mitigation",
      techStack: ["React", "Node.js", "Python", "Flask", "SDN", "Docker", "Tshark", "ML"],
      githubUrl: "https://github.com/itisar-345/Sentinel-AI",
      imageUrl: "/sentinelai.png"
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
      techStack: ["Electron", "Python", "OCR", "Gemini", "LLMs"],
      githubUrl: "https://github.com/Cherry28831/Invoice-Data-Extractor",
      liveUrl: "https://github.com/Cherry28831/Invoice-Data-Extractor/releases/tag/v1.0.0",
      imageUrl: "/invoiceextractor.jpeg"
    },
    {
      title: "E-Commerce Platform",
      description: "• Comprehensive e-commerce platform with two distinct implementation styles\n• Supports multi-role functionality for customers and vendors\n• Features product management, cart, order processing, and analytics\n• Secure JWT-based authentication and role-based access control",
      techStack: ["Spring Boot", "Maven", "RESTful", "JWT", "React", "TypeScript", "MySQL", "Tailwind", "PHP", "JavaScript"],
      githubUrl: "https://github.com/itisar-345/E-commerce-Project/",
      imageUrl: "/ecommerce.png"
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
      id: "e4",
      company: "Home First Finance Company",
      position: "Software Engineer Intern",
      location: "Mumbai, India",
      type: "Internship",
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
      id: "e3",
      company: "Edunet Foundation",
      position: "AI Intern",
      location: "Remote",
      type: "Internship",
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
      id: "e2",
      company: "Somaiya Machine Learning & Research Association",
      position: "Team Lead",
      location: "KJ Somaiya College of Engineering, Mumbai",
      type: "Leadership",
      startDate: "2023-08",
      endDate: "2025-05",
      description: [
        "Spearheaded 10+ guest lectures, hands-on workshops, and webinars featuring industry experts and academicians, covering AI/ML fundamentals, research strategies and career guidance",
        "Facilitated interactive sessions on production-ready AI models, real-world applications, and industry expectations",
        "Organized expert-led Q&A and networking opportunities to bridge academia and professional AI/ML roles",
        "Drafted and maintained all official organizational documents while providing structured governance and record-keeping for the community",
      ],
      technologies: ["Python", "PyTorch", "TensorFlow", "Scikit-learn", "Flask", "ML/DL", "LLMs", "Reinforcement Learning"]
    },
    {
      id: "e1",
      company: "Acmegrade",
      position: "Web Developer Intern",
      location: "Remote",
      type: "Internship",
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
    },
];
