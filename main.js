// Framer-style Portfolio Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize Framer interactions
    initFramerInteractions();
    
    // Initialize Marquee
    initFramerMarquee();
    
    // Initialize Sticky Cards
    initFramerStickyCards();
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.framer-nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle (Framer style)
    const menuButton = document.querySelector('.framer-menu-button');
    const navMenu = document.querySelector('.framer-nav-menu');
    
    if (menuButton && navMenu) {
        menuButton.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('framer-nav-menu-open');
        });
    }

    // Framer-style button hover effects
    const buttonElements = document.querySelectorAll('[data-framer-name]');
    buttonElements.forEach(element => {
        if (element.classList.contains('framer-nav-link') || element.classList.contains('framer-button-primary')) {
            initFramerButtonAnimations(element);
        }
    });

    function initFramerButtonAnimations(element) {
        const hoverWrapper = element.querySelector('.framer-button-hover-wrapper');
        if (!hoverWrapper) return;

        const lines = hoverWrapper.querySelectorAll('.framer-button-line-height, .framer-button-line-width');
        
        element.addEventListener('mouseenter', function() {
            element.style.willChange = 'transform';
            lines.forEach(line => {
                if (line.classList.contains('framer-button-line-height')) {
                    line.style.height = '100%';
                } else if (line.classList.contains('framer-button-line-width')) {
                    line.style.width = '100%';
                }
            });
        });

        element.addEventListener('mouseleave', function() {
            element.style.willChange = 'auto';
            lines.forEach(line => {
                if (line.classList.contains('framer-button-line-height')) {
                    line.style.height = '0px';
                } else if (line.classList.contains('framer-button-line-width')) {
                    line.style.width = '0px';
                }
            });
        });
    }

    // Framer nav scroll effects
    const framerNav = document.querySelector('.framer-header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', FramerUtils.throttle(function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove scrolled class for styling
        if (scrollTop > 50) {
            framerNav.classList.add('framer-nav-scrolled');
        } else {
            framerNav.classList.remove('framer-nav-scrolled');
        }
        
        lastScrollTop = scrollTop;
    }, 16));

    // Initialize Framer interactions
    function initFramerInteractions() {
        // Add Framer interaction classes
        document.documentElement.classList.add('framer-mod-ix');
        
        // Trigger animations for elements with data-framer-name
        const animatedElements = document.querySelectorAll('[data-framer-name]');
        animatedElements.forEach(element => {
            // Set initial opacity for animation
            if (!element.style.opacity && element.dataset.framerComponentType) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                element.style.willChange = 'transform, opacity';
            }
        });

        // Framer Intersection Observer for scroll animations
        const framerObserverOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const framerObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    animateFramerElementIn(element);
                    framerObserver.unobserve(element);
                }
            });
        }, framerObserverOptions);

        // Observe animated elements
        animatedElements.forEach(element => {
            framerObserver.observe(element);
        });

        // Animate hero elements on load with stagger
        setTimeout(() => {
            const heroElements = document.querySelectorAll('[data-framer-name*="Hero"]');
            heroElements.forEach((element, index) => {
                setTimeout(() => {
                    animateFramerElementIn(element);
                }, index * 150);
            });
        }, 300);
    }

    function animateFramerElementIn(element) {
        element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0px)';
        
        // Remove will-change after animation
        setTimeout(() => {
            element.style.willChange = 'auto';
        }, 800);
    }

    // Counter animation for stats (Framer style)
    const statsNumbers = document.querySelectorAll('.framer-stats-number');
    const animateFramerCounter = (element) => {
        const target = parseInt(element.textContent.replace(/\D/g, ''));
        const duration = 2000; // 2 seconds
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (cubic-bezier equivalent)
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(target * easedProgress);
            
            element.textContent = element.textContent.replace(/\d+/, current);
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }
        
        requestAnimationFrame(updateCounter);
    };

    // Trigger counter animation when stats section is visible
    const statsSection = document.querySelector('.framer-stats-section');
    if (statsSection) {
        const framerStatsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    statsNumbers.forEach(stat => animateFramerCounter(stat));
                    framerStatsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        framerStatsObserver.observe(statsSection);
    }

    // Background video handling
    const heroVideo = document.querySelector('#hero-video');
    if (heroVideo) {
        // Set video properties for optimal performance
        heroVideo.muted = true;
        heroVideo.loop = true;
        heroVideo.autoplay = true;
        heroVideo.playsInline = true;
        
        // Ensure proper video positioning
        const resizeVideo = () => {
            const videoRect = heroVideo.getBoundingClientRect();
            const containerRect = heroVideo.parentElement.getBoundingClientRect();
            
            // Force video to cover the entire container
            heroVideo.style.width = '100%';
            heroVideo.style.height = '100%';
            heroVideo.style.minWidth = '100vw';
            heroVideo.style.minHeight = '100vh';
        };
        
        // Initial resize
        resizeVideo();

        // Ensure video plays with fallback handling
        const playVideo = async () => {
            try {
                await heroVideo.play();
                console.log('Video is playing successfully');
            } catch (error) {
                console.log('Video autoplay prevented:', error);
                // Show fallback background image
                const heroSection = document.querySelector('.section-home-hero');
                if (heroSection) {
                    heroSection.style.backgroundImage = 'url(img/background.jpeg)';
                    heroSection.style.backgroundSize = 'cover';
                    heroSection.style.backgroundPosition = 'center';
                    heroSection.style.backgroundAttachment = 'fixed';
                }
            }
        };

        // Wait for video to load before playing
        if (heroVideo.readyState >= 3) {
            playVideo();
        } else {
            heroVideo.addEventListener('canplaythrough', playVideo, { once: true });
        }

        // Pause video when not in view to save bandwidth
        const videoObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (heroVideo.paused) {
                        playVideo();
                    }
                } else {
                    heroVideo.pause();
                }
            });
        }, { threshold: 0.3 });

        videoObserver.observe(heroVideo);

        // Handle video loading errors
        heroVideo.addEventListener('error', function() {
            console.log('Video failed to load, using fallback background');
            const heroSection = document.querySelector('.section-home-hero');
            if (heroSection) {
                heroSection.style.backgroundImage = 'url(img/background.jpeg)';
                heroSection.style.backgroundSize = 'cover';
                heroSection.style.backgroundPosition = 'center';
                heroSection.style.backgroundAttachment = 'fixed';
            }
        });

        // Optimize video on window resize
        window.addEventListener('resize', FramerUtils.debounce(() => {
            resizeVideo();
        }, 250));
    }

    // Works item hover animations
    const worksItems = document.querySelectorAll('.works-item');
    worksItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const image = this.querySelector('.works-item-image');
            const overlay = this.querySelector('.works-item-overlay');
            
            if (image) {
                image.style.transform = 'scale(1.05)';
            }
            if (overlay) {
                overlay.style.opacity = '1';
            }
        });

        item.addEventListener('mouseleave', function() {
            const image = this.querySelector('.works-item-image');
            const overlay = this.querySelector('.works-item-overlay');
            
            if (image) {
                image.style.transform = 'scale(1)';
            }
            if (overlay) {
                overlay.style.opacity = '0';
            }
        });
    });

    // Services item hover animations
    const servicesItems = document.querySelectorAll('.services-item');
    servicesItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Framer Font loading handling
    if (typeof WebFont !== 'undefined') {
        WebFont.load({
            google: {
                families: ['Inter:regular,500,600,700']
            },
            active: function() {
                document.documentElement.classList.add('framer-fonts-active');
                document.documentElement.classList.remove('framer-fonts-loading');
            },
            inactive: function() {
                document.documentElement.classList.add('framer-fonts-inactive');
                document.documentElement.classList.remove('framer-fonts-loading');
            }
        });
    } else {
        // Fallback font loading detection
        document.fonts.ready.then(() => {
            document.documentElement.classList.add('framer-fonts-active');
        });
    }

    // Video Sections Management
    const videoSections = document.querySelectorAll('.sticky-video-section');
    const videos = document.querySelectorAll('.sticky-video');

    // Initialize all videos
    function initVideos() {
        videos.forEach((video, index) => {
            video.muted = true;
            video.loop = true;
            video.playsInline = true;
        });
    }

    // Intersection Observer for video playback
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target.querySelector('.sticky-video');
            
            if (entry.isIntersecting) {
                // Video section is in view - play video
                if (video && video.paused) {
                    video.play().catch(e => console.log('Video play error:', e));
                }
            } else {
                // Video section is out of view - pause video
                if (video && !video.paused) {
                    video.pause();
                }
            }
        });
    }, {
        threshold: 0.5 // Video plays when 50% visible
    });

    // Initialize videos and observe sections
    initVideos();
    videoSections.forEach(section => {
        videoObserver.observe(section);
    });

    // Legacy projects section code removed - replaced with Framer sticky cards

    // Initialize Framer Marquee
    function initFramerMarquee() {
        const marqueeContainer = document.querySelector('.framer-text-animation-container');
        const marqueeSlider = document.querySelector('.framer-text-slider');
        
        if (!marqueeContainer || !marqueeSlider) return;
        
        // Optimize performance for marquee
        marqueeSlider.style.willChange = 'transform';
        
        // Pause marquee when not visible (performance optimization)
        const marqueeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    marqueeSlider.style.animationPlayState = 'running';
                } else {
                    marqueeSlider.style.animationPlayState = 'paused';
                }
            });
        }, { threshold: 0.1 });
        
        marqueeObserver.observe(marqueeContainer);
        
        // Add smooth start effect
        setTimeout(() => {
            marqueeContainer.style.opacity = '1';
        }, 500);
        
        // Handle reduced motion preference
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            marqueeSlider.style.animation = 'none';
            marqueeSlider.style.transform = 'none';
        }
        
        console.log('Framer marquee initialized successfully!');
    }

    // Initialize Framer Sticky Cards
    function initFramerStickyCards() {
        const projectCards = document.querySelectorAll('.framer-project-card');
        const projectsContainer = document.querySelector('.framer-148f5un');
        
        if (!projectCards.length || !projectsContainer) return;
        
        // Enhanced scroll-triggered animations for cards
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                const card = entry.target;
                const cardIndex = Array.from(projectCards).indexOf(card);
                
                if (entry.isIntersecting) {
                    // Card enters viewport
                    card.style.transform = 'translateY(0) scale(1)';
                    card.style.opacity = '1';
                    
                    // Stagger animation for overlapping effect
                    setTimeout(() => {
                        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                        card.classList.add('framer-card-active');
                    }, cardIndex * 100);
                } else {
                    // Card leaves viewport
                    if (entry.boundingClientRect.top > window.innerHeight) {
                        // Card is below viewport
                        card.style.transform = 'translateY(50px) scale(0.95)';
                        card.style.opacity = '0.8';
                    } else {
                        // Card is above viewport
                        card.style.transform = 'translateY(-20px) scale(0.98)';
                        card.style.opacity = '0.9';
                    }
                    card.classList.remove('framer-card-active');
                }
            });
        }, {
            threshold: [0.1, 0.3, 0.5, 0.7],
            rootMargin: '-10% 0px -10% 0px'
        });
        
        // Observe each card and set initial state
        projectCards.forEach((card, index) => {
            cardObserver.observe(card);
            
            // Set initial state - only first card visible, others below
            if (index === 0) {
                card.style.transform = 'translateY(0) scale(1)';
                card.style.opacity = '1';
                card.classList.add('framer-card-active');
            } else {
                card.style.transform = 'translateY(50vh) scale(0.95)';
                card.style.opacity = '0.8';
            }
            card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        // Handle scroll-based overlapping effect with reduced spacing
        let ticking = false;
        
        function updateCardOverlapping() {
            projectCards.forEach((card, index) => {
                const cardRect = card.getBoundingClientRect();
                const nextCard = projectCards[index + 1];
                
                // Calculate how much the next card should overlap this one
                if (nextCard) {
                    const nextCardRect = nextCard.getBoundingClientRect();
                    
                    // If current card is sticking and next card is approaching
                    if (cardRect.top <= 32 && nextCardRect.top < window.innerHeight) {
                        const overlapProgress = Math.max(0, Math.min(1, 
                            (window.innerHeight - nextCardRect.top) / (window.innerHeight * 0.6)
                        ));
                        
                        // Current card gets pushed up slightly as next card approaches
                        const currentTranslateY = -10 * overlapProgress;
                        const currentScale = 1 - (0.02 * overlapProgress);
                        
                        card.style.transform = `translateY(${currentTranslateY}px) scale(${currentScale})`;
                        card.style.opacity = 1 - (0.15 * overlapProgress);
                        
                        // Next card slides up from bottom with reduced distance
                        const nextTranslateY = (1 - overlapProgress) * 15;
                        const nextScale = 0.98 + (0.02 * overlapProgress);
                        
                        nextCard.style.transform = `translateY(${nextTranslateY}px) scale(${nextScale})`;
                        nextCard.style.opacity = 0.85 + (0.15 * overlapProgress);
                    }
                }
            });
            
            ticking = false;
        }
        
        function requestOverlapUpdate() {
            if (!ticking) {
                requestAnimationFrame(updateCardOverlapping);
                ticking = true;
            }
        }
        
        window.addEventListener('scroll', requestOverlapUpdate, { passive: true });
        
        // Initial call
        updateCardOverlapping();
        
        console.log('Framer sticky cards initialized successfully!');
    }

    console.log('Framer-style portfolio website initialized successfully!');
});

// Framer-style utility functions
const FramerUtils = {
    // Animate element with Framer-style transitions
    animateElement: function(element, properties, duration = 800) {
        element.style.willChange = Object.keys(properties).join(', ');
        element.style.transition = `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
        Object.assign(element.style, properties);
        
        // Reset will-change after animation
        setTimeout(() => {
            element.style.willChange = 'auto';
        }, duration);
    },

    // Throttle function for scroll performance
    throttle: function(func, wait) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, wait);
            }
        };
    },

    // Debounce function for performance optimization
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Check if element is in viewport (Framer-style)
    isInViewport: function(element, threshold = 0.1) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        
        return (
            rect.top >= -rect.height * threshold &&
            rect.left >= -rect.width * threshold &&
            rect.bottom <= windowHeight + rect.height * threshold &&
            rect.right <= windowWidth + rect.width * threshold
        );
    },

    // Framer-style smooth scroll with spring animation
    scrollToElement: function(targetSelector, offset = 100) {
        const element = document.querySelector(targetSelector);
        if (element) {
            const elementPosition = element.offsetTop - offset;
            const startPosition = window.pageYOffset;
            const distance = elementPosition - startPosition;
            const duration = Math.min(Math.abs(distance) / 2, 1000); // Max 1s
            let start = null;
            
            function animate(timestamp) {
                if (!start) start = timestamp;
                const progress = (timestamp - start) / duration;
                
                if (progress < 1) {
                    // Cubic bezier easing
                    const easeProgress = 1 - Math.pow(1 - progress, 3);
                    window.scrollTo(0, startPosition + distance * easeProgress);
                    requestAnimationFrame(animate);
                } else {
                    window.scrollTo(0, elementPosition);
                }
            }
            
            requestAnimationFrame(animate);
        }
    },

    // Initialize Framer-style interactions
    initInteractions: function() {
        // Framer motion-inspired interaction system
        const interactionElements = document.querySelectorAll('[data-framer-name]');
        interactionElements.forEach((element, index) => {
            // Set initial state
            element.style.willChange = 'transform, opacity';
            
            // Stagger animation delays with spring-like timing
            const delay = index * 80;
            setTimeout(() => {
                element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0px)';
                
                // Clean up will-change
                setTimeout(() => {
                    element.style.willChange = 'auto';
                }, 600);
            }, delay);
        });
    },
    
    // Framer Motion-inspired spring animation
    spring: function(element, targetValues, config = {}) {
        const {
            stiffness = 200,
            damping = 20,
            mass = 1,
            precision = 0.01
        } = config;
        
        element.style.willChange = Object.keys(targetValues).join(', ');
        
        const startTime = performance.now();
        const startValues = {};
        
        // Get initial values
        Object.keys(targetValues).forEach(prop => {
            const computed = getComputedStyle(element)[prop];
            startValues[prop] = parseFloat(computed) || 0;
        });
        
        function animate(currentTime) {
            const elapsed = (currentTime - startTime) / 1000; // Convert to seconds
            let allComplete = true;
            
            Object.keys(targetValues).forEach(prop => {
                const start = startValues[prop];
                const target = targetValues[prop];
                const distance = target - start;
                
                // Spring physics calculation
                const omega = Math.sqrt(stiffness / mass);
                const zeta = damping / (2 * Math.sqrt(stiffness * mass));
                
                let value;
                if (zeta < 1) {
                    // Underdamped
                    const omegaD = omega * Math.sqrt(1 - zeta * zeta);
                    value = target - distance * Math.exp(-zeta * omega * elapsed) * 
                           Math.cos(omegaD * elapsed);
                } else {
                    // Critically damped or overdamped
                    value = target - distance * Math.exp(-omega * elapsed) * 
                           (1 + omega * elapsed);
                }
                
                element.style[prop] = value + (prop.includes('translate') ? 'px' : '');
                
                if (Math.abs(value - target) > precision) {
                    allComplete = false;
                }
            });
            
            if (!allComplete) {
                requestAnimationFrame(animate);
            } else {
                element.style.willChange = 'auto';
            }
        }
        
        requestAnimationFrame(animate);
    }
};

// Export FramerUtils for potential use in other scripts
window.FramerUtils = FramerUtils;

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', FramerUtils.initInteractions);
} else {
    FramerUtils.initInteractions();
}