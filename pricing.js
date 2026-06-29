// Pricing section
function initPricing() {
    const pricing = document.getElementById('pricing');
    pricing.innerHTML = `
        <section id="pricing" class="py-40 bg-[#0C0A09]/80 px-6 md:px-12 lg:px-24 border-y border-[#E3B04A]/10 relative z-20 backdrop-blur-sm">
            <div class="max-w-5xl mx-auto flex flex-col items-center gap-16 fade-in-section">
                <div class="text-center flex flex-col items-center gap-6">
                    <h2 class="text-5xl md:text-6xl lg:text-7xl tracking-tight uppercase font-extralight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50" style="font-family: var(--font-display);">Pricing</h2>
                    <p class="text-lg text-white/50 italic font-extralight">Pick what you need. Pay once. Own it forever. No surprises.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                    <!-- Basic -->
                    <div class="rounded-2xl p-8 bg-gradient-to-br from-[#E3B04A]/5 to-transparent border border-[#E3B04A]/20 hover:border-[#E3B04A]/60 hover:shadow-[0_0_40px_rgba(227,176,74,0.2)] transition-all duration-500 flex flex-col">
                        <h3 class="text-2xl font-semibold text-white mb-2">Basic</h3>
                        <p class="text-white/60 text-sm mb-6">5 pages. Clean site. Gets the job done.</p>
                        <div class="mb-8">
                            <div class="text-5xl font-bold text-[#E3B04A]">$799</div>
                            <p class="text-white/50 text-sm mt-2">One-time</p>
                        </div>
                        <ul class="space-y-4 mb-8 flex-grow text-white/70 text-sm">
                            <li class="flex gap-3 items-start">
                                <iconify-icon icon="solar:check-circle-linear" width="20" height="20" class="text-[#E3B04A] flex-shrink-0"></iconify-icon>
                                <span>5 custom pages</span>
                            </li>
                            <li class="flex gap-3 items-start">
                                <iconify-icon icon="solar:check-circle-linear" width="20" height="20" class="text-[#E3B04A] flex-shrink-0"></iconify-icon>
                                <span>Looks good on phones</span>
                            </li>
                            <li class="flex gap-3 items-start">
                                <iconify-icon icon="solar:check-circle-linear" width="20" height="20" class="text-[#E3B04A] flex-shrink-0"></iconify-icon>
                                <span>Google friendly</span>
                            </li>
                            <li class="flex gap-3 items-start">
                                <iconify-icon icon="solar:check-circle-linear" width="20" height="20" class="text-[#E3B04A] flex-shrink-0"></iconify-icon>
                                <span>Contact form</span>
                            </li>
                            <li class="flex gap-3 items-start">
                                <iconify-icon icon="solar:check-circle-linear" width="20" height="20" class="text-[#E3B04A] flex-shrink-0"></iconify-icon>
                                <span>30 days of help</span>
                            </li>
                        </ul>
                        <a href="contact.html" class="w-full py-3 rounded-lg border border-[#E3B04A] text-[#E3B04A] font-semibold hover:bg-[#E3B04A]/10 transition-colors text-center">
                            Get Started
                        </a>
                    </div>

                    <!-- Advanced (Popular) -->
                    <div class="rounded-2xl p-8 bg-gradient-to-br from-[#E3B04A]/10 to-[#C05C3B]/5 border border-[#E3B04A]/40 hover:border-[#C05C3B]/60 hover:shadow-[0_0_60px_rgba(227,176,74,0.3)] transition-all duration-500 flex flex-col ring-2 ring-[#E3B04A]/50">
                        <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#C05C3B] text-white px-4 py-1 rounded-full text-xs font-semibold">MOST POPULAR</div>
                        <h3 class="text-2xl font-semibold text-white mb-2">Advanced</h3>
                        <p class="text-white/60 text-sm mb-6">As many pages as you need. Better features.</p>
                        <div class="mb-8">
                            <div class="text-5xl font-bold text-[#E3B04A]">$1,999</div>
                            <p class="text-white/50 text-sm mt-2">One-time</p>
                        </div>
                        <ul class="space-y-4 mb-8 flex-grow text-white/70 text-sm">
                            <li class="flex gap-3 items-start">
                                <iconify-icon icon="solar:check-circle-linear" width="20" height="20" class="text-[#C05C3B] flex-shrink-0"></iconify-icon>
                                <span>Unlimited pages</span>
                            </li>
                            <li class="flex gap-3 items-start">
                                <iconify-icon icon="solar:check-circle-linear" width="20" height="20" class="text-[#C05C3B] flex-shrink-0"></iconify-icon>
                                <span>Better design</span>
                            </li>
                            <li class="flex gap-3 items-start">
                                <iconify-icon icon="solar:check-circle-linear" width="20" height="20" class="text-[#C05C3B] flex-shrink-0"></iconify-icon>
                                <span>Full SEO setup</span>
                            </li>
                            <li class="flex gap-3 items-start">
                                <iconify-icon icon="solar:check-circle-linear" width="20" height="20" class="text-[#C05C3B] flex-shrink-0"></iconify-icon>
                                <span>Simple e-commerce</span>
                            </li>
                            <li class="flex gap-3 items-start">
                                <iconify-icon icon="solar:check-circle-linear" width="20" height="20" class="text-[#C05C3B] flex-shrink-0"></iconify-icon>
                                <span>3 months of help</span>
                            </li>
                        </ul>
                        <a href="contact.html" class="w-full py-3 rounded-lg bg-[#C05C3B] text-white font-semibold hover:bg-[#C05C3B]/80 transition-colors text-center">
                            Let's Talk
                        </a>
                    </div>

                    <!-- Pro -->
                    <div class="rounded-2xl p-8 bg-gradient-to-br from-[#E3B04A]/5 to-transparent border border-[#E3B04A]/20 hover:border-[#E3B04A]/60 hover:shadow-[0_0_40px_rgba(227,176,74,0.2)] transition-all duration-500 flex flex-col">
                        <h3 class="text-2xl font-semibold text-white mb-2">Pro</h3>
                        <p class="text-white/60 text-sm mb-6">Full custom builds. Everything included.</p>
                        <div class="mb-8">
                            <div class="text-5xl font-bold text-[#E3B04A]">$3,999</div>
                            <p class="text-white/50 text-sm mt-2">One-time</p>
                        </div>
                        <ul class="space-y-4 mb-8 flex-grow text-white/70 text-sm">
                            <li class="flex gap-3 items-start">
                                <iconify-icon icon="solar:check-circle-linear" width="20" height="20" class="text-[#E3B04A] flex-shrink-0"></iconify-icon>
                                <span>Unlimited everything</span>
                            </li>
                            <li class="flex gap-3 items-start">
                                <iconify-icon icon="solar:check-circle-linear" width="20" height="20" class="text-[#E3B04A] flex-shrink-0"></iconify-icon>
                                <span>Real e-commerce</span>
                            </li>
                            <li class="flex gap-3 items-start">
                                <iconify-icon icon="solar:check-circle-linear" width="20" height="20" class="text-[#E3B04A] flex-shrink-0"></iconify-icon>
                                <span>Payment processing</span>
                            </li>
                            <li class="flex gap-3 items-start">
                                <iconify-icon icon="solar:check-circle-linear" width="20" height="20" class="text-[#E3B04A] flex-shrink-0"></iconify-icon>
                                <span>Inventory tracking</span>
                            </li>
                            <li class="flex gap-3 items-start">
                                <iconify-icon icon="solar:check-circle-linear" width="20" height="20" class="text-[#E3B04A] flex-shrink-0"></iconify-icon>
                                <span>6 months of help</span>
                            </li>
                        </ul>
                        <a href="contact.html" class="w-full py-3 rounded-lg border border-[#E3B04A] text-[#E3B04A] font-semibold hover:bg-[#E3B04A]/10 transition-colors text-center">
                            Get Quote
                        </a>
                    </div>
                </div>

                <div class="bg-gradient-to-r from-[#E3B04A]/10 to-[#C05C3B]/10 border border-[#E3B04A]/20 rounded-2xl p-8 w-full">
                    <div class="max-w-2xl mx-auto">
                        <h3 class="text-2xl font-semibold text-white mb-4">What You Get</h3>
                        <p class="text-white/70 mb-3">Full source code. The site is yours. You handle hosting directly - pick any provider you want.</p>
                        <p class="text-white/60 text-sm mb-4">No monthly fees to us. No lock-in. You own everything completely.</p>
                        <p class="text-white/60 text-sm">Questions? <a href="contact.html" class="text-[#E3B04A] hover:text-[#C05C3B] transition-colors font-semibold">Talk to us</a></p>
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
