// Contact form section
function initContact() {
    const contact = document.getElementById('contact');
    contact.innerHTML = `
        <section id="contact" class="py-40 bg-[#0C0A09]/80 px-6 md:px-12 lg:px-24 border-y border-[#E3B04A]/10 relative z-20 backdrop-blur-sm">
            <div class="max-w-2xl mx-auto flex flex-col items-center gap-16 fade-in-section">
                <div class="text-center flex flex-col items-center gap-6 w-full">
                    <h2 class="text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase font-extralight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50" style="font-family: var(--font-display);">Get In Touch</h2>
                    <p class="text-lg text-white/50 italic font-extralight">Tell me about your project</p>
                </div>

                <!-- Notification Toast -->
                <div id="toast-notification" class="fixed top-6 right-6 bg-[#E3B04A] text-[#0C0A09] px-6 py-4 rounded-lg font-semibold shadow-[0_0_30px_rgba(227,176,74,0.4)] opacity-0 transform translate-x-96 transition-all duration-500 pointer-events-none z-50">
                    ✓ Message sent! We'll get back to you within 24 hours.
                </div>

                <!-- Contact Form -->
                <div class="bg-white/[0.01] backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/[0.04] shadow-[0_30px_100px_-20px_rgba(0,0,0,1),inset_0_1px_1px_rgba(255,255,255,0.05)] w-full relative overflow-hidden group">
                    
                    <!-- Subtle Hover Lighting Effect -->
                    <div class="absolute inset-0 bg-gradient-to-br from-[#E3B04A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
                    
                    <form id="contact-form" class="flex flex-col gap-6 relative z-10" style="font-family: var(--font-sans);">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="flex flex-col gap-3">
                                <label class="text-[10px] uppercase tracking-[0.2em] text-[#E3B04A]/60 pl-2 font-light">Full Name</label>
                                <input type="text" name="name" placeholder="Your name" required class="w-full bg-black/60 border border-white/10 rounded-xl p-4 text-white/80 text-sm focus:outline-none focus:ring-1 focus:ring-[#E3B04A]/50 focus:border-[#E3B04A]/50 transition-all duration-300 font-light hover:border-white/20 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
                            </div>
                            <div class="flex flex-col gap-3">
                                <label class="text-[10px] uppercase tracking-[0.2em] text-[#E3B04A]/60 pl-2 font-light">Email</label>
                                <input type="email" name="email" placeholder="your@email.com" required class="w-full bg-black/60 border border-white/10 rounded-xl p-4 text-white/80 text-sm focus:outline-none focus:ring-1 focus:ring-[#E3B04A]/50 focus:border-[#E3B04A]/50 transition-all duration-300 font-light hover:border-white/20 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
                            </div>
                        </div>
                        <div class="flex flex-col gap-3">
                            <label class="text-[10px] uppercase tracking-[0.2em] text-[#E3B04A]/60 pl-2 font-light">Business Name</label>
                            <input type="text" name="business" placeholder="Your business" class="w-full bg-black/60 border border-white/10 rounded-xl p-4 text-white/80 text-sm focus:outline-none focus:ring-1 focus:ring-[#E3B04A]/50 focus:border-[#E3B04A]/50 transition-all duration-300 font-light hover:border-white/20 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
                        </div>
                        <div class="flex flex-col gap-3">
                            <label class="text-[10px] uppercase tracking-[0.2em] text-[#E3B04A]/60 pl-2 font-light">Tell Us About Your Project</label>
                            <textarea name="message" placeholder="What are your goals? What challenges are you facing?" rows="5" required class="w-full bg-black/60 border border-white/10 rounded-xl p-4 text-white/80 text-sm focus:outline-none focus:ring-1 focus:ring-[#E3B04A]/50 focus:border-[#E3B04A]/50 transition-all duration-300 font-light hover:border-white/20 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] resize-none"></textarea>
                        </div>
                        <button type="submit" class="w-full bg-[#E3B04A] text-[#0C0A09] py-4 rounded-xl text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#C05C3B] hover:shadow-[0_0_30px_rgba(192,92,59,0.3)] transition-all duration-500 transform active:scale-[0.98]">
                            Send Message
                        </button>
                    </form>

                    <p class="text-white/50 text-xs text-center mt-6 relative z-10">I'll get back to you within 24 hours, guaranteed.</p>
                </div>

                <!-- Contact Info -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    <div class="rounded-xl p-6 bg-[#E3B04A]/5 border border-[#E3B04A]/20">
                        <h3 class="font-semibold text-white mb-3 flex items-center gap-2">
                            <iconify-icon icon="solar:phone-linear" width="20" height="20" class="text-[#E3B04A]"></iconify-icon>
                            Phone
                        </h3>
                        <a href="tel:+17656156371" class="text-white/70 hover:text-[#E3B04A] transition-colors">(765) 615-6371</a>
                    </div>
                    <div class="rounded-xl p-6 bg-[#C05C3B]/5 border border-[#C05C3B]/20">
                        <h3 class="font-semibold text-white mb-3 flex items-center gap-2">
                            <iconify-icon icon="solar:mail-linear" width="20" height="20" class="text-[#C05C3B]"></iconify-icon>
                            Email
                        </h3>
                        <a href="mailto:luxetailoringadmin@gmail.com" class="text-white/70 hover:text-[#C05C3B] transition-colors">luxetailoringadmin@gmail.com</a>
                    </div>
                </div>
            </div>
        </section>
    `;

    // Handle form submission with Formspree
    setTimeout(() => {
        const form = document.getElementById('contact-form');
        if (form) {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();

                const formData = new FormData(form);

                try {
                    const response = await fetch('https://formspree.io/f/mpqglbdw', {
                        method: 'POST',
                        body: formData,
                        headers: {
                            'Accept': 'application/json'
                        }
                    });

                    if (response.ok) {
                        // Show success notification
                        showNotification();
                        // Reset form
                        form.reset();
                    } else {
                        alert('Something went wrong. Please try again.');
                    }
                } catch (error) {
                    console.error('Error:', error);
                    alert('Error sending message. Please try again.');
                }
            });
        }
    }, 100);
}

// Show notification toast
function showNotification() {
    const toast = document.getElementById('toast-notification');
    if (toast) {
        toast.classList.remove('opacity-0', 'translate-x-96');
        toast.classList.add('opacity-100', 'translate-x-0');

        // Fade out after 4 seconds
        setTimeout(() => {
            toast.classList.remove('opacity-100', 'translate-x-0');
            toast.classList.add('opacity-0', 'translate-x-96');
        }, 4000);
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContact);
} else {
    initContact();
}
