// Terms of Service section
function initTerms() {
    const terms = document.getElementById('terms');
    terms.innerHTML = `
        <section id="terms" class="py-40 px-6 md:px-12 lg:px-24 max-w-[90rem] mx-auto relative z-20">
            <div class="flex flex-col gap-16 fade-in-section">
                <div class="text-center flex flex-col items-center gap-6">
                    <h1 class="text-5xl md:text-6xl lg:text-7xl tracking-tight uppercase font-extralight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50" style="font-family: var(--font-display);">Terms</h1>
                    <p class="text-lg md:text-xl text-white/50 italic font-extralight leading-relaxed max-w-2xl">Here's how we work together.</p>
                </div>

                <div class="max-w-4xl mx-auto space-y-10">
                    <div>
                        <h2 class="text-2xl font-semibold text-white mb-3">You Hire Us. We Build It. You Own It.</h2>
                        <p class="text-base md:text-lg leading-[2] text-white/60 flex flex-col gap-8 font-extralight">Simple transaction. You pay us. We deliver your site. The code is yours. Done.</p>
                    </div>

                    <div>
                        <h2 class="text-2xl font-semibold text-white mb-3">Payment</h2>
                        <p class="text-base md:text-lg leading-[2] text-white/60 flex flex-col gap-8 font-extralight">Payment is due upon delivery. We take Apple Pay and Cash App. No credit cards for now, sorry. Price is on the card. No hidden fees.</p>
                    </div>

                    <div>
                        <h2 class="text-2xl font-semibold text-white mb-3">You Own Everything</h2>
                        <p class="text-base md:text-lg leading-[2] text-white/60 flex flex-col gap-8 font-extralight">The code. The design. The site. All yours. Host it anywhere. Change it. Sell it. It's completely yours to do whatever you want with.</p>
                    </div>

                    <div>
                        <h2 class="text-2xl font-semibold text-white mb-3">No Refunds</h2>
                        <p class="text-base md:text-lg leading-[2] text-white/60 flex flex-col gap-8 font-extralight">Once your site is delivered and you have the code, refunds are not supported. We build what we promise. If something's broken, we fix it. But money back isn't an option.</p>
                    </div>

                    <div>
                        <h2 class="text-2xl font-semibold text-white mb-3">Support After Launch</h2>
                        <p class="text-base md:text-lg leading-[2] text-white/60 flex flex-col gap-8 font-extralight">Basic plans get 30 days of support. Advanced get 3 months. Pro get 6 months. During this time we fix bugs and answer questions. After that, the site is yours to manage.</p>
                    </div>

                    <div>
                        <h2 class="text-2xl font-semibold text-white mb-3">Hosting</h2>
                        <p class="text-base md:text-lg leading-[2] text-white/60 flex flex-col gap-8 font-extralight">We don't host your site. You find a host. We'll help you set it up, but you own the hosting account and manage it however you want.</p>
                    </div>

                    <div>
                        <h2 class="text-2xl font-semibold text-white mb-3">We're Not Perfect</h2>
                        <p class="text-base md:text-lg leading-[2] text-white/60 flex flex-col gap-8 font-extralight">We build solid code. But we can't promise it'll work forever or with every future technology. We do our best. Tech changes. We adapt.</p>
                    </div>

                    <div class="bg-gradient-to-br from-[#E3B04A]/5 to-[#C05C3B]/5 border border-[#E3B04A]/20 rounded-2xl p-8 mt-12">
                        <p class="text-white/60">Questions? <a href="contact.html" class="text-[#E3B04A] hover:text-[#C05C3B] transition-colors">Reach out</a></p>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTerms);
} else {
    initTerms();
}
