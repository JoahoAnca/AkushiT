document.addEventListener("DOMContentLoaded", () => {
    const contenedorPedido = document.getElementById("productosPedido");
    const formulario = document.getElementById("formularioEspecificaciones");
    const montoFlotante = document.getElementById("montoTotalFlotante");

    const parametros = new URLSearchParams(window.location.search);
    const idProductoDirecto = Number(parametros.get("id"));

    let listaItems = [];

    if (idProductoDirecto) {
        const prod = productos.find(p => p.id === idProductoDirecto);
        if (prod) {
            listaItems.push({ ...prod, cantidad: 1, especificaciones: "", imagenCliente: "" });
        }
    } else {
        const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
        listaItems = carritoGuardado.map(p => ({
            ...p,
            cantidad: p.cantidad || 1,
            especificaciones: p.especificaciones || "",
            imagenCliente: ""
        }));
    }

    function renderizarFormularioPedido() {
        if (listaItems.length === 0) {
            contenedorPedido.innerHTML = "<p>No hay productos seleccionados para la compra.</p>";
            actualizarTotales();
            return;
        }

        contenedorPedido.innerHTML = "";

        listaItems.forEach((item, index) => {
            const divItem = document.createElement("div");
            divItem.className = "item-especificacion-card";
            divItem.style.cssText = "background: #f9f9f9; border: 1px solid #ddd; padding: 15px; margin-bottom: 20px; border-radius: 8px;";

            const subtotalInicial = item.precio * item.cantidad;

            divItem.innerHTML = `
                <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 10px;">
                    <img src="${item.imagen}" alt="${item.nombre}" style="width: 70px; height: 70px; object-fit: cover; border-radius: 5px;">
                    <div>
                        <h3 style="margin: 0;">${item.nombre}</h3>
                        <p style="margin: 5px 0; color: #2e7d32; font-weight: bold;">Precio unitario: S/. ${item.precio.toFixed(2)}</p>
                    </div>
                </div>

                <label for="cant_${index}"><strong>Cantidad:</strong></label><br>
                <input type="number" id="cant_${index}" data-index="${index}" class="input-cantidad-item" min="1" value="${item.cantidad}" style="width: 80px; padding: 6px; margin-top: 5px; margin-bottom: 5px;"><br>

                <p style="margin: 5px 0 12px 0; font-size: 16px; font-weight: bold; color: #333;">
                    Subtotal: <span id="subtotal_${index}" style="color: #2e7d32;">S/. ${subtotalInicial.toFixed(2)}</span>
                </p>

                <label for="esp_${index}"><strong>Especificaciones del producto:</strong></label><br>
                <textarea id="esp_${index}" data-index="${index}" class="input-especificacion-item" rows="3" placeholder="Escriba aquí colores, diseños, detalles, nombres, etc.">${item.especificaciones}</textarea><br><br>

                <label for="img_${index}"><strong>Adjuntar imagen/modelo (Opcional):</strong></label><br>
    
                <input type="file" id="img_${index}" data-index="${index}" class="input-imagen-item" accept="image/*" multiple style="margin-top: 5px;">
    
                <span id="estado_img_${index}" style="font-size: 13px; color: #2e7d32; display: block; margin-top: 5px;"></span>
            `;

            contenedorPedido.appendChild(divItem);
        });

        // Eventos de cantidad
        document.querySelectorAll(".input-cantidad-item").forEach(input => {
            input.addEventListener("input", (e) => {
                const idx = e.target.getAttribute("data-index");
                const nuevaCant = Number(e.target.value) || 1;
                listaItems[idx].cantidad = nuevaCant;

                const elementoSubtotal = document.getElementById(`subtotal_${idx}`);
                if (elementoSubtotal) {
                    const nuevoSubtotal = listaItems[idx].precio * nuevaCant;
                    elementoSubtotal.textContent = `S/. ${nuevoSubtotal.toFixed(2)}`;
                }

                actualizarTotales();
            });
        });

        // Eventos de especificaciones
        document.querySelectorAll(".input-especificacion-item").forEach(textarea => {
            textarea.addEventListener("input", (e) => {
                const idx = e.target.getAttribute("data-index");
                listaItems[idx].especificaciones = e.target.value;
            });
        });

        // SUBIDA DE MÚLTIPLES IMÁGENES A IMGBB
        document.querySelectorAll(".input-imagen-item").forEach(inputImg => {
            inputImg.addEventListener("change", (e) => {
                const idx = e.target.getAttribute("data-index");
                const archivos = Array.from(e.target.files); // Convertimos la lista de archivos en Array
                const estadoTexto = document.getElementById(`estado_img_${idx}`);

                if (archivos.length > 0) {
                if (estadoTexto) estadoTexto.textContent = `Subiendo ${archivos.length} imagen(es)...`;

                const apiKey = "665c13304557df07d0952f7173dfa052"; // Tu API Key de ImgBB
                listaItems[idx].imagenCliente = []; // Creamos un arreglo para guardar varios enlaces

                // Peticiones paralelas para subir todas las imágenes seleccionadas
                const promesasSubida = archivos.map(archivo => {
                    const formData = new FormData();
                    formData.append("image", archivo);

                    return fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
                        method: "POST",
                        body: formData
                    })
                    .then(res => res.json())
                    .then(datos => datos.success ? datos.data.url : null);
                });

                Promise.all(promesasSubida)
                .then(urls => {
                    // Filtramos solo los enlaces válidos
                    const enlacesValidos = urls.filter(url => url !== null);
                    listaItems[idx].imagenCliente = enlacesValidos;

                    if (estadoTexto) {
                        estadoTexto.textContent = `✔ ${enlacesValidos.length} imagen(es) subida(s) correctamente`;
                    }
                })
                .catch(err => {
                    console.error("Error al subir imágenes:", err);
                    if (estadoTexto) estadoTexto.textContent = "✖ Error al subir algunas imágenes";
                });
                } else {
                    listaItems[idx].imagenCliente = [];
                    if (estadoTexto) estadoTexto.textContent = "";
                }
            });
        });












        actualizarTotales();
    }
    function actualizarTotales() {
        let totalGeneral = 0;
        listaItems.forEach(item => {
            totalGeneral += item.precio * (item.cantidad || 1);
        });

        if (montoFlotante) {
            montoFlotante.textContent = `S/. ${totalGeneral.toFixed(2)}`;
        }
    }

    renderizarFormularioPedido();

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        if (listaItems.length === 0) {
            alert("No hay productos en el pedido.");
            return;
        }

        let resumenDetallado = "";
        let totalProductos = 0;

        listaItems.forEach((item, idx) => {
            const subtotal = item.precio * item.cantidad;
            totalProductos += subtotal;

            const especTexto = item.especificaciones.trim() ? item.especificaciones.trim() : "Sin especificaciones";
            const enlaceImagen = item.imagenCliente ? item.imagenCliente : "No adjuntó imagen";

            resumenDetallado += `${idx + 1}. ${item.nombre}\n`;
            resumenDetallado += `   - Cantidad: ${item.cantidad}\n`;
            resumenDetallado += `   - Precio unitario: S/. ${item.precio.toFixed(2)}\n`;
            resumenDetallado += `   - Subtotal: S/. ${subtotal.toFixed(2)}\n`;
            resumenDetallado += `   - Especificaciones: ${especTexto}\n`;
            resumenDetallado += `   - Enlace de Imagen: ${enlaceImagen}\n\n`;
        });

        const ordenTemporal = {
            resumen: resumenDetallado,
            montoProductos: totalProductos,
            items: listaItems
        };

        sessionStorage.setItem("ordenTemporal", JSON.stringify(ordenTemporal));
        window.location.href = "datos_envio.html";
    });
});