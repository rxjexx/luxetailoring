// Portfolio/Case Studies section
function initPortfolio() {
    const portfolio = document.getElementById('portfolio');
    portfolio.innerHTML = `
        <section id="portfolio" class="py-40 bg-[#0C0A09]/80 px-6 md:px-12 lg:px-24 border-y border-[#E3B04A]/10 relative z-20 backdrop-blur-sm">
            <div class="max-w-5xl mx-auto flex flex-col items-center gap-16 fade-in-section">
                <div class="text-center flex flex-col items-center gap-6">
                    <h2 class="text-5xl md:text-6xl lg:text-7xl tracking-tight uppercase font-extralight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50" style="font-family: var(--font-display);">Our Work</h2>
                    <p class="text-lg text-white/50 italic font-extralight">Real websites that Luxe has made</p>
                </div>

                <div class="w-full max-w-6xl mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <!-- Case Study: Lumiere Movies -->
                        <div class="relative rounded-3xl overflow-hidden bg-white/[0.02] border border-white/[0.05] p-2 shadow-[0_0_40px_rgba(227,176,74,0.2)] group">
                            <div class="rounded-2xl overflow-hidden bg-gradient-to-br from-[#E3B04A]/10 to-[#C05C3B]/10 border border-[#E3B04A]/20 hover:border-[#C05C3B]/40 transition-all duration-500">
                                <div class="h-32 bg-gradient-to-br from-[#E3B04A]/20 to-[#C05C3B]/20 flex items-center justify-center overflow-hidden relative" style="background-image: linear-gradient(rgba(227,176,74,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(227,176,74,0.03) 1px, transparent 1px); background-size: 20px 20px;">
                                    <iconify-icon icon="solar:clapperboard-play-linear" width="64" height="64" class="text-[#E3B04A]"></iconify-icon>
                                </div>
                                <div class="p-5">
                                    <h3 class="text-lg font-semibold text-white mb-2">Lumiere Movies</h3>
                                    <p class="text-white/70 mb-4 text-sm">Discover thousands of movies and TV shows. Stream in HD quality with zero lag and no ads.</p>
                                    <div class="flex gap-2 flex-wrap mb-4">
                                        <span class="text-xs bg-[#E3B04A]/10 text-[#E3B04A] px-2 py-1 rounded-full">Custom</span>
                                        <span class="text-xs bg-[#E3B04A]/10 text-[#E3B04A] px-2 py-1 rounded-full">Fast</span>
                                    </div>
                                    <a href="https://lumieremovies.netlify.app/" target="_blank" class="inline-block px-4 py-2 bg-[#E3B04A] text-[#0C0A09] text-xs uppercase tracking-widest rounded-full border border-[#E3B04A] hover:bg-transparent hover:text-[#E3B04A] transition-all duration-500 font-semibold">
                                        View Site
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    `;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPortfolio);
} else {
    initPortfolio();
}
