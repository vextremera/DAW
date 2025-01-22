const sumbitButton = document.getElementById('button-submit');
const netejaButton = document.getElementById('button-neteja');

sumbitButton.addEventListener('click', function (event) {

    event.preventDefault(); // evita que el formulari s'envia, si ho fa, donaria error

    if(esBuit()) {
        validarContrasenya();
        validarRepetida();
        validarEmail();
    }

    validarDataNaixement();
    validarRadio();
});
  
netejaButton.addEventListener('click', function () {
    netejarTot();
});

function esBuit() {
    const obligatoris = document.querySelectorAll('.obligatori');
    let isValid = true; // Asumimos que todo es válido
    let primerObligatorio = null;

    obligatoris.forEach(input => {

        let errorMessage = input.parentElement.querySelector('.input-error');

        if (!errorMessage) {
            errorMessage = document.createElement('p');
            errorMessage.classList.add('input-error'); // Añadimos una clase
            errorMessage.style.color = 'red';
            errorMessage.style.fontWeight = 'bold';
            errorMessage.style.fontSize = '12px';
            input.parentElement.appendChild(errorMessage);
        }

        if(!(input.value.trim())) {
            input.style.borderColor = 'red';
            errorMessage.textContent = 'Camp obligatori';
            if(!primerObligatorio) primerObligatorio = input;
            isValid = false; // Si encuentra algún campo vacío, marca el formulario como no válido
        } else {
            input.style.borderColor = '#9f9f9f';
            errorMessage.textContent = '';
        }
    });

    if (primerObligatorio) primerObligatorio.focus(); // Encuentra el primer campo obligatorio y le pone focus

    return isValid;
}

function validarRepetida() {
    const contrasenya = document.getElementById('contrasenya');
    const repetida = document.getElementById('repetir_contrasenya');

    // Busca o crea el mensaje de error en el campo "repetir_contrasenya"
    let errorMessage = repetida.parentElement.querySelector('.input-error');

    // Compara los valores de las contraseñas
    if (repetida.value !== contrasenya.value) {
        contrasenya.style.borderColor = 'red';
        repetida.style.borderColor = 'red';
        errorMessage.textContent = 'Les contrasenyes no coincideixen';
        contrasenya.focus();
    } else {
        contrasenya.style.borderColor = '#9f9f9f';
        repetida.style.borderColor = '#9f9f9f';
        errorMessage.textContent = '';
    }
}

function validarContrasenya(){
    const contrasenya = document.getElementById('contrasenya');
    const passwd = contrasenya.value;
    const passwdRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;

    let errorMessage = contrasenya.parentElement.querySelector('.input-error');

    if (passwdRegex.test(passwd)) {
        contrasenya.style.borderColor = '#9f9f9f';
        errorMessage.textContent = '';
        return;
    } else {
        contrasenya.style.borderColor = 'red';
        errorMessage.textContent = 'Format incorrecte. Ha de tenir mínim 8 caràcters i incloir al menys 1 MAYUS, NUMBER, SIGN';
        contrasenya.focus();
    }
}

function validarEmail() {
    const email = document.getElementById('email');
    const emailInput = email.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|es|net|cat)$/;

    let errorMessage = email.parentElement.querySelector('.input-error');

    // Validar el email
    if (emailRegex.test(emailInput)) {
        email.style.borderColor = '#9f9f9f';
        errorMessage.textContent = '';
        return;
    } else {
        email.style.borderColor ='red';
        errorMessage.textContent = 'Format d\'email incorrecte. Ex: PerePi@exemple.cat';
        email.focus();
    }
}

function validarRadio() {
    const radioButtons = document.querySelectorAll('input[name="sexe"]');
    const errorMessage = document.querySelector('#div-sexe .input-error');
    let isValid = false;

    // Recorre todos los radio buttons y verifica si alguno está seleccionado
    radioButtons.forEach(radio => {
        if (radio.checked) {
            isValid = true;
            errorMessage.textContent = ''; // Si está seleccionado, elimina el mensaje de error
        }
    });

    if (!isValid) {
        errorMessage.textContent = 'Camp obligatori. Selecciona un sexe'; // Muestra el mensaje de error
    }

    return isValid;
}

function validarDataNaixement() {
    const selectDia = document.getElementById('select-dia');
    const selectMes = document.getElementById('select-mes');
    const selectAny = document.getElementById('select-any');
    const dia = document.getElementById('select-dia').value;
    const mes = document.getElementById('select-mes').value;
    const any = document.getElementById('select-any').value;
    const errorMessage = document.querySelector('#div-data-naixement .input-error');

    // Verifica si los campos contienen los valores "Dia", "Mes", "Any" o "Abans..."
    if (dia === 'placeholder' || mes === 'placeholder' || any === 'placeholder' || any === 'Abans...') {
        selectDia.style.borderColor ='red';
        selectMes.style.borderColor ='red';
        selectAny.style.borderColor ='red';
        errorMessage.style.color = 'red';
        errorMessage.style.fontWeight = 'bold';
        errorMessage.style.fontSize = '12px';
        errorMessage.textContent = 'Camp obligatori. Completa la data de naixement.';
        return false;
    } else {
        selectDia.style.borderColor = '#9f9f9f';
        selectMes.style.borderColor = '#9f9f9f';
        selectAny.style.borderColor = '#9f9f9f';
        errorMessage.textContent = '';
    }

    return true;
}

function generarOpcions_DIA() {
    const select = document.getElementById('select-dia');
    const dies = 31;
    
    for (let i = 1; i <= dies; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        select.appendChild(option);
    }
    
}

function generarOpcions_MES() {
    const select = document.getElementById('select-mes');
    const mesos = 12;
    
    for (let i = 1; i <= mesos; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        select.appendChild(option);
    }
    
}

function generarOpcions_ANY() {
    const select = document.getElementById('select-any');
    const startYear = 1960;
    const actualYear = new Date().getFullYear();

    for (let year = startYear -1; year <= actualYear; year++) {

        if (year < startYear) { 
            let option = document.createElement('option');
            option.value = "Abans...";
            option.textContent = "Abans...";
            select.appendChild(option);
        }

        let option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        select.appendChild(option);
    }
}

generarOpcions_DIA();
generarOpcions_MES();
generarOpcions_ANY();

function togglePasswordVisibility(buttonId, inputId, iconId) {
    const button = document.getElementById(buttonId);
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);

    button.addEventListener('click', () => {
        const currentType = input.getAttribute('type');
        if (currentType === 'password') {
            input.setAttribute('type', 'text');
            icon.setAttribute('src', 'img/show.jpg');
            icon.setAttribute('alt', 'Ocultar Contraseña');
        } else {
            input.setAttribute('type', 'password');
            icon.setAttribute('src', 'img/hide.jpg');
            icon.setAttribute('alt', 'Mostrar Contraseña');
        }
    });
}

// Aplica la función a cada campo
togglePasswordVisibility('toggle_contrasenya', 'contrasenya', 'icon_contrasenya');
togglePasswordVisibility('toggle_repetir_contrasenya', 'repetir_contrasenya', 'icon_repetir_contrasenya');

function netejarTot() {
    const inputs = document.querySelectorAll('input');
    const selects = document.querySelectorAll('select');
    const errorMessages = document.querySelectorAll('.input-error');
    const imgs = document.querySelectorAll('img');

    inputs.forEach(input => {
        input.value = '';
        if (input.type === 'radio') input.checked = false;
        input.style.borderColor = '#9f9f9f';
    });

    selects.forEach(select => {
        select.value = 'placeholder';
        select.style.borderColor = '#9f9f9f';
    });

    errorMessages.forEach(errorMessage => {
        errorMessage.textContent = '';
    });

    imgs.forEach(img => { 
        img.setAttribute('src', 'img/hide.jpg');
        img.setAttribute('alt', 'Mostrar Contraseña');
    });
}