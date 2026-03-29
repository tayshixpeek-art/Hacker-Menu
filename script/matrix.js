const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

// Адаптация размера холста
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const characters = "01";
const fontSize = 16;
let columns = Math.floor(canvas.width / fontSize);
let drops = [];

// Инициализация капель
function initDrops() {
    columns = Math.floor(canvas.width / fontSize);
    drops = [];
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }
}
initDrops();

// Обновляем количество капель при повороте экрана или изменении окна
window.addEventListener('resize', initDrops);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00FF00";
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 33);
