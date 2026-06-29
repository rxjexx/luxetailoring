// Process section - How we work
function initProcess() {
    const process = document.getElementById('process');
    process.innerHTML = `
        <section class="py-40 px-6 md:px-12 lg:px-24 max-w-[90rem] mx-auto relative z-20">
            <div class="flex flex-col items-center gap-16 fade-in-section">
                <div class="text-center flex flex-col items-center gap-6">
                    <h2 class="text-5xl md:text-6xl lg:text-7xl tracking-tight uppercase font-extralight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50" style="font-family: var(--font-display);">How We Work</h2>
                    <p class="text-lg md:text-xl text-white/50 italic font-extralight leading-relaxed max-w-2xl">Simple steps from first call to your site going live.</p>
                </div>

                <div class="w-full max-w-4xl">
                    <!-- Step 1 -->
                    <div class="flex gap-8 mb-12">
                        <div class="flex flex-col items-center">
                            <div class="w-12 h-12 rounded-full bg-[#E3B04A] text-[#0C0A09] flex items-center justify-center font-semibold mb-4">1</div>
                            <div class="w-1 h-24 bg-gradient-to-b from-[#E3B04A] to-[#C05C3B]/30"></div>
                        </div>
                        <div class="pb-12">
                            <h3 class="text-2xl font-semibold text-white mb-3">We Talk</h3>
                            <p class="text-white/60 leading-relaxed">You tell us what you need. We ask questions. No BS. We figure out if we're a good fit.</p>
                        </div>
                    </div>

                    <!-- Step 2 -->
                    <div class="flex gap-8 mb-12">
                        <div class="flex flex-col items-center">
                            <div class="w-12 h-12 rounded-full bg-[#E3B04A] text-[#0C0A09] flex items-center justify-center font-semibold mb-4">2</div>
                            <div class="w-1 h-24 bg-gradient-to-b from-[#E3B04A] to-[#C05C3B]/30"></div>
                        </div>
                        <div class="pb-12">
                            <h3 class="text-2xl font-semibold text-white mb-3">We Design</h3>
                            <p class="text-white/60 leading-relaxed">Quick sketches first. We show you how it'll look. We make sure you're happy before we code.</p>
                        </div>
                    </div>

                    <!-- Step 3 -->
                    <div class="flex gap-8 mb-12">
                        <div class="flex flex-col items-center">
                            <div class="w-12 h-12 rounded-full bg-[#E3B04A] text-[#0C0A09] flex items-center justify-center font-semibold mb-4">3</div>
                            <div class="w-1 h-24 bg-gradient-to-b from-[#E3B04A] to-[#C05C3B]/30"></div>
                        </div>
                        <div class="pb-12">
                            <h3 class="text-2xl font-semibold text-white mb-3">We Build</h3>
                            <p class="text-white/60 leading-relaxed">Hand-coded from scratch. Fast. Clean. Built so Google actually likes it. We send updates along the way.</p>
                        </div>
                    </div>

                    <!-- Step 4 -->
                    <div class="flex gap-8 mb-12">
                        <div class="flex flex-col items-center">
                            <div class="w-12 h-12 rounded-full bg-[#E3B04A] text-[#0C0A09] flex items-center justify-center font-semibold mb-4">4</div>
                            <div class="w-1 h-24 bg-gradient-to-b from-[#E3B04A] to-[#C05C3B]/30"></div>
                        </div>
                        <div class="pb-12">
                            <h3 class="text-2xl font-semibold text-white mb-3">We Test</h3>
                            <p class="text-white/60 leading-relaxed">Everything works. Phones, tablets, computers. Links work. Forms work. Speed is good. Then we go live.</p>
                        </div>
                    </div>

                    <!-- Step 5 -->
                    <div class="flex gap-8">
                        <div class="flex flex-col items-center">
                            <div class="w-12 h-12 rounded-full bg-[#C05C3B] text-[#0C0A09] flex items-center justify-center font-semibold">5</div>
                        </div>
                        <div>
                            <h3 class="text-2xl font-semibold text-white mb-3">You Get Everything</h3>
                            <p class="text-white/60 leading-relaxed">Full source code. It's yours. You can hire someone else to maintain it, modify it, whatever. We don't lock you in.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProcess);
} else {
    initProcess();
}
