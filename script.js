/*=============== HIDE PRELOADER ON LOAD ===============*/
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.display = 'none';
  }
  
  // Call initAnimations if it exists and revealElements is defined
  if (typeof initAnimations === 'function') {
    try {
      initAnimations();
    } catch(e) {
      // Silently ignore if revealElements not defined yet
    }
  }
});

/*=============== CUSTOM CURSOR ===============*/
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursor-follower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
  cursor.style.transform = 'translate(-50%, -50%)';
});

// Smooth follower animation
function animateCursorFollower() {
  followerX += (mouseX - followerX) * 0.1;
  followerY += (mouseY - followerY) * 0.1;
  
  cursorFollower.style.left = followerX + 'px';
  cursorFollower.style.top = followerY + 'px';
  
  requestAnimationFrame(animateCursorFollower);
}
animateCursorFollower();

// Cursor hover effects on interactive elements
const hoverTargets = document.querySelectorAll('a, button, .models--card, input, .nav--toggle, .nav--close');
hoverTargets.forEach(target => {
  target.addEventListener('mouseenter', () => {
    cursor.classList.add('hover');
    cursorFollower.classList.add('hover');
  });
  target.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
    cursorFollower.classList.remove('hover');
  });
});

/*=============== MAGNETIC BUTTON EFFECT ===============*/
class MagneticButton {
  constructor(element) {
    this.element = element;
    if (!element) return;
    this.strength = 30;
    this.bindEvents();
  }

  bindEvents() {
    this.element.addEventListener('mousemove', (e) => {
      const rect = this.element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      this.element.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      this.element.style.transition = 'transform 0.2s ease';
    });

    this.element.addEventListener('mouseleave', () => {
      this.element.style.transform = 'translate(0, 0)';
      this.element.style.transition = 'transform 0.5s cubic-bezier(.4, 0, .2, 1)';
    });
  }
}

document.querySelectorAll('.magnetic-btn').forEach(btn => {
  new MagneticButton(btn);
});

/*=============== NAV MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

const navLink = document.querySelectorAll('.nav--link');
navLink.forEach(n => n.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
}));

/*=============== SWIPER ===============*/
const swiper = new Swiper('.home--swiper', {
  loop: true,
  speed: 800,
  effect: 'slide',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: (index, className) => {
      return '<span class="' + className + '">' + String(index + 1).padStart(2, '0') + '</span>';
    },
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  on: {
    slideChange: function () {
      // Add subtle animation to active slide
      const activeSlide = this.slides[this.activeIndex];
      const img = activeSlide.querySelector('.home--img');
      if (img) {
        img.style.transform = 'scale(1.05)';
        setTimeout(() => {
          img.style.transform = 'scale(1)';
        }, 500);
      }
    }
  }
});

/*=============== HEADER BACKGROUND ON SCROLL ===============*/
const bgHeader = () => {
  const header = document.getElementById('header');
  window.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header');
};

window.addEventListener('scroll', bgHeader);

/*=============== SCROLL PROGRESS BAR ===============*/
const updateScrollProgress = () => {
  const scrollProgress = document.getElementById('scroll-progress');
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = scrollPercent + '%';
};

window.addEventListener('scroll', updateScrollProgress);

/*=============== SCROLL UP BUTTON ===============*/
const scrollUp = () => {
  const scrollUpBtn = document.getElementById('scrollup');
  window.scrollY >= 350 ? scrollUpBtn.classList.add('show-scroll')
                        : scrollUpBtn.classList.remove('show-scroll');
};

window.addEventListener('scroll', scrollUp);

// Scroll up progress circle
const updateScrollUpCircle = () => {
  const circle = document.getElementById('scrollup-circle');
  if (!circle) return;
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = scrollTop / docHeight;
  const circumference = 2 * Math.PI * 16; // r=16
  const offset = circumference - (scrollPercent * circumference);
  circle.style.strokeDashoffset = offset;
};

window.addEventListener('scroll', updateScrollUpCircle);

/*=============== ACTIVE LINK ON SCROLL ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute('id');
    const sectionClass = document.querySelector('.nav--menu a[href*=' + sectionId + ']');

    if (sectionClass) {
      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        sectionClass.classList.add('active-link');
      } else {
        sectionClass.classList.remove('active-link');
      }
    }
  });
};

window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
// TEMPORARILY DISABLED - Causes images to disappear
// const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');
// const revealObserver = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('revealed');
//     }
//   });
// }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
// revealElements.forEach(el => revealObserver.observe(el));

/*=============== COUNTER ANIMATION ===============*/
class CounterAnimation {
  constructor(element) {
    this.element = element;
    this.target = parseInt(element.dataset.target);
    this.duration = 2000;
    this.hasAnimated = false;
    this.init();
  }

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          this.animate();
          observer.unobserve(this.element);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(this.element);
  }

  animate() {
    const start = 0;
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / this.duration, 1);
      
      // Easing function - ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (this.target - start) * easeOut);
      
      this.element.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        this.element.textContent = this.target;
      }
    };

    requestAnimationFrame(updateCounter);
  }
}

document.querySelectorAll('.counter').forEach(counter => {
  new CounterAnimation(counter);
});

/*=============== PARALLAX EFFECT ===============*/
const parallaxElements = document.querySelectorAll('[data-parallax]');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  
  parallaxElements.forEach(el => {
    const speed = el.dataset.parallax || 0.3;
    const rect = el.getBoundingClientRect();
    
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const yPos = -(scrollY * speed);
      el.style.transform = `translateY(${yPos}px)`;
    }
  });
});

/*=============== SMOOTH SCROLL ===============*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    if (href === '#' || !document.querySelector(href)) return;
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

/*=============== CONTACT FORM ===============*/
const contactForm = document.getElementById('contact-form');
const contactSuccess = document.getElementById('contact-success');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simple validation
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
      // Shake animation for empty fields
      contactForm.style.animation = 'none';
      contactForm.offsetHeight; // Trigger reflow
      contactForm.style.animation = 'shake .5s ease';
      return;
    }
    
    // Show success message
    contactSuccess.classList.add('show');
    
    // Reset form
    contactForm.reset();
    
    // Hide success after 3 seconds
    setTimeout(() => {
      contactSuccess.classList.remove('show');
    }, 3000);
  });
}

/*=============== NEWSLETTER FORM ===============*/
const newsletterForm = document.getElementById('newsletter-form');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector('input');
    if (input.value.trim() !== '') {
      const btn = newsletterForm.querySelector('button');
      btn.innerHTML = '<i class="ri-check-line"></i>';
      btn.style.backgroundColor = '#4CAF50';
      newsletterForm.reset();
      
      setTimeout(() => {
        btn.innerHTML = '<i class="ri-arrow-right-line"></i>';
        btn.style.backgroundColor = '';
      }, 2000);
    }
  });
}

/*=============== HOME PARTICLES ===============*/
function createParticles() {
  const container = document.getElementById('home-particles');
  if (!container) return;
  
  const particleCount = window.innerWidth > 768 ? 20 : 10;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('home--particle');
    
    const size = Math.random() * 4 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 10 + 8) + 's';
    particle.style.animationDelay = (Math.random() * 5) + 's';
    particle.style.opacity = Math.random() * 0.5 + 0.2;
    
    container.appendChild(particle);
  }
}

createParticles();

/*=============== TILT EFFECT ON CARDS ===============*/
class TiltEffect {
  constructor(element) {
    this.element = element;
    this.maxTilt = 8;
    this.perspective = 1000;
    this.bindEvents();
  }

  bindEvents() {
    // Only on desktop
    if (window.innerWidth < 768) return;

    this.element.addEventListener('mousemove', (e) => {
      const rect = this.element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const tiltX = ((y - centerY) / centerY) * -this.maxTilt;
      const tiltY = ((x - centerX) / centerX) * this.maxTilt;
      
      this.element.style.transform = `skew(-12deg) perspective(${this.perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-10px)`;
      this.element.style.transition = 'transform 0.1s ease';
    });

    this.element.addEventListener('mouseleave', () => {
      this.element.style.transform = 'skew(-12deg)';
      this.element.style.transition = 'transform 0.5s cubic-bezier(.4, 0, .2, 1)';
    });
  }
}

document.querySelectorAll('.models--card').forEach(card => {
  new TiltEffect(card);
});

/*=============== TYPING EFFECT FOR SUBTITLE ===============*/
class TypeWriter {
  constructor(element, text, speed = 80) {
    this.element = element;
    this.text = text;
    this.speed = speed;
    this.index = 0;
  }

  type() {
    if (this.index < this.text.length) {
      this.element.textContent += this.text.charAt(this.index);
      this.index++;
      setTimeout(() => this.type(), this.speed);
    }
  }

  start() {
    this.element.textContent = '';
    this.type();
  }
}

/*=============== VIDEO LAZY LOAD ===============*/
const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const video = entry.target;
      if (video.paused) {
        video.play().catch(() => {});
      }
    } else {
      const video = entry.target;
      if (!video.paused) {
        video.pause();
      }
    }
  });
}, { threshold: 0.25 });

document.querySelectorAll('video').forEach(video => {
  videoObserver.observe(video);
});

/*=============== IMAGE REVEAL ON SCROLL ===============*/
/* DISABLED - Causing images to disappear */
/*
const imgRevealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.clipPath = 'inset(0 0 0 0)';
      entry.target.style.opacity = '1';
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.models--image, .info--img, .contact--img').forEach(img => {
  const rect = img.getBoundingClientRect();
  const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
  if (isInViewport) {
    img.style.clipPath = 'inset(0 0 0 0)';
    img.style.opacity = '1';
  } else {
    img.style.clipPath = 'inset(0 100% 0 0)';
    img.style.opacity = '0';
    img.style.transition = 'all 1s cubic-bezier(.4, 0, .2, 1)';
    imgRevealObserver.observe(img);
  }
});
*/

/*=============== INIT ANIMATIONS AFTER PRELOADER ===============*/
function initAnimations() {
  // Reveal home section elements
  const homeSubtitle = document.querySelector('.home--subtitle');
  const homeTitle = document.querySelector('.home--title');
  const homeButton = document.querySelector('.home--button');
  
  if (homeSubtitle) {
    setTimeout(() => {
      homeSubtitle.style.animation = 'fadeInDown .8s ease forwards';
    }, 200);
  }
  
  if (homeTitle) {
    setTimeout(() => {
      homeTitle.style.animation = 'fadeInUp .8s ease forwards';
    }, 400);
  }
  
  if (homeButton) {
    setTimeout(() => {
      homeButton.style.animation = 'scaleIn .6s cubic-bezier(.68, -.55, .265, 1.55) forwards';
    }, 800);
  }
  
  // Start scroll reveal observer
  revealElements.forEach(el => revealObserver.observe(el));
}

/*=============== PERFORMANCE: THROTTLE SCROLL EVENTS ===============*/
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Apply throttle to scroll events
window.removeEventListener('scroll', bgHeader);
window.removeEventListener('scroll', scrollUp);
window.removeEventListener('scroll', scrollActive);
window.removeEventListener('scroll', updateScrollProgress);
window.removeEventListener('scroll', updateScrollUpCircle);

const throttledBgHeader = throttle(bgHeader, 100);
const throttledScrollUp = throttle(scrollUp, 100);
const throttledScrollActive = throttle(scrollActive, 150);
const throttledScrollProgress = throttle(updateScrollProgress, 50);
const throttledScrollUpCircle = throttle(updateScrollUpCircle, 50);

window.addEventListener('scroll', throttledBgHeader);
window.addEventListener('scroll', throttledScrollUp);
window.addEventListener('scroll', throttledScrollActive);
window.addEventListener('scroll', throttledScrollProgress);
window.addEventListener('scroll', throttledScrollUpCircle);

/*=============== SMOOTH SCROLL INDICATOR HIDE ===============*/
const scrollIndicator = document.querySelector('.home--scroll-indicator');
if (scrollIndicator) {
  window.addEventListener('scroll', throttle(() => {
    if (window.scrollY > 100) {
      scrollIndicator.style.opacity = '0';
      scrollIndicator.style.transition = 'opacity .5s ease';
    } else {
      scrollIndicator.style.opacity = '1';
    }
  }, 100));
}

/*=============== FOOTER REVEAL ANIMATION ===============*/
/* DISABLED - Causing styling issues */

/*=============== KEYBOARD NAVIGATION ===============*/
document.addEventListener('keydown', (e) => {
  // Close mobile menu on Escape
  if (e.key === 'Escape') {
    navMenu.classList.remove('show-menu');
  }
});

/*=============== CSS SHAKE ANIMATION (Added dynamically) =============== */
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-8px); }
    40% { transform: translateX(8px); }
    60% { transform: translateX(-4px); }
    80% { transform: translateX(4px); }
  }
`;
document.head.appendChild(shakeStyle);

/*=============== CONSOLE BRANDING =============== */
console.log(
  '%c AVENTADOR ',
  'background: hsl(43, 90%, 50%); color: #000; font-size: 20px; font-weight: bold; padding: 10px 20px; border-radius: 4px;'
);
console.log(
  '%c Designed & Developed by Abdullah Cars ',
  'color: hsl(43, 90%, 50%); font-size: 12px; font-weight: bold;'
);
