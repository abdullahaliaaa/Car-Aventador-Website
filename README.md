🏎️ AVENTADOR
Premium Lamborghini Car Showcase Website
A supercharged, pro-level automotive website built with vanilla HTML, CSS & JavaScript

HTML5
CSS3
JavaScript
Swiper
Remix Icon



📸 Preview
text

  ╔══════════════════════════════════════════════════╗
  ║                                                  ║
  ║       🏎️  CHOOSE YOUR AVENTADOR  🏎️            ║
  ║                                                  ║
  ║            A V E N T A D O R                     ║
  ║                                                  ║
  ║         [  Car Carousel Slider  ]                ║
  ║                                                  ║
  ║              ○ START ↓                           ║
  ║                                                  ║
  ╚══════════════════════════════════════════════════╝
🚀 Live Features
🎨 Visual Effects
Feature
Description
Preloader	Animated loading screen with progress bar & percentage counter
Custom Cursor	Premium dot + follower cursor with hover effects
Scroll Progress Bar	Top-of-page gradient progress indicator
Floating Particles	Dynamic particle system in home section
Gradient Text	Title gradient with drop-shadow effects
Glass Morphism	Frosted glass header with backdrop blur
Card Shine Sweep	Light sweep animation on model cards hover
Image Reveal	Clip-path reveal animation on scroll
Custom Scrollbar	Gradient-styled scrollbar

🎬 Animations
Animation
Where
fadeInUp / fadeInDown / fadeInLeft / fadeInRight	Scroll reveal elements
float	Active car image gentle float
pulse	Logo dot & image glow
shimmer	Button hover light sweep
ripple	Home START button ripple
scaleIn	Home button entrance
scrollDown	Arrow bounce indicator
glow	Border glow effect
particleFloat	Home section particles
borderGlow	Input focus glow
shake	Form validation error

⚡ JavaScript Features
Feature
Technology
Scroll Reveal	Intersection Observer API
Counter Animation	requestAnimationFrame + easeOut cubic
3D Tilt Effect	Mousemove perspective transform
Magnetic Buttons	Cursor-attraction button effect
Swiper Carousel	Swiper.js with custom pagination
Smooth Scroll	Native smooth scroll with offset
Active Nav Link	Scroll spy with section detection
Video Lazy Play	IntersectionObserver play/pause
Form Validation	Custom validation with shake animation
Throttled Events	Performance-optimized scroll handlers
Parallax System	Data-attribute driven parallax
Keyboard Navigation	Escape key menu close
SVG Progress Ring	Circular scroll-to-top indicator

📱 Responsive Breakpoints
Breakpoint
Target
max-width: 320px	Small phones (iPhone SE)
min-width: 576px	Large phones / Small tablets
min-width: 768px	Tablets
min-width: 1150px	Desktop / Laptop
min-width: 1440px	Large Desktop / Ultra-wide

♿ Accessibility
prefers-reduced-motion media query support
aria-label on interactive elements
Keyboard navigation (Escape to close menu)
Semantic HTML5 structure
Custom cursor hidden on touch devices
📁 Project Structure
text

car-website/
│
├── index.html              # Main HTML file
├── style.css               # Complete CSS with animations & media queries
├── script.js               # Advanced JavaScript with pro features
├── README.md               # Project documentation
│
├── images/
│   ├── home-bg.png         # Home section background
│   ├── home-car-1.png      # Home swiper slide 1
│   ├── home-car-2.png      # Home swiper slide 2
│   ├── home-car-3.png      # Home swiper slide 3
│   ├── home-car-4.png      # Home swiper slide 4
│   ├── model-car-1.png     # Silver Aventador model card
│   ├── model-car-2.png     # Yellow Aventador model card
│   ├── model-car-3.png     # Blue Aventador model card
│   ├── info-car.png        # Info section LP 780-4
│   └── contact-car.png     # Contact section car
│
└── video/
    └── 7727416-hd_1280_720_50fps.mp4   # About section video
🛠️ Tech Stack
Technology
Version
Purpose
HTML5	-	Semantic structure
CSS3	-	Styling, animations, media queries
JavaScript (ES6+)	-	Interactivity, observers, classes
Swiper.js	v11	Home section car carousel
Remix Icon	v4.6	Icon library
Google Fonts	Montserrat	Typography (100-900 weight range)

CSS Architecture
text

CSS Variables (Custom Properties)
├── Colors (HSL system)
├── Typography (Responsive clamp)
├── Font Weights
├── Z-index Scale
├── Transitions (Custom cubic-bezier)
└── Responsive Typography (@media)
JavaScript Architecture
text

Classes & Modules
├── MagneticButton      → Cursor-attraction effect
├── CounterAnimation    → Scroll-triggered number counting
├── TiltEffect          → 3D card perspective tilt
├── TypeWriter          → Text typing animation
│
├── Intersection Observers
│   ├── Scroll Reveal Observer    → Element entrance animations
│   ├── Video Lazy Play Observer  → Play/pause on visibility
│   ├── Image Reveal Observer     → Clip-path reveal effect
│   └── Footer Reveal Observer    → Footer entrance animation
│
├── Scroll Event Handlers (Throttled)
│   ├── bgHeader()          → Header background on scroll
│   ├── scrollUp()          → Scroll-to-top visibility
│   ├── scrollActive()      → Active nav link highlight
│   ├── updateScrollProgress() → Top progress bar
│   └── updateScrollUpCircle() → SVG ring progress
│
└── Utilities
    ├── throttle()           → Performance optimization
    ├── createParticles()    → Dynamic particle generation
    └── initAnimations()     → Post-preloader setup
🏗️ Sections Breakdown
1. 🏠 Home Section
Full-viewport hero with gradient background
Swiper.js carousel with 4 Aventador models
Custom numbered pagination (01, 02, 03, 04)
Floating car animation on active slide
START button with ripple effect
Scroll down indicator
Floating particles overlay
2. 📖 About Section
Split layout: Text + Video
Animated counter stats (780 HP, 350 KM/H, 2.8s)
Skewed video container with border glow
Glass morphism stat cards
Fade-in reveal animations
3. 🚗 Models Section
3-column card grid (Silver, Yellow, Blue)
Skewed card design with 3D tilt on hover
Shine sweep animation on hover
Slide-in name, speed, and explore link
Image scale effect on hover
4. 📊 Info Section (LP 780-4 Ultimae)
Large counter number (780) with animation
Full-width car image with drop shadow
3 spec groups (Power, Speed, Acceleration)
Hover glow on info cards
Clip-path image reveal
5. 📬 Contact Section
Dual-column layout: Form + Car Image
Animated input focus lines
Form validation with shake animation
Success message with checkmark
Skewed car image with glow effect
6. 🦶 Footer
4-column layout: Brand, Quick Links, Info, Newsletter
Social icons with hover glow
Newsletter subscription form
Gradient top border line
Staggered reveal animations
Bottom bar with legal links
🚀 Quick Start
1. Clone the Repository
bash

git clone https://abdullahaliaa/car-website.git
cd car-website
2. Open in Browser
bash

# Simply open index.html in your browser
open index.html

# OR use Live Server (VS Code Extension)
# Right-click index.html → "Open with Live Server"
3. Add Your Media
Place your files in the correct directories:

bash

# Add car images
images/home-bg.png
images/home-car-1.png
images/home-car-2.png
images/home-car-3.png
images/home-car-4.png
images/model-car-1.png
images/model-car-2.png
images/model-car-3.png
images/info-car.png
images/contact-car.png

# Add about section video
video/7727416-hd_1280_720_50fps.mp4
🎮 Customization
Change Colors
Edit CSS variables in :root inside style.css:

css

:root {
  --first-color: hsl(43, 90%, 50%);       /* Primary gold */
  --first-color-alt: hsl(43, 88%, 48%);   /* Darker gold */
  --body-second-color: hsl(25, 70%, 55%); /* Section accent */
  --black-color: hsl(0, 0%, 8%);          /* Dark text */
  --white-color: hsl(0, 0%, 100%);        /* Light text */
}
Change Font
Replace the Google Fonts link in index.html and update CSS:

css

:root {
  --body-font: "YourFont", sans-serif;
}
Add New Model Card
Copy this template inside .models--container:

html

<article class="models--card reveal-up" data-delay="600">
    <img src="images/home-car-4.png" alt="Red Aventador" class="models--image">
    <div class="models--gradient"></div>
    <div class="models--card-shine"></div>
    <div class="models--data">
        <h3 class="models--name">Red Aventador</h3>
        <span class="models--info">360km/h</span>
        <a href="#" class="models--link magnetic-btn">
          EXPLORE <i class="ri-arrow-right-line"></i>
        </a>
    </div>
</article>
Adjust Animation Speed
Modify transition variables in :root:

css

:root {
  --transition-fast: .3s cubic-bezier(.4, 0, .2, 1);
  --transition-smooth: .6s cubic-bezier(.4, 0, .2, 1);
  --transition-bounce: .6s cubic-bezier(.68, -.55, .265, 1.55);
}
🌐 Browser Support
Browser
Version
Chrome	90+
Firefox	88+
Safari	14+
Edge	90+
Opera	76+
Mobile Safari	iOS 14+
Chrome Android	90+

⚡ Performance
Metric
Score
Lighthouse Performance	Optimized
Throttled Scroll Events	50-150ms
Intersection Observer	Native API
Image Lazy Reveal	Viewport-aware
Video Lazy Play	Observer-based
CSS Animations	GPU-accelerated
Reduced Motion	Respected

📄 License
This project is licensed under the MIT License.



Made with ❤️ by Abdullah Cars
© 2026 All Rights Reserved By Abdullah Cars

GitHub