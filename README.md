# 🚀 Ritisa Behera - Personal Website

My personal website showcasing my journey as a Software Developer, built with React + Vite featuring voice navigation, a playable 2D game, and cyberpunk aesthetics.

## ✨ Features

### 🎮 Interactive Game
- **Gem Collection Game**: Navigate through a 2D world collecting gems representing skills, projects, and achievements
- **16 Collectible Gems**: Each gem tells a story about my development journey
- **Persistent Progress**: Game state saves automatically
- **Completion Rewards**: Unlock special content after collecting all gems

### 🎙️ Voice Navigation
- **Voice Commands**: Navigate sections using voice ("go to projects", "go to about")
- **Real-time Feedback**: Visual and audio confirmation of commands
- **Browser Speech Recognition**: Works with modern browsers supporting Web Speech API

### 🎨 Visual Effects
- **Matrix Rain Animation**: Animated background with falling code
- **Particle System**: Dynamic particle effects
- **VS Code Theme**: Code editor-styled windows with syntax highlighting
- **Typewriter Effects**: Animated text reveals
- **Smooth Transitions**: Fluid section navigation

### 📱 Responsive Design
- **Mobile Optimized**: Fully responsive across all devices
- **Touch Friendly**: Optimized touch interactions for mobile
- **Adaptive Layouts**: Content adjusts based on screen size

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Animations**: CSS animations & transitions
- **Carousel**: React Responsive Carousel
- **Voice**: Web Speech API

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/itisar-345/portfolio.git

# Navigate to project directory
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── game/              # Game-related components
│   │   ├── Game.jsx       # Main game component
│   │   ├── Player.jsx     # Player character
│   │   ├── Terrain.jsx    # Game terrain
│   │   └── ...
│   └── portfolio/         # Portfolio components
│       ├── Homepage.jsx   # Main homepage
│       ├── VoiceAssistant.jsx
│       ├── MatrixRain.jsx
│       └── ...
├── context/
│   └── GameContext.jsx    # Game state management
├── data/
│   ├── info.js           # Projects & experience data
│   └── gems.js           # Game gems data
├── hooks/
│   ├── use-mobile.jsx    # Mobile detection hook
│   └── use-toast.js      # Toast notifications
└── utils/
    ├── physics.js        # Game physics
    └── terrainGenerator.js
```

## 🎯 About Me

### Personal Info
- **Software Developer** specializing in AI, Full-Stack, and Salesforce Development
- **Location**: Mumbai, India
- **Focus**: Building innovative solutions that make a real impact

### Featured Projects
- **AI Resume Scanner**: 97% ATS compatibility scoring with actionable feedback
- **Invoice Data Extractor**: Desktop app with 95%+ OCR accuracy using Gemini AI
- **Diabetes Predictor**: Web app with 84% accuracy for health classification

### Professional Experience
- **SDE Intern** at Home First Finance - Built Campus Recruitment Management System
- **AI Intern** at Edunet Foundation - Developed AI chatbot for health risk prediction
- **Team Lead** at Somaiya Machine Learning Research Association

### Achievements & Certifications
- **IEEE Research Paper** presentation at ICCCNT 2025
- **IBM Certifications** in Cyber Security & Cloud Technologies
- **Google Cloud** BigQuery certification
- **UC Irvine** Project Management certification

## 🎮 Game Controls

- **Arrow Keys**: Move player character
- **Mouse/Touch**: Navigate UI elements
- **Voice Commands**: Section navigation
- **Collision Detection**: Automatic gem collection

## 🔧 Configuration

### Environment Setup
No environment variables required for basic setup.

### Voice Commands
Supported commands:
- "go to projects" / "projects"
- "go to about" / "about"
- "go to experience" / "experience"
- "go to home" / "hero"

## 📱 Browser Support

- **Chrome**: Full support (recommended)
- **Firefox**: Full support
- **Safari**: Limited voice support
- **Edge**: Full support

## 🚀 Deployment

The website is optimized for deployment on:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

```bash
# Build for production
npm run build

# Deploy dist/ folder to your hosting service
```

## 🎨 Customization

### Adding New Projects
Edit `src/data/info.js`:
```javascript
export const projects = [
  {
    title: "Your Project",
    description: "Project description",
    techStack: ["React", "Node.js"],
    githubUrl: "https://github.com/...",
    liveUrl: "https://...",
    imageUrl: "/image.png"
  }
];
```

### Adding New Gems
Edit `src/data/gems.js`:
```javascript
export const allGems = [
  {
    id: 'gem_new',
    title: 'New Achievement',
    type: 'skill', // 'skill', 'project', 'achievement', 'experience'
    description: 'Description',
    x: 1000,
    y: 300
  }
];
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Let's Connect!

I'm always open to discussing new opportunities, collaborations, or just chatting about technology!

- **Email**: ritisarabindra@gmail.com
- **LinkedIn**: [linkedin.com/in/ritisa-behera-43819b258](https://linkedin.com/in/ritisa-behera-43819b258/)
- **GitHub**: [github.com/itisar-345](https://github.com/itisar-345)
- **Resume**: [Download PDF](./public/Resume.pdf)

---

💡 **Interested in my work? Let's build something amazing together!**