// Comando para conectar la pagina principal con al carrito de compras
function agregarCarrito(id){
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const itemExistente = carrito.find(p => p.id === id);


    if (itemExistente) {
        // Si ya existe, le sumamos 1 a la cantidad
        itemExistente.cantidad = (itemExistente.cantidad || 1) + 1;
    } else {
        // Si es nuevo, buscamos los datos del producto y le asignamos cantidad 1
        const producto = productos.find(p => p.id === id);
        if (producto) {
            carrito.push({ ...producto, cantidad: 1 });
        }
    }
    

    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("Producto agregado al carrito");
}

function verProducto(id){

    window.location.href = "producto.html?id=" + id;

}