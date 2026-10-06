// Comando para crear la paginas
const contenedor = document.getElementById("productos");

if (contenedor) {
    productos.forEach(producto => {
        // Evaluamos si el producto tiene la especificación de unidad
        const textoUnidad = producto.unidad ? `<span class="unidad-precio"> (${producto.unidad})</span>` : "";

        const div = document.createElement("div");
        div.className = "producto";
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" width="150">
            <h3>${producto.nombre}</h3>
            <p>S/. ${producto.precio.toFixed(2)}${textoUnidad}</p>
            <button onclick="agregarCarrito(${producto.id})">
                Agregar al carrito
            </button>
            <button onclick="verProducto(${producto.id})">
                Ver producto
            </button>
        `;
        contenedor.appendChild(div);
    });
}