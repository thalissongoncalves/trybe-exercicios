const colorPallets = document.getElementsByClassName('color');
const buttonRandomColor = document.getElementById('button-random-color');
const colorPaletteStorage = localStorage.getItem('colorPalette');

function mudarCorAleatoria(element) {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  while (r == 255 && g == 255 && b == 255) {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
  }

  const corAleatoria = `rgb(${r}, ${g}, ${b})`;
  element.style.backgroundColor = corAleatoria;

  return corAleatoria;
}

function changeColors() {
  const colors = [];

  for (i = 0; i < colorPallets.length; i += 1) {
    if (i == 0) {
      colorPallets[0].style.backgroundColor = 'black';
      colors.push('black');
    } else {
      const colorResult = mudarCorAleatoria(colorPallets[i], i);
      colors.push(colorResult);
    }
  }

  localStorage.setItem('colorPalette', JSON.stringify(colors));
}

buttonRandomColor.addEventListener('click', changeColors);

if (!colorPaletteStorage) {
  changeColors();
  const colors = [];

  for (i = 0; i < colorPallets.length; i += 1) {
    colors.push(colorPallets[i].style.backgroundColor);
  }

  localStorage.setItem('colorPalette', JSON.stringify(colors));
  console.log(colors);
} else {
  const colors = JSON.parse(colorPaletteStorage);

  for (i = 0; i < colorPallets.length; i += 1) {
    if (i == 0) {
      colorPallets[0].style.backgroundColor = 'black';
    } else {
      colorPallets[i].style.backgroundColor = colors[i];
    }
  }
}
