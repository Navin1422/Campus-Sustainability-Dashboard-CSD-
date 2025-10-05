# Campus Sustainability Dashboard - Design Guidelines

## Design Approach: Reference-Based (Gamification + Productivity Hybrid)

Drawing inspiration from Duolingo's gamification mastery, Notion's clean information architecture, and Linear's modern aesthetic, combined with environmental consciousness. The design must feel energetic and motivating while remaining professional for academic use.

## Core Design Principles
1. **Playful Professionalism**: Balance game-like engagement with academic credibility
2. **Progress Visibility**: Make environmental impact tangible and rewarding
3. **Social Momentum**: Leverage competition and community through visual design
4. **Accessible Complexity**: Present data-rich content in digestible, engaging formats

## Color Palette

**Primary Colors (Dark Mode)**
- Forest Green: 142 65% 45% - Primary actions, progress indicators
- Ocean Teal: 182 60% 50% - Secondary elements, data visualization
- Fresh Lime: 84 70% 55% - Success states, achievements unlocked

**Accent Colors**
- Sunrise Orange: 28 85% 60% - Urgent actions, challenges, notifications
- Sky Blue: 205 80% 65% - Information, tips, alternative CTAs

**Neutral Palette**
- Background: 220 15% 10%
- Card Surface: 220 12% 15%
- Border/Divider: 220 10% 25%
- Text Primary: 0 0% 95%
- Text Secondary: 0 0% 70%

**Light Mode Adjustments**
- Background: 140 20% 98%
- Card Surface: 0 0% 100%
- Primary Green: 142 55% 40% (deeper for contrast)

## Typography

**Fonts** (via Google Fonts CDN)
- Display/Headings: "Montserrat" (700, 800) - Bold, modern, attention-grabbing
- Body/UI: "Inter" (400, 500, 600) - Readable, professional, versatile
- Metrics/Numbers: "Space Mono" (700) - Monospace for stats, leaderboards

**Scale**
- Hero/Dashboard Title: text-5xl/text-6xl (Montserrat 800)
- Section Headers: text-3xl/text-4xl (Montserrat 700)
- Card Titles: text-xl/text-2xl (Inter 600)
- Body Text: text-base (Inter 400)
- Small Text/Labels: text-sm (Inter 500)
- Metric Numbers: text-4xl/text-5xl (Space Mono 700)

## Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16
- Tight spacing: p-2, gap-2 (within components)
- Standard spacing: p-4, gap-4, m-6 (between elements)
- Section padding: py-8, py-12 (mobile), py-16, py-20 (desktop)
- Component margins: mb-8, mb-12 (separation)

**Grid Structure**
- Dashboard: 3-column grid (lg:grid-cols-3) with 4-unit gaps
- Activity Cards: 2-column (md:grid-cols-2) expanding to 3
- Leaderboards: Single column with alternating row colors
- Mini-games: Centered max-w-4xl containers

## Component Library

**Navigation**
- Top navigation bar with logo, profile avatar, points counter badge
- Active tab indicator with green underline (border-b-4)
- Mobile: Hamburger menu expanding to full-screen overlay

**Dashboard Cards**
- Elevated surfaces (shadow-lg) with rounded-2xl corners
- Gradient borders on achievement cards (from lime to teal)
- Hover lift effect (hover:scale-105 transition-transform)
- Icon badges (48x48px) using Heroicons in circular containers

**Progress Indicators**
- Animated progress bars with gradient fills (green to teal)
- Circular progress rings for daily/weekly goals
- Stacked bar charts for comparative metrics (CSS Grid)
- Number counters with increment animations

**Leaderboard Design**
- Top 3 highlighted with podium-style elevation and gold/silver/bronze accents
- Alternating row backgrounds for easy scanning
- User's rank highlighted with subtle orange glow
- Avatar + name + points in 3-column layout

**Game Interfaces**
- Full-screen overlays with semi-transparent dark backgrounds
- Drag-and-drop zones with hover feedback (scale, border color changes)
- Timer displays in top-right with pulsing animation when low
- Immediate visual feedback: green checkmarks, red shake animations

**Badges & Achievements**
- Circular badge containers (96x96px) with icon centers
- Locked state: grayscale filter with lock icon overlay
- Unlocked: Full color with subtle glow effect
- Grid display (grid-cols-3 md:grid-cols-4 lg:grid-cols-6)

**Challenge Cards**
- Large format cards with image backgrounds (if available)
- Overlaid gradient from transparent to dark for text readability
- Points display in top-right corner (rounded-full badge)
- Progress bar at bottom showing participation

**Notification System**
- Toast notifications sliding from top-right
- Color-coded: Green (achievement), Orange (reminder), Blue (tip)
- Auto-dismiss after 5 seconds with progress bar

**Data Visualization**
- Real-time impact dashboard with large metric displays
- Line charts showing trends (use Chart.js via CDN)
- Color-coded categories matching primary palette
- Tooltips on hover showing detailed breakdowns

## Hero Section

**Layout**: Split hero (50/50 on desktop, stacked mobile)
- Left: Headline, subheadline, dual CTA buttons, quick stats row
- Right: Environmental illustration or campus impact visualization

**Hero Content**
- Headline: "Transform Your Campus, One Action at a Time"
- Subheadline: "Join 2,500+ students making real environmental impact"
- Primary CTA: "Start Your Journey" (green, rounded-full, text-lg, px-8 py-4)
- Secondary CTA: "View Impact" (outline variant with blurred background)
- Quick Stats: 3-column grid showing CO2 saved, trees planted, students participating

**Hero Image**: Illustrated dashboard preview or stylized campus with sustainability icons floating (modern, colorful, optimistic)

## Animations

Use sparingly and purposefully:
- Card hover lifts (transform scale)
- Progress bar fills (width transitions)
- Badge unlock celebrations (scale + opacity)
- Page transitions (fade)
- Number count-up animations for metrics

## Icons

Use Heroicons (via CDN) throughout:
- Navigation: SparklesIcon, ChartBarIcon, TrophyIcon, UserCircleIcon
- Activities: RecycleIcon (custom), LightBulbIcon, BeakerIcon
- Badges: ShieldCheckIcon, StarIcon, FireIcon
- UI: ChevronRightIcon, XMarkIcon, CheckCircleIcon

## Accessibility

- Maintain WCAG AA contrast ratios (4.5:1 minimum)
- Consistent dark mode across all forms and inputs
- Focus states with visible outlines (ring-2 ring-lime-500)
- Screen reader labels for game interactions
- Keyboard navigation support for all interactive elements

## Mobile Responsiveness

- Stack multi-column grids to single column below md breakpoint
- Reduce padding to py-8 on mobile (vs py-16 desktop)
- Hamburger navigation for mobile
- Touch-friendly hit targets (minimum 44x44px)
- Horizontal scrolling for leaderboard tables with sticky first column