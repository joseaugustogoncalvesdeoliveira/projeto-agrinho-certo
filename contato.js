document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let mensagem = document.getElementById('mensagem').value;

    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    document.getElementById('form-contato').reset(); 
    document.getElementById('mensagem-sucesso').style.display = 'block';  

    setTimeout(function() {
        document.getElementById('mensagem-sucesso').style.display = 'none';
    }, 5000);
});
