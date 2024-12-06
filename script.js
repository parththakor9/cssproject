// Smooth scrolling for links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for header height
                behavior: 'smooth',
            });
        }
    });
});

// Dynamic video background
const videoSources = [
    'video/Galaxy S24 Ultra_ Official Introduction Film .mp4',
    'video/WhatsApp Video 2024-09-10 at 00.53.38_d245dae9 .mp4',
    'video/MacBookAir_M2_Overview.mp4'
];
const randomVideo = videoSources[Math.floor(Math.random() * videoSources.length)];
document.getElementById('dynamic-video').src = randomVideo;

// Click on video redirects to a product page
const videoElement = document.getElementById('background-video');
videoElement.addEventListener('click', () => {
    window.location.href = 'product1.html';
});
