# 🚀 Ritisa Behera - Personal Website

My personal website showcasing my journey as a Software Developer, built with React + Vite featuring voice navigation, a playable 2D game, and cyberpunk aesthetics.

## ✨ Features

### 🛰️ GitHub-Style Developer Hub
- **Pinned repositories, contribution graph, and activity feed** inspired by GitHub’s profile layout
- **Tab-based navigation** for overview, projects, stats, experience, and contact sections
- **Full Projects tab** showcasing rich VS Code–style cards for every build

### 📡 Realtime Developer Telemetry
- **GitHub Status**: Followers, public repositories, and last activity via the official GitHub API
- **LeetCode Stats**: Live solve counts, ranking, and difficulty breakdown through a public stats API
- **WakaTime Pulse**: Latest coding hours and top languages using WakaTime share links
- **Dedicated Stats tab** that centralizes tech mix, impact snapshot, and contributions heatmap

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

## 🔧 Configuration

### Environment Setup
Create a `.env` file (or set environment variables) to unlock live developer stats:

| Variable | Description |
| --- | --- |
| `VITE_GITHUB_USERNAME` | GitHub username to hydrate stats (default: `itisar-345`) |
| `VITE_GITHUB_API_TOKEN` | Optional; increases GitHub rate limits |
| `VITE_LEETCODE_USERNAME` | LeetCode handle for real-time problem stats |
| `VITE_LEETCODE_API_URL` | Public API endpoint that proxies LeetCode stats (default: `https://leetcode-stats-api.herokuapp.com`) |
| `VITE_WAKATIME_SHARE_URL` | Share link from [WakaTime → Share → JSON], e.g. `https://wakatime.com/share/@user/abcdef12-3456-7890.json` |

All fields are optional—configure the ones you want to display.

### Voice Commands

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
- **Vercel** 
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