const colorPallets = document.getElementsByClassName('color');

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
}

for (i = 0; i < colorPallets.length; i += 1) {
  mudarCorAleatoria(colorPallets[i]);
}
