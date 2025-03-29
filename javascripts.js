document.addEventListener('DOMContentLoaded', function() {
    const section1 = document.querySelector('.section1');
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    const modalImage = document.createElement('img');
    modalImage.className = 'modal-image';
    modalImage.src = 'images/spread0.png';
    
    const textInput = document.createElement('input');
    textInput.className = 'text-input';
    textInput.type = 'text';
    textInput.placeholder = 'Введите текст...';
    
    const closeButton = document.createElement('span');
    closeButton.className = 'close-button';
    closeButton.innerHTML = '&times;';
    
    modalContent.appendChild(modalImage);
    modalContent.appendChild(textInput);
    modalContent.appendChild(closeButton);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    section1.addEventListener('click', function() {
        modal.style.display = 'block';
    });
    
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Получаем все изображения платьев
    const dresses = document.querySelectorAll('.platya img');
    
    // Добавляем обработчик клика для каждого платья
    dresses.forEach(dress => {
        dress.addEventListener('click', function() {
            // Если платье уже выбрано, убираем выделение
            if (this.classList.contains('selected')) {
                this.classList.remove('selected');
                return;
            }
            
            // Убираем класс selected у всех платьев
            dresses.forEach(d => d.classList.remove('selected'));
            // Добавляем класс selected к выбранному платью
            this.classList.add('selected');
        });
    });
});
