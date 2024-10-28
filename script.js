//------------------------------------------------PRECARGAS DE DATOS Y DEFINICION DE CLASES----------------------------------------------------------------------

let listadoUsuarios = ["Pepito", "Juanita", "Mario", "Marta", "Jose", "Juan", "Gabriela", "Mariela", "Novas", "Lapicada", "Barmadera", "Ricacomida", "Marmol", "Vangogh", "Salateatro", "Solis"];
let listadoContrasenas = ["Pepito12345", "Juanita12345", "Mario12345", "Marta12345", "Jose12345", "Juan12345", "Gabriela12345", "Mariela12345", "Novas12345", "Lapicada12345", "Barmadera12345", "Ricacomida12345", "Marmol12345", "Vangogh12345", "Salateatro12345", "Solis12345"];
let listadoUsuariosPersona = [
    {
        "id": 1,
        "nombre": "Pepito",
        "usuario": "Pepito",
        "password": "Pepito12345",
    },
    {
        "id": 2,
        "nombre": "Juanita",
        "usuario": "Juanita",
        "password": "Juanita12345",
    },
    {
        "id": 3,
        "nombre": "Mario",
        "usuario": "Mario",
        "password": "Mario12345",
    },
    {
        "id": 4,
        "nombre": "Marta",
        "usuario": "Marta",
        "password": "Marta12345",
    },
    {
        "id": 5,
        "nombre": "Jose",
        "usuario": "Jose",
        "password": "Jose12345",
    },
    {
        "id": 6,
        "nombre": "Juan",
        "usuario": "Juan",
        "password": "Juan12345",
    },
    {
        "id": 7,
        "nombre": "Gabriela",
        "usuario": "Gabriela",
        "password": "Gabriela12345",
    },
    {
        "id": 8,
        "nombre": "Mariela",
        "usuario": "Mariela",
        "password": "Mariela12345",
    },
    {
        "id": 9,
        "nombre": "Novas",
        "usuario": "Novas",
        "password": "Novas12345",
    },
];


let listadoUsariosLocal = [
    {
        "id": 10,
        "nombre": "Restaurant La Picada",
        "usuario": "Lapicada",
        "password": "Lapicada12345",
        "tipo": "Restaurant",
        "direccion": "Av. Picada 1234",
        "cupoMax": 30,
        "foto": "imgs/lapicada.jpg",
        "estado": "habilitado"
    },
    {
        "id": 11,
        "nombre": "Bar Madera",
        "usuario": "Barmadera",
        "password": "Barmadera12345",
        "tipo": "Restaurant",
        "direccion": "Av. Madera 1234",
        "cupoMax": 20,
        "foto": "imgs/barmadera.jpg",
        "estado": "habilitado"
    },
    {
        "id": 12,
        "nombre": "Restaurant Rica Comida",
        "usuario": "Ricacomida",
        "password": "Ricacomida12345",
        "tipo": "Restaurant",
        "direccion": "Av. Comida 1234",
        "cupoMax": 20,
        "foto": "imgs/restaurantricacomida.jpg",
        "estado": "habilitado"
    },
    {
        "id": 13,
        "nombre": "Museo Del Marmol",
        "usuario": "Marmol",
        "password": "Marmol12345",
        "tipo": "Museo",
        "direccion": "Av. Marmol 1234",
        "cupoMax": 20,
        "foto": "imgs/museodelmarmol.jpg",
        "estado": "habilitado"
    },
    {
        "id": 14,
        "nombre": "Museo Van Gogh",
        "usuario": "Vangogh",
        "password": "Vangogh12345",
        "tipo": "Museo",
        "direccion": "Av. Van Gogh 1234",
        "cupoMax": 20,
        "foto": "imgs/museovangogh.jpg",
        "estado": "habilitado"
    },
    {
        "id": 15,
        "nombre": "Sala Teatro",
        "usuario": "Salateatro",
        "password": "Salateatro12345",
        "tipo": "Teatro",
        "direccion": "Av. Teatro 1234",
        "cupoMax": 30,
        "foto": "imgs/salateatro.jpg",
        "estado": "habilitado"
    },
    {
        "id": 16,
        "nombre": "Teatro Solis",
        "usuario": "Solis",
        "password": "Solis12345",
        "tipo": "Teatro",
        "direccion": "Av. Solis 1234",
        "cupoMax": 50,
        "foto": "imgs/teatrosolis.jpg",
        "estado": "habilitado"
    },
];

let listadoReservas = [
    {
        "id": 1,
        "local": "Barmadera",
        "cupos": 3,
        "estado": "pendiente",
        "persona": "Pepito",
        "calificacion": null
    },
    {
        "id": 2,
        "local": "Lapicada",
        "cupos": 4,
        "estado": "pendiente",
        "persona": "Juanita",
        "calificacion": null
    },
    {
        "id": 3,
        "local": "Ricacomida",
        "cupos": 2,
        "estado": "pendiente",
        "persona": "Mario",
        "calificacion": null
    },
    {
        "id":4,
        "local": "Lapicada",
        "cupos": 2,
        "estado": "finalizada",
        "persona": "Marta",
        "calificacion": 4
    },
    {
        "id":5,
        "local": "Salateatro",
        "cupos": 2,
        "estado": "pendiente",
        "persona": "Marta",
        "calificacion": null
    },
    {
        "id":6,
        "local": "Solis",
        "cupos": 1,
        "estado": "pendiente",
        "persona": "Jose",
        "calificacion": null
    },
    {
        "id":7,
        "local": "Solis",
        "cupos": 1,
        "estado": "finalizada",
        "persona": "Jose",
        "calificacion": 1
    },
    {
        "id":8,
        "local": "Vangogh",
        "cupos": 4,
        "estado": "finalizada",
        "persona": "Juan",
        "calificacion": 5
    },
    {
        "id":9,
        "local": "Marmol",
        "cupos": 2,
        "estado": "pendiente",
        "persona": "Juan",
        "calificacion": null
    },
]

class UsuarioPersona {
    constructor(id, nombre, usuario, password) {
        this.id = id
        this.nombre = nombre;
        this.usuario = usuario;
        this.password = password;
    };
};

class Reservas {
    constructor(id, local, cupos, estado, persona, calificacion) {
        this.id = id;
        this.local = local;
        this.cupos = cupos;
        this.estado = estado;
        this.persona = persona;
        this.calificacion = calificacion;
    };
};

class UsuarioLocal {
    constructor(id, nombre, usuario, password, tipo, direccion, cupoMax, foto, estado) {
        this.id = id;
        this.nombre = nombre;
        this.usuario = usuario;
        this.password = password;
        this.tipo = tipo;
        this.direccion = direccion;
        this.cupoMax = cupoMax;
        this.foto = foto;
        this.estado = estado;
    }
}

//------------------------------------------------------------------------------------REGISTRO PERSONA------------------------------------------------------------------------

document.querySelector("#botonRegistrarse").addEventListener("click", registro);
document.querySelector("#botonBorrarRegistros").addEventListener("click", borrarRegistros);

let nombreDeUsuarioIngresadoRegistro;
let pswdIngresadaRegistro;
let nombreIngresadoRegistro;
let abecedario = "abcdefghijklmnñopqrstuvwxyz";


function generadorIDs() {
    let i = 16;
    return function() {
        return i++;
    };
};

function generadorIDsReservas() {
    let i = 9;
    return function() {
        return i++;
    };
};

let idReservas = generadorIDsReservas();

let id = generadorIDs();

function borrarRegistros() {
    listadoContrasenas = [];
    listadoUsuarios = [];
    listadoUsuariosPersona = [];
};

function registro() {
    nombreIngresadoRegistro = document.querySelector("#nombreCliente").value;
    nombreDeUsuarioIngresadoRegistro = document.querySelector("#usuarioCliente").value;
    pswdIngresadaRegistro = document.querySelector("#pswdCliente").value;

    if(isNaN(nombreDeUsuarioIngresadoRegistro) && isNaN(nombreIngresadoRegistro) && comprobarCaracteresAlfabeticos(nombreDeUsuarioIngresadoRegistro) && comprobarCaracteresAlfabeticos(nombreIngresadoRegistro)) {
        if(listadoUsuarios.indexOf(nombreDeUsuarioIngresadoRegistro) === -1) {
            if(comprobarPswd(pswdIngresadaRegistro)) {
                listadoUsuarios.push(nombreDeUsuarioIngresadoRegistro);
                listadoContrasenas.push(pswdIngresadaRegistro);  
                listadoUsuariosPersona.push(new UsuarioPersona(id(), nombreIngresadoRegistro, nombreDeUsuarioIngresadoRegistro, pswdIngresadaRegistro));
                alert("Registro completado satisfactoriamente");
                cambiarSeccion("seccionLogin")
                console.log(listadoUsuarios)
            } else {
                alert("Ingrese una contraseña valida");
            };
        } else {
            alert("El usuario ingresado ya existe")
        };        
    } else {
        alert("Ingrese un nombre/usuario valido");
    };
};

function comprobarPswd(password) {
    let hasMayus = false;
    let hasMinus = false;
    let hasNum = false;
    if(password.length < 5) {
        alert("La contraseña debe contener minimo 6 caracteres")
    } else {
        do {
            for(let i = 0; i < password.length; i++) {
                if(!isNaN(password.charAt(i))) {
                    hasNum = true;
                } else if(password.charAt(i) === password.charAt(i).toUpperCase()) {
                    hasMayus = true;
                } else if(password.charAt(i) === password.charAt(i).toLowerCase()) {
                    hasMinus = true;
                };
            };
        } while(hasMayus === false && hasMinus === false && hasNum === false);
    };
    if(hasMayus === true && hasMinus === true && hasNum === true) {
        return true;
    } else {
        return false;
    };
};


function comprobarCaracteresAlfabeticos(string) {
    let string2 = "";
    for(i = 0; i < string.length; i++) {
        let caracter = string.charAt(i);
        for(j = 0; j < abecedario.length; j++) {
            if(abecedario.charAt(j) === caracter.toLowerCase()) {
                string2 += abecedario.charAt(j);
            };
        };
    };
    if (string2 === string.toLowerCase()) {
        return true;
    } else {
        return false;
    };
};

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let usuarioActual;
//------------------------------------------------------------LOGIN----------------------------------------------------------------------------------------------------------------------
document.querySelector("#botonIngresar").addEventListener("click", ingresar);
document.querySelector("#botonRegistro").addEventListener("click", mostrarRegistro);

function mostrarRegistro() {
    cambiarSeccion("seccionRegistro");
};

function ingresar() {
    usuarioIngresado = document.querySelector("#usuario").value;
    contraseñaIngresada = document.querySelector("#contraseña").value;
    tipoUsuarioIngresado = document.querySelector("#tipoUsuario").value;

    switch (tipoUsuarioIngresado) {
        case "L":
            if(comprobarIngreso(listadoUsariosLocal)) {
                usuarioActual = usuarioIngresado;
                alert("Ingreso completado satisfactoriamente");
                cambiarSeccion("seccionHomeLocal");
                actualizarInfoLocal();
                mostrarBotones("local");
            } else {
                alert("Usuario y/o contraseña incorrecto");
            }
        break;
        case "P":
            if(comprobarIngreso(listadoUsuariosPersona)) {
                usuarioActual = usuarioIngresado;
                alert("Ingreso completado satisfactoriamente");
                cambiarSeccion("seccionReservasPersona");
                mostrarBotones("persona");
                actualizarInfoParaReservas();
            } else {
                alert("Usuario y/o contraseña incorrecto");
            }
        break;
        default:
            alert("Por favor seleccione un tipo de usuario");
    };
};

let usuarioComprobado = false;

function comprobarIngreso(tipoUsuario) {
    for(let i = 0; i < tipoUsuario.length; i++){
        if(tipoUsuario[i].usuario === usuarioIngresado && tipoUsuario[i].password === contraseñaIngresada) {
            usuarioComprobado = true;
        }
    };
    return usuarioComprobado;
};

//-----------------------------------------------------------LOCALES-----------------------------------------------------------------------------------------------------------

let usuarioEnSesion;

function actualizarInfoLocal() {
    for (let i = 0; i < listadoUsariosLocal.length; i++) {
        if (listadoUsariosLocal[i].usuario === usuarioActual) {
            usuarioEnSesion = listadoUsariosLocal[i];
            document.querySelector("#nombreLocal").innerHTML = `${listadoUsariosLocal[i].nombre}`;
            document.querySelector("#nombreLocal2").innerHTML = `${listadoUsariosLocal[i].nombre}`;
            document.querySelector("#tipoLocal").innerHTML = `Tipo: ${listadoUsariosLocal[i].tipo}`;
            document.querySelector("#direccionLocal").innerHTML = `Direccion: ${listadoUsariosLocal[i].direccion}`;
            document.querySelector("#idLocal").innerHTML = `ID: ${listadoUsariosLocal[i].id}`;
            document.querySelector("#fotoLocal").src = `${listadoUsariosLocal[i].foto}`;
            document.querySelector("#cupoMax").value = `${listadoUsariosLocal[i].cupoMax}`;
            document.querySelector("#disponibilidad").value = `${listadoUsariosLocal[i].estado}`;
            porcentajeOcupacion();
            document.querySelector("#promedioLocal").innerHTML = `Promedio de calificaciones: ${promedioCalificaciones(usuarioActual)}`;
            totalReservasLocal(usuarioActual);
        };
        const liParaAgregar = document.createElement("li");
        const nodoParaAgregar = document.createTextNode(`Promedio de calificacion de ${listadoUsariosLocal[i].nombre}: ${promedioCalificaciones(listadoUsariosLocal[i].usuario)}`);
        liParaAgregar.appendChild(nodoParaAgregar);
        document.querySelector("#promedioTodosLocales").appendChild(liParaAgregar);
    };
};

document.querySelector("#botonGuardarDatosLocal").addEventListener("click", guardarCambiosLocal);


let nuevoCupoMax;
let nuevoEstado;


function guardarCambiosLocal() {
    nuevoCupoMax = document.querySelector("#cupoMax").value;
    nuevoEstado = document.querySelector("#disponibilidad").value;
    for(const obj of listadoUsariosLocal) {
        if(obj.id === usuarioEnSesion.id) {
            obj.cupoMax = nuevoCupoMax;
            obj.estado = nuevoEstado;
        };
    };
    alert("Cambios guardados satisfactoriamente");
    porcentajeOcupacion();
};

let cuposOcupados = 0;

function porcentajeOcupacion() {
    cuposOcupados = 0;
    for(let i = 0; i < listadoReservas.length; i++) {
        if(listadoReservas[i].local === usuarioActual && listadoReservas[i].estado === "pendiente") {
            cuposOcupados += Number(listadoReservas[i].cupos);
        };
    };
    document.querySelector("#porcentajeLocal").innerHTML = `Porcentaje de ocupación: ${cuposOcupados * 100 / usuarioEnSesion.cupoMax}%`;
};

let totalReservas = 0;
let totalCalificaciones = 0;
let totalReservasFinalizadas = 0;

function promedioCalificaciones(usuarioLocal) {
    totalCalificaciones = 0;
    totalReservasFinalizadas = 0;
    for(let i = 0; i < listadoReservas.length; i++) {
        if(listadoReservas[i].local === usuarioLocal && listadoReservas[i].estado === "finalizada") {
            totalCalificaciones += Number(listadoReservas[i].calificacion);
            totalReservasFinalizadas++;   
        };
    };
    if (totalReservasFinalizadas === 0) {
        return "El local no tiene calificaciones";
    } else {
        return Number(totalCalificaciones / totalReservasFinalizadas);
    };    
};

function totalReservasLocal(usuarioLocal) {
    totalReservas = 0;
    for(let i = 0; i < listadoReservas.length; i++) {
        if(listadoReservas[i].local === usuarioLocal) {
            totalReservas++;
        };
    };
    document.querySelector("#totalReservasLocal").innerHTML = `Total de reservas realizadas en el local: ${Number(totalReservas)}`;
};

document.querySelector("#botonListarReservas").addEventListener("click", llamarFuncion);

function llamarFuncion() {
    listarReservas(usuarioActual);
}

let paraAgregar = "";

function listarReservas(usuarioLocal) {
    document.querySelector("#listadoReservasPendientes").innerHTML = "";
    for(let i = 0; i < listadoReservas.length; i++) {
        if(listadoReservas[i].local === usuarioLocal && listadoReservas[i].estado === "pendiente"){
            paraAgregar += 
            `<li id="${listadoReservas[i].id}">
                <p>Cliente: ${listadoReservas[i].persona}</p>
                <select onchange="${listadoReservas[i].estado = "finalizada"}" id="estadoReserva${listadoReservas[i].id}">
                    <option value="pendiente" selected>Pendiente</option>
                    <option value="finalizada">Finalizada</option>
                </select> 
            </li>`;
        };
    }; 
    document.querySelector("#listadoReservasPendientes").innerHTML = paraAgregar;
};

document.querySelector("#botonGuardarCambiosReservasLocal").addEventListener("click", guardarCambiosReservasLocal);

function guardarCambiosReservasLocal() {
    alert("Cambios guardados satisfactoriamente");
    console.log(listadoReservas);
}

function actualizarInfoParaReservas() {
    for(let i = 0; i < listadoUsariosLocal.length; i++) {
        document.querySelector("#localReserva").innerHTML += `<option value=${listadoUsariosLocal[i].usuario}>${listadoUsariosLocal[i].nombre}</option>`;
    };
    let elements = "";
    for(let i = 0; i < listadoReservas.length; i++) {
        let localReserva = buscarPorUsuario(listadoReservas[i].local, listadoUsariosLocal);
        if(listadoReservas[i].persona === usuarioActual) {
            let accion = "";
            if(listadoReservas[i].estado === "pendiente") {
                accion = `<button class="boton botonCancelarReserva" data-reserva="${listadoReservas[i].id}">Cancelar reserva</button>`
            } else if(listadoReservas[i].calificacion === null && listadoReservas[i].estado === "finalizada") {
                accion = 
                `<select id="calificacionReserva${listadoReservas[i].id}">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button class="boton" id="botonCalificarReserva${listadoReservas[i].id}">Calificar reserva</button>`
            } else {
                accion = "CANCELADA";
            }
            elements += 
            `<tr>
                <td>${listadoReservas[i].id}</td>
                <td>${listadoReservas[i].local}</td>
                <td>${listadoReservas[i].estado}</td>
                <td><img src="${localReserva.foto}" alt="fotoLocal"></td>
                <td>${accion}</td>
            </tr>`
        };
    };
    document.querySelector("#listadoReservas").innerHTML = elements;
    let botonesCancelar = document.querySelectorAll(".botonCancelarReserva");
    for(let i = 0; i < botonesCancelar.length; i++) {
        botonesCancelar[i].addEventListener("click", cancelarReserva);
    }
};

document.querySelector("#botonSolicitarReserva").addEventListener("click", solicitarReserva);

function solicitarReserva() {
    let localSeleccionado = document.querySelector("#localReserva").value;
    let idReserva = idReservas();
    let personaQueReserva = usuarioActual;
    let cuposReservados = document.querySelector("#cuposReserva").value;

    listadoReservas.push(new Reservas(idReserva, localSeleccionado, cuposReservados, "pendiente", personaQueReserva));
    console.log(listadoReservas);
    actualizarInfoParaReservas();
};

function buscarPorUsuario(usuario, array) {
    let respuesta = false;
    for(let i = 0; i < array.length; i++) {
        if(array[i].usuario === usuario) {
            respuesta = array[i];
            break;
        };
    };
    return respuesta;
};

function cancelarReserva() {
    let id = this.getAttribute("data-reserva");
    console.log(id);
    for(let i = 0; i < listadoReservas.length; i++) {
        if(Number(listadoReservas[i].id) === Number(id)) {
            console.log(listadoReservas[i]);
            listadoReservas[i].estado = "cancelada";
            alert("Reserva cancelada con exito");
            actualizarInfoParaReservas();
            break;
        };
    };
};
