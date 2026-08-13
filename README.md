# DockOS

A fully interactive macOS desktop simulator that runs entirely in your browser. Boot sequence, setup wizard, lock screen, desktop environment, draggable app windows, a magnifying dock — the whole experience, no install required.

Built with React, Vite and Tailwind CSS.

---

## Features

- **Boot & Setup Wizard** — Power-on animation, region/language/timezone selection, account creation
- **Lock Screen** — Live clock, clickable profile (change photo/name), password entry, auto-lock after inactivity, Ctrl+L to lock
- **Desktop Environment** — Draggable/resizable windows, right-click context menu, desktop folders and file creation
- **Dock** — macOS magnification effect, open-app indicators, bounce-on-launch animation
- **Menu Bar** — App title, Apple menu (lock/sleep/restart/shutdown), live clock, battery/wifi
- **Finder** — Simulated file system with Downloads, Documents, Desktop and Pictures; grid/list views; trash
- **Safari** — In-browser web browser with navigation controls
- **Maps** — Embedded map viewer
- **Gallery** — Photo viewer with wallpaper + depth-effect setting
- **Notes** — Full notes app with iCloud folders, tags, search, auto-save to localStorage
- **Music** — Streaming music player with lock-screen controls
- **Settings** — System Settings replica with About this Mac
- **Wallpaper Customization** — Change desktop and lock screen wallpapers from the Gallery app or right-click menu

---

## Tech Stack

| Technology  | Purpose                           |
| ----------- | --------------------------------- |
| React 19    | UI framework                      |
| Vite 7      | Build tool & dev server           |
| Tailwind CSS 4 | Styling                       |
| Zustand     | Global state (window management)  |
| Framer Motion | Animations                      |
| GSAP        | Advanced animations               |
| Radix UI    | Accessible UI primitives          |
| React RND   | Draggable/resizable windows       |
| React Spring | Spring-based animations          |
| Lucide React | Icons                            |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/codewithsyedabdullah/DockOS.git
cd DockOS
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

---

## Project Structure

```
src/
├── App.jsx               # Root component: boot / lock / desktop stage manager
├── app/                  # Individual apps
│   ├── Finder.jsx        # File manager
│   ├── Safari.jsx        # Web browser
│   ├── Spotify.jsx       # Music player
│   ├── Gallary.jsx       # Photo gallery + wallpaper picker
│   ├── Settings.jsx      # System settings
│   ├── Launchpad.jsx     # App launcher
│   └── Blogs/            # Notes app
├── components/           # Shared UI components
│   ├── AppWindow.jsx     # Draggable/resizable window shell
│   ├── Dock.jsx          # macOS dock
│   ├── TopBar.jsx        # Menu bar
│   └── ContextMenu.jsx   # Right-click menu
├── layouts/
│   ├── DesktopWindow.jsx # Desktop environment
│   ├── LockScreen.jsx    # Lock screen
│   └── PowerScreen.jsx   # Boot / power screen
├── constants/            # Songs + depth wallpaper presets
└── store/
    └── Appstore.js       # Window management store
```

---

## Credits

Inspired by and forked from [LikhithSP/MacOS-Web-Simulator](https://github.com/LikhithSP/MacOS-Web-Simulator) (MIT). Icon assets and wallpapers remain the property of their respective owners.

## License

MIT
