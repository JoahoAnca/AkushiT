// Comando para activar el buscardor de productos
const buscador = document.getElementById("buscador");
const resultados = document.getElementById("resultados");

if (buscador && resultados) {
    buscador.addEventListener("input", function() {
        const valor = this.value.toLowerCase().trim();
        resultados.innerHTML = "";

        if (valor === "") return;

       productos.forEach(producto => {
            if (producto.nombre.toLowerCase().includes(valor)) {
                const div = document.createElement("div");
                div.textContent = producto.nombre;
                div.classList.add("resultado-item");

                div.onclick = () => {
                    window.location.href = "producto.html?id=" + producto.id;
                };

                resultados.appendChild(div);
            }
        });
    });
}