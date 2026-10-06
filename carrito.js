let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let contenedor = document.getElementById("listaCarrito");

function mostrarCarrito() {
    contenedor.innerHTML = "";

    if (carrito.length === 0) {
        contenedor.innerHTML = "<p style='text-align:center; font-size: 18px;'>El carrito está vacío.</p>";
        return;
    }

    let total = 0;


    carrito.forEach((producto, index) => {
        const cantidad = producto.cantidad || 1;
        const subtotal = producto.precio * cantidad;
        total += subtotal;

        const div = document.createElement("div");
        div.className = "producto";
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: S/. ${producto.precio.toFixed(2)}</p>
            <p>Cantidad: ${cantidad}</p>
            <p style="color: #333;">Subtotal: S/. ${subtotal.toFixed(2)}</p>
            <button onclick="verProducto(${producto.id})">Ver producto</button>
            <button style="background-color: #ff4d4d; color: white;" onclick="eliminarProducto(${index})">Eliminar</button>
        `;
        contenedor.appendChild(div);
    });

    // Resumen y botón de finalizar compra
    const resumen = document.createElement("div");
    resumen.className = "resumen-carrito";
    resumen.style.cssText = "width: 100%; text-align: center; margin-top: 20px;";
    resumen.innerHTML = `
        <h3>Total a pagar: S/. ${total.toFixed(2)}</h3>
        <button id="btnIrACompra" style="padding: 12px 25px; font-size: 18px; cursor: pointer;">
            Proceder al pago
        </button>
    `;

    contenedor.appendChild(resumen);

    document.getElementById("btnIrACompra").onclick = function() {
        window.location.href = "compra.html";
    };
}


function eliminarProducto(index) {
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

mostrarCarrito();
