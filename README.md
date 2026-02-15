# PLAIMANAS - Fashion Landing Page

A modern, responsive landing page for PLAIMANAS fashion brand featuring parallax scrolling effects, interactive elements, and elegant animations.

![Project Type](https://img.shields.io/badge/Type-Landing%20Page-blue)
![Status](https://img.shields.io/badge/Status-Active-success)
![Responsive](https://img.shields.io/badge/Responsive-Yes-green)

## 📋 Project Overview

PLAIMANAS is a sophisticated fashion e-commerce landing page built with pure HTML, CSS, and JavaScript. The project showcases modern web design techniques including parallax scrolling, smooth animations, and fully responsive layouts optimized for both desktop and mobile devices.

**Development Time:** ~21.5 hours (Feb 14-15, 2026)

## ✨ Features

### Navigation & Menu System
- **Sticky Navigation Bar** with transparent overlay effect
- **Currency Selector** dropdown (TH-THB / US-USD)
- **Desktop Menu Items:** WOMEN, COLLECTIONS, EDITORIAL (with submenu), NEWS, STORIES
- **Mobile Menu Modal** - Full-screen sliding menu from right
- **Icon Toggle** - Hamburger menu transforms to X button when opened
- **Hover Effects** - Scale animations and color transitions

### Hero Section
- **Fixed Position Logo** - "PLAIMANAS" text stays fixed while scrolling
- **Fullscreen Video Background** with dark overlay
- Auto-playing, looping video optimized for mobile (playsinline)

### Product Sections

#### Section 2 - NEW Collection
- Product image with parallax h1 text
- **Parallax Effect:** Text moves based on scroll position
  - Desktop: translateY max 175%
  - Mobile: translateY max 65%
- Responsive text description

#### Section 3 - BESTSELLER
- Video background with parallax overlay text
- **Parallax Effect:** Enhanced movement
  - Desktop: translateY max 270%
  - Mobile: translateY max 60%
- Synchronized scroll animation

#### Section 4 - Collections Grid
- **Collection 01:** Video hover effect
- **Collection 02 & 03:** Image swap on hover
- Responsive text sizing for mobile
- Smooth transitions and transforms

### Interactive Elements

#### Animated Text Runner
- Continuous scrolling text loop
- "NEW ARRIVAL" and "BEST SELLER" with arrow icons
- Smooth infinite animation

#### Information Cards (Section 5)
- Worldwide Shipping info
- Customer Service details
- Secure Payment information
- Underlined link hover effects

#### FAQ Section (Section 6)
- **4 Categories:** ORDERS, SHIPPING, RETURNS & EXCHANGES, SIZING & PRODUCTS
- **Accordion Style** Q&A with smooth expand/collapse
- **Category Filter** - Dynamic content switching
- **Icon Animation** - Chevron rotates on expand
- Auto-close other answers when category changes

#### Contact Form (Section 7)
- Radio button selection (Onsite/Hybrid)
- Form fields: Full name, Email, Phone Number, Subject
- Dropdown subject selector
- Terms & conditions checkbox
- Styled submit button

### Footer
- **5 Column Layout:** ABOUT, HELP, SOCIAL, LEGAL, NEWSLETTER
- Newsletter subscription form
- Social media links
- Legal pages navigation
- Copyright notice
- "Web by ::*" credit

## 🛠 Technologies Used

### Frontend
- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with flexbox/grid
- **Vanilla JavaScript** - No frameworks, pure JS
- **Google Fonts** - Hanken Grotesk (100-900 weights)
- **Font Awesome 6.5.1** - Icon library

### CSS Architecture
Modular CSS structure with 6 separate stylesheets:
- `style.css` - Global styles and resets
- `main.css` - Main layout and utilities
- `navbar.css` - Navigation and mobile menu
- `hero.css` - Hero section styles
- `sections.css` - All content sections
- `footer.css` - Footer styling

### JavaScript Features
- Parallax scroll effects with `requestAnimationFrame`
- Mobile device detection (`isMobile()` function)
- FAQ accordion toggle system
- Category filtering logic
- Mobile menu modal control
- Scroll throttling for performance

## 📁 Project Structure

```
Plaimanas-Test/
│
├── index.html              # Main HTML file
│
├── css/
│   ├── style.css          # Global styles
│   ├── main.css           # Main layout
│   ├── navbar.css         # Navigation styles
│   ├── hero.css           # Hero section
│   ├── sections.css       # Content sections
│   └── footer.css         # Footer styles
│
├── js/
│   └── main.js            # JavaScript functionality
│
└── assets/
    ├── fonts-style/       # Custom fonts
    ├── icon/              # SVG icons
    ├── images/            # Images
    └── video/             # Video files
```

## 📱 Responsive Design

### Breakpoints
- **Desktop:** > 768px
- **Tablet:** ≤ 768px
- **Mobile:** ≤ 425px

### Mobile Optimizations
- Full-screen mobile menu modal
- Adjusted parallax scroll values (60-65% vs 175-270%)
- Responsive typography scaling
- Touch-friendly button sizes
- Optimized video formats
- Hamburger menu with icon toggle
- Centered navigation layout
- Stacked form fields

### Desktop Features
- Hover effects on images and text
- Multi-column footer layout
- Submenu dropdown for EDITORIAL
- Video hover states
- Enhanced parallax effects

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for best performance)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Plaimanas-Test
```

2. Open in browser:
```bash
# Option 1: Direct open
open index.html

# Option 2: With local server (recommended)
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server
```

3. View in browser:
```
http://localhost:8000
```

## 💡 Key Technical Implementations

### Parallax Scrolling
- Tracks PLAIMANAS logo position relative to section h1 elements
- Calculates travel distance and progress percentage
- Applies transform translateY based on scroll progress
- Different multipliers for mobile vs desktop
- Uses `requestAnimationFrame` for smooth performance

### Mobile Menu System
- Modal slides in from right (right: -100% to 0)
- Button icon switches between menu and close (X)
- Button repositions to fixed top-right when modal is open
- Body scroll is prevented when menu is active
- Click outside modal to close

### FAQ Accordion
- Category buttons filter questions dynamically
- Smooth max-height transition for expand/collapse
- Chevron icon rotates 180deg when expanded
- Auto-closes answers when switching categories
- Active state styling on selected category

## 📊 Development Timeline

| Date | Time | Milestone |
|------|------|-----------|
| Feb 14, 18:02 | Initial | Project initialization |
| Feb 14, 18:37 | 35 min | Section 5 completed |
| Feb 14, 19:48 | 1h 11m | FAQ section (Section 6) |
| Feb 14, 20:37 | 49 min | Footer implementation |
| Feb 14, 21:24 | 47 min | Code cleanup |
| Feb 14, 21:57 | 33 min | Style fixes |
| Feb 14, 23:07 | 1h 10m | Parallax scroll text |
| Feb 15, 02:49 | 3h 42m | Mobile responsive edits |
| Feb 15, 13:41 | 10h 52m | Enhanced mobile navbar |
| Feb 15, 15:21 | 1h 40m | Mobile menu implementation |
| Feb 15, 15:28 | 7 min | Final adjustments |

**Total Development Time:** ~21.5 hours

## 🎨 Design Highlights

- **Minimalist Aesthetic** - Clean, modern design
- **Monochrome Palette** - Black, white, and grays
- **Typography Focus** - Hanken Grotesk throughout
- **Smooth Animations** - All transitions use ease timing
- **Video Integration** - Background and hover videos
- **Interactive Elements** - Hover states and click feedback
- **Professional Layout** - Grid-based section organization

## 📝 Notes

- All videos are set to `autoplay`, `muted`, `loop`, and `playsinline` for mobile compatibility
- Parallax effects are optimized with different values for mobile and desktop for better UX
- Mobile menu uses CSS transform for smooth GPU-accelerated animations
- FAQ accordion prevents content jumping with careful height calculations
- Form uses HTML5 validation (required attributes)

## 🔧 Future Enhancements

- [ ] Add shopping cart functionality
- [ ] Implement product detail pages
- [ ] Backend integration for form submissions
- [ ] Newsletter API integration
- [ ] Add more animation effects
- [ ] Performance optimization with lazy loading
- [ ] SEO optimization
- [ ] Accessibility improvements (ARIA labels)

## 📄 License

This project is created for educational/portfolio purposes.

## 👤 Author

**Project:** PLAIMANAS Test  
**Development:** February 2026

---

⭐ **If you found this project interesting, please give it a star!**
