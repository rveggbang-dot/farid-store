// Farid Store - Enhanced JavaScript with Interactive Functions
document.addEventListener('DOMContentLoaded', function() {
    console.log('Farid Store website loaded successfully!');
    
    // Update copyright year automatically
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Mobile menu functionality
    const mobileMenu = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });
    
    // Form submission
    const messageForm = document.getElementById('messageForm');
    if (messageForm) {
        messageForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simpan data form (dalam aplikasi nyata, ini akan dikirim ke server)
            console.log('Pesan diterima:', { name, email, message });
            
            // Tampilkan pesan sukses
            showModal('Pesan Terkirim', 'Terima kasih ' + name + '! Pesan Anda telah berhasil dikirim. Kami akan menghubungi Anda segera.');
            
            // Reset form
            messageForm.reset();
        });
    }
    
    // Add animation to elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.info-card, .feature-item, .product-card, .contact-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.info-card, .feature-item, .product-card, .contact-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Listen for scroll events
    window.addEventListener('scroll', animateOnScroll);
    
    // Trigger once on load
    animateOnScroll();
});

// Modal Functions
function showModal(title, message) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-message').textContent = message;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Navigation Functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 80,
            behavior: 'smooth'
        });
        
        // Update active nav link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + sectionId) {
                link.classList.add('active');
            }
        });
    }
}

// Button Action Functions
function scrollToProducts() {
    scrollToSection('products');
}

function showCatalog() {
    showModal('Katalog Produk', 'Katalog lengkap kami sedang dalam persiapan. Silakan hubungi kami via WhatsApp untuk informasi produk lebih lanjut!');
}

function visitWebsite() {
    showModal('Kunjungi Website', 'Terima kasih atas ketertarikan Anda! Website kami sedang dalam pengembangan lebih lanjut.');
}

function followInstagram() {
    showModal('Follow Instagram', 'Ikuti Instagram kami @faridstore untuk update terbaru dan promo spesial!');
}

function subscribeNewsletter() {
    const email = prompt('Masukkan alamat email Anda untuk berlangganan newsletter:');
    if (email) {
        showModal('Berlangganan Berhasil', 'Terima kasih! Email ' + email + ' telah berhasil terdaftar untuk menerima newsletter kami.');
    }
}

function buyProduct(productName) {
    showModal('Pembelian Produk', 'Terima kasih atas minat Anda pada ' + productName + '! Silakan hubungi kami via WhatsApp untuk proses pemesanan.');
}

function showAllProducts() {
    showModal('Semua Produk', 'Katalog lengkap produk kami sedang dalam persiapan. Silakan hubungi kami via WhatsApp untuk informasi produk lebih lanjut!');
}

function visitFacebook() {
    showModal('Facebook Page', 'Kunjungi halaman Facebook kami untuk informasi terbaru dan interaksi dengan komunitas!');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
}

// Add CSS for mobile menu
const mobileMenuStyles = `
    @media (max-width: 768px) {
        .nav-menu {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: white;
            padding: 1rem;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        }
        
        .nav-menu.active {
            display: flex;
        }
        
        .nav-menu .nav-link {
            padding: 0.5rem 0;
            border-bottom: 1px solid #eee;
        }
        
        .nav-menu .nav-link:last-child {
            border-bottom: none;
        }
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = mobileMenuStyles;
document.head.appendChild(styleSheet);