function Medir() {
    const base = +document.getElementById("base").value;
    const ladoA = +document.getElementById("ladoA").value;
    const ladoB = +document.getElementById("ladoB").value;

    if (base > ladoB && base > 0 && ladoA > 0 && ladoB > 0) {
        const areaT = (ladoA * (base - ladoB)) / 2;
        const areaR = ladoA * ladoB;
        const area = areaR + areaT;
        window.alert("El total del terreno es :"+ area)
    }
        else {
            alert("Error, los datos ingresados son incorrectos / Base debe ser mayor que el lado derecho")
        }
}