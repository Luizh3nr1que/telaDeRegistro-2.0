let Validator = {
    handleSubmit: (event) => {
        event.preventDefault();

        let send = true;
        let inputs = form.querySelectorAll('input');

        Validator.clearErrors();

        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            let check = Validator.checkInput(input);
            if (check !== true) {
                send = false;
                Validator.showError(input, check);

            }
        }

        if (send) {
            form.submit();
        }
    },
    checkInput: (input) => {
        let rules = input.getAttribute('data-rules');
        if (rules !== null) {
            rules = rules.split('*');
            for (let k in rules) {
                let rDetail = rules[k].split('=');
                switch (rDetail[0]) {
                    case 'required':
                        if (input.value == "") {
                            return 'Campo Obrigatorio';
                        }
                        break;
                }
            }
        }
        return true;
    },
    showError: (input, error) => {
        input.style.borderColor = '#FF0000'

        let errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerHTML = 'Campo não pode ser vazio';

        input.parentElement.insertBefore(errorElement, input.nextElementSibling)

        if (password.value !== passwordConfirmation.value) {
            alert('As Senhas não são Iguais! Verifique Por Favor.')
        }
    },
    clearErrors: () => {
        let inputs = form.querySelectorAll('input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].style = '';
        }

        let errorElements = document.querySelectorAll('.error');
        for (let i = 0; i < errorElements.length; i++) {
            errorElements[i].remove();
        }
    }
};

let form = document.querySelector('.validator');
form.addEventListener('submit', Validator.handleSubmit);


