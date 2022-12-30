window.onload = function () {

  let corDeFundo = document.querySelector('#cordefundo');
  corDeFundo.addEventListener('change', () => {
    let selected = corDeFundo.selectedOptions[0];
    document.body.style.backgroundColor = selected.value;

    localStorage.setItem('5.4-background-color', selected.value);
  })

  let corDeTexto = document.querySelector('#cordetexto');
  corDeTexto.addEventListener('change', () => {
    let selected = corDeTexto.selectedOptions[0];
    document.body.style.color = selected.value;

    localStorage.setItem('5.4-font-color', selected.value);
  })

  let inputFontSize = document.querySelector('input[name="font-size"]')
  inputFontSize.addEventListener('change', () => {
    let paragraph = document.querySelector('p');
    paragraph.style.fontSize = `${inputFontSize.value}px`;

    localStorage.setItem('5.4-font-size', `${inputFontSize.value}px`);
  })
}