// Inicializar EmailJS con tu Public Key
emailjs.init({
    publicKey: "etq4c_grv5cEfkE2X"
});

document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formularioDatosEnvio");
    const inputDetallePedido = document.getElementById("detalle_pedido");
    const inputEspecificaciones = document.getElementById("especificaciones");
    const montoFlotante = document.getElementById("montoTotalFlotante");

    const radiosEntrega = document.getElementsByName("tipo_entrega");
    const seccionDelivery = document.getElementById("seccionDelivery");

    const inputTelefono = document.getElementById("telefono");
    const inputDistrito = document.getElementById("distrito");
    const inputDireccion = document.getElementById("direccion");

    const ordenGuardada = JSON.parse(sessionStorage.getItem("ordenTemporal"));

    if (!ordenGuardada) {
        alert("No hay un pedido activo. Redirigiendo a la tienda.");
        window.location.href = "index.html";
        return;
    }

    const montoBaseProductos = Number(ordenGuardada.montoProductos) || 0;

    // Función para actualizar la UI según si recoge o es delivery
    function actualizarMetodoEntrega() {
        let esDelivery = false;
        radiosEntrega.forEach(radio => {
            if (radio.checked && radio.value === "delivery") {
                esDelivery = true;
            }
        });

        let costoEnvio = esDelivery ? 5 : 0;
        let totalFinal = montoBaseProductos + costoEnvio;

        if (montoFlotante) {
            montoFlotante.textContent = `S/. ${totalFinal.toFixed(2)}`;
        }

        if (esDelivery) {
            seccionDelivery.style.display = "block";
            inputTelefono.required = true;
            inputDistrito.required = true;
            inputDireccion.required = true;
        } else {
            seccionDelivery.style.display = "none";
            inputTelefono.required = false;
            inputDistrito.required = false;
            inputDireccion.required = false;
            
            // Limpiar datos si cambió a recojo
            inputTelefono.value = "";
            inputDistrito.value = "";
            inputDireccion.value = "";
        }
    }

    radiosEntrega.forEach(radio => {
        radio.addEventListener("change", actualizarMetodoEntrega);
    });

    actualizarMetodoEntrega();

    formulario.addEventListener("submit", function(e) {
        e.preventDefault();

        let esDelivery = false;
        radiosEntrega.forEach(radio => {
            if (radio.checked && radio.value === "delivery") esDelivery = true;
        });

        let costoEnvio = esDelivery ? 5 : 0;
        let totalFinal = montoBaseProductos + costoEnvio;

        let resumenFinal = ordenGuardada.resumen + `\nCosto de envío: S/. ${costoEnvio.toFixed(2)}\nTOTAL A PAGAR: S/. ${totalFinal.toFixed(2)}`;
        inputDetallePedido.value = resumenFinal;

        emailjs.sendForm(
            "service_9aqujrb",
            "template_0athbaq", // Tu Template ID de compras
            this
        ).then(() => {
            alert("¡Compra confirmada correctamente! Nos pondremos en contacto contigo pronto.");
            sessionStorage.removeItem("ordenTemporal");
            localStorage.removeItem("carrito");
            window.location.href = "index.html";
        }).catch((error) => {
            alert("Ocurrió un error al procesar tu compra. Por favor reintenta.");
            console.error("Error EmailJS:", error);
        });
    });
});