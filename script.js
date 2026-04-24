const btn = document.getElementById('giftButton');
const glass = document.getElementById('glass');
const surprise = document.getElementById('surprise');
const title = document.getElementById('title');

// Елементи бокалів
const glassLeft = document.getElementById('glassLeft');
const glassRight = document.getElementById('glassRight');
const cheersContainer = document.querySelector('.cheers-container');

btn.addEventListener('click', () => {
    // 1. Ховаємо кнопку
    btn.style.display = 'none';
    title.innerText = "Урааа! 🎉";
    
    // 2. Показуємо весь блок сюрпризу
    surprise.classList.remove('hidden');

    // 5. Конфетті
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
});

const textGlass = document.getElementById("text-glass");

glass.addEventListener("click", () => {
    document.body.classList.add('shake-effect');
    textGlass.classList.toggle('active');

    // Видаляємо клас через 500мс, щоб можна було "трясти" знову (якщо захочеться)
    setTimeout(() => {
        document.body.classList.remove('shake-effect');
    }, 6000);

} );

// Код для overlay (початку) залишаємо як був
const startBtn = document.getElementById('startBtn');
const overlay = document.getElementById('overlay');
const song = document.getElementById('birthdaySong');

if (startBtn) {
    startBtn.addEventListener('click', () => {
        song.play();
        overlay.style.opacity = '0'; 
        setTimeout(() => { overlay.style.display = 'none'; }, 500);
    });
}