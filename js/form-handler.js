// ============================================
// FORM VALIDATION & WHATSAPP INTEGRATION
// ============================================

const WHATSAPP_NUMBER = '923237112303'; // Your WhatsApp number

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Phone validation regex (flexible for international formats)
const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;

// Form submission handler
function handleSubmit(event) {
    event.preventDefault();
    
    // Prevent double submission
    if (isSubmitting) {
        return false;
    }
    
    // Clear previous errors
    clearErrors();
    
    // Get form values
    const formData = {
        fullName: document.getElementById('fullName').value.trim(),
        age: document.getElementById('age').value,
        email: document.getElementById('email').value.trim(),
        country: document.getElementById('country').value,
        city: document.getElementById('city').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        source: document.getElementById('source').value,
        courseType: document.getElementById('courseType').value
    };
    
    // Validate all fields
    let isValid = true;
    
    // Full Name validation
    if (formData.fullName.length < 2) {
        showError('fullName', 'Please enter your full name (at least 2 characters)');
        isValid = false;
    }
    
    // Age validation
    if (!formData.age || formData.age < 13 || formData.age > 100) {
        showError('age', 'Please enter a valid age (13-100)');
        isValid = false;
    }
    
    // Email validation
    if (!emailRegex.test(formData.email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Country validation
    if (!formData.country) {
        showError('country', 'Please select your country');
        isValid = false;
    }
    
    // City validation
    if (formData.city.length < 2) {
        showError('city', 'Please enter your city name');
        isValid = false;
    }
    
    // Phone validation
    if (!phoneRegex.test(formData.phone)) {
        showError('phone', 'Please enter a valid phone number');
        isValid = false;
    }
    
    // Source validation
    if (!formData.source) {
        showError('source', 'Please tell us how you heard about us');
        isValid = false;
    }
    
    // If validation fails, stop here
    if (!isValid) {
        return false;
    }
    
    // Show loading state
    isSubmitting = true;
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const btnLoader = document.getElementById('btnLoader');
    
    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoader.style.display = 'inline-block';
    
    // Generate WhatsApp message
    const whatsappMessage = generateWhatsAppMessage(formData);
    
    // Redirect to WhatsApp after short delay
    setTimeout(() => {
        const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappURL, '_blank');
        
        // Reset form and close modal
        setTimeout(() => {
            closeModal();
            document.getElementById('enrollForm').reset();
            isSubmitting = false;
            submitBtn.disabled = false;
            btnText.style.display = 'inline';
            btnLoader.style.display = 'none';
            
            // Show success message
            showSuccessMessage(formData.courseType);
        }, 1000);
    }, 800);
    
    return false;
}

// Generate WhatsApp message based on course type
function generateWhatsAppMessage(data) {
    let message = '';
    
    if (data.courseType === 'free') {
        message = `🎁 *FREE MASTERCLASS ENROLLMENT*\n\n`;
        message += `Hi! I want to enroll in the FREE USA Course Masterclass.\n\n`;
        message += `📋 *My Details:*\n`;
        message += `👤 Name: ${data.fullName}\n`;
        message += `🎂 Age: ${data.age}\n`;
        message += `📧 Email: ${data.email}\n`;
        message += `🌍 Country: ${data.country}\n`;
        message += `🏙️ City: ${data.city}\n`;
        message += `📱 Phone: ${data.phone}\n`;
        message += `📢 Heard from: ${data.source}\n\n`;
        message += `Please provide me access to the free masterclass. Thank you! 🚀`;
    } else {
        message = `👑 *PREMIUM COURSE ENROLLMENT*\n\n`;
        message += `Hi! I want to purchase the PREMIUM USA Course package for Rs. 499.\n\n`;
        message += `📋 *My Details:*\n`;
        message += `👤 Name: ${data.fullName}\n`;
        message += `🎂 Age: ${data.age}\n`;
        message += `📧 Email: ${data.email}\n`;
        message += `🌍 Country: ${data.country}\n`;
        message += `🏙️ City: ${data.city}\n`;
        message += `📱 Phone: ${data.phone}\n`;
        message += `📢 Heard from: ${data.source}\n\n`;
        message += `💎 *Premium Package Includes:*\n`;
        message += `✅ 200GB+ Premium Assets Mega Pack\n`;
        message += `✅ Mega Combo: 20 Premium Bundles\n`;
        message += `✅ All-in-One YouTuber Kit\n`;
        message += `✅ CapCut Pro Access 🎬\n`;
        message += `✅ Full 4-Hour Course\n\n`;
        message += `Please share payment details. Ready to pay Rs. 499! 💰`;
    }
    
    return message;
}

// Show success message
function showSuccessMessage(type) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-notification';
    successDiv.innerHTML = `
        <div class="success-content">
            <div class="success-icon">${type === 'free' ? '🎉' : '🎊'}</div>
            <h3>Awesome!</h3>
            <p>Redirecting you to WhatsApp...</p>
            <small>Please complete your enrollment via WhatsApp</small>
        </div>
    `;
    
    // Add styles
    successDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #00FF00 0%, #00CC00 100%);
        color: #000;
        padding: 40px;
        border-radius: 20px;
        box-shadow: 0 20px 60px rgba(0, 255, 0, 0.4);
        z-index: 10000;
        text-align: center;
        animation: popIn 0.5s ease;
    `;
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.style.animation = 'popOut 0.5s ease';
        setTimeout(() => {
            document.body.removeChild(successDiv);
        }, 500);
    }, 3000);
}

// Add CSS animations for success message
const style = document.createElement('style');
style.textContent = `
    @keyframes popIn {
        from {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0;
        }
        to {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
    }
    
    @keyframes popOut {
        from {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
        to {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0;
        }
    }
    
    .success-notification h3 {
        font-size: 32px;
        font-weight: 900;
        margin: 15px 0 10px 0;
    }
    
    .success-notification p {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 5px;
    }
    
    .success-notification small {
        font-size: 14px;
        opacity: 0.8;
    }
    
    .success-icon {
        font-size: 64px;
        animation: bounce 1s infinite;
    }
`;
document.head.appendChild(style);

// Real-time validation on input
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('enrollForm');
    
    if (form) {
        // Email validation on blur
        const emailInput = document.getElementById('email');
        emailInput.addEventListener('blur', function() {
            if (this.value && !emailRegex.test(this.value)) {
                showError('email', 'Please enter a valid email address');
            } else {
                document.getElementById('emailError').textContent = '';
                this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            }
        });
        
        // Phone validation on blur
        const phoneInput = document.getElementById('phone');
        phoneInput.addEventListener('blur', function() {
            if (this.value && !phoneRegex.test(this.value)) {
                showError('phone', 'Please enter a valid phone number');
            } else {
                document.getElementById('phoneError').textContent = '';
                this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            }
        });
        
        // Age validation on input
        const ageInput = document.getElementById('age');
        ageInput.addEventListener('input', function() {
            if (this.value && (this.value < 13 || this.value > 100)) {
                showError('age', 'Age must be between 13 and 100');
            } else {
                document.getElementById('ageError').textContent = '';
                this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            }
        });
        
        // Clear error on focus
        const allInputs = form.querySelectorAll('input, select');
        allInputs.forEach(input => {
            input.addEventListener('focus', function() {
                const errorId = this.id + 'Error';
                const errorElement = document.getElementById(errorId);
                if (errorElement) {
                    errorElement.textContent = '';
                }
                this.style.borderColor = '#FF0000';
            });
        });
    }
});