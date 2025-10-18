/* ============================================
   USA COURSE - MAIN STYLES - CRAZY EDITION
   ============================================ */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    /* Colors */
    --black: #000000;
    --dark-gray: #0a0a0a;
    --red: #FF0000;
    --red-dark: #CC0000;
    --red-glow: rgba(255, 0, 0, 0.5);
    --gold: #FFD700;
    --green: #00FF00;
    --purple: #8B00FF;
    --blue: #0066FF;
    --white: #FFFFFF;
    
    /* Gradients */
    --gradient-primary: linear-gradient(135deg, #FF0000 0%, #8B00FF 100%);
    --gradient-gold: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
    --gradient-dark: linear-gradient(135deg, #000000 0%, #1a0000 100%);
    --gradient-red-black: linear-gradient(135deg, #FF0000 0%, #000000 100%);
    
    /* Shadows */
    --shadow-red: 0 10px 40px rgba(255, 0, 0, 0.3);
    --shadow-gold: 0 10px 40px rgba(255, 215, 0, 0.3);
    --shadow-heavy: 0 20px 60px rgba(0, 0, 0, 0.5);
    
    /* Spacing */
    --container-width: 1200px;
    --section-padding: 100px 0;
}

body {
    font-family: 'Poppins', sans-serif;
    background: var(--black);
    color: var(--white);
    overflow-x: hidden;
    line-height: 1.6;
    padding-top: 80px;
}

/* ============================================
   ANIMATED HEADER
   ============================================ */
.animated-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(20px);
    border-bottom: 2px solid rgba(255, 0, 0, 0.3);
    animation: slideDown 0.8s ease;
}

@keyframes slideDown {
    from {
        transform: translateY(-100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.header-container {
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
}

.logo-section {
    display: flex;
    align-items: center;
    gap: 15px;
    animation: logoGlow 3s ease-in-out infinite;
}

@keyframes logoGlow {
    0%, 100% {
        filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.3));
    }
    50% {
        filter: drop-shadow(0 0 20px rgba(255, 0, 0, 0.6));
    }
}

.logo-icon {
    font-size: 32px;
    animation: rotateLogo 4s linear infinite;
}

@keyframes rotateLogo {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.logo-text {
    display: flex;
    flex-direction: column;
    line-height: 1;
}

.usa-logo {
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-weight: 900;
    color: var(--gold);
    text-shadow: 0 0 20px var(--gold);
    letter-spacing: 2px;
}

.course-logo {
    font-size: 12px;
    font-weight: 600;
    color: var(--red);
    letter-spacing: 3px;
    text-transform: uppercase;
}

.nav-menu {
    display: flex;
    gap: 30px;
    align-items: center;
}

.nav-link {
    color: var(--white);
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    transition: all 0.3s ease;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gradient-primary);
    transition: width 0.3s ease;
}

.nav-link:hover {
    color: var(--red);
}

.nav-link:hover::after {
    width: 100%;
}

.header-cta {
    padding: 12px 24px;
    background: var(--gradient-primary);
    border: 2px solid var(--red);
    border-radius: 50px;
    color: var(--white);
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
    box-shadow: 0 5px 20px rgba(255, 0, 0, 0.3);
    animation: ctaPulse 2s ease-in-out infinite;
}

@keyframes ctaPulse {
    0%, 100% {
        box-shadow: 0 5px 20px rgba(255, 0, 0, 0.3);
        transform: scale(1);
    }
    50% {
        box-shadow: 0 8px 30px rgba(255, 0, 0, 0.6);
        transform: scale(1.05);
    }
}

.header-cta:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 40px rgba(255, 0, 0, 0.6);
}

.cta-icon {
    font-size: 18px;
    animation: bounce 1s infinite;
}

.scroll-indicator {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: rgba(255, 255, 255, 0.1);
    overflow: hidden;
}

.scroll-line {
    height: 100%;
    width: 0%;
    background: var(--gradient-primary);
    transition: width 0.3s ease;
}

.animated-header.scrolled {
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
}

.mobile-menu-btn {
    display: none;
    background: transparent;
    border: none;
    color: var(--white);
    font-size: 28px;
    cursor: pointer;
    padding: 5px;
}

/* ============================================
   ANIMATED BACKGROUND
   ============================================ */
.animated-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
}

.gradient-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.3;
    animation: float 20s infinite ease-in-out;
}

.orb-1 {
    width: 600px;
    height: 600px;
    background: var(--gradient-primary);
    top: -200px;
    left: -200px;
    animation-delay: 0s;
}

.orb-2 {
    width: 500px;
    height: 500px;
    background: var(--gradient-gold);
    bottom: -150px;
    right: -150px;
    animation-delay: 7s;
}

.orb-3 {
    width: 400px;
    height: 400px;
    background: linear-gradient(135deg, #0066FF 0%, #00FF00 100%);
    top: 50%;
    left: 50%;
    animation-delay: 14s;
}

@keyframes float {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(100px, -100px) scale(1.1); }
    66% { transform: translate(-100px, 100px) scale(0.9); }
}

/* ============================================
   CONTAINER
   ============================================ */
.container {
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 0 20px;
}

/* ============================================
   HERO SECTION
   ============================================ */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 60px 0;
    position: relative;
}

.hero .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.hero-content {
    z-index: 1;
}

.badge {
    display: inline-block;
    background: var(--gradient-red-black);
    color: var(--white);
    padding: 12px 24px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 30px;
    border: 2px solid var(--red);
    box-shadow: var(--shadow-red);
}

.pulse {
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); box-shadow: var(--shadow-red); }
    50% { transform: scale(1.05); box-shadow: 0 15px 50px rgba(255, 0, 0, 0.5); }
}

.hero-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 80px;
    font-weight: 900;
    line-height: 1;
    margin-bottom: 20px;
    text-transform: uppercase;
}

.usa-text {
    color: var(--gold);
    text-shadow: 0 0 30px var(--gold);
}

.gradient-text {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: inline-block;
}

.hero-subtitle {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 20px;
    color: var(--white);
}

.highlight {
    color: var(--green);
    text-shadow: 0 0 20px var(--green);
}

.hero-description {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 40px;
    line-height: 1.8;
}

/* Stats Row */
.stats-row {
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
}

.stat-item {
    text-align: center;
}

.stat-number {
    font-size: 42px;
    font-weight: 900;
    background: var(--gradient-gold);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 5px;
}

.stat-label {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* CTA Buttons */
.cta-buttons {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.btn {
    padding: 18px 40px;
    font-size: 16px;
    font-weight: 700;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    position: relative;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    gap: 10px;
}

.btn-icon {
    font-size: 20px;
}

.btn-free {
    background: var(--white);
    color: var(--black);
    border: 3px solid var(--gold);
    box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
}

.btn-free:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(255, 215, 0, 0.5);
}

.btn-premium {
    background: var(--gradient-primary);
    color: var(--white);
    border: 3px solid var(--red);
    box-shadow: var(--shadow-red);
    position: relative;
}

.btn-premium::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
}

.btn-premium:hover::before {
    left: 100%;
}

.btn-premium:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 20px 50px rgba(255, 0, 0, 0.6);
}

.btn-badge {
    position: absolute;
    top: -12px;
    right: -12px;
    background: var(--gradient-gold);
    color: var(--black);
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 800;
    box-shadow: var(--shadow-gold);
}

/* Hero Visual */
.hero-visual {
    display: flex;
    justify-content: center;
    align-items: center;
}

.youtube-icon-wrapper {
    width: 400px;
    height: 400px;
    background: var(--gradient-red-black);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    box-shadow: var(--shadow-heavy);
    animation: rotate 20s linear infinite;
}

@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.play-button {
    width: 0;
    height: 0;
    border-left: 80px solid var(--white);
    border-top: 50px solid transparent;
    border-bottom: 50px solid transparent;
    margin-left: 20px;
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5));
}

/* ============================================
   SECTIONS
   ============================================ */
section {
    padding: var(--section-padding);
    position: relative;
}

.section-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 56px;
    font-weight: 900;
    text-align: center;
    margin-bottom: 20px;
    text-transform: uppercase;
}

.section-subtitle {
    text-align: center;
    font-size: 20px;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 60px;
}

/* ============================================
   PRICING SECTION
   ============================================ */
.pricing {
    background: linear-gradient(180deg, transparent 0%, rgba(255, 0, 0, 0.05) 100%);
}

.pricing-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    max-width: 1000px;
    margin: 0 auto;
}

.pricing-card {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    padding: 40px;
    position: relative;
    transition: all 0.4s ease;
}

.pricing-card:hover {
    transform: translateY(-10px);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}

.free-card {
    border-color: var(--gold);
}

.premium-card {
    border-color: var(--red);
    background: linear-gradient(135deg, rgba(255, 0, 0, 0.1) 0%, rgba(139, 0, 255, 0.1) 100%);
    box-shadow: var(--shadow-red);
}

.popular-badge {
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--gradient-gold);
    color: var(--black);
    padding: 8px 24px;
    border-radius: 20px;
    font-weight: 800;
    font-size: 14px;
    box-shadow: var(--shadow-gold);
}

.card-header {
    text-align: center;
    margin-bottom: 30px;
}

.card-badge {
    display: inline-block;
    padding: 6px 16px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.premium-badge {
    background: var(--gradient-primary);
}

.card-title {
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 20px;
}

.card-price {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-bottom: 10px;
}

.currency {
    font-size: 24px;
    color: rgba(255, 255, 255, 0.6);
}

.amount {
    font-size: 72px;
    font-weight: 900;
    background: var(--gradient-gold);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.price-note {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
}

.card-features {
    margin-bottom: 30px;
}

.feature {
    display: flex;
    align-items: start;
    gap: 12px;
    padding: 12px 0;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.8);
}

.premium-feature {
    color: var(--white);
}

.feature.highlighted {
    background: linear-gradient(90deg, rgba(255, 0, 0, 0.2) 0%, transparent 100%);
    padding: 16px;
    border-radius: 8px;
    margin: 8px 0;
}

.check {
    color: var(--green);
    font-size: 20px;
    font-weight: 900;
    flex-shrink: 0;
}

.btn-card {
    width: 100%;
    padding: 16px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
}

.btn-outline {
    background: transparent;
    border: 2px solid var(--gold);
    color: var(--gold);
}

.btn-outline:hover {
    background: var(--gold);
    color: var(--black);
    transform: translateY(-3px);
    box-shadow: var(--shadow-gold);
}

.btn-premium-solid {
    background: var(--gradient-primary);
    border: none;
    color: var(--white);
    box-shadow: var(--shadow-red);
}

.btn-premium-solid:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 15px 50px rgba(255, 0, 0, 0.5);
}

/* ============================================
   LEARN SECTION
   ============================================ */
.learn {
    background: linear-gradient(180deg, transparent 0%, rgba(139, 0, 255, 0.05) 100%);
}

.learn-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

.learn-item {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 40px 30px;
    text-align: center;
    transition: all 0.4s ease;
}

.learn-item:hover {
    transform: translateY(-10px);
    border-color: var(--red);
    box-shadow: var(--shadow-red);
}

.learn-icon {
    font-size: 64px;
    margin-bottom: 20px;
    display: inline-block;
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

.learn-item h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 15px;
    color: var(--white);
}

.learn-item p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
}

/* ============================================
   FAQ SECTION
   ============================================ */
.faq {
    background: linear-gradient(180deg, transparent 0%, rgba(255, 0, 0, 0.05) 100%);
}

.faq-container {
    max-width: 800px;
    margin: 0 auto;
}

.faq-item {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    margin-bottom: 20px;
    overflow: hidden;
    transition: all 0.3s ease;
}

.faq-item:hover {
    border-color: var(--red);
}

.faq-question {
    padding: 25px 30px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
}

.faq-question h3 {
    font-size: 18px;
    font-weight: 600;
    color: var(--white);
}

.faq-icon {
    font-size: 28px;
    color: var(--red);
    transition: transform 0.3s ease;
}

.faq-item.active .faq-icon {
    transform: rotate(45deg);
}

.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
}

.faq-item.active .faq-answer {
    max-height: 500px;
}

.faq-answer p {
    padding: 0 30px 25px 30px;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.8;
}

/* ============================================
   FOOTER
   ============================================ */
.footer {
    background: var(--dark-gray);
    padding: 60px 0 30px;
    border-top: 2px solid rgba(255, 255, 255, 0.1);
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
}

.footer-brand h3 {
    font-size: 28px;
    font-weight: 900;
    background: var(--gradient-gold);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 10px;
}

.footer-brand p {
    color: rgba(255, 255, 255, 0.6);
}

.footer-links {
    display: flex;
    gap: 30px;
}

.footer-links a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
}

.footer-links a:hover {
    color: var(--red);
}

.footer-bottom {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom p {
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
}

/* ============================================
   MODAL
   ============================================ */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    animation: fadeIn 0.3s ease;
}

.modal.active {
    display: flex;
    justify-content: center;
    align-items: center;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(10px);
}

.modal-content {
    position: relative;
    background: linear-gradient(135deg, #1a0000 0%, #0a0a0a 100%);
    border: 2px solid var(--red);
    border-radius: 24px;
    width: 90%;
    max-width: 600px;
    max-height: 90vh;
    overflow-y: auto;
    padding: 40px;
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.8);
    animation: slideUp 0.4s ease;
}

@keyframes slideUp {
    from { transform: translateY(50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

.modal-close {
    position: absolute;
    top: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: var(--white);
    font-size: 32px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-close:hover {
    background: var(--red);
    transform: rotate(90deg);
}

.modal-header {
    text-align: center;
    margin-bottom: 30px;
}

.modal-header h2 {
    font-size: 36px;
    font-weight: 900;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 10px;
}

.modal-header p {
    color: rgba(255, 255, 255, 0.7);
}

.form-group {
    margin-bottom: 20px;
}

.form-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: var(--white);
}

.form-group input,
.form-group select {
    width: 100%;
    padding: 14px 18px;
    background: rgba(255, 255, 255, 0.05);
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    color: var(--white);
    font-size: 16px;
    transition: all 0.3s ease;
    font-family: 'Poppins', sans-serif;
}

.form-group input:focus,
.form-group select:focus {
    outline: none;
    border-color: var(--red);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 20px rgba(255, 0, 0, 0.2);
}

.form-group select {
    cursor: pointer;
}

.error-message {
    display: block;
    color: var(--red);
    font-size: 13px;
    margin-top: 5px;
    min-height: 18px;
}

.btn-submit {
    width: 100%;
    padding: 18px;
    background: var(--gradient-primary);
    border: none;
    border-radius: 12px;
    color: var(--white);
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    margin-top: 10px;
    box-shadow: var(--shadow-red);
}

.btn-submit:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 50px rgba(255, 0, 0, 0.5);
}

.btn-submit:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.loader {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-top-color: var(--white);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

/* ============================================
   SCROLLBAR
   ============================================ */
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: var(--dark-gray);
}

::-webkit-scrollbar-thumb {
    background: var(--gradient-primary);
    border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--red);
}

/* ============================================
   RESPONSIVE HEADER
   ============================================ */
@media (max-width: 768px) {
    body {
        padding-top: 70px;
    }
    
    .header-container {
        padding: 12px 15px;
    }
    
    .nav-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.98);
        flex-direction: column;
        gap: 0;
        padding: 20px 0;
        border-top: 2px solid rgba(255, 0, 0, 0.3);
    }
    
    .nav-menu.active {
        display: flex;
    }
    
    .nav-link {
        padding: 15px 20px;
        width: 100%;
        text-align: center;
    }
    
    .mobile-menu-btn {
        display: block;
    }
    
    .header-cta {
        padding: 10px 18px;
        font-size: 12px;
    }
    
    .logo-icon {
        font-size: 24px;
    }
    
    .usa-logo {
        font-size: 20px;
    }
    
    .course-logo {
        font-size: 10px;
    }
}

@media (max-width: 480px) {
    body {
        padding-top: 65px;
    }
    
    .header-container {
        gap: 10px;
    }
    
    .logo-section {
        gap: 10px;
    }
    
    .header-cta span:last-child {
        display: none;
    }
    
    .header-cta {
        padding: 10px 15px;
        min-width: auto;
    }
}
