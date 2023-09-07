
function numero(num){

    let total = document.getElementById("pantalla").value
document.getElementById("pantalla").value = total + num
}


function limpiar(){
    document.getElementById("pantalla").value = ""
}


function agregarOperador(operador){
    let total = document.getElementById("pantalla").value
    let ultimaPosicion = total.length -1
    let ultimoIngresado = total[ultimaPosicion]
    if (ultimoIngresado === "+" || ultimoIngresado === "-" || ultimoIngresado === "*" || ultimoIngresado === "/"){
        
    }else {
        document.getElementById("pantalla").value = total + operador
    }
}


function resultado() {
    let total = document.getElementById("pantalla").value 
    total = eval(total)
    document.getElementById("pantalla").value = total
}