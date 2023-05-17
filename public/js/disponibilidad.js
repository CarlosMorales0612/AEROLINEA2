const disponibilidad = () => {



    const departingDate = new Date(document.getElementById("Departing").value);
    const returningDate = new Date(document.getElementById("Returning").value);
    const currentDate = new Date();
    let errorfecha = '';

    // Validación de fechas de salida y regreso
    if (departingDate < currentDate || returningDate < currentDate) {
       errorfecha += "La fecha de salida o de regreso no puede ser anterior a la fecha actual.<br>";

    }

    if (departingDate > returningDate) {
        errorfecha += "La fecha de salida no puede ser posterior a la fecha de regreso.";
    }


const alertElement = document.getElementById("errorfecha")


if (errorfecha.length > 0){
    alertElement.style.display = "block";
    alertElement.innerHTML = errorfecha;
    alertElement.style.color = "white";
}else{
    alertElement.style.display = "none";
}

}

document.querySelector('#btndisponibilidad')
.addEventListener('click' , () => disponibilidad());