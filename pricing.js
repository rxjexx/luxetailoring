// Pricing section
function initPricing() {
    const pricing = document.getElementById('pricing');
    pricing.innerHTML = `
        <section id="pricing" class="py-40 bg-[#0C0A09]/80 px-6 md:px-12 lg:px-24 border-y border-[#E3B04A]/10 relative z-20 backdrop-blur-sm">
            <div class="max-w-5xl mx-auto flex flex-col items-center gap-16 fade-in-section">
                <div class="text-center flex flex-col items-center gap-6">
                    <h2 class="text-5xl md:text-6xl lg:text-7xl tracking-tight uppercase font-extralight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50" style="font-family: var(--font-display);">Build</h2>
                    <p class="text-lg text-white/50 italic font-extralight">Pick what you need. Pay once. Own it forever. No surprises.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                    <!-- Single Pricing Card -->
                    <div class="md:col-span-3 rounded-2xl p-8 md:p-12 bg-gradient-to-br from-[#E3B04A]/10 to-[#C05C3B]/5 border border-[#E3B04A]/40 hover:border-[#C05C3B]/60 hover:shadow-[0_0_60px_rgba(227,176,74,0.3)] transition-all duration-500 flex flex-col ring-2 ring-[#E3B04A]/50 relative pt-24">
                        
                        <div class="flex flex-col items-center mb-12 pb-8 border-b border-white/10 w-full">
                            <iconify-icon icon="solar:gift-linear" width="32" height="32" class="text-[#E3B04A] mb-6 md:mb-4 md:w-10 md:h-10"></iconify-icon>
                            <h3 class="text-3xl md:text-4xl font-semibold text-white tracking-tight uppercase text-center" style="font-family: var(--font-display);">Custom Website</h3>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 items-start w-full">
                            <!-- Pricing Section -->
                            <div class="flex flex-col items-center md:col-span-1">
                                <div class="mb-8 text-center">
                                    <p class="text-white/60 text-sm mb-4">Pricing depends on your project</p>
                                    <p class="text-white/50 text-xs italic">Let's talk about what you need</p>
                                </div>
                                <a href="contact.html" class="w-full py-3 md:py-4 rounded-xl bg-[#E3B04A] text-[#0C0A09] font-semibold hover:bg-[#C05C3B] transition-colors text-center text-xs uppercase tracking-widest">
                                    Contact
                                </a>
                            </div>

                            <!-- Features Section -->
                            <div class="md:col-span-2">
                                <h4 class="text-lg md:text-xl font-semibold text-white mb-6 uppercase tracking-wide text-center md:text-left">What's Possible</h4>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                    <div class="flex gap-3 items-start text-sm md:text-base">
                                        <iconify-icon icon="solar:check-circle-linear" width="20" height="20" class="text-[#E3B04A] flex-shrink-0 mt-1 md:w-6 md:h-6"></iconify-icon>
                                        <div>
                                            <p class="font-semibold text-white text-sm md:text-base">Custom Design</p>
                                            <p class="text-white/60 text-xs md:text-sm">Tailored to your brand, not a template</p>
                                        </div>
                                    </div>

                                    <div class="flex gap-3 items-start text-sm md:text-base">
                                        <iconify-icon icon="solar:check-circle-linear" width="20" height="20" class="text-[#E3B04A] flex-shrink-0 mt-1 md:w-6 md:h-6"></iconify-icon>
                                        <div>
                                            <p class="font-semibold text-white text-sm md:text-base">Hand-Coded</p>
                                            <p class="text-white/60 text-xs md:text-sm">Clean code, no bloat, lightning fast</p>
                                        </div>
                                    </div>

                                    <div class="flex gap-3 items-start text-sm md:text-base">
                                        <iconify-icon icon="solar:check-circle-linear" width="20" height="20" class="text-[#E3B04A] flex-shrink-0 mt-1 md:w-6 md:h-6"></iconify-icon>
                                        <div>
                                            <p class="font-semibold text-white text-sm md:text-base">Device Optimized</p>
                                            <p class="text-white/60 text-xs md:text-sm">Looks perfect on phones, tablets, desktop</p>
                                        </div>
                                    </div>

                                    <div class="flex gap-3 items-start text-sm md:text-base">
                                        <iconify-icon icon="solar:check-circle-linear" width="20" height="20" class="text-[#E3B04A] flex-shrink-0 mt-1 md:w-6 md:h-6"></iconify-icon>
                                        <div>
                                            <p class="font-semibold text-white text-sm md:text-base">SEO Ready</p>
                                            <p class="text-white/60 text-xs md:text-sm">Built for Google from day one</p>
                                        </div>
                                    </div>

                                    <div class="flex gap-3 items-start text-sm md:text-base">
                                        <iconify-icon icon="solar:check-circle-linear" width="20" height="20" class="text-[#E3B04A] flex-shrink-0 mt-1 md:w-6 md:h-6"></iconify-icon>
                                        <div>
                                            <p class="font-semibold text-white text-sm md:text-base">Contact Forms</p>
                                            <p class="text-white/60 text-xs md:text-sm">Get messages directly to your email</p>
                                        </div>
                                    </div>

                                    <div class="flex gap-3 items-start text-sm md:text-base">
                                        <iconify-icon icon="solar:check-circle-linear" width="20" height="20" class="text-[#E3B04A] flex-shrink-0 mt-1 md:w-6 md:h-6"></iconify-icon>
                                        <div>
                                            <p class="font-semibold text-white text-sm md:text-base">Full Source Code</p>
                                            <p class="text-white/60 text-xs md:text-sm">You own everything, no lock-in</p>
                                        </div>
                                    </div>

                                    <div class="flex gap-3 items-start text-sm md:text-base">
                                        <iconify-icon icon="solar:check-circle-linear" width="20" height="20" class="text-[#C05C3B] flex-shrink-0 mt-1 md:w-6 md:h-6"></iconify-icon>
                                        <div>
                                            <p class="font-semibold text-white text-sm md:text-base">30 Days of Support</p>
                                            <p class="text-white/60 text-xs md:text-sm">Bugs fixed, questions answered</p>
                                        </div>
                                    </div>

                                    <div class="flex gap-3 items-start text-sm md:text-base">
                                        <iconify-icon icon="solar:check-circle-linear" width="20" height="20" class="text-[#C05C3B] flex-shrink-0 mt-1 md:w-6 md:h-6"></iconify-icon>
                                        <div>
                                            <p class="font-semibold text-white text-sm md:text-base">Fast Turnaround</p>
                                            <p class="text-white/60 text-xs md:text-sm">Built and delivered in weeks, not months</p>
                                        </div>
                                    </div>

                                    <div class="flex gap-3 items-start text-sm md:text-base">
                                        <iconify-icon icon="solar:check-circle-linear" width="20" height="20" class="text-[#C05C3B] flex-shrink-0 mt-1 md:w-6 md:h-6"></iconify-icon>
                                        <div>
                                            <p class="font-semibold text-white text-sm md:text-base">Any Type of Site</p>
                                            <p class="text-white/60 text-xs md:text-sm">Portfolio, business, small e-commerce</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-gradient-to-r from-[#E3B04A]/10 to-[#C05C3B]/10 border border-[#E3B04A]/20 rounded-2xl p-8 w-full">
                    <div class="max-w-2xl mx-auto">
                        <h3 class="text-2xl font-semibold text-white mb-4">Custom Pricing</h3>
                        <p class="text-white/70 mb-3">Every project is unique. Your pricing depends on the scope, complexity, and features you need.</p>
                        <p class="text-white/60 text-sm mb-4">Let's chat about your vision and I'll give you a fair quote.</p>
                        <p class="text-white/60 text-sm">Questions? <a href="contact.html" class="text-[#E3B04A] hover:text-[#C05C3B] transition-colors font-semibold">Get in touch</a></p>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPricing);
} else {
    initPricing();
}
