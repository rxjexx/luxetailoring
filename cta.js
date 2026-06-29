// CTA section - Call to Action
function initCTA() {
    const cta = document.getElementById('cta');
    cta.innerHTML = `
        <section class="py-40 px-6 md:px-12 lg:px-24 max-w-[90rem] mx-auto relative z-20">
            <div class="bg-gradient-to-r from-[#E3B04A]/10 via-[#C05C3B]/10 to-[#E3B04A]/10 border border-[#E3B04A]/30 rounded-3xl p-12 md:p-16 lg:p-24 text-center flex flex-col items-center gap-8 fade-in-section relative overflow-hidden">
                <!-- Background glow -->
                <div class="absolute top-0 right-0 w-96 h-96 bg-[#E3B04A]/10 rounded-full blur-3xl -z-10"></div>
                <div class="absolute bottom-0 left-0 w-96 h-96 bg-[#C05C3B]/10 rounded-full blur-3xl -z-10"></div>

                <h2 class="text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase font-extralight text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-[#E3B04A]" style="font-family: var(--font-display);">Got a Project in Mind?</h2>
                
                <p class="text-lg md:text-xl text-white/70 font-light max-w-2xl">Let's talk about what you need. No pitch. No pressure. Just honest conversation.</p>

                <div class="flex flex-col sm:flex-row gap-6 mt-8">
                    <a href="contact.html" class="px-12 py-5 bg-[#E3B04A] text-[#0C0A09] text-sm uppercase tracking-widest rounded-full border border-[#E3B04A] hover:bg-transparent hover:text-[#E3B04A] transition-all duration-500 font-semibold shadow-[0_0_30px_rgba(227,176,74,0.4)] hover:shadow-[0_0_60px_rgba(227,176,74,0.6)]">
                        Get in Touch
                    </a>
                    <a href="pricing.html" class="px-12 py-5 rounded-full bg-transparent border border-[#C05C3B] text-[#C05C3B] text-sm uppercase tracking-widest hover:bg-[#C05C3B]/10 transition-all duration-500 font-semibold">
                        Check Pricing
                    </a>
                </div>

                <p class="text-white/50 text-sm mt-8">No sales team. Just me. Response within 24 hours.</p>
            </div>
        </section>
    `;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCTA);
} else {
    initCTA();
}
