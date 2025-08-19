export const projects = [
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
      id: "e1",
      company: "Home First Finance Company",
      position: "SDE Intern",
      location: "Mumbai, India",
      startDate: "2025-06",
      endDate: "2025-08",
      description: [
        "Built a Campus Recruitment Management System (CRMS) on Salesforce using Apex, Flows, and custom objects",
        "Developed interactive Lightning Web Components (LWC) for job filtering, inline status updates, and guided student onboarding",
        "Implemented email automation, application status triggers, and dynamic dashboards for enhanced recruitment tracking"
      ],
      technologies: ["Salesforce", "Apex", "Lightning Web Components", "JavaScript"]
    },
    {
      id: "e2",
      company: "Edunet Foundation",
      position: "AI Intern",
      location: "Remote",
      startDate: "2024-06",
      endDate: "2024-07",
      description: [
        "Developed an AI chatbot using IBM Watson Assistant for cardiovascular risk prediction",
        "Trained and deployed a machine learning model using the Framingham dataset",
        "Enabled real-time predictions to enhance user interaction and risk awareness"
      ],
      technologies: ["Python", "IBM Watson", "Scikit-learn", "NLP"]
    }
];