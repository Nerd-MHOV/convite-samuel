// ==================== URL PARAMETERS ====================
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        nome: params.get('nome') || '',
        presente: params.get('presente') || 'Sabonete Líquido'
    };
}

// ==================== LOADING SCREEN ====================
window.addEventListener('load', () => {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.classList.add('hidden');

        // Start particles after loading
        initParticles();

        // Trigger confetti
        setTimeout(() => {
            createConfetti();
        }, 500);
    }, 2000);
});

// ==================== PERSONALIZATION ====================
function personalizeInvite() {
    const params = getUrlParams();

    // Set guest name
    const guestNameEl = document.getElementById('guest-name');
    if (params.nome) {
        guestNameEl.textContent = `Olá, ${params.nome}! `;
        guestNameEl.style.display = 'block';
    }

    // Set gift suggestion
    const giftNameEl = document.getElementById('gift-name');
    giftNameEl.textContent = params.presente;

    // Update WhatsApp button
    updateWhatsAppButton(params.nome);
}

function updateWhatsAppButton(nome) {
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const nomeText = nome ? nome : 'Eu';
    const message = `Olá! ${nomeText} confirmo presença no Chá do Samuel! 🐼🎋`;
    const phoneNumber = '5511999999999'; // ALTERE PARA O NÚMERO REAL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    whatsappBtn.href = whatsappUrl;
}

// ==================== COUNTDOWN ====================
function updateCountdown() {
    const eventDate = new Date('2026-05-30T16:00:00').getTime();

    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = '<p style="font-size: 2rem; color: white;">O evento chegou! 🎉</p>';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }, 1000);
}

// ==================== SCROLL ANIMATIONS ====================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-animated').forEach(section => {
        observer.observe(section);
    });
}

// ==================== PANDA EYE TRACKING ====================
function initPandaEyeTracking() {
    const pandaContainer = document.getElementById('panda-interactive');
    const pupilLeft = document.getElementById('pupil-left');
    const pupilRight = document.getElementById('pupil-right');

    if (!pandaContainer || !pupilLeft || !pupilRight) return;

    document.addEventListener('mousemove', (e) => {
        const pandaRect = pandaContainer.getBoundingClientRect();
        const pandaCenterX = pandaRect.left + pandaRect.width / 2;
        const pandaCenterY = pandaRect.top + pandaRect.height / 2;

        const angle = Math.atan2(e.clientY - pandaCenterY, e.clientX - pandaCenterX);
        const distance = Math.min(8, Math.hypot(e.clientX - pandaCenterX, e.clientY - pandaCenterY) / 50);

        const pupilX = Math.cos(angle) * distance;
        const pupilY = Math.sin(angle) * distance;

        pupilLeft.style.transform = `translate(calc(-50% + ${pupilX}px), calc(-50% + ${pupilY}px))`;
        pupilRight.style.transform = `translate(calc(-50% + ${pupilX}px), calc(-50% + ${pupilY}px))`;
    });
}

// ==================== MUSIC CONTROL ====================
function initMusicControl() {
    const musicControl = document.getElementById('music-control');
    const music = document.getElementById('background-music');
    let isPlaying = false;

    musicControl.addEventListener('click', () => {
        if (isPlaying) {
            music.pause();
            musicControl.classList.remove('playing');
            isPlaying = false;
        } else {
            music.play();
            musicControl.classList.add('playing');
            isPlaying = true;
        }
    });
}

// ==================== PARTICLES SYSTEM ====================
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 30;

    // Bamboo leaf shape
    class BambooLeaf {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height - canvas.height;
            this.size = Math.random() * 20 + 10;
            this.speedY = Math.random() * 1 + 0.5;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.rotation = Math.random() * 360;
            this.rotationSpeed = Math.random() * 2 - 1;
            this.opacity = Math.random() * 0.5 + 0.3;
        }

        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            this.rotation += this.rotationSpeed;

            if (this.y > canvas.height) {
                this.y = -20;
                this.x = Math.random() * canvas.width;
            }

            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation * Math.PI / 180);

            // Draw leaf
            ctx.beginPath();
            ctx.moveTo(0, -this.size);
            ctx.quadraticCurveTo(this.size / 2, -this.size / 2, this.size / 3, 0);
            ctx.quadraticCurveTo(this.size / 4, this.size / 2, 0, this.size);
            ctx.quadraticCurveTo(-this.size / 4, this.size / 2, -this.size / 3, 0);
            ctx.quadraticCurveTo(-this.size / 2, -this.size / 2, 0, -this.size);
            ctx.closePath();

            const gradient = ctx.createLinearGradient(0, -this.size, 0, this.size);
            gradient.addColorStop(0, '#7FB069');
            gradient.addColorStop(1, '#4A7C3F');
            ctx.fillStyle = gradient;
            ctx.fill();

            // Leaf vein
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(0, -this.size);
            ctx.lineTo(0, this.size);
            ctx.stroke();

            ctx.restore();
        }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new BambooLeaf());
    }

    // Animation loop
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        requestAnimationFrame(animateParticles);
    }

    animateParticles();

    // Resize handler
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ==================== CONFETTI EFFECT ====================
function createConfetti() {
    const colors = ['#7FB069', '#4A7C3F', '#FFD7E5', '#FFF8F0', '#6B4423'];
    const confettiCount = 100;

    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.width = Math.random() * 10 + 5 + 'px';
            confetti.style.height = Math.random() * 10 + 5 + 'px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.opacity = Math.random() * 0.8 + 0.2;
            confetti.style.zIndex = '1000';
            confetti.style.pointerEvents = 'none';
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

            document.body.appendChild(confetti);

            const fallDuration = Math.random() * 3 + 2;
            const fallDistance = window.innerHeight + 100;
            const sway = Math.random() * 200 - 100;

            confetti.animate([
                {
                    transform: `translateY(0px) translateX(0px) rotate(0deg)`,
                    opacity: 1
                },
                {
                    transform: `translateY(${fallDistance}px) translateX(${sway}px) rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }
            ], {
                duration: fallDuration * 1000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }).onfinish = () => {
                confetti.remove();
            };
        }, i * 30);
    }
}

// ==================== GIFT BOX INTERACTION ====================
function initGiftBoxInteraction() {
    const giftBox = document.getElementById('gift-box');
    let isOpened = false;

    giftBox.addEventListener('click', () => {
        if (!isOpened) {
            // Open gift
            giftBox.querySelector('.gift-lid').style.transform = 'translateY(-50px) rotate(-15deg)';

            // Create sparkles
            setTimeout(() => {
                createGiftSparkles();
            }, 300);

            isOpened = true;

            // Reset after 3 seconds
            setTimeout(() => {
                giftBox.querySelector('.gift-lid').style.transform = '';
                isOpened = false;
            }, 3000);
        }
    });
}

function createGiftSparkles() {
    const giftBox = document.getElementById('gift-box');
    const rect = giftBox.getBoundingClientRect();

    for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'fixed';
        sparkle.style.left = rect.left + rect.width / 2 + 'px';
        sparkle.style.top = rect.top + rect.height / 2 + 'px';
        sparkle.style.width = '10px';
        sparkle.style.height = '10px';
        sparkle.style.background = '#7FB069';
        sparkle.style.borderRadius = '50%';
        sparkle.style.zIndex = '1000';
        sparkle.style.pointerEvents = 'none';

        document.body.appendChild(sparkle);

        const angle = (Math.PI * 2 * i) / 20;
        const distance = Math.random() * 100 + 50;
        const endX = Math.cos(angle) * distance;
        const endY = Math.sin(angle) * distance;

        sparkle.animate([
            {
                transform: 'translate(0, 0) scale(1)',
                opacity: 1
            },
            {
                transform: `translate(${endX}px, ${endY}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => {
            sparkle.remove();
        };
    }
}

// ==================== SMOOTH SCROLL ====================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ==================== TYPEWRITER EFFECT ====================
function typewriterEffect() {
    const titleElement = document.getElementById('animated-title');
    const text = 'Samuel';
    titleElement.textContent = '';
    let index = 0;

    function type() {
        if (index < text.length) {
            titleElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 200);
        }
    }

    setTimeout(type, 1000);
}

// ==================== PARALLAX EFFECT ====================
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        const bambooLeft = document.querySelector('.bamboo-left');
        const bambooRight = document.querySelector('.bamboo-right');

        if (bambooLeft && bambooRight) {
            bambooLeft.style.transform = `translateY(${scrolled * 0.5}px) rotate(-5deg)`;
            bambooRight.style.transform = `translateY(${scrolled * 0.5}px) rotate(5deg)`;
        }
    });
}

// ==================== MOBILE MENU ADJUSTMENTS ====================
function initMobileAdjustments() {
    // Prevent zoom on double tap for iOS
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (e) => {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    // Add touch feedback to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });

        btn.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
}

// ==================== EASTER EGGS ====================
function initEasterEggs() {
    // Click counter on panda
    const panda = document.getElementById('panda-interactive');
    let clickCount = 0;

    panda.addEventListener('click', () => {
        clickCount++;

        if (clickCount === 5) {
            // Make panda dance
            panda.style.animation = 'pandaDance 0.5s ease-in-out 3';
            setTimeout(() => {
                panda.style.animation = '';
            }, 1500);
            clickCount = 0;
        }
    });

    // Add dance animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pandaDance {
            0%, 100% { transform: rotate(0deg) scale(1); }
            25% { transform: rotate(-10deg) scale(1.1); }
            75% { transform: rotate(10deg) scale(1.1); }
        }
    `;
    document.head.appendChild(style);
}

// ==================== PERFORMANCE OPTIMIZATIONS ====================
function optimizeImages() {
    // Lazy load images if any are added
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
}

// ==================== INITIALIZE ALL ====================
document.addEventListener('DOMContentLoaded', () => {
    personalizeInvite();
    updateCountdown();
    initScrollAnimations();
    initPandaEyeTracking();
    initMusicControl();
    initGiftBoxInteraction();
    initSmoothScroll();
    typewriterEffect();
    initParallax();
    initMobileAdjustments();
    initEasterEggs();
    optimizeImages();
});

// ==================== CONSOLE MESSAGE ====================
console.log('%c🐼 Chá do Samuel 🎋', 'font-size: 24px; color: #7FB069; font-weight: bold;');
console.log('%cFeito com ❤️ para celebrar a chegada do pequeno Samuel!', 'font-size: 14px; color: #4A7C3F;');
console.log('%cDesenvolvido com tecnologias web modernas', 'font-size: 12px; color: #6B4423;');
