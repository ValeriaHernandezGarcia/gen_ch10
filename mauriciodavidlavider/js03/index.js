
function fechaString() {
    let string = "";
    string += numeroMes(parseInt(document.getElementById('mes').value));
    string += " ";
    string += document.getElementById('dia').value;
    string += ", ";
    string += document.getElementById('año').value;
    return string;
}

function numeroMes(mesEntrada) {
    let mes = "";
    switch (mesEntrada) {
        case 1:
            mes="January"
            break;
        case 2:
            mes="February"
            break;
        case 3:
            mes="March"
            break;
        case 4:
            mes="April"
            break;
        case 5:
            mes="May:"
            break;
        case 6:
            mes="June"
            break;
        case 7:
            mes="July"
            break;
        case 8:
            mes="August"
            break;
        case 9:
            mes="September"
            break;
        case 10:
            mes="October"
            break;
        case 11:
            mes="November"
            break;
        case 12:
            mes="December"
            break;
        default:
            mes="";
    }
    return mes;
}

function seleccionFecha(seleccion) {
    let string = "";
    switch (seleccion) {
        case 0:
            string="Domingo, día no laborable";
            break;
        case 1:
            string="Lunes, día laborable";
            break;
        case 2:
            string="Martes, día laborable";
            break;
        case 3:
            string="Miercoles, día laborable";
            break;
        case 4:
            string="Jueves, día laborable";
            break;
        case 5:
            string="Viernes, día laborable";
            break;
        case 6:
            string="Sabado, día no laborable";
            break;
    }
    return string;
}

function imprimirFecha(seleccion) {
    document.getElementById("resultado").innerHTML = seleccionFecha(seleccion);
}

function calculoFecha() {
    const d = new Date(fechaString());
    let seleccion = d.getDay();
    imprimirFecha(seleccion);
}
