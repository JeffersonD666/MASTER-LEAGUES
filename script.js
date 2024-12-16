// Agregar funcionalidad para resaltar la sección activa en el menú
document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50;
        if (pageYOffset >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentSection)) {
            link.classList.add("active");
        }
    });
});

// Mostrar la ventana modal de inscripción
document.getElementById("btnInscribirse").addEventListener("click", () => {
    document.getElementById("inscripcionModal").style.display = "flex";
});

// Cerrar la ventana modal
document.getElementById("cerrarModal").addEventListener("click", () => {
    document.getElementById("inscripcionModal").style.display = "none";
});

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
    document.getElementById("inscripcionModal").style.display = "none";
});
