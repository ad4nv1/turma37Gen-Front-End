    let nome = document.getElementById('nome');
    let email = document.getElementById('email');
    let assunto = document.getElementById('assunto');

    let nomeOk = false;
    let emailOk = false;
    let assuntoOk = false;

    let mapa = document.getElementById('mapa');

    function validaNome() {
    let txtNome = document.getElementById('txtNome');

    if (nome.value.length <= 3) {
        txtNome.innerHTML = 'Nome Inválido';
        txtNome.style.color = '#c50000';
        txtNome.style.background = '#151313';
    } else {
        txtNome.innerHTML = 'Nome Válido';
        txtNome.style.color = '#2866da';
        txtNome.style.background = '#151313';
        nomeOk = true;
    }
    }

    function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail');
    
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (email.value.match(regex)) {
        txtEmail.innerHTML = 'Email Válido';
        txtEmail.style.color = '#02c92d';
        txtEmail.style.background = '#151313';
        emailOk = true;
    } else {
        txtEmail.innerHTML = 'Email Inválido';
        txtEmail.style.color = '#02c92d';
        txtEmail.style.background = '#151313';
    }
    }

    function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto');

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML =
        'Texto é muito grande, digite no máximo 100 caracteres';
        txtAssunto.style.color = '#02c92d';
        txtEmail.style.background = '#02c92d';
        txtAssunto.style.display = 'block';
    } else {
        txtAssunto.style.display = 'none';
        assuntoOk = true;
    }
    }

    function mapaZoom() {
    mapa.style.width = '800px';
    mapa.style.height = '600px';
    }

    function mapaNormal() {
    mapa.style.width = '400px';
    mapa.style.height = '250px';
    }