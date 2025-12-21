// const hamburger = document.getElementById("hamburger");
// const gnav = document.getElementById("gnav");
// const a = document.querySelectorAll("#gnav a");

// a.forEach((link) => {
//     link.addEventListener("click", () => {
//         hamburger.classList.remove("active");
//         gnav.classList.remove("active");
//     });
// });

// hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("active");
//     gnav.classList.toggle("active");
// });

const hamburger = document.getElementById("hamburger");
const gnav = document.getElementById("gnav");
const a = document.querySelectorAll("#gnav a");

// Close menu when a link is clicked

for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("click", function () {
        hamburger.classList.remove("active");
        gnav.classList.remove("active");
    });
}

// Toggle menu when hamburger is clicked
hamburger.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent document click from triggering
    hamburger.classList.toggle("active");
    gnav.classList.toggle("active");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
    // check if click is outside hamburger and gnav
    if (!hamburger.contains(e.target) && !gnav.contains(e.target)) {
        hamburger.classList.remove("active");
        gnav.classList.remove("active");
    }
});

// Back to Top Buttonß
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// loader

window.addEventListener('load', function () {
    const loader = document.getElementById('loader');
    const minTime = 1000; // minimum time in ms (1.5 seconds)
    const startTime = performance.now(); // when loader appeared

    const hideLoader = () => {
        loader.classList.add('hidden');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500); // match CSS fade duration
    };

    const elapsed = performance.now() - startTime;
    if (elapsed < minTime) {
        setTimeout(hideLoader, minTime - elapsed);
    } else {
        hideLoader();
    }
});

//header bar
window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.classList.add("is-scrolled");
    } else {
        header.classList.remove("is-scrolled");
    }
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
    }, { threshold: 0.1 });

    voiceItems.forEach(el => voiceObserver.observe(el));

    if (voiceItems.length) {
        voiceObserver.observe(voiceItems[0]);
    }
});
