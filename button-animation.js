// button-animation.js

// Función para añadir una animación de "clic" a un botón
export function applyClickAnimation(buttonId) {
    const button = document.getElementById(buttonId);
    if (button) {
        button.addEventListener('click', () => {
            button.classList.add('animated-click'); // Asume que tienes una clase CSS 'animated-click'
            setTimeout(() => {
                button.classList.remove('animated-click');
            }, 500); // Remueve la clase después de 0.5 segundos
            console.log(`Animación de clic aplicada a #${buttonId}`);
        });
    } else {
        console.error(`Error: Botón con ID "${buttonId}" no encontrado para animación.`);
    }
}

// Puedes tener más funciones aquí
export function changeButtonText(buttonId, newText) {
    const button = document.getElementById(buttonId);
    if (button) {
        button.textContent = newText;
        console.log(`Texto de botón #${buttonId} cambiado a: "${newText}"`);
    }
}
