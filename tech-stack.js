// Technical Stack section
function initTechStack() {
    const techStack = document.getElementById('tech-stack');
    techStack.innerHTML = `
        <section class="py-40 bg-[#0C0A09]/80 px-6 md:px-12 lg:px-24 border-y border-[#E3B04A]/10 relative z-20 backdrop-blur-sm">
            <div class="max-w-5xl mx-auto flex flex-col items-center gap-16 fade-in-section">
                <div class="text-center flex flex-col items-center gap-6">
                    <h2 class="text-5xl md:text-6xl lg:text-7xl tracking-tight uppercase font-extralight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50" style="font-family: var(--font-display);">How We Build</h2>
                    <p class="text-lg md:text-xl text-white/50 italic font-extralight leading-relaxed max-w-2xl">We stick with what works. Clean code, no bloat, just solid websites.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                    <!-- HTML -->
                    <div class="rounded-2xl p-8 bg-gradient-to-br from-[#E3B04A]/10 to-transparent border border-[#E3B04A]/30 text-center hover:border-[#E3B04A]/60 transition-all duration-500">
                        <div class="text-5xl font-bold bg-gradient-to-r from-[#E3B04A] to-[#E3B04A]/50 bg-clip-text text-transparent mb-3">HTML</div>
                        <p class="text-white/70 text-sm">The foundation. Done right.</p>
                    </div>

                    <!-- CSS -->
                    <div class="rounded-2xl p-8 bg-gradient-to-br from-[#E3B04A]/10 to-transparent border border-[#E3B04A]/30 text-center hover:border-[#E3B04A]/60 transition-all duration-500">
                        <div class="text-5xl font-bold bg-gradient-to-r from-[#E3B04A] to-[#E3B04A]/50 bg-clip-text text-transparent mb-3">CSS</div>
                        <p class="text-white/70 text-sm">Layouts that work everywhere.</p>
                    </div>

                    <!-- JavaScript -->
                    <div class="rounded-2xl p-8 bg-gradient-to-br from-[#E3B04A]/10 to-transparent border border-[#E3B04A]/30 text-center hover:border-[#E3B04A]/60 transition-all duration-500">
                        <div class="text-5xl font-bold bg-gradient-to-r from-[#E3B04A] to-[#E3B04A]/50 bg-clip-text text-transparent mb-3">JS</div>
                        <p class="text-white/70 text-sm">Pure, clean, and fast.</p>
                    </div>

                    <!-- Responsive -->
                    <div class="rounded-2xl p-8 bg-gradient-to-br from-[#E3B04A]/10 to-transparent border border-[#E3B04A]/30 text-center hover:border-[#E3B04A]/60 transition-all duration-500">
                        <div class="text-5xl font-bold bg-gradient-to-r from-[#C05C3B] to-[#C05C3B]/50 bg-clip-text text-transparent mb-3">RWD</div>
                        <p class="text-white/70 text-sm">Looks good on all screens.</p>
                    </div>
                </div>

                <!-- Why This Stack -->
                <div class="bg-gradient-to-br from-[#E3B04A]/5 to-[#C05C3B]/5 border border-[#E3B04A]/20 rounded-2xl p-8 md:p-12 w-full">
                    <h3 class="text-2xl font-semibold text-white mb-6" style="font-family: var(--font-sans);">Why This Works</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/70">
                        <div class="flex gap-4">
                            <iconify-icon icon="solar:check-circle-linear" width="24" height="24" class="text-[#E3B04A] flex-shrink-0"></iconify-icon>
                            <div>
                                <p class="font-semibold text-white mb-1">Actually Fast</p>
                                <p class="text-sm">No unnecessary code. Pages load instantly.</p>
                            </div>
                        </div>
                        <div class="flex gap-4">
                            <iconify-icon icon="solar:check-circle-linear" width="24" height="24" class="text-[#E3B04A] flex-shrink-0"></iconify-icon>
                            <div>
                                <p class="font-semibold text-white mb-1">Google Gets It</p>
                                <p class="text-sm">Search engines like clean code.</p>
                            </div>
                        </div>
                        <div class="flex gap-4">
                            <iconify-icon icon="solar:check-circle-linear" width="24" height="24" class="text-[#C05C3B] flex-shrink-0"></iconify-icon>
                            <div>
                                <p class="font-semibold text-white mb-1">It Lasts</p>
                                <p class="text-sm">Solid fundamentals don't get outdated.</p>
                            </div>
                        </div>
                        <div class="flex gap-4">
                            <iconify-icon icon="solar:check-circle-linear" width="24" height="24" class="text-[#C05C3B] flex-shrink-0"></iconify-icon>
                            <div>
                                <p class="font-semibold text-white mb-1">Easy to Update</p>
                                <p class="text-sm">Simple enough for any developer to improve.</p>
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
    document.addEventListener('DOMContentLoaded', initTechStack);
} else {
    initTechStack();
}
