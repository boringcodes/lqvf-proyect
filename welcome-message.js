// welcome-message.js

// Esta función mostrará un mensaje de bienvenida
export function displayWelcomeMessage(elementId, message = "¡Bienvenido a mi sitio!") {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
        targetElement.textContent = message;
        targetElement.style.color = "lightgreen";
        targetElement.style.fontSize = "2em";
        targetElement.style.textAlign = "center";
        targetElement.style.marginTop = "50px";
        console.log("Mensaje de bienvenida mostrado:", message);
    } else {
        console.error(`Elemento con ID "${elementId}" no encontrado para el mensaje de bienvenida.`);
    }
}

// Opcional: una función para ocultar el mensaje
export function hideWelcomeMessage(elementId) {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
        targetElement.style.display = "none";
        console.log("Mensaje de bienvenida ocultado.");
    }
}
