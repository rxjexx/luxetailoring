// Hero component for web design agency
function initHero() {
    const hero = document.getElementById('hero');
    hero.innerHTML = `
        <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 px-6">
            <div class="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center gap-10 fade-in-section">
                <h1 class="text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.85] uppercase font-extralight text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/40 drop-shadow-sm" style="font-family: var(--font-display);">
                    Tailering Your Sites <br> 
                    <span class="italic lowercase text-[#E3B04A] opacity-90 block mt-4 font-light tracking-normal drop-shadow-[0_0_40px_rgba(227,176,74,0.25)]" style="font-family: var(--font-serif);">to what they deserve</span>
                </h1>
                <p class="text-xs max-w-2xl mx-auto text-white/60 uppercase tracking-[0.25em] mt-2 font-light flex flex-col gap-4" style="font-family: var(--font-sans);">
                    <span class="flex items-center justify-center gap-4">
                        <span class="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#E3B04A]"></span>
                        Hand-Coded. Fast. Built Right.
                        <span class="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#E3B04A]"></span>
                    </span>
                    <span class="text-white/40">No VibeCode. No Bloat. No Excuses.</span>
                </p>
                <div class="flex flex-col sm:flex-row gap-6 mt-12">
                    <a href="contact.html" class="px-10 py-4 bg-[#E3B04A] text-[#0C0A09] text-xs uppercase tracking-widest rounded-full border border-[#E3B04A] hover:bg-transparent hover:text-[#E3B04A] transition-all duration-500 font-semibold relative overflow-hidden shimmer-button shadow-[0_0_20px_rgba(227,176,74,0.3)]">
                        Let's Talk
                    </a>
                    <a href="portfolio.html" class="px-10 py-4 rounded-full bg-white/[0.03] text-white text-xs uppercase tracking-widest border border-white/20 hover:border-[#C05C3B] hover:bg-[#C05C3B]/10 hover:text-[#C05C3B] transition-all duration-500 font-light backdrop-blur-md">
                        See Our Work
                    </a>
                </div>
            </div>
        </section>
    `;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHero);
} else {
    initHero();
}
