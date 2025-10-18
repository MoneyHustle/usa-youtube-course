// ============================================
// USA COURSE - MAIN JAVASCRIPT
// ============================================

// Mobile Menu Toggle
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    navMenu.classList.toggle('active');
    menuBtn.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
}

// Close mobile menu when clicking nav links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const navMenu = document.getElementById('navMenu');
            const menuBtn = document.querySelector('.mobile-menu-btn');
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (menuBtn) {
                    menuBtn.textContent = '☰';
                }
            }
        });
    });
});

// Header scroll effects
let lastScroll = 0;
window.addEventListener('scroll', function() {
    const header = document.querySelector('.animated-header');
    const scrollLine = document.getElementById('scrollLine');
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class
    if (header) {
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    // Update scroll indicator
    if (scrollLine) {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (currentScroll / windowHeight) * 100;
        scrollLine.style.width = scrolled + '%';
    }
    
    lastScroll = currentScroll;
});

// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all items
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });
                
                // Open clicked item if it wasn't active
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });
});

// Modal Functions
function openModal(type) {
    const modal = document.getElementById('enrollModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const courseType = document.getElementById('courseType');
    
    if (!modal || !modalTitle || !modalSubtitle || !courseType) {
        console.error('Modal elements not found');
        return;
    }
    
    // Set modal content based on type
    if (type === 'free') {
        modalTitle.textContent = '🎁 Enroll in FREE Masterclass';
        modalSubtitle.textContent = 'Start your YouTube journey today - completely free!';
        courseType.value = 'free';
    } else {
        modalTitle.textContent = '💎 Get Premium Access';
        modalSubtitle.textContent = 'Unlock the complete package - Rs. 499 only!';
        courseType.value = 'premium';
    }
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Reset form
    const form = document.getElementById('enrollForm');
    if (form) {
        form.reset();
    }
    clearErrors();
}

function closeModal() {
    const modal = document.getElementById('enrollModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal on ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Close modal when clicking overlay
document.addEventListener('DOMContentLoaded', function() {
    const modalOverlay = document.querySelector('.modal-overlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }
});

// Smooth Scroll
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just "#"
            if (href === '#' || !href) {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                const navMenu = document.getElementById('navMenu');
                const menuBtn = document.querySelector('.mobile-menu-btn');
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    if (menuBtn) {
                        menuBtn.textContent = '☰';
                    }
                }
            }
        });
    });
});

// Clear all error messages
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.textContent = '';
    });
    
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    });
}

// Show specific error
function showError(fieldId, message) {
    const errorElement = document.getElementById(fieldId + 'Error');
    const inputElement = document.getElementById(fieldId);
    
    if (errorElement) {
        errorElement.textContent = message;
    }
    if (inputElement) {
        inputElement.style.borderColor = '#FF0000';
    }
}

// Scroll reveal animation
window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.pricing-card, .learn-item, .faq-item');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.pricing-card, .learn-item, .faq-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
    });
    
    // Trigger initial reveal
    setTimeout(reveal, 100);
});

// Add loading state management
let isSubmitting = false;

// Prevent form double submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('enrollForm');
    if (form) {
        form.addEventListener('submit', function() {
            if (isSubmitting) {
                return false;
            }
        });
    }
});

// Add ripple effect to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn, .btn-card, .header-cta');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = this.style.transform || 'scale(1)';
        });
    });
});

// Parallax effect for gradient orbs
document.addEventListener('mousemove', function(e) {
    const orbs = document.querySelectorAll('.gradient-orb');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 30;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        
        orb.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    if (!element) return;
    
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = formatNumber(target);
            clearInterval(timer);
        } else {
            element.textContent = formatNumber(Math.floor(start));
        }
    }, 16);
}

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M+';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'K+';
    }
    return num + '+';
}

// Trigger counter animation when stats are visible
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            
            statNumbers.forEach((stat, index) => {
                const targetAttr = stat.getAttribute('data-target');
                if (!targetAttr) return;
                
                let targetNum = parseInt(targetAttr);
                
                // Animate counter with delay
                setTimeout(() => {
                    if (stat.textContent.includes('Hrs')) {
                        // Keep "Hrs" text as is
                        return;
                    } else {
                        animateCounter(stat, targetNum, 2000);
                    }
                }, index * 200);
            });
        }
    });
}, { threshold: 0.5 });

// Observe stats row
document.addEventListener('DOMContentLoaded', function() {
    const statsRow = document.querySelector('.stats-row');
    if (statsRow) {
        statsObserver.observe(statsRow);
    }
});

// Add active state to current navigation
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
});

// Lazy load images (if you add images later)
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Add console welcome message
console.log('%c🚀 USA COURSE - YouTube Mastery 2025', 'color: #FFD700; font-size: 24px; font-weight: bold;');
console.log('%c💎 Premium Landing Page Loaded Successfully', 'color: #FF0000; font-size: 16px;');
console.log('%c📱 Mobile Optimized | ⚡ Performance Optimized', 'color: #00FF00; font-size: 14px;');

// Performance monitoring
window.addEventListener('load', function() {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log(`⏱️ Page loaded in ${loadTime}ms`);
});
