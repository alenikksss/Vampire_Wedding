
document.addEventListener("DOMContentLoaded", function() {
    const dressImage = document.querySelector('.dress-image');

    dressImage.addEventListener('click', function() {
        alert("Поздравляю, вы выбрали платье!");
    });
});
const image = document.getElementById('myImage');

image.addEventListener('click', function() {
    // Добавляем класс для подсветки
    image.classList.toggle('red-highlight');
});