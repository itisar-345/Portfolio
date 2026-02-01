export const projects = [
    {
      title: "Sentinel AI",
      description: "• Enterprise-grade AI system for real-time DDoS detection & mitigation in 5G networks\n• Detects and blocks attacks in <50ms using ensemble ML\n• Autonomous SDN-based mitigation via Ryu with auto-block & recovery\n• 5G slice-aware security for eMBB, URLLC, and mMTC traffic\n• Live monitoring dashboard with explainable AI insights and attack analytics",
      techStack: ["Python", "React", "Node.js", "Flask", "Ryu", "Mininet", "SHAP", "Random Forest", "XGBoost", "LSTM"],
      githubUrl: "https://github.com/itisar-345/Sentinel-AI",
      imageUrl: "/sentinelai.png"
    },
    {
      title: "Invoice Data Extractor",
      description: "• Windows desktop app (.exe) for AI-based invoice data extraction\n• Extracts structured data from PDF/JPG invoices (~91% accuracy, 1000+ tested)\n• Uses OCR + LLM (Groq / LLaMA 3.1) with intelligent fallback\n• Supports multi-file processing and append-safe Excel export\n• Standardized, analytics-ready output for real-world workflows",
      techStack: ["Electron", "Python", "OCR", "LLMs", "Pandas", "OpenCV", "Tesseract"],
      githubUrl: "https://github.com/Cherry28831/Invoice-Data-Extractor",
      liveUrl: "https://github.com/Cherry28831/Invoice-Data-Extractor/releases/tag/v2.0.0",
      imageUrl: "/invoiceextractor.jpeg"
    },
    {
      title: "Peachy Shop",
      description: "• Full-stack e-commerce platform with customer and vendor roles\n• Secure authentication with role-based access and protected workflows\n• End-to-end shopping flow: product listing, cart, wishlist, and order processing\n• Optimized performance using caching and paginated product browsing\n• Responsive, production-ready system designed for real-world scalability",
      techStack: ["Spring Boot", "Maven", "JWT", "RESTful", "React", "MySQL", "TypeScript", "Tailwind", "PHP", "JavaScript"],
      githubUrl: "https://github.com/itisar-345/E-commerce-Project/",
      imageUrl: "/ecommerce.png"
    },
    {
      title: "AI Resume Scanner",
      description: "• AI-powered ATS resume checker for scoring and optimizing resumes\n• Analyzes PDF/DOCX/TXT resumes with category-wise ATS compatibility scores\n• Generates actionable improvement suggestions with before–after comparisons using LLMs\n• Privacy-first design with local resume history and analytics",
      techStack: ["Python", "React", "Express.js", "LLMs", "PDF.js", "Mammoth", "LocalStorage" ],
      githubUrl: "https://github.com/itisar-345/ATS-Checker",
      liveUrl: "https://ats-checker-alpha.vercel.app/",
      imageUrl: "/atschecker.png"
    },
    {
      title: "Diabetes Check Web App",
      description: "• ML-powered web app for diabetes risk prediction (Healthy / Prediabetic / Diabetic)\n• Trained Random Forest model (~84% accuracy) on CDC BRFSS health indicators\n• Real-time Flask inference with personalized health & lifestyle recommendations\n• Probability-based prediction visualization for model confidence\n• Deployed on Render with optimized, lightweight ML pipeline",
      techStack: ["Python", "Flask", "Scikit-learn", "Pandas", "NumPy", "HTML/CSS", "Render", "ML"],
      githubUrl: "https://github.com/itisar-345/Diabetes-Predictor",
      liveUrl: "https://diabetes-predictor-g5yv.onrender.com/",
      imageUrl: "/diabetespredictor.png"
    }
];

export const experiences = [
  {
      id: "e5",
      company: "ACI Worldwide",
      position: "Tech Consultant Intern",
      location: "Mumbai, India",
      type: "Internship",
      startDate: "2026-01",
      endDate: "present",
      description: [
      ],
      technologies: [],
      documents: [
      ]
    },
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
      company: "SMLRA",
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
