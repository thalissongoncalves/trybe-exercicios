const colorPallets = document.getElementsByClassName('color');
const buttonRandomColor = document.getElementById('button-random-color');
const colorPaletteStorage = localStorage.getItem('colorPalette');
const pixelBoardElement = document.getElementById('pixel-board');
const clearBtn = document.getElementById('clear-board');
const pixelBoardElementsStorage = JSON.parse(
  localStorage.getItem('pixelBoard')
);
const gridColumnsStorage = localStorage.getItem('gridColumns');
const setPixelBtn = document.getElementById('generate-board');
const setPixelInput = document.getElementById('board-size');
let pixelsElementsDefault = 25;

if (!gridColumnsStorage) {
  localStorage.setItem('gridColumns', 'auto auto auto auto auto');
  pixelBoardElement.style.gridTemplateColumns =
    localStorage.getItem('gridColumns');
} else {
  pixelBoardElement.style.gridTemplateColumns =
    localStorage.getItem('gridColumns');
}

localStorage.setItem('colorSelected', 'black');
colorPallets[0].classList.add('selected');
let pixelElementsArray = [];

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
      colorPallets[0].classList.add('selected');
      colors.push('black');
    } else {
      const colorResult = mudarCorAleatoria(colorPallets[i], i);
      colors.push(colorResult);
    }
  }

  localStorage.setItem('colorPalette', JSON.stringify(colors));
}

function cleanSelected() {
  for (i = 0; i < colorPallets.length; i += 1) {
    colorPallets[i].classList.remove('selected');
  }
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

if (!pixelBoardElementsStorage) {
  for (i = 0; i < 25; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = 'white';
    pixel.dataset.index = i;
    pixelBoardElement.appendChild(pixel);
    pixelElementsArray.push(pixel.style.backgroundColor);
  }
} else {
  for (i = 0; i < pixelBoardElementsStorage.length; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = pixelBoardElementsStorage[i];
    pixel.dataset.index = i;
    pixelBoardElement.appendChild(pixel);
    pixelElementsArray.push(pixel.style.backgroundColor);
  }
}

localStorage.setItem('pixelBoard', JSON.stringify(pixelElementsArray));

for (i = 0; i < colorPallets.length; i += 1) {
  colorPallets[i].addEventListener('click', (e) => {
    cleanSelected();
    e.target.classList.add('selected');
    localStorage.setItem('colorSelected', e.target.style.backgroundColor);
  });
}

const pixelElements = document.getElementsByClassName('pixel');

for (i = 0; i < pixelElements.length; i += 1) {
  pixelElements[i].addEventListener('click', (e) => {
    const colorSelected = localStorage.getItem('colorSelected');
    const pixelBoardElements = JSON.parse(localStorage.getItem('pixelBoard'));
    e.target.style.backgroundColor = colorSelected;
    pixelBoardElements[e.target.dataset.index] = colorSelected;
    localStorage.setItem('pixelBoard', JSON.stringify(pixelBoardElements));
  });
}

clearBtn.addEventListener('click', () => {
  for (i = 0; i < pixelElements.length; i += 1) {
    pixelElements[i].style.backgroundColor = 'white';
  }
});

setPixelBtn.addEventListener('click', () => {
  if (!setPixelInput.value) {
    alert('Board inválido!');
  }

  if (setPixelInput.value < 5) {
    setPixelInput.value = 5;
  } else if (setPixelInput.value > 50) {
    setPixelInput.value = 50;
  }

  pixelsElementsDefault = setPixelInput.value * setPixelInput.value;

  pixelElementsArray = [];

  while (pixelBoardElement.firstChild) {
    pixelBoardElement.removeChild(pixelBoardElement.firstChild);
  }

  for (index02 = 0; index02 < pixelsElementsDefault; index02 += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = 'white';
    pixel.dataset.index = index02;
    pixelBoardElement.appendChild(pixel);
    pixelElementsArray.push(pixel.style.backgroundColor);
  }

  let gridTemplateColumns = '';

  for (index03 = 0; index03 < setPixelInput.value; index03 += 1) {
    gridTemplateColumns += 'auto ';
  }

  pixelBoardElement.style.gridTemplateColumns = gridTemplateColumns;
  localStorage.setItem('pixelBoard', JSON.stringify(pixelElementsArray));
  localStorage.setItem('gridColumns', gridTemplateColumns);
});
