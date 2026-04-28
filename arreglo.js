let edadesIzquierdo = [];
let edadesDerecho = [];

function agregarEdad() {
    let edad = parseInt(document.getElementById("edad").value);
    if (!isNaN(edad) && edad != 0 && edad > 0) {
        edadesIzquierdo.push(edad);
        pintarArregloIzquierda();
        //pintarArregloDerecha();
    } else {
        alert("⚠️ Ingrese un número valido!");
    }
}

function eliminarIzquierdo(indice) {
    edadesIzquierdo.splice(indice, 1);
    pintarArregloIzquierda();
}

function eliminarDerecho(indice) {
    edadesDerecho.splice(indice, 1);
    pintarArregloDerecha();
}

function moverHaciaDerecha(indice) {
    let valorEdad = edadesIzquierdo[indice]; //obtener valor edad
    edadesDerecho.push(valorEdad); //agregar valor edad
    edadesIzquierdo.splice(indice, 1); // eliminar valor edad
    pintarArregloDerecha();
    pintarArregloIzquierda();
}

function moverHaciaIzquierda(indice) {
    let valorEdad = edadesDerecho[indice]; //obtener valor edad
    edadesIzquierdo.push(valorEdad); //agregar valor edad
    edadesDerecho.splice(indice, 1); // eliminar valor edad
    pintarArregloIzquierda();
    pintarArregloDerecha();
}


function pintarArregloIzquierda() {
    let tbody = document.getElementById("tablaIzquierda");
    let contenidoTabla = "";
    let edadRecuperada;
    //recorrer edades izquierda
    for (let i = 0; i < edadesIzquierdo.length; i++) {
        edadRecuperada = edadesIzquierdo[i]
        contenidoTabla += "<tr>";
        contenidoTabla += "<td>" + edadRecuperada + "</td>";
        contenidoTabla += "<td> <button class='btn-eliminar' onclick='eliminarIzquierdo(" + i + ")'>Eliminar</button></td>";
        contenidoTabla += "<td> <button class='btn-mover' onclick='moverHaciaDerecha(" + i + ")'>➜</button></td>"
        contenidoTabla += "</tr>";
    }
    tbody.innerHTML = contenidoTabla;
}

function pintarArregloDerecha() {
    let tbody = document.getElementById("tablaDerecha");
    let contenidoTabla = "";
    let edadRecuperada;
    //recorrer edades derecha
    for (let i = 0; i < edadesDerecho.length; i++) {
        edadRecuperada = edadesDerecho[i]
        contenidoTabla += "<tr>";
        contenidoTabla += "<td> <button class='btn-mover' onclick='moverHaciaIzquierda(" + i + ")'>⬅</button></td>"
        contenidoTabla += "<td>" + edadRecuperada + "</td>";
        contenidoTabla += "<td> <button class='btn-eliminar' onclick='eliminarDerecho(" + i + ")'>Eliminar</button></td>";
        contenidoTabla += "</tr>";
    }
    tbody.innerHTML = contenidoTabla;
}
