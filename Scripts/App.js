var mundoNacimiento;
var tarjetaActual;

$(function() {
    $("#buscar").click(e => {
        buscarPersonaje()
    });

    $("#limpiar").click(e => {
        limpiar()
    });

});

function buscarPersonaje() {
    var id_personaje = $("#input_busqueda").val();
    console.log("ID INGRESADO : " + id_personaje);
    if (validacion(id_personaje)) {
        console.log("entre!");
        getPersonaje(id_personaje);
        $("#input_busqueda").val("");
        $("#input_busqueda").focus();
    }
}

function getPersonaje(id) {

    var promise = $.ajax({
        type: "GET",
        url: `https://swapi.dev/api/people/${id}`,
        success: function(responseAPI) {
            tarjetaActual = responseAPI;
        }
    });
   
    promise.then(function(){
        var promise = $.ajax({
            type: "GET",
            url: `${tarjetaActual.homeworld}`,
            success: function(responseAPI) {
                mundoNacimiento = responseAPI.name;
            },
        });

        promise.then(function(){$.ajax({
                type: "GET",
                url: `https://swapi.dev/api/people/${id}`,
                success: function(responseAPI) {
                    
                    $("#card").append(generarCard(responseAPI, mundoNacimiento));
        
                }
            });
        })
    })
}


function validacion(id) {
    var expresionRegular = /^\d{1,2}$/;

    if (!expresionRegular.test(id)) {
        $("#input_busqueda").focus(); 
        return false; 
    }
    return true;

}


function generarCard(personajeJsObject, mundoDeNacimiento) {
    var card = 
    `<div class="card" style="width:100%;">
        <div class="card-body">
            <h5 class="card-title">${personajeJsObject.name}</h5>
            <div>Altura: ${personajeJsObject.height}</div>  
            <div>Color de Pelo: ${personajeJsObject.hair_color}</div>   
            <div>Color de Piel: ${personajeJsObject.skin_color}</div>   
            <div>Color de Ojos: ${personajeJsObject.eye_color}</div>   
            <div>Año de Nacimiento: ${personajeJsObject.birth_year }</div>   
            <div>Genero: ${personajeJsObject.gender}</div>   
            <div>Mundo de Nacimiento: ${mundoDeNacimiento}</div>
        </div>
    </div>
`
    return card;
}


function limpiar() {
    $("#card").empty()
    $("#input_busqueda").focus();

}