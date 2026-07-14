document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario-contacto');

    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();

            const telefonoDestino = "522841128741"; 
            const telefonoCliente = document.getElementById('telefono').value.trim();
            
            // Validación de 10 dígitos
            const regexTelefono = /^[0-9]{10}$/;
            if (!regexTelefono.test(telefonoCliente)) {
                alert('Por favor, ingresa un número de teléfono válido a 10 dígitos.');
                return; // Detiene la ejecución
            }

            // Captura el resto de las variables (eliminamos la duplicación de telefonoCliente)
            const nombre = document.getElementById('nombre').value.trim();
            const servicio = document.getElementById('servicio-interes').value;
            const mensaje = document.getElementById('mensaje').value.trim();

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

    // --- LÓGICA DE FILTROS DE LA GALERÍA ---
    const botonesFiltro = document.querySelectorAll('.btn-filtro');
    const itemsGaleria = document.querySelectorAll('.item-galeria');

    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', () => {
            // Quita la clase activa de todos los botones y se la pone al seleccionado
            botonesFiltro.forEach(btn => btn.classList.remove('activo'));
            boton.classList.add('activo');

            const filtro = boton.getAttribute('data-filtro');

            itemsGaleria.forEach(item => {
                const categoria = item.getAttribute('data-categoria');

                if (filtro === 'todos' || categoria === filtro) {
                    item.classList.remove('ocultar');
                } else {
                    item.classList.add('ocultar');
                }
            });
        });
    });
});