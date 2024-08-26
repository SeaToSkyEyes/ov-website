document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('specsCanvas');
    const ctx = canvas.getContext('2d');
    let specs = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createSpecs() {
        for (let i = 0; i < 100; i++) {
            specs.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2,
                alpha: Math.random() * 0.5 + 0.2,
                direction: Math.random() * 2 * Math.PI,
            });
        }
    }

    function animateSpecs() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        specs.forEach(spec => {
            spec.x += Math.cos(spec.direction) * 0.5;
            spec.y += Math.sin(spec.direction) * 0.5;

            if (spec.x < 0 || spec.x > canvas.width || spec.y < 0 || spec.y > canvas.height) {
                spec.x = Math.random() * canvas.width;
                spec.y = Math.random() * canvas.height;
            }

            ctx.beginPath();
            ctx.arc(spec.x, spec.y, spec.radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = `rgba(255, 255, 255, ${spec.alpha})`;
            ctx.fill();
        });

        requestAnimationFrame(animateSpecs);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    createSpecs();
    animateSpecs();
});
