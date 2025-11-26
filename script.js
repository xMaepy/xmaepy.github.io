document.addEventListener('DOMContentLoaded', () => {
    const revealBtn = document.getElementById('reveal-btn');
    const surpriseContainer = document.getElementById('surprise-container');
    const messageCard = document.getElementById('message-card');

    revealBtn.addEventListener('click', () => {
        // Trigger Confetti
        triggerConfetti();

        // Hide button and show message
        surpriseContainer.style.display = 'none';
        messageCard.classList.remove('hidden');

        // More confetti for good measure
        setTimeout(triggerConfetti, 300);
        setTimeout(triggerConfetti, 600);
    });

    function triggerConfetti() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#8e44ad', '#9b59b6', '#fd79a8', '#ffffff']
        });
    }
});
