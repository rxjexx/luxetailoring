// About section - Your story
function initAbout() {
    const about = document.getElementById('about');
    about.innerHTML = `
        <section id="about" class="py-40 px-6 md:px-12 lg:px-24 max-w-[90rem] mx-auto relative z-20">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center fade-in-section">
                <div class="lg:col-span-1 relative aspect-[4/3] rounded-3xl overflow-hidden bg-white/[0.02] border border-white/[0.05] p-2 shadow-[0_0_40px_rgba(227,176,74,0.2)]">
                    <div class="relative w-full h-full rounded-2xl overflow-hidden border border-[#E3B04A]/20 bg-gradient-to-br from-[#E3B04A]/10 to-[#C05C3B]/10 flex items-center justify-center p-8">
                        <div class="text-center">
                            <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#E3B04A] to-[#C05C3B] flex items-center justify-center">
                                <span class="text-3xl font-black text-[#0C0A09]">Lx</span>
                            </div>
                            <div class="space-y-4">
                                <div>
                                    <h3 class="text-2xl font-semibold text-white">Ethan</h3>
                                    <p class="text-[#E3B04A] font-semibold text-sm">Founder & Lead Designer</p>
                                </div>
                                <div class="space-y-2 text-white/70 text-xs">
                                    <div class="flex items-center justify-center gap-2">
                                        <iconify-icon icon="solar:map-point-linear" width="14" height="14"></iconify-icon>
                                        <span>United States</span>
                                    </div>
                                </div>
                                <div class="border-t border-[#E3B04A]/20 pt-4 mt-4">
                                    <p class="text-white/60 text-xs mb-3 font-light">Skills & Services</p>
                                    <div class="space-y-1 text-white/70 text-xs">
                                        <p>Web Design • App Design • Game Cheats</p>
                                        <p>Cyber Security</p>
                                    </div>
                                </div>
                                <div class="border-t border-[#E3B04A]/20 pt-4 grid grid-cols-2 gap-4 text-center">
                                    <div>
                                        <p class="text-[#E3B04A] font-bold text-lg">15</p>
                                        <p class="text-white/60 text-xs">Sites Built</p>
                                    </div>
                                    <div>
                                        <p class="text-[#E3B04A] font-bold text-lg">2</p>
                                        <p class="text-white/60 text-xs">Customers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-1 flex flex-col gap-12 relative">
                    <div class="absolute -top-10 -left-6 w-12 h-12 border-t border-l border-[#E3B04A]/40 rounded-tl-2xl hidden lg:block"></div>
                    
                    <h2 class="text-4xl md:text-5xl lg:text-7xl tracking-tight uppercase font-extralight text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C05C3B]/60" style="font-family: var(--font-display);">About Me</h2>
                    <div class="text-base md:text-lg leading-[2] text-white/60 flex flex-col gap-8 font-extralight">
                        <p>I got tired of seeing small businesses get ripped off by agencies charging $10k for template sites. And tired of seeing good ideas die because their website was trash.</p>
                        
                        <p>So I started building custom sites the right way. Hand-coded. Fast. SEO-ready from day one. No bullshit, no bloat, just websites that actually work.</p>

                        <div class="border-l-2 border-[#E3B04A]/40 pl-6 py-4">
                            <p class="italic text-white/80 font-light">"Your website is usually the first impression. Make it count."</p>
                        </div>

                        <div class="pt-4">
                            <h3 class="text-lg font-semibold text-white mb-6">What You Get Working With Me</h3>
                            <div class="space-y-4">
                                <div class="flex gap-4 items-start">
                                    <iconify-icon icon="solar:check-circle-linear" width="24" height="24" class="text-[#E3B04A] flex-shrink-0 mt-1"></iconify-icon>
                                    <div>
                                        <p class="font-semibold text-white">Real Skill</p>
                                        <p class="text-white/60 text-sm">I actually know how to code. Not just templates.</p>
                                    </div>
                                </div>
                                <div class="flex gap-4 items-start">
                                    <iconify-icon icon="solar:check-circle-linear" width="24" height="24" class="text-[#E3B04A] flex-shrink-0 mt-1"></iconify-icon>
                                    <div>
                                        <p class="font-semibold text-white">Transparency</p>
                                        <p class="text-white/60 text-sm">I tell you exactly what you need, not what I want to sell</p>
                                    </div>
                                </div>
                                <div class="flex gap-4 items-start">
                                    <iconify-icon icon="solar:check-circle-linear" width="24" height="24" class="text-[#C05C3B] flex-shrink-0 mt-1"></iconify-icon>
                                    <div>
                                        <p class="font-semibold text-white">Real Support</p>
                                        <p class="text-white/60 text-sm">I'm here after launch, not gone</p>
                                    </div>
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
    document.addEventListener('DOMContentLoaded', initAbout);
} else {
    initAbout();
}
