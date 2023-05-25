function info_mail() {
    // Obter os valores dos campos do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const data = {
        name: name,
        email: email,
        tel: phone
    };


    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    const allFieldsFilled = name !== '' && email !== '' && phone !== '';


    fetch('/contacts', requestOptions)
        .then(response => {
            if (!response.ok || !allFieldsFilled) {
                throw new Error('Erro ao enviar o formulário.');
            }

            
            Swal.fire({
                icon: 'success',
                title: `Obrigado, ${name}!`,
                text: 'Seu formulário foi enviado com sucesso. Em breve entraremos em contato.',
                timer: 6000,
                showConfirmButton: false
            });
            
            document.getElementById('contactForm').reset();
        })
        .catch(error => {
            console.error(error);
            
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.'
            });
        });
}
