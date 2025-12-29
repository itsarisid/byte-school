# Byte School - Modern School Management System

![Byte School Logo](public/logo.png)

Byte School is a comprehensive, enterprise-grade school management software designed to help educational institutions automate manual paperwork, streamline administrative operations, and fully embrace a paperless future.

## 🎯 Project Vision

Our goal is to provide schools with a unified platform that manages the entire student lifecycle—from initial enrollment to graduation—while offering real-time insights and seamless communication tools for staff, parents, and students.

## ✨ Key Features

### 🎨 Advanced Theme Customizer
- **Real-time Customization**: Change themes, colors, and border radius with instant preview.
- **Persistence**: Your layout and theme settings are saved to local storage via Jotai.
- **Sticky Header**: Optional sticky header configuration for better navigation.
- **Brand Colors**: Full control over specific brand color variables.

### 📚 Institutional Management
- **Student Information System**: Comprehensive profiles, academic records, and attendance tracking.
- **Faculty Management**: Timetable scheduling, payroll, and performance evaluations.
- **Academic Suite**: Grade book management, exam scheduling, and curriculum planning.
- **Financial Module**: Automated fee collection, expense tracking, and financial analytics.

### 📱 Modern User Experience
- **Responsive Dashboard**: Optimized for desktop, tablet, and mobile devices.
- **Parent Portal**: Direct messaging, real-time attendance updates, and fee payments.
- **Interactive UI**: Built with Radix UI primitives for high accessibility.

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 18.0 or higher
- **Package Manager**: npm or yarn
- **Browser**: Modern evergreen browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/itsarisid/byte-school.git
   cd byte-school
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **State Management**: [Jotai](https://jotai.org/) (Atomic state with persistence)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Interactions**: [@dnd-kit](https://dndkit.com/) (Drag & Drop functionality)
- **Build Tool**: [Vite](https://vitejs.dev/)

## 📦 Project Structure

```bash
byte-school/
├── src/
│   ├── app/            # Application pages and route-specific logic
│   │   ├── auth/       # Authentication pages (Login, Register, etc.)
│   │   ├── dashboard/  # Dashboard pages (Home, Settings, etc.)
│   │   ├── errors/     # Error pages (404, 500, etc.)
│   │   ├── layout/     # Layout pages (Sidebar, Header, etc.)
│   │   ├── landing/    # Landing pages (Home, Settings, etc.)
│   │   ├── not-found/  # Not found pages (404, 500, etc.)
│   │   ├── profile/    # Profile pages (Profile, Settings, etc.)
│   │   ├── settings/   # Settings pages (Settings, etc.)
│   │   ├── users/      # Users pages (Users, etc.)
│   ├── components/     # Reusable UI components
│   │   ├── elements/   # Core design elements (Header, Sidebar, etc.)
│   │   └── ui/         # Base shadcn/ui primitives
│   ├── config/         # System constants and theme data
│   ├── contexts/       # React Context providers (Sidebar, etc.)
│   ├── hooks/          # Custom Reusable Hooks (Theme Management)
│   ├── store/          # Jotai Atoms for global state
│   ├── utils/          # Helper functions and theme presets
│   └── main.tsx        # Application entry point
└── package.json        # Build scripts and dependencies
```

## 👥 Team

- **Sajid Khan** - Founder & CEO
- **Umair Malik** - Chief Technology Officer
- **Imtiyaz Pasha** - Head of Product

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the incredible component library.
- [Lucide](https://lucide.dev/) for the beautiful iconography.
- [Jotai](https://jotai.org/) for the elegant state management.

---

Made with ❤️ by the **Byte School Team**
