document.getElementById('contactForm').addEventListener('submit', async function(event) {
    // Prevenir o envio do formulário
    event.preventDefault();

    // Limpar mensagens de erro anteriores
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = '';

    // Obter os valores dos campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Array para armazenar mensagens de erro
    let errors = [];

    // Validação do nome
    if (name === '') {
        errors.push('O nome é obrigatório.');
    }

    // Validação do e-mail usando regex
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        errors.push('Por favor, insira um e-mail válido.');
    }

    // Validação do telefone (verificando se é numérico e tem o tamanho esperado)
    const phonePattern = /^[0-9]{10,12}$/;
    if (phone !== '' && !phonePattern.test(phone)) {
        errors.push('Por favor, insira um número de celular válido com 10 a 12 dígitos.');
    }

    // Validação da mensagem
    if (message === '') {
        errors.push('A mensagem é obrigatória.');
    } else if (message.length < 10) {
        errors.push('A mensagem deve ter no mínimo 10 caracteres.');
    }

    // Exibir erros, se existirem
    if (errors.length > 0) {
        // Exibe as mensagens de erro
        errors.forEach(function(error) {
            const p = document.createElement('p');
            p.textContent = error;
            errorMessages.appendChild(p);
        });
    } else {
        // Se não houver erros, enviar o formulário via AJAX
        const formData = new FormData(this);

        try {
            let response = await fetch("https://formspree.io/f/xrbzdydv", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Exibir mensagem de sucesso
                alert('Mensagem enviada com sucesso!');
                this.reset(); // Limpar o formulário
            } else {
                // Exibir mensagem de erro se a resposta não for OK
                errorMessages.innerHTML = "Ocorreu um erro ao enviar sua mensagem. Tente novamente.";
            }
        } catch (error) {
            // Exibir mensagem de erro se algo der errado
            errorMessages.innerHTML = "Ocorreu um erro inesperado. Tente novamente mais tarde.";
        }
    }
});
