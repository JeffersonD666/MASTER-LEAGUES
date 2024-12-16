// Manejo del formulario de inscripción
document.getElementById("inscripcionForm").addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Obtener los datos del formulario
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const whatsapp = document.getElementById("whatsapp").value;
    const grl = document.getElementById("grl").value;
    const escudo = document.getElementById("escudo").value;
    const nivel = document.getElementById("nivel").value;

    // Validación simple (por ejemplo, que el WhatsApp esté completo)
    if (whatsapp === "") {
        alert("Por favor, ingresa tu número de WhatsApp.");
        return;
    }

    alert("Formulario enviado con éxito");
    // Redirigir o cerrar el formulario si es necesario
});

// Cerrar el formulario
document.getElementById("cerrarFormulario").addEventListener("click", () => {
    window.location.href = "index.html"; // Redirige al inicio
});
