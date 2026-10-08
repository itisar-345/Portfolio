export const projects = [
    {
      title: "Regula",
      description: "• Agentic continuous-compliance engine that turns regulatory change into engineering action\n• Six LLM agents + deterministic rules map regulations to controls, scan real AWS/GitHub environments, and assess risk\n• Neo4j compliance graph (Regulation → Requirement → Control → System → Finding → Action) enables one-traversal impact analysis\n• YAML \"Compliance Constitution\" policy engine gates remediations with human approval and post-fix verification\n• Append-only audit trail with provenance, OpenTelemetry tracing, and CI-enforced testing & LLM evals",
      techStack: ["Python", "FastAPI", "Neo4j", "React", "Typescript", "PostgreSQL", "Qdrant", "Groq LLMs", "AWS", "Docker", "OpenTelemetry"],
      githubUrl: "https://github.com/Team-Existing/Regula",
      imageUrl: "/regula.gif"
    },
    {
      title: "Sentinel AI",
      description: "• Enterprise-grade AI system for real-time DDoS detection & mitigation in 5G networks\n• Ensemble ML (RandomForest, XGBoost, LSTM, Autoencoder) classifies traffic in <50ms\n• Autonomous SDN-based mitigation via Ryu with OpenFlow auto-block & recovery\n• 5G slice-aware security for eMBB, URLLC, and mMTC traffic\n• Live monitoring dashboard with explainable AI insights and attack analytics",
      techStack: ["Python", "TensorFlow", "Ryu", "SDN", "React", "Node.js", "Flask", "Mininet", "WebSockets", "Linux"],
      githubUrl: "https://github.com/itisar-345/Sentinel-AI",
      imageUrl: "/sentinal.gif"
    },
    {
      title: "Peachy Shop",
      description: "• Full-stack e-commerce platform built with Spring Boot + React with dual-token JWT authentication (auto refresh)\n• Redis-powered architecture (Hash for cart, Set for wishlist, Cache-Aside for products) with <100ms cached responses\n• Role-based access control (Customer/Vendor) with secure REST APIs and method-level authorization\n• Stock-aware order lifecycle (validation, optimistic locking, auto-reduction on delivery)\n• Production-grade MySQL + Redis dual-write system with pagination and concurrency-safe operations",
      techStack: ["Java", "Spring Boot", "Redis", "React", "Typescript", "Maven", "Tailwind", "SQL", "Docker", "JWT", "RESTful APIs", "RBAC"],
      githubUrl: "https://github.com/itisar-345/E-commerce-Project/",
      imageUrl: "/ecommerce.gif"
    },
    {
      title: "Knowledge Hub",
      description: "• Local-first team knowledge base with GraphRAG Q&A that cites its sources and flags superseded decisions\n• Extracts decisions, risks, lessons, and how-tos from documents, URLs, transcripts, email, and Slack exports\n• Tracks decision lineage (supersede, reverse, amend) with a review queue for every extracted item\n• Connectors for Git ADRs, GitHub, Jira, and Linear, with private and shared group spaces\n• Fully local AI (Ollama + sentence-transformers); production stack with load balancer, Celery, and a 3-node ArcadeDB cluster",
      techStack: ["Python", "FastAPI", "GraphRAG", "Angular", "ArcadeDB", "Ollama", "Celery", "Docker"],
      githubUrl: "https://github.com/Team-Existing/KnowledgeHub",
      imageUrl: "/knowledgehub.gif"
    },
    {
      title: "Invoice Data Extractor",
      description: "• Windows desktop app (.exe) for AI-based invoice data extraction\n• Extracts structured data from PDF/JPG invoices (~91% accuracy, 1000+ tested)\n• Uses OCR + LLM (Groq / LLaMA 3.1) with intelligent fallback\n• Supports multi-file processing and append-safe Excel export\n• Standardized, analytics-ready output for real-world workflows",
      techStack: ["Python", "LLMs", "OCR", "Electron", "Pandas", "OpenCV", "Tesseract"],
      githubUrl: "https://github.com/Cherry28831/Invoice-Data-Extractor",
      liveUrl: "https://github.com/Cherry28831/Invoice-Data-Extractor/releases/tag/v2.0.0",
      imageUrl: "/invoiceextractor.gif"
    },
    {
      title: "CycleIQ",
      description: "• Privacy-first, fully local period & symptom tracker for PCOS, endometriosis, perimenopause, and irregular cycles\n• Tiered on-device prediction engine (Bayesian blend → adaptive EW → rules → Gaussian Process Regression)\n• Symptom insights via Spearman correlations, cycle-phase overlays, and flare pattern analysis\n• Encrypted storage with SQLCipher and AES-256-GCM, no accounts, servers, or analytics SDKs\n• Doctor-ready PDF reports plus JSON/CSV backup and export",
      techStack: ["React Native", "Expo", "Typescript", "SQLCipher", "Zustand", "SQLite", "AES-256-GCM"],
      githubUrl: "https://github.com/itisar-345/CycleIQ",
    }
];

export const experiences = [
  {
    id: "e5",
    company: "ACI Worldwide",
    position: "Associate Technical Consultant",
    location: "Mumbai, India",
    type: "Full-time",
    startDate: "2026-07",
    endDate: "present",
    description: [
      "Developing Card Inquiry and Card Update APIs in UPF for Indian Bank's IVRS channel, integrating Middleware, UPF, and BASE24 through JSON and ISO 0300/0310 transactions for card blocking, limit updates, CAF processing, authentication, and SMS workflows",
      "Engineered UPF–EIS–Visa VMORC API integration for SBI, implementing scheduled and paginated offer retrieval, payload validation, transformation, lifecycle management, repository persistence, and AES/RSA-based security",
    ],
    technologies: ["UPF", "Java", "Spring Boot", "Oracle DB", "Maven", "REST APIs", "OpenAPI", "ISO 8583", "JSON", "AES/RSA"]
  },
  {
      id: "e4",
      company: "ACI Worldwide",
      position: "Technical Consultant Intern",
      location: "Mumbai, India",
      type: "Internship",
      startDate: "2026-01",
      endDate: "2026-06",
      description: [
        "Engineered PAN validation integration in UPF for BASE24 ATM Re-KYC workflows, implementing ISO 8583 0200/0210 processing, DE-125 extraction, external PAN validation APIs, customer-data validation, and response-code mapping",
        "Developed end-to-end payment transaction flows in UPF, integrating BASE24 with external banking services through HISO interfaces with request/response processing, data transformation, validation, and resilient error handling",
        "Built asynchronous Request-Reply messaging flows and custom simulators to improve transaction decoupling and reliability across UPF orchestration"
      ],
      technologies: ["UPF", "Java", "ISO 8583", "HISO", "REST APIs", "IBM MQ", "OpenAPI", "Oracle DB", "Maven", "SoapUI", "Postman"],
      documents: [
        { name: "Offer Letter", url: "/documents/ACI-Worldwide-Offer.pdf" }
      ]
    },
    {
      id: "e3",
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
      id: "e2",
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
      id: "e1",
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
];
