emailjs.init({
    publicKey: "etq4c_grv5cEfkE2X"
});

const formulario = document.getElementById("formulario-contacto");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.sendForm(
        "service_9aqujrb",
        "template_ft3glt4",
        this
    ).then(() => {

        alert("Mensaje enviado correctamente");

        formulario.reset();

    }).catch((error)=>{

        alert("Ocurrió un error");

        console.log(error);

    });

});