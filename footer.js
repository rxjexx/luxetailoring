// Footer component for web design agency
function initFooter() {
    const footer = document.getElementById('footer');
    footer.innerHTML = `
        <footer class="bg-black/80 backdrop-blur-lg pt-24 pb-12 px-6 md:px-12 border-t border-[#E3B04A]/10 text-center md:text-left relative z-20">
            <div class="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
                <div class="md:col-span-5 pr-0 md:pr-16">
                    <a href="/" class="tracking-tight uppercase text-2xl font-light block mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#E3B04A] to-[#C05C3B] flex items-center gap-2 md:justify-start justify-center">
                        <iconify-icon icon="solar:code-linear" width="28" height="28"></iconify-icon>
                        Luxe Tailoring
                    </a>
                    <p class="text-white/50 text-sm leading-loose max-w-sm mx-auto md:mx-0 font-extralight italic">Custom websites, hand-coded and fast. Built for businesses that don't want to look like everyone else.</p>
                </div>
                
                <div class="md:col-span-3 flex flex-col gap-6 text-white/50 text-sm font-light" style="font-family: var(--font-sans);">
                    <h4 class="text-[#E3B04A] uppercase tracking-[0.25em] text-[10px] mb-2 font-light">Quick Links</h4>
                    <div class="flex flex-col gap-3 items-center md:items-start">
                        <a href="/pages/services.html" class="hover:text-[#E3B04A] transition-colors">Services</a>
                        <a href="/pages/portfolio.html" class="hover:text-[#E3B04A] transition-colors">Portfolio</a>
                        <a href="/pages/about.html" class="hover:text-[#E3B04A] transition-colors">About</a>
                        <a href="/pages/pricing.html" class="hover:text-[#E3B04A] transition-colors">Pricing</a>
                    </div>
                </div>
                
                <div class="md:col-span-4 flex flex-col gap-6 text-white/50 text-sm font-light" style="font-family: var(--font-sans);">
                    <h4 class="text-[#C05C3B] uppercase tracking-[0.25em] text-[10px] mb-2 font-light">Get In Touch</h4>
                    <div class="flex flex-col gap-3 items-center md:items-start">
                        <a href="mailto:luxetailoringadmin@gmail.com" class="hover:text-[#C05C3B] transition-colors">luxetailoringadmin@gmail.com</a>
                        <a href="tel:+17656156371" class="hover:text-[#C05C3B] transition-colors">(765) 615-6371</a>
                        <p class="text-white/30 text-xs">Response within 24 hours</p>
                    </div>
                    </div>
                </div>
            </div>
            
            <div class="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-white/[0.04] text-[10px] text-white/30 uppercase tracking-[0.2em] font-light" style="font-family: var(--font-sans);">
                <p>© 2026 Luxe Tailoring. All rights reserved.</p>
                <div class="flex gap-8">
                    <a href="/pages/terms.html" class="hover:text-[#E3B04A] transition-colors duration-300">Terms</a>
                </div>
            </div>
        </footer>
    `;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFooter);
} else {
    initFooter();
}
