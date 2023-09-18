function validar() {
    let nombre = document.getElementById('nombre').value
    let apellido = document.getElementById('apellido').value
    let tipo_documento = document.getElementById('tipo_documento').value
    let numero_documento = document.getElementById('numero_documento').value
    if (nombre.length == 0 || apellido.length == 0 || tipo_documento.length == 0 || numero_documento.length == 0) {
        return false;
    } else {
        return true;
    }

}

function respuestauno() {
    let respuestauno
}

function preguntauno() {
    let preguntauno = document.getElementById('p1');
    preguntauno.innerHTML = `
    `
}