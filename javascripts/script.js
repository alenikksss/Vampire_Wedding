document.addEventListener('DOMContentLoaded', function() {
    const section1 = document.querySelector('.section1');
    const modalOverlay = document.querySelector('.modal-overlay');
    const closeButton = document.querySelector('.close-button');
    const textInput = document.querySelector('.text-input');

    // Открытие модального окна при клике на section1
    section1.addEventListener('click', function() {
        modalOverlay.style.display = 'flex';
        textInput.focus();
    });

    // Закрытие модального окна при клике на кнопку закрытия
    closeButton.addEventListener('click', function() {
        modalOverlay.style.display = 'none';
    });

    // Закрытие модального окна при клике вне изображения
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            modalOverlay.style.display = 'none';
        }
    });

    // Предотвращение закрытия при клике на само изображение
    document.querySelector('.modal-content').addEventListener('click', function(e) {
        e.stopPropagation();
    });
});