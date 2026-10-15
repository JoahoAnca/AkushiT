// Base de datos de los productos
const productos = [
    {
        id: 1,
        nombre: "Taza 11oz",
        imagen: "taza personalizada.png",
        categoria: "Taza personalizada",
        precio: 15,
        descripcion: "Tazas personalizadas de 11 onzas con cualquier diseño que puedas pedir."
    },
    {
        id: 2,
        nombre: "Taza 11oz color interno",
        imagen: "colorinterno.jpg",
        categoria: "Taza personalizada",
        precio: 18,
        descripcion: "Tazas personalizadas de 11 onzas con el interior y la asa del color que quieras, con cualquier diseño que puedas pedir."
    },
    {
        id: 3,
        nombre: "Taza conicas 14oz",
        imagen: "taza conica 14oz.png",
        categoria: "Taza personalizada",
        precio: 21,
        descripcion: "Tazas conica personalizadas de 14 onzas con cualquier diseño que puedas pedir."
    },
    {
        id: 4,
        nombre: "Tarjeta de presentacion",
        imagen: "tarjeta de presentacion.png",
        galeria: [
            { tipo: "imagen", url: "tarjeta de presentacion.png" },
            { tipo: "imagen", url: "tarjeta de presentacion2.png" }
        ],
        categoria: "Tarjeta de presentacion",
        precio: 8,
        unidad: "x 100U",
        descripcion: "Tarjetas de presentacion para tu negocio, con el diseño que quieras, disponibilidad de 2 modelos, uno en material delgado con toda la gama de colores y la otra en material mas grueso pero sin el color negro disponible."
    },
    {
        id: 5,
        nombre: "Camiseta con Vinil Textil PU",
        imagen: "textilaPU.png",
        categoria: "Camiseta personalizada",
        precio: 40,
        descripcion: "Camiseta del color que quieras con el diseño que quieras con la mejor calidad, el tamaño del estampado puede abarcar toda la camiseta, aunque con una varieda de colores limitada."
    },
    {
        id: 6,
        nombre: "Camiseta con Vinil Textil PVC",
        imagen: "textilPVC.png",
        categoria: "Camiseta personalizada",
        precio: 30,
        descripcion: "Camiseta del color que quieras con el diseño que quieras, el tamaño del estampado puede abarcar toda la camiseta, aunque con una varieda de colores limitada"
    },
    {
        id: 7,
        nombre: "Camiseta con Sublimacion",
        imagen: "camiseta sublimada.png",
        galeria: [
            { tipo: "imagen", url: "camiseta sublimada.png" },
            { tipo: "imagen", url: "camiseta sublimada2.png" }
        ],
        categoria: "Camiseta personalizada",
        precio: 35,
        descripcion: "Camiseta blanca con el diseño que quieras, con toda la variedad de colores para el diseño."
    },
    {
        id: 8,
        nombre: "Camiseta con Transfer",
        imagen: "vinil textil imprimible.png",
        categoria: "Camiseta personalizada",
        precio: 45,
        descripcion: "Camiseta de cualqueir color con el diseño que quieras, con toda la variedad de colores para el diseño."
    },
    {
        id: 9,
        nombre: "Corte en Stiker",
        imagen: "stiker personalizados.png",
        galeria: [
            { tipo: "imagen", url: "stiker personalizados.png" },
            { tipo: "imagen", url: "stiker personalizados2.png" },
            { tipo: "imagen", url: "stiker personalizados3.png" },
            { tipo: "imagen", url: "stiker personalizados4.png" },
            { tipo: "imagen", url: "stiker personalizados5.png" }
        ],
        categoria: "Stiker Personalizado",
        precio: 30,
        unidad: "x Hoja A4",
        descripcion: "El diseño con la forma o palabra que quieras que corte en el papel de stiker del color que desees, yo mismo quito el sobrante y te dejo el siker listo para que lo pongas donde desees."
    },
    {
        id: 10,
        nombre: "Impresion Fotografica",
        imagen: "fotos.png",
        categoria: "Impresion",
        precio: 5,
        descripcion: "Impresion en papel fotografico con la mejor calidad disponible en toda la gama de colores."
    },
    {
        id: 11,
        nombre: "Impresion normal",
        imagen: "imprecion.jpg",
        categoria: "Impresion",
        precio: 3,
        unidad: "x 10 unidades",
        descripcion: "Impresion en papel bond con la mejor calidad disponible en toda la gama de colores."
    },
    {
        id: 12,
        nombre: "Tatuajes temporales",
        imagen: "tatuajes.png",
        galeria: [
            { tipo: "imagen", url: "tatuajes.png" },
            { tipo: "imagen", url: "tatuajes2.png" },
            { tipo: "imagen", url: "tatuajes3.png" },
            { tipo: "imagen", url: "tatuajes4.png" }
        ],
        categoria: "Impresion",
        precio: 20,
        unidad: "x Hoja A4",
        descripcion: "Tatuajes temporales con el diseño que tu quieran en toda la gama de colores, fácil de colocar, solo quitas la capa protectora, lo poner sobre la piel y humedeces, en 30 segundo los retiras lentamente y estará en ti."
    },
    {
        id: 13,
        nombre: "Bocaditos",
        imagen: "buffet.png",
        categoria: "Buffet",
        precio: 150,
        unidad: "25U de 6 opciones",
        descripcion: "Para tu fiesta una variedad de 6 bocaditos diferentes con 25 unidades de cada uno, disponiendo de una gran lista de opciones para su gusto."
    },
    {
        id: 14,
        nombre: "Pasteles",
        imagen: "pastel.png",
        categoria: "Buffet",
        precio: 45,
        unidad: "20cm diametro",
        descripcion: "Pastel decorado y personalizado como desees, puede escoger el tipo de biscocho, tipo de relleno, tipo de glaseado o decoración, para cualquier evento, festividad o momento memorable."
    }
];
