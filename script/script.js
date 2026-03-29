// --- МАТРИЦА ---
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth; canvas.height = window.innerHeight;
const chars = "01";
const fontSize = 16;
let drops = Array(Math.floor(canvas.width / fontSize)).fill(1);

function draw() {
    ctx.fillStyle = "rgba(0,0,0,0.08)";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px monospace";
    drops.forEach((y, i) => {
        const text = chars[Math.floor(Math.random()*chars.length)];
        ctx.fillText(text, i*fontSize, y*fontSize);
        if (y*fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    });
}
setInterval(draw, 35);

// --- ВЗЛОМ ---
const logs = [
    "> Запрос DNS: api.server.internal... OK",
    "> IP цели: 172.67.141.201",
    "> Поиск конфигов Chrome...",
    "> Файл: AppData/Local/Google/Chrome/User Data/Default/Web Data... FOUND",
    "> Инъекция в DNS-кэш...",
    "> Поиск конфигов Firefox...",
    "> Файл: Profiles/prefs.js... EXTRACTING",
    "> Обход Брандмауэра Windows... SUCCESS",
    "> Чтение сохраненных паролей...",
    "> Подключение к API удаленного управления...",
    "> Финализация процессов..."
];

function startDeepHack() {
    document.getElementById('menu-screen').classList.add('hidden');
    document.getElementById('hack-screen').classList.remove('hidden');

    let progress = 0;
    let logIdx = 0;
    const bar = document.getElementById('progress-bar');
    const pct = document.getElementById('progress-percent');
    const logArea = document.getElementById('hack-log');

    const interval = setInterval(() => {
        progress += Math.random() * 2;
        if (progress > 100) progress = 100;

        bar.style.width = progress + "%";
        pct.textContent = Math.floor(progress) + "%";

        // Добавляем логи по мере прогресса
        if (progress > (logIdx * (100 / logs.length)) && logIdx < logs.length) {
            const p = document.createElement('div');
            p.textContent = logs[logIdx];
            logArea.appendChild(p);
            logArea.scrollTop = logArea.scrollHeight;
            logIdx++;
        }

        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                document.getElementById('hack-screen').classList.add('hidden');
                document.getElementById('final-screen').classList.remove('hidden');
            }, 800);
        }
    }, 100);
}

// Навигация
function showFirewall() {
    document.getElementById('menu-screen').classList.add('hidden');
    document.getElementById('firewall-screen').classList.remove('hidden');
}

function showMenu() {
    document.getElementById('firewall-screen').classList.add('hidden');
    document.getElementById('menu-screen').classList.remove('hidden');
}

// Скример
function triggerScreamer() {
    const audioCtx = new AudioContext();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sawtooth'; osc.frequency.value = 440;
    gain.gain.value = 1;
    osc.connect(gain); gain.connect(audioCtx.destination);
    
    document.getElementById('screamer').style.display = 'block';
    osc.start();
    document.body.style.animation = "shake 0.1s infinite";
    setTimeout(() => location.reload(), 2000);
}
