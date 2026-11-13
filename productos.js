// Base de datos de los productos
const productos = [
    {
        id: 1,
        nombre: "Taza 11oz",
        imagen: "taza personalizada.jpg",
        galeria: [
            { tipo: "imagen", url: "taza personalizada.jpg" },
            { tipo: "imagen", url: "taza personalizada2.jpg" }
        ],
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
        imagen: "taza conica 14oz.jpg",
        categoria: "Taza personalizada",
        precio: 21,
        descripcion: "Tazas conica personalizadas de 14 onzas con cualquier diseño que puedas pedir."
    },
    {
        id: 4,
        nombre: "Camiseta con Vinil Textil PU",
        imagen: "textilaPU.jpg",
        categoria: "Camiseta personalizada",
        precio: 40,
        descripcion: "Camiseta del color que quieras con el diseño que quieras con la mejor calidad, el tamaño del estampado puede abarcar toda la camiseta, aunque con una varieda de colores limitada."
    },
    {
        id: 5,
        nombre: "Camiseta con Vinil Textil PVC",
        imagen: "textilPVC.jpg",
        categoria: "Camiseta personalizada",
        precio: 30,
        descripcion: "Camiseta del color que quieras con el diseño que quieras, el tamaño del estampado puede abarcar toda la camiseta, aunque con una varieda de colores limitada"
    },
    {
        id: 6,
        nombre: "Camiseta con Sublimacion",
        imagen: "camiseta sublimada.jpg",
        galeria: [
            { tipo: "imagen", url: "camiseta sublimada.jpg" },
            { tipo: "imagen", url: "camiseta sublimada2.jpg" }
        ],
        categoria: "Camiseta personalizada",
        precio: 35,
        descripcion: "Camiseta blanca con el diseño que quieras, con toda la variedad de colores para el diseño."
    },
    {
        id: 7,
        nombre: "Camiseta con Transfer",
        imagen: "vinil textil imprimible.jpg",
        categoria: "Camiseta personalizada",
        precio: 45,
        descripcion: "Camiseta de cualqueir color con el diseño que quieras, con toda la variedad de colores para el diseño."
    },
    {
        id: 8,
        nombre: "Corte en Stiker",
        imagen: "stiker personalizados.jpg",
        galeria: [
            { tipo: "imagen", url: "stiker personalizados.jpg" },
            { tipo: "imagen", url: "stiker personalizados2.jpg" },
            { tipo: "imagen", url: "stiker personalizados3.jpg" },
            { tipo: "imagen", url: "stiker personalizados4.jpg" },
            { tipo: "imagen", url: "stiker personalizados5.jpg" }
        ],
        categoria: "Stiker Personalizado",
        precio: 30,
        unidad: "x Hoja A4",
        descripcion: "El diseño con la forma o palabra que quieras que corte en el papel de stiker del color que desees, yo mismo quito el sobrante y te dejo el siker listo para que lo pongas donde desees."
    },
    {
        id: 9,
        nombre: "Impresion Fotografica",
        imagen: "fotos.jpg",
        categoria: "Impresion",
        precio: 5,
        descripcion: "Impresion en papel fotografico con la mejor calidad disponible en toda la gama de colores."
    },
    {
        id: 10,
        nombre: "Impresion normal",
        imagen: "imprecion.jpg",
        categoria: "Impresion",
        precio: 3,
        unidad: "x 10 unidades",
        descripcion: "Impresion en papel bond con la mejor calidad disponible en toda la gama de colores."
    },
    {
        id: 11,
        nombre: "Tatuajes temporales",
        imagen: "tatuajes.jpg",
        galeria: [
            { tipo: "imagen", url: "tatuajes.jpg" },
            { tipo: "imagen", url: "tatuajes2.jpg" },
            { tipo: "imagen", url: "tatuajes3.jpg" },
            { tipo: "imagen", url: "tatuajes4.jpg" }
        ],
        categoria: "Impresion",
        precio: 20,
        unidad: "x Hoja A4",
        descripcion: "Tatuajes temporales con el diseño que tu quieran en toda la gama de colores, fácil de colocar, solo quitas la capa protectora, lo poner sobre la piel y humedeces, en 30 segundo los retiras lentamente y estará en ti."
    },
    {
        id: 12,
        nombre: "Bocaditos",
        imagen: "buffet.jpg",
        galeria: [
            { tipo: "imagen", url: "buffet.jpg" },
            { tipo: "imagen", url: "buffet2.jpg" }
        ],
        
        categoria: "Buffet",
        precio: 150,
        unidad: "25U de 6 opciones",
        descripcion: "Para tu fiesta una variedad de 6 bocaditos diferentes con 25 unidades de cada uno, disponiendo de una gran lista de opciones para su gusto."
    },
    {
        id: 13,
        nombre: "Pasteles",
        imagen: "pastel.jpg",
        galeria: [
            { tipo: "imagen", url: "pastel.jpg" },
            { tipo: "imagen", url: "pastel2.jpg" },
            { tipo: "imagen", url: "pastel3.jpg" },
            { tipo: "imagen", url: "pastel4.jpg" }
        ],
        categoria: "Buffet",
        precio: 45,
        unidad: "20cm diametro",
        descripcion: "Pastel decorado y personalizado como desees, puede escoger el tipo de biscocho, tipo de relleno, tipo de glaseado o decoración, para cualquier evento, festividad o momento memorable."
    }
];
