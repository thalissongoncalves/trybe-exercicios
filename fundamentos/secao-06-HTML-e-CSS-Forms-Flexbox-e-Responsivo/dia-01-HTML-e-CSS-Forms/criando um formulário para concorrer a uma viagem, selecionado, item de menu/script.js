const submitBtn = document.querySelector('.submitbtn');
const check = document.querySelector('#concordo01');
check.addEventListener('change', (event) => {
    if (event.target.checked === false) {
        submitBtn.addEventListener('click', (event) => {
            event.preventDefault();
        })
    }
})

const getName = document.querySelector('#name');
const verifyName = () => {
getName.addEventListener('change', (event) => {
    if (event.target.value.length >= 10 && event.target.value.length <= 40) {
        return true;
    } else {
        return false;
    }
})
}

const getEmail = document.querySelector('#email');
const verifyEmail = () => {
getEmail.addEventListener('change', (event) => {
    if (event.target.value.length >= 10 && event.target.value.length <= 50) {
        return true;
    } else {
        return false;
    }
})
}

const getAnswer = document.querySelector('#resposta');
const verifyAnswer = () => {
getAnswer.addEventListener('change', (event) => {
    if (event.target.value.length <= 500 && event.target.value.length > 0) {
        return true;
    } else {
        return false;
    }
})
}

const verifyAllFunction = () => {
    if (verifyName() === true && verifyEmail() === true && verifyAnswer() === true) {
        submitBtn.addEventListener('click', (event) => {
            return alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
        })
    } else {
        submitBtn.addEventListener('click', (event) => {
            event.preventDefault();
            return alert('Dados inválidos');
        })
    }
}
verifyAllFunction();