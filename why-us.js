// Why Us section - Unique value proposition
function initWhyUs() {
    const whyUs = document.getElementById('why-us');
    whyUs.innerHTML = `
        <section class="py-40 bg-[#0C0A09]/80 px-6 md:px-12 lg:px-24 border-y border-[#E3B04A]/10 relative z-20 backdrop-blur-sm">
            <div class="max-w-5xl mx-auto flex flex-col items-center gap-16 fade-in-section">
                <div class="text-center flex flex-col items-center gap-6">
                    <h2 class="text-5xl md:text-6xl lg:text-7xl tracking-tight uppercase font-extralight text-transparent bg-clip-text bg-gradient-to-r from-[#E3B04A] via-white to-[#C05C3B]" style="font-family: var(--font-display);">Why We're Different</h2>
                    <p class="text-lg md:text-xl text-white/50 italic font-extralight leading-relaxed max-w-2xl">We build websites that work. Not just look pretty. Actually work.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    <!-- Card 1 -->
                    <div class="card-hover rounded-2xl p-8 bg-gradient-to-br from-[#E3B04A]/5 to-[#C05C3B]/5 border border-[#E3B04A]/20 hover:border-[#C05C3B]/40 transition-all duration-500">
                        <iconify-icon icon="solar:bolt-linear" width="32" height="32" class="text-[#E3B04A] mb-4"></iconify-icon>
                        <h3 class="text-xl font-semibold text-white mb-3">Fast as Hell</h3>
                        <p class="text-white/60 text-sm leading-relaxed">Pages load in a blink. We don't use bloated frameworks. Your customers don't wait around.</p>
                    </div>

                    <!-- Card 2 -->
                    <div class="card-hover rounded-2xl p-8 bg-gradient-to-br from-[#E3B04A]/5 to-[#C05C3B]/5 border border-[#E3B04A]/20 hover:border-[#C05C3B]/40 transition-all duration-500">
                        <iconify-icon icon="solar:eye-linear" width="32" height="32" class="text-[#E3B04A] mb-4"></iconify-icon>
                        <h3 class="text-xl font-semibold text-white mb-3">People Actually Find You</h3>
                        <p class="text-white/60 text-sm leading-relaxed">Built for Google from the start. Clean code, real SEO. Not some afterthought.</p>
                    </div>

                    <!-- Card 3 -->
                    <div class="card-hover rounded-2xl p-8 bg-gradient-to-br from-[#E3B04A]/5 to-[#C05C3B]/5 border border-[#E3B04A]/20 hover:border-[#C05C3B]/40 transition-all duration-500">
                        <iconify-icon icon="solar:smartphone-linear" width="32" height="32" class="text-[#E3B04A] mb-4"></iconify-icon>
                        <h3 class="text-xl font-semibold text-white mb-3">Works on Every Device</h3>
                        <p class="text-white/60 text-sm leading-relaxed">Mobile, tablet, desktop. We design for all of them. Your site looks perfect everywhere.</p>
                    </div>

                    <!-- Card 4 -->
                    <div class="card-hover rounded-2xl p-8 bg-gradient-to-br from-[#E3B04A]/5 to-[#C05C3B]/5 border border-[#E3B04A]/20 hover:border-[#C05C3B]/40 transition-all duration-500">
                        <iconify-icon icon="solar:palette-linear" width="32" height="32" class="text-[#C05C3B] mb-4"></iconify-icon>
                        <h3 class="text-xl font-semibold text-white mb-3">Actually Custom</h3>
                        <p class="text-white/60 text-sm leading-relaxed">Every site is unique. No copy-paste templates. Your brand deserves better.</p>
                    </div>

                    <!-- Card 5 -->
                    <div class="card-hover rounded-2xl p-8 bg-gradient-to-br from-[#E3B04A]/5 to-[#C05C3B]/5 border border-[#E3B04A]/20 hover:border-[#C05C3B]/40 transition-all duration-500">
                        <iconify-icon icon="solar:code-linear" width="32" height="32" class="text-[#C05C3B] mb-4"></iconify-icon>
                        <h3 class="text-xl font-semibold text-white mb-3">Real Code</h3>
                        <p class="text-white/60 text-sm leading-relaxed">Clean, simple, easy to understand. Any developer can pick it up and run with it.</p>
                    </div>

                    <!-- Card 6 -->
                    <div class="card-hover rounded-2xl p-8 bg-gradient-to-br from-[#E3B04A]/5 to-[#C05C3B]/5 border border-[#E3B04A]/20 hover:border-[#C05C3B]/40 transition-all duration-500">
                        <iconify-icon icon="solar:heart-linear" width="32" height="32" class="text-[#C05C3B] mb-4"></iconify-icon>
                        <h3 class="text-xl font-semibold text-white mb-3">We Stick Around</h3>
                        <p class="text-white/60 text-sm leading-relaxed">No ghosting after launch. We're here for questions, fixes, tweaks. That's the deal.</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWhyUs);
} else {
    initWhyUs();
}
