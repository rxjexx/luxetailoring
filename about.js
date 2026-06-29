// About section - Your story
function initAbout() {
    const about = document.getElementById('about');
    about.innerHTML = `
        <section id="about" class="py-40 px-6 md:px-12 lg:px-24 max-w-[90rem] mx-auto relative z-20">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-center fade-in-section">
                <div class="lg:col-span-1 relative aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden bg-white/[0.02] border border-white/[0.05] p-2 shadow-[0_0_40px_rgba(227,176,74,0.2)]">
                    <div class="relative w-full h-full rounded-xl lg:rounded-2xl overflow-hidden border border-[#E3B04A]/20 bg-gradient-to-br from-[#E3B04A]/5 to-[#C05C3B]/5 flex items-center justify-center p-6 lg:p-8">
                        <div class="text-center">
                            <img src="luxe-logo.png" alt="Luxe Tailoring" class="w-24 lg:w-32 h-auto mx-auto mb-6 lg:mb-8">
                            <div class="space-y-3 lg:space-y-4">
                                <div>
                                    <h3 class="text-lg lg:text-2xl font-semibold text-white">Ethan</h3>
                                    <p class="text-[#E3B04A] font-semibold text-xs lg:text-sm">Founder & Designer</p>
                                </div>
                                <div class="space-y-1 lg:space-y-2 text-white/70 text-xs">
                                    <div class="flex items-center justify-center gap-2">
                                        <iconify-icon icon="solar:map-point-linear" width="14" height="14" class="text-[#E3B04A]"></iconify-icon>
                                        <span>United States</span>
                                    </div>
                                </div>
                                <div class="border-t border-[#E3B04A]/20 pt-3 lg:pt-4 mt-3 lg:mt-4">
                                    <p class="text-white/60 text-xs mb-2 lg:mb-3 font-light uppercase tracking-wide text-[10px]">Expertise</p>
                                    <div class="space-y-1 text-white/70 text-xs">
                                        <p>Web Design & Dev</p>
                                        <p>App Design</p>
                                    </div>
                                </div>
                                <div class="border-t border-[#E3B04A]/20 pt-3 lg:pt-4 grid grid-cols-2 gap-3 lg:gap-4 text-center">
                                    <div>
                                        <p class="text-[#E3B04A] font-bold text-base lg:text-lg">15+</p>
                                        <p class="text-white/60 text-xs uppercase tracking-wide text-[10px] font-light">Sites Built</p>
                                    </div>
                                    <div>
                                        <p class="text-[#E3B04A] font-bold text-base lg:text-lg">2</p>
                                        <p class="text-white/60 text-xs uppercase tracking-wide text-[10px] font-light">Years In</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-1 flex flex-col gap-6 lg:gap-12 relative">
                    <div class="absolute -top-10 -left-6 w-12 h-12 border-t border-l border-[#E3B04A]/40 rounded-tl-2xl hidden lg:block"></div>
                    
                    <h2 class="text-3xl lg:text-5xl xl:text-7xl tracking-tight uppercase font-extralight text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C05C3B]/60" style="font-family: var(--font-display);">About Me</h2>
                    <div class="text-sm lg:text-lg leading-7 lg:leading-[2] text-white/60 flex flex-col gap-4 lg:gap-8 font-extralight">
                        <p>I build custom websites that actually work. No templates, no bloat, just clean code and smart design.</p>
                        
                        <p>Your site is your digital storefront. It should be fast, look amazing, and get people to take action. That's what I do.</p>

                        <div class="border-l-2 border-[#E3B04A]/40 pl-4 lg:pl-6 py-3 lg:py-4">
                            <p class="italic text-white/80 font-light text-sm lg:text-base">"Your website is your first impression. Make it count."</p>
                        </div>

                        <div class="pt-3 lg:pt-4">
                            <h3 class="text-base lg:text-lg font-semibold text-white mb-4 lg:mb-6 uppercase tracking-wide text-[14px]">Why Work With Me</h3>
                            <div class="space-y-3 lg:space-y-4">
                                <div class="flex gap-3 lg:gap-4 items-start">
                                    <iconify-icon icon="solar:check-circle-linear" width="20" height="20" class="text-[#E3B04A] flex-shrink-0 mt-1 lg:mt-0"></iconify-icon>
                                    <div>
                                        <p class="font-semibold text-white text-sm lg:text-base">I Actually Code</p>
                                        <p class="text-white/60 text-xs lg:text-sm">Hand-written, optimized code. Not templates.</p>
                                    </div>
                                </div>
                                <div class="flex gap-3 lg:gap-4 items-start">
                                    <iconify-icon icon="solar:check-circle-linear" width="20" height="20" class="text-[#E3B04A] flex-shrink-0 mt-1 lg:mt-0"></iconify-icon>
                                    <div>
                                        <p class="font-semibold text-white text-sm lg:text-base">You're In Control</p>
                                        <p class="text-white/60 text-xs lg:text-sm">Full source code ownership. No lock-in.</p>
                                    </div>
                                </div>
                                <div class="flex gap-3 lg:gap-4 items-start">
                                    <iconify-icon icon="solar:check-circle-linear" width="20" height="20" class="text-[#C05C3B] flex-shrink-0 mt-1 lg:mt-0"></iconify-icon>
                                    <div>
                                        <p class="font-semibold text-white text-sm lg:text-base">Real Support</p>
                                        <p class="text-white/60 text-xs lg:text-sm">30 days of help. Bugs fixed, questions answered.</p>
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
