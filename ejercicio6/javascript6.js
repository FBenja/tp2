function validarFormulario() {
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const edad = document.getElementById('edad').value;
    const altura = document.getElementById('altura').value;
    const correo = document.getElementById('correo').value.trim();
    const resultado = document.getElementById('resultado');

    let msj = '';
    let Valid = true;

    if (nombre === '' || nombre.length > 50) {
        msj += 'Nombre no debe estar vacio, maximos caracteres 50. ';
        Valid  = false;
    }
    
    if (apellido === '' || apellido.length > 50) {
        msj += 'Apellido no debe estar vacio, maximos caracteres 50. ';
        Valid  = false;
    }
    
    if (edad < 0 || edad < 18) {
        msj += 'La edad no debe ser menor a 0 y debe ser mayor de edad. ';
        Valid  = false;
    }
    
    if (altura < 0 || altura > 230) {
        msj += 'La altura no debe ser menor a 0 y no debe ser mayor a 230 cm. ';
        Valid  = false;
    }
    
    if (correo === '' || !correo.includes('@')) {
        msj += 'El correo electrónico no debe estar vacío y debe incluir "@". ';
        Valid  = false;
    }

    resultado.textContent = msj;

    if (Valid ) {
        resultado.style.color = 'green';
        resultado.textContent = 'Todo okey';
    } else {
        resultado.style.color = 'red';
    }
}