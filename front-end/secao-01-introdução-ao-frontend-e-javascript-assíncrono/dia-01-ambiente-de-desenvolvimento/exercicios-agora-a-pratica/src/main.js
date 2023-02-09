import './style.css';
import validator from 'validator';

const btnValidator = document.querySelector('button');
const selectList = document.getElementById('lista');
const textValue = document.getElementById('text');
const textResult = document.querySelector('h2');

btnValidator.addEventListener('click', (event) => {
  event.preventDefault();

  const campos = {
    cpf: validator.isTaxID(textValue.value, 'pt-BR'),
    email: validator.isEmail(textValue.value),
    url: validator.isURL(textValue.value),
    minusculas: validator.isLowercase(textValue.value),
    celular: validator.isMobilePhone(textValue.value, 'pt-BR'),
  };

  textResult.innerHTML = `A validação retorno ${campos[selectList.value]}`;
});
