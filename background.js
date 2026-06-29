// Background component - renders the animated background with luxury vibes
function initBackground() {
    const background = document.getElementById('background');
    background.innerHTML = `
        <div class="fixed inset-0 z-[-1] bg-[#0C0A09] pointer-events-none">
            <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(227,176,74,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(227,176,74,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)] top-[120px] pointer-events-none"></div>
            <!-- Luxury Ambient Orbs: Saffron, Terracotta, Emerald -->
            <div class="ambient-orb bg-[#E3B04A] w-[40vw] h-[40vw] top-[-15%] left-[5%] opacity-10"></div>
            <div class="ambient-orb bg-[#234232] w-[45vw] h-[45vw] top-[20%] left-[30%] opacity-[0.08]" style="animation-delay: -7s;"></div>
            <div class="ambient-orb bg-[#C05C3B] w-[50vw] h-[50vw] bottom-[-20%] right-[-10%] opacity-[0.07]" style="animation-delay: -12s;"></div>
        </div>
    `;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBackground);
} else {
    initBackground();
}
