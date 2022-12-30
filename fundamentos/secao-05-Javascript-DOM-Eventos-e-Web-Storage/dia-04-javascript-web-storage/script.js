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

  let inputFontSize = document.querySelector('input[name="font-size"]');
  inputFontSize.addEventListener('change', () => {
    let paragraph = document.querySelector('p');
    paragraph.style.fontSize = `${inputFontSize.value}px`;

    localStorage.setItem('5.4-font-size', `${inputFontSize.value}px`);
  })

  let inputLineHeight = document.querySelector('input[name="line-height"]');
  inputLineHeight.addEventListener('change', () => {
    let paragraph = document.querySelector('p');
    paragraph.style.lineHeight = `${inputLineHeight.value}px`;

    localStorage.setItem('5.4-line-height', `${inputLineHeight.value}px`);
  })

  let fontFamily = document.querySelector('#fontfamily');
  fontFamily.addEventListener('change', () => {
    let paragraph = document.querySelector('p');
    paragraph.style.fontFamily = fontFamily.value;

    localStorage.setItem('5.4-font-family', fontFamily.value);
  })

  let savedBackground = localStorage.getItem('5.4-background-color');
  document.body.style.backgroundColor = savedBackground;
  let savedFontColor = localStorage.getItem('5.4-font-color');
  document.body.style.color = savedFontColor;
  let savedFontSize = localStorage.getItem('5.4-font-size');
  document.body.style.fontSize = savedFontSize;
  let savedLineHeight = localStorage.getItem('5.4-line-height');
  document.body.style.lineHeight = savedLineHeight;
  let savedFontFamily = localStorage.getItem('5.4-font-family');
  document.body.style.fontFamily = savedFontFamily;
}