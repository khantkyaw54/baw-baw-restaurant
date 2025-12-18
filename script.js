const hamburger = document.getElementById("hamburger");
const gnav = document.getElementById("gnav");
const a = document.querySelectorAll("#gnav a");

a.forEach((link) => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        gnav.classList.remove("active");
    });
});

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    gnav.classList.toggle("active");
});



document.addEventListener("DOMContentLoaded", () => {

    /* =====================
    SECTION ANIMATIONS
    ===================== */
    const targets = document.querySelectorAll(".animate-target");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-active");
            } else {
                entry.target.classList.remove("animate-active"); // repeat on scroll up
            }
        });
    }, { threshold: 0.2 });

    targets.forEach(el => observer.observe(el));



    /* =====================
       BACKGROUND FADE-IN
       ===================== */
    const bgTargets = document.querySelectorAll(".bg-fade");

    const bgObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.1 });

    bgTargets.forEach(el => bgObserver.observe(el));



    /* =====================
       VOICE STAGGER ANIMATION
       ===================== */
    const voiceItems = document.querySelectorAll(".voice__item");

    const voiceObserver = new IntersectionObserver(entries => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("active");
                }, i * 1000); // stagger by 0.2 sec
            } else {
                entry.target.classList.remove("active"); // reset on scroll up
            }
        });
    }, { threshold: 0.2 });

    voiceItems.forEach(el => voiceObserver.observe(el));

    if (voiceItems.length) {
        voiceObserver.observe(voiceItems[0]);
    }
});
