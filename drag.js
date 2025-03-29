document.addEventListener('DOMContentLoaded', function() {
    const draggableElements = document.querySelectorAll('.ukrashenia img, .sergi img');
    const section3 = document.querySelector('.section3');
    
    draggableElements.forEach(element => {
        element.draggable = true;
        
        element.addEventListener('dragstart', function(e) {
            e.dataTransfer.setData('text/plain', e.target.className);
        });
    });

    section3.addEventListener('dragover', function(e) {
        e.preventDefault();
    });

    section3.addEventListener('drop', function(e) {
        e.preventDefault();
        const className = e.dataTransfer.getData('text/plain');
        const element = document.querySelector('.' + className);
        
        if (element) {
            const rect = section3.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            element.style.position = 'absolute';
            element.style.left = x + 'px';
            element.style.top = y + 'px';
            element.style.zIndex = '1000';
        }
    });
});