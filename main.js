// Webflow-style Portfolio Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize Webflow interactions
    initWebflowInteractions();
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.navbar-link-item');
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

    // Mobile menu toggle (Webflow style)
    const menuButton = document.querySelector('.menu-button');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuButton && navMenu) {
        menuButton.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('w--nav-menu-open');
        });
    }

    // Webflow-style button hover effects
    const buttonElements = document.querySelectorAll('[data-w-id]');
    buttonElements.forEach(element => {
        if (element.classList.contains('navbar-link-item') || element.classList.contains('button-primary')) {
            initButtonAnimations(element);
        }
    });

    function initButtonAnimations(element) {
        const hoverWrapper = element.querySelector('.button-primary-hove-wrapper');
        if (!hoverWrapper) return;

        const lines = hoverWrapper.querySelectorAll('.button-line-height, .button-line-width');
        
        element.addEventListener('mouseenter', function() {
            lines.forEach(line => {
                if (line.classList.contains('button-line-height')) {
                    line.style.height = '100%';
                } else if (line.classList.contains('button-line-width')) {
                    line.style.width = '100%';
                }
            });
        });

        element.addEventListener('mouseleave', function() {
            lines.forEach(line => {
                if (line.classList.contains('button-line-height')) {
                    line.style.height = '0px';
                } else if (line.classList.contains('button-line-width')) {
                    line.style.width = '0px';
                }
            });
        });
    }

    // Primary nav scroll effects
    const primaryNav = document.querySelector('.primary-nav');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove scrolled class for styling
        if (scrollTop > 50) {
            primaryNav.classList.add('scrolled');
        } else {
            primaryNav.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });

    // Initialize Webflow interactions
    function initWebflowInteractions() {
        // Add Webflow interaction classes
        document.documentElement.classList.add('w-mod-ix');
        
        // Trigger animations for elements with data-w-id
        const animatedElements = document.querySelectorAll('[data-w-id]');
        animatedElements.forEach(element => {
            // Set initial opacity for animation
            if (!element.style.opacity) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
            }
        });

        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    animateElementIn(element);
                    observer.unobserve(element);
                }
            });
        }, observerOptions);

        // Observe animated elements
        animatedElements.forEach(element => {
            observer.observe(element);
        });

        // Animate hero elements on load
        setTimeout(() => {
            const heroElements = document.querySelectorAll('[data-w-id^="hero"]');
            heroElements.forEach((element, index) => {
                setTimeout(() => {
                    animateElementIn(element);
                }, index * 200);
            });
        }, 500);
    }

    function animateElementIn(element) {
        element.style.transition = 'all 0.8s ease';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0px)';
    }

    // Counter animation for stats (Webflow style)
    const statsNumbers = document.querySelectorAll('.home-about-stats-number');
    const animateCounter = (element) => {
        const target = parseInt(element.textContent.replace(/\D/g, ''));
        const increment = target / 60;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = element.textContent.replace(/\d+/, target);
                clearInterval(timer);
            } else {
                element.textContent = element.textContent.replace(/\d+/, Math.floor(current));
            }
        }, 30);
    };

    // Trigger counter animation when stats section is visible
    const statsSection = document.querySelector('.home-about-stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    statsNumbers.forEach(stat => animateCounter(stat));
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        statsObserver.observe(statsSection);
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
        window.addEventListener('resize', WebflowUtils.debounce(() => {
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

    // WebFont loading handling
    if (typeof WebFont !== 'undefined') {
        WebFont.load({
            google: {
                families: ['Inter:regular,500,600,700']
            },
            active: function() {
                document.documentElement.classList.add('wf-active');
                document.documentElement.classList.remove('wf-loading');
            },
            inactive: function() {
                document.documentElement.classList.add('wf-inactive');
                document.documentElement.classList.remove('wf-loading');
            }
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

    console.log('Webflow-style portfolio website with sticky videos initialized successfully!');
});

// Webflow-style utility functions
const WebflowUtils = {
    // Animate element with Webflow-style transitions
    animateElement: function(element, properties, duration = 800) {
        element.style.transition = `all ${duration}ms ease`;
        Object.assign(element.style, properties);
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

    // Check if element is in viewport (Webflow-style)
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

    // Webflow-style smooth scroll
    scrollToElement: function(targetSelector, offset = 100) {
        const element = document.querySelector(targetSelector);
        if (element) {
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    },

    // Initialize Webflow-style interactions
    initInteractions: function() {
        // This would typically be handled by Webflow's interaction engine
        // We're implementing a simplified version here
        const interactionElements = document.querySelectorAll('[data-w-id]');
        interactionElements.forEach((element, index) => {
            // Stagger animation delays
            const delay = index * 100;
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0px)';
            }, delay);
        });
    }
};

// Export WebflowUtils for potential use in other scripts
window.WebflowUtils = WebflowUtils;

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', WebflowUtils.initInteractions);
} else {
    WebflowUtils.initInteractions();
}