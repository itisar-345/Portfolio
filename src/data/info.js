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
      id: "e3",
      company: "Home First Finance Company",
      position: "SDE Intern",
      location: "Mumbai, India",
      startDate: "2025-06",
      endDate: "2025-08",
      description: [
        "Contributed to the design and implementation of end-to-end loan processing workflows, including lead capture, application submission, document verification, underwriting, disbursement, and closure.",
        "Demonstrated strong problem-solving skills and hands-on Salesforce development (Flows, Apex, LWC, and integrations with third-party APIs) in a real-time, team-driven project.", 
        "Worked proactively, adapted quickly to dynamic workflows across teams, and effectively collaborated for transparent project execution."
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
        "Developed an AI chatbot using IBM Watson Assistant for cardiovascular risk prediction",
        "Trained and deployed a machine learning model using the Framingham dataset",
        "Enabled real-time predictions to enhance user interaction and risk awareness"
      ],
      technologies: ["Python", "IBM Watson", "Scikit-learn", "NLP", "Pipelines", "APIs", "Twilio"],
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
      technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
      documents: [
        { name: "Internship Completion Certificate", url: "/documents/Acmegrade-completion.pdf" }
      ]
      }
];