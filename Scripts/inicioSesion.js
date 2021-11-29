var usuario = document.getElementById('usuario');
var contraseña = document.getElementById('contraseña');
var validate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const usuarioCorrecto = "usuariocorrecto@hotmail.com";
const claveCorrecta = "clavecorrecta";

function onLeaveUsuario(){
    if (!usuario.value.match(validate)){
        document.getElementById('errorUsuario').innerHTML = "El usuario debe ser un email";
    }
    else{
        document.getElementById('errorUsuario').innerHTML = "";
    }
    if(usuario.value == usuarioCorrecto && contraseña.value == claveCorrecta){
        
        document.getElementById('enterBoton').href="../App/App.html";
    }
    else{
        document.getElementById('enterBoton').href="#";
    }
}

function onLeaveContraseña(){
    if (contraseña.value.length < 8){
        document.getElementById('errorContraseña').innerHTML = "La contraseña debe tener entre 8 y 16 caracteres";
    }
    else{
        document.getElementById('errorContraseña').innerHTML = "";
    }
    if(usuario.value == usuarioCorrecto && contraseña.value == claveCorrecta){
        document.getElementById('enterBoton').href="../App/App.html";
    }
    else{
        document.getElementById('enterBoton').href='#';
    }
}
function keyPress(){
    if (contraseña.value.length == 16){
        document.getElementById('errorContraseña').innerHTML = "La contraseña debe tener entre 8 y 16 caracteres";
    }
    else{
        document.getElementById('errorContraseña').innerHTML = "";
    }
}

function enter(){
    if(usuario.value != usuarioCorrecto || contraseña.value != claveCorrecta){
        document.getElementById('usuarioIncorrecto').innerHTML = "El usuario o contraseña son incorrectos";
    }
}