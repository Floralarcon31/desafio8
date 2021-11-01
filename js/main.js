//Eleccion de pais en formulario de ingreso

//evento onload
window.onload = function() {
//array
    let paises = ["USA", "Francia", "Italia", "Brasil", "Colombia", "Argentina", "Venezuela", "otro"];
//for each
    paises.forEach(element => {
       let opcion = document.createElement("option");
        document.querySelector("#mySelect").appendChild(opcion);
        opcion.innerHTML = element;
    });
   
};

//funcion para enviar datos
function capturar(e) {
    e.preventDefault();
    let usuario = document.getElementById("user");
    let password = document.getElementById("pass");
    if( usuario.value != "" && password.value != ""){
        let mensaje1 = document.getElementById("mensaje1");
        mensaje1.innerHTML = `<h1>ON TRAVEL</h1>`;
        mensaje1.style.textAlign = "center";
        mensaje1.style.fontSize = "40px";
        mensaje1.style.color = "dodgerblue";
        let mensaje = document.getElementById("mensaje");
        mensaje.innerHTML = `<h1>Bienvenido/a el sistema ${usuario.value}</h1>`;
        mensaje.style.textAlign = "center";
        mensaje.style.fontSize = "25px";
        mensaje.style.color = "dodgerblue";
    }
    else{  
        let mensaje = document.getElementById("mensaje");
        mensaje.innerHTML = `<h1>ERROR FALTAN DATOS</h1>`;
        mensaje.style.textAlign = "center";
        mensaje.style.fontSize = "40px";
        mensaje.style.color = "red";
     }
  }
//evento click
let enviar = document.getElementById("botons");
enviar.addEventListener("click", capturar);


