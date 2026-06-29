// Header component for web design agency
function initHeader() {
    const header = document.getElementById('header');
    header.innerHTML = `
        <header class="fixed top-0 left-0 w-full z-50 transition-all duration-700 bg-transparent py-8 px-6 md:px-12 flex justify-between items-center border-b border-transparent">
            <a href="index.html" class="tracking-tight uppercase text-lg md:text-xl font-light z-10 flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-[#E3B04A] to-[#E3B04A]/70 hover:to-[#E3B04A] transition-all duration-500">
                <iconify-icon icon="solar:code-linear" width="24" height="24"></iconify-icon>
                Luxe Tailoring
            </a>
            
            <nav class="hidden md:flex gap-12 text-xs tracking-widest uppercase items-center font-light" style="font-family: var(--font-sans);">
                <a href="services.html" class="text-white/50 hover:text-[#E3B04A] transition-colors duration-300">Services</a>
                <a href="process.html" class="text-white/50 hover:text-[#E3B04A] transition-colors duration-300">Process</a>
                <a href="portfolio.html" class="text-white/50 hover:text-[#E3B04A] transition-colors duration-300">Portfolio</a>
                <a href="about.html" class="text-white/50 hover:text-[#E3B04A] transition-colors duration-300">About</a>
                <a href="pricing.html" class="text-white/50 hover:text-[#E3B04A] transition-colors duration-300">Pricing</a>
            </nav>

            <div class="flex items-center gap-6 z-10">
                <a href="contact.html" class="px-6 py-2 bg-[#E3B04A] text-[#0C0A09] text-xs uppercase tracking-widest rounded-full font-semibold hover:bg-[#C05C3B] transition-colors duration-300">
                    Contact
                </a>
                <button class="md:hidden flex flex-col gap-1.5 z-50 opacity-60 hover:opacity-100 transition-opacity duration-300">
                    <span class="w-6 h-[1px] bg-white block"></span>
                    <span class="w-4 h-[1px] bg-white block ml-auto"></span>
                </button>
            </div>
        </header>
    `;
}

// Initialize header and setup scroll behavior
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initHeader();
        setupHeaderScroll();
    });
} else {
    initHeader();
    setupHeaderScroll();
}

function setupHeaderScroll() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-black/80', 'backdrop-blur-xl', 'border-b', 'border-[#E3B04A]/20', 'py-5');
            header.classList.remove('bg-transparent', 'py-8', 'border-transparent');
        } else {
            header.classList.remove('bg-black/80', 'backdrop-blur-xl', 'border-b', 'border-[#E3B04A]/20', 'py-5');
            header.classList.add('bg-transparent', 'py-8', 'border-transparent');
        }
    });
}
