document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario-contacto');

    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();

            // Reemplaza este número por el tuyo real (código de país + número de 10 dígitos)
            // Ejemplo para México: 52 + tu número celular
            const telefonoDestino = "522841023692"; 

            // Captura los valores ingresados por el usuario
            const nombre = document.getElementById('nombre').value.trim();
            const telefonoCliente = document.getElementById('telefono').value.trim();
            const servicio = document.getElementById('servicio-interes').value;
            const mensaje = document.getElementById('mensaje').value.trim();

            // Estructura el mensaje de texto para WhatsApp
            let textoMensaje = `Hola Bajo Cero°, me interesa un servicio.%0A%0A`;
            textoMensaje += `*Nombre:* ${encodeURIComponent(nombre)}%0A`;
            textoMensaje += `*Teléfono de contacto:* ${encodeURIComponent(telefonoCliente)}%0A`;
            textoMensaje += `*Servicio requerido:* ${encodeURIComponent(servicio)}%0A`;
            
            if(mensaje !== '') {
                textoMensaje += `*Detalles:* ${encodeURIComponent(mensaje)}`;
            }

            // Construye la URL oficial de la API de WhatsApp
            const urlWhatsApp = `https://wa.me/${telefonoDestino}?text=${textoMensaje}`;

            // Abre el chat en una pestaña nueva
            window.open(urlWhatsApp, '_blank');

            // Limpia el formulario local
            formulario.reset();
        });
    }
});