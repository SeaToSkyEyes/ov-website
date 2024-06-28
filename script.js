document.addEventListener('DOMContentLoaded', () => {
    const accessMessage = "We cannot grant access to you at this time.";
    const thankYouMessage = "We are immensely grateful for the incredible response Oversight Vanguard received during our preview phase. The passion and urgency of your voices have exceeded our expectations and reinforced the critical need for dedicated advocacy. As we gear up to expand our services in Fall 2024, we are strategically enhancing our capabilities to take on more requests and drive impactful changes. Thank you for your patience and trust as we prepare to open our doors wider to support even more individuals in their pursuit of justice and fairness in the workplace. Stay tuned for more updates as we approach our next phase of operations.";
    
    const accessElement = document.getElementById('access-message');
    const thankYouElement = document.getElementById('thank-you-message');
    
    function typeText(element, text, delay) {
        let index = 0;
        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, delay);
            } else if (element === thankYouElement) {
                element.classList.add('futuristic-red');
            }
        }
        type();
    }

    typeText(accessElement, accessMessage, 100);
    setTimeout(() => {
        typeText(thankYouElement, thankYouMessage, 50);
    }, accessMessage.length * 100);
});
