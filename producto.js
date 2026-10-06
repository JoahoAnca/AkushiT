//Comando para mostrar los productos en la pagina de producto.html
const parametros = new URLSearchParams(window.location.search);
const id = Number(parametros.get("id"));

const producto = productos.find(p => p.id === id);

if (!producto) {
    alert("Producto no encontrado");
    window.location.href = "index.html";
} else {
    document.getElementById("nombre").textContent = producto.nombre;
    document.getElementById("descripcion").textContent = producto.descripcion;
    document.getElementById("precio").textContent = "S/. " + producto.precio.toFixed(2);

    // Configuración de la galería
    const listaGaleria = producto.galeria && producto.galeria.length > 0 
        ? producto.galeria 
        : [{ tipo: "imagen", url: producto.imagen }];

    let indiceActual = 0;

    const imgElement = document.getElementById("imagen");
    const videoElement = document.getElementById("videoProducto");
    const indicador = document.getElementById("indicadorGaleria");
    const btnAnt = document.getElementById("btnAnterior");
    const btnSig = document.getElementById("btnSiguiente");

    function mostrarMedia(index) {
        const item = listaGaleria[index];

        if (item.tipo === "video") {
            imgElement.style.display = "none";
            videoElement.style.display = "block";
            videoElement.src = item.url;
        } else {
            videoElement.style.display = "none";
            videoElement.pause(); // Pausar video si cambia a foto
            imgElement.style.display = "block";
            imgElement.src = item.url;
        }

        if (indicador) {
            indicador.textContent = `${index + 1} / ${listaGaleria.length}`;
        }
    }

    if (btnAnt && btnSig) {
        if (listaGaleria.length <= 1) {
            document.getElementById("controlesGaleria").style.display = "none";
        } else {
            btnAnt.addEventListener("click", () => {
                indiceActual = (indiceActual - 1 + listaGaleria.length) % listaGaleria.length;
                mostrarMedia(indiceActual);
            });

            btnSig.addEventListener("click", () => {
                indiceActual = (indiceActual + 1) % listaGaleria.length;
                mostrarMedia(indiceActual);
            });
        }
    }

    mostrarMedia(0);

    // Eventos de botones
    document.getElementById("btnCarrito").addEventListener("click", () => agregarCarrito(producto.id));
    document.getElementById("btnComprar").addEventListener("click", () => {
        window.location.href = "compra.html?id=" + producto.id;
    });
}