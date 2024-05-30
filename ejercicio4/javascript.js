

function Calculo() {
    const nombre = document.getElementById("nombre").value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const imc = peso / (altura * altura) 
    
    window.alert("Su imc es: "+imc)
    
}