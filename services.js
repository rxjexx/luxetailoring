// Services section
function initServices() {
    const services = document.getElementById('services');
    services.innerHTML = `
        <section id="services" class="py-40 px-6 md:px-12 lg:px-24 max-w-[90rem] mx-auto relative z-20">
            <div class="flex flex-col items-center gap-32 fade-in-section">
                <!-- Header -->
                <div class="text-center flex flex-col items-center gap-6 w-full">
                    <h2 class="text-5xl md:text-6xl lg:text-7xl tracking-tight uppercase font-extralight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50" style="font-family: var(--font-display);">Custom Website Design</h2>
                    <p class="text-lg md:text-xl text-white/60 italic font-extralight leading-relaxed max-w-2xl">We build from scratch. Every project gets custom code, custom design, and the right tech stack for what you actually need. Not VibeCode. Not bloat. Just websites that look amazing.</p>
                </div>

                <!-- Service Types Grid -->
                <div class="w-full">
                    <h3 class="text-2xl md:text-3xl font-semibold text-white mb-10 uppercase tracking-wide" style="font-family: var(--font-sans);">What We Build</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <!-- E-Commerce -->
                        <div class="card-hover rounded-xl p-6 bg-gradient-to-br from-[#E3B04A]/5 to-transparent border border-[#E3B04A]/30 hover:border-[#E3B04A]/60 transition-all duration-500 group">
                            <div class="h-10 w-10 rounded-lg bg-[#E3B04A]/10 flex items-center justify-center mb-4 group-hover:bg-[#E3B04A]/20 transition-all">
                                <iconify-icon icon="solar:cart-3-linear" width="20" height="20" class="text-[#E3B04A]"></iconify-icon>
                            </div>
                            <h4 class="text-base font-semibold text-white">E-Commerce</h4>
                            <p class="text-white/60 text-xs leading-relaxed mt-2">Stores that actually sell stuff. Fast checkouts, secure payment processing, inventory that works.</p>
                        </div>

                        <!-- Business Sites -->
                        <div class="card-hover rounded-xl p-6 bg-gradient-to-br from-[#E3B04A]/5 to-transparent border border-[#E3B04A]/30 hover:border-[#E3B04A]/60 transition-all duration-500 group">
                            <div class="h-10 w-10 rounded-lg bg-[#E3B04A]/10 flex items-center justify-center mb-4 group-hover:bg-[#E3B04A]/20 transition-all">
                                <iconify-icon icon="solar:case-linear" width="20" height="20" class="text-[#E3B04A]"></iconify-icon>
                            </div>
                            <h4 class="text-base font-semibold text-white">Business Sites</h4>
                            <p class="text-white/60 text-xs leading-relaxed mt-2">Real company websites. Show who you are, what you do. Get people to call or email you.</p>
                        </div>

                        <!-- Portfolio -->
                        <div class="card-hover rounded-xl p-6 bg-gradient-to-br from-[#E3B04A]/5 to-transparent border border-[#E3B04A]/30 hover:border-[#E3B04A]/60 transition-all duration-500 group">
                            <div class="h-10 w-10 rounded-lg bg-[#E3B04A]/10 flex items-center justify-center mb-4 group-hover:bg-[#E3B04A]/20 transition-all">
                                <iconify-icon icon="solar:gallery-wide-linear" width="20" height="20" class="text-[#E3B04A]"></iconify-icon>
                            </div>
                            <h4 class="text-base font-semibold text-white">Portfolio Sites</h4>
                            <p class="text-white/60 text-xs leading-relaxed mt-2">Show off your work. Make people go "wow." Get hired because your site looks good.</p>
                        </div>
                    </div>
                </div>

                <!-- What's Included -->
                <div class="w-full mt-16 bg-gradient-to-br from-[#E3B04A]/5 to-[#C05C3B]/5 border border-[#E3B04A]/20 rounded-2xl p-8 md:p-12">
                    <h3 class="text-2xl md:text-3xl font-semibold text-white mb-8 uppercase tracking-wide" style="font-family: var(--font-sans);">What's Included</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="flex gap-4">
                            <iconify-icon icon="solar:check-circle-linear" width="24" height="24" class="text-[#E3B04A] flex-shrink-0 mt-1"></iconify-icon>
                            <div>
                                <p class="font-semibold text-white mb-1">Actually Custom</p>
                                <p class="text-white/70 text-sm">Built for your brand. Not a theme with different colors.</p>
                            </div>
                        </div>

                        <div class="flex gap-4">
                            <iconify-icon icon="solar:check-circle-linear" width="24" height="24" class="text-[#E3B04A] flex-shrink-0 mt-1"></iconify-icon>
                            <div>
                                <p class="font-semibold text-white mb-1">Hand-Coded</p>
                                <p class="text-white/70 text-sm">Clean code. Fast load times. No bloated frameworks.</p>
                            </div>
                        </div>

                        <div class="flex gap-4">
                            <iconify-icon icon="solar:check-circle-linear" width="24" height="24" class="text-[#E3B04A] flex-shrink-0 mt-1"></iconify-icon>
                            <div>
                                <p class="font-semibold text-white mb-1">Works on Every Device</p>
                                <p class="text-white/70 text-sm">Phone, tablet, desktop. Looks good on all of it.</p>
                            </div>
                        </div>

                        <div class="flex gap-4">
                            <iconify-icon icon="solar:check-circle-linear" width="24" height="24" class="text-[#E3B04A] flex-shrink-0 mt-1"></iconify-icon>
                            <div>
                                <p class="font-semibold text-white mb-1">Stupid Fast</p>
                                <p class="text-white/70 text-sm">No waiting around. Pages load instantly.</p>
                            </div>
                        </div>

                        <div class="flex gap-4">
                            <iconify-icon icon="solar:check-circle-linear" width="24" height="24" class="text-[#C05C3B] flex-shrink-0 mt-1"></iconify-icon>
                            <div>
                                <p class="font-semibold text-white mb-1">Google Loves It</p>
                                <p class="text-white/70 text-sm">Built for search engines. People actually find you.</p>
                            </div>
                        </div>

                        <div class="flex gap-4">
                            <iconify-icon icon="solar:check-circle-linear" width="24" height="24" class="text-[#C05C3B] flex-shrink-0 mt-1"></iconify-icon>
                            <div>
                                <p class="font-semibold text-white mb-1">We Don't Ghost You</p>
                                <p class="text-white/70 text-sm">Bugs? Questions? We're here to help. For real.</p>
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
    document.addEventListener('DOMContentLoaded', initServices);
} else {
    initServices();
}
