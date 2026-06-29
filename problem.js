// Problem section - "The Problem" section
function initProblem() {
    const problem = document.getElementById('problem');
    problem.innerHTML = `
        <section class="py-40 px-6 md:px-12 lg:px-24 max-w-[90rem] mx-auto relative z-20">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center fade-in-section">
                <div class="lg:col-span-1 flex flex-col gap-12 relative">
                    <div class="absolute -top-10 -left-6 w-12 h-12 border-t border-l border-[#E3B04A]/40 rounded-tl-2xl"></div>
                    
                    <h2 class="text-4xl md:text-5xl lg:text-7xl tracking-tight uppercase font-extralight text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C05C3B]/60" style="font-family: var(--font-display);">The Real Problem</h2>
                    <div class="text-base md:text-lg leading-[2] text-white/60 flex flex-col gap-8 font-extralight">
                        <p>Most websites look like they came from a template. Because they did. And they're costing you customers before they even click.</p>
                        
                        <div class="space-y-4">
                            <div class="flex gap-4 items-start">
                                <iconify-icon icon="solar:close-circle-linear" width="24" height="24" class="text-[#C05C3B] flex-shrink-0 mt-1"></iconify-icon>
                                <p>Generic templates everyone's seen before</p>
                            </div>
                            <div class="flex gap-4 items-start">
                                <iconify-icon icon="solar:close-circle-linear" width="24" height="24" class="text-[#C05C3B] flex-shrink-0 mt-1"></iconify-icon>
                                <p>Sites that take forever to load</p>
                            </div>
                            <div class="flex gap-4 items-start">
                                <iconify-icon icon="solar:close-circle-linear" width="24" height="24" class="text-[#C05C3B] flex-shrink-0 mt-1"></iconify-icon>
                                <p>Nobody finds you on Google</p>
                            </div>
                            <div class="flex gap-4 items-start">
                                <iconify-icon icon="solar:close-circle-linear" width="24" height="24" class="text-[#C05C3B] flex-shrink-0 mt-1"></iconify-icon>
                                <p>Agencies ghost you after launch</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-1 relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-[#E3B04A]/10 to-[#C05C3B]/10 border border-[#E3B04A]/20 p-2 shadow-[0_0_40px_rgba(227,176,74,0.2)]">
                    <div class="relative w-full h-full rounded-2xl overflow-hidden border border-[#E3B04A]/20 bg-black/40 flex items-center justify-center">
                        <div class="text-center">
                            <iconify-icon icon="solar:sad-linear" width="64" height="64" class="text-[#C05C3B] mx-auto mb-4 opacity-50"></iconify-icon>
                            <p class="text-white/40 text-sm">Your website is holding your business back</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProblem);
} else {
    initProblem();
}
