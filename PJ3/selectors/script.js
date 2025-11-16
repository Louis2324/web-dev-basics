class FormBackgroundAnimation {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: 0, y: 0, radius: 100 };
        
        this.init();
        this.animate();
        
        // Handle window resize
        window.addEventListener('resize', () => this.resize());
        canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    }
    
    init() {
        this.resize();
        this.createParticles();
    }
    
    resize() {
        // Set canvas to full container size
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
        this.createParticles(); // Recreate particles on resize
    }
    
    createParticles() {
        this.particles = [];
        const particleCount = Math.min(50, Math.floor((this.canvas.width * this.canvas.height) / 5000));
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 3 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                color: `rgba(220, 174, 150, ${Math.random() * 0.3 + 0.1})` // Using your pink color
            });
        }
    }
    
    handleMouseMove(e) {
        const rect = this.canvas.getBoundingClientRect();
        this.mouse.x = e.clientX - rect.left;
        this.mouse.y = e.clientY - rect.top;
    }
    
    animate() {
        // Clear canvas with slight transparency for trail effect
        this.ctx.fillStyle = 'rgba(248, 220, 212, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.updateParticles();
        this.drawParticles();
        this.drawConnections();
        
        requestAnimationFrame(() => this.animate());
    }
    
    updateParticles() {
        this.particles.forEach(particle => {
            // Move particles
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Mouse interaction
            const dx = particle.x - this.mouse.x;
            const dy = particle.y - this.mouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < this.mouse.radius) {
                const angle = Math.atan2(dy, dx);
                const force = (this.mouse.radius - distance) / this.mouse.radius;
                particle.x += Math.cos(angle) * force * 2;
                particle.y += Math.sin(angle) * force * 2;
            }
            
            // Bounce off walls
            if (particle.x <= 0 || particle.x >= this.canvas.width) particle.speedX *= -1;
            if (particle.y <= 0 || particle.y >= this.canvas.height) particle.speedY *= -1;
            
            // Keep particles within bounds
            particle.x = Math.max(0, Math.min(this.canvas.width, particle.x));
            particle.y = Math.max(0, Math.min(this.canvas.height, particle.y));
        });
    }
    
    drawParticles() {
        this.particles.forEach(particle => {
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = particle.color;
            this.ctx.fill();
        });
    }
    
    drawConnections() {
        // Draw lines between nearby particles
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    const opacity = 1 - (distance / 100);
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(196, 164, 163, ${opacity * 0.3})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }
    }
}

class FormValidator {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.fields = {
            name: {
                element: document.getElementById('name'),
                error: document.getElementById('nameError'),
                validate: (value) => this.validateName(value)
            },
            email: {
                element: document.getElementById('email'),
                error: document.getElementById('emailError'),
                validate: (value) => this.validateEmail(value)
            },
            password: {
                element: document.getElementById('password'),
                error: document.getElementById('passwordError'),
                validate: (value) => this.validatePassword(value)
            }
        };
        
        this.init();
    }
    
    init() {
        Object.values(this.fields).forEach(field => {
            field.element.addEventListener('input', () => {
                this.validateField(field);
            });
            
            field.element.addEventListener('blur', () => {
                this.validateField(field);
            });
        });
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
    
    validateField(field) {
        const value = field.element.value.trim();
        const error = field.validate(value);
        
        if (error) {
            this.showError(field, error);
            return false;
        } else {
            this.hideError(field);
            return true;
        }
    }
    
    validateName(name) {
        if (!name) return 'Name is required';
        if (name.length < 2) return 'Name must be at least 2 characters';
        if (!/^[a-zA-Z\s]+$/.test(name)) return 'Name can only contain letters and spaces';
        return null;
    }
    
    validateEmail(email) {
        if (!email) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) return 'Please enter a valid email address';
        return null;
    }
    
    validatePassword(password) {
        if (!password) return 'Password is required';
        if (password.length < 8) return 'Password must be at least 8 characters';
        if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password)) return 'Password must contain both uppercase and lowercase letters';
        if (!/(?=.*\d)/.test(password)) return 'Password must contain at least one number';
        return null;
    }
    
    showError(field, message) {
        field.error.textContent = message;
        field.error.classList.add('show');
        field.element.style.borderColor = '#D32F2F';
    }
    
    hideError(field) {
        field.error.classList.remove('show');
        field.element.style.borderColor = '#E5E7EB';
    }
    
    handleSubmit(e) {
        e.preventDefault();
        let isValid = true;
        Object.values(this.fields).forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });

        if (isValid) {
            this.showSuccess();
        }
    }
    
    showSuccess() {
        const successMessage = document.createElement('div');
        successMessage.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #4CAF50;
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        successMessage.textContent = 'Form submitted successfully!';
        document.body.appendChild(successMessage);
        setTimeout(() => {
            successMessage.style.transform = 'translateX(0)';
        }, 100);
    
        setTimeout(() => {
            successMessage.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(successMessage);
            }, 300);
        }, 3000);
        
        this.form.reset();
        Object.values(this.fields).forEach(field => {
            this.hideError(field);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('formCanvas');
    new FormBackgroundAnimation(canvas);
    new FormValidator('interactive-form');
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.style.transform = 'scale(1.02)';
        });
        input.addEventListener('blur', () => {
            input.parentElement.style.transform = 'scale(1)';
        });
    });
});