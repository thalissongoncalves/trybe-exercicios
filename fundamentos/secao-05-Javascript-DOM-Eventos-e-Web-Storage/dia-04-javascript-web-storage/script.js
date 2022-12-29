const body = document.getElementById('body');
body.style.textAlign = 'center';
body.style.padding = '0';
body.style.margin = '0';

const subTitle = document.querySelector('.subtitle');
subTitle.style.fontStyle = 'oblique';
subTitle.style.fontWeight = 'bold';

const divCreate = () => {
  const border = document.querySelector('.border');
  border.style.border = '1px';
  border.style.borderStyle = 'solid';
  border.style.borderColor = 'green';
  border.style.height = '250px';
  border.style.width = '100%';
  const divChild01 = document.createElement('div');
  divChild01.style.width = '150px';
  divChild01.style.border = '1px';
  divChild01.style.borderStyle = 'solid';
  
  divChild01.style.marginTop = '25px';
  
  divChild01.style.display = 'inline-block';
  divChild01.className = 'divChild01';
  border.appendChild(divChild01);
  const divChild02 = document.createElement('div');
  divChild02.style.width = '150px';
  divChild02.style.border = '1px';
  divChild02.style.borderStyle = 'solid';
  divChild02.style.marginLeft = '100px';
  divChild02.style.marginTop = '25px';
  divChild02.style.display = 'inline-block';
  divChild02.className = 'divChild02';
  border.appendChild(divChild02);
  const divChild03 = document.createElement('div');
  divChild03.style.width = '150px';
  divChild03.style.border = '1px';
  divChild03.style.borderStyle = 'solid';
  divChild03.style.marginLeft = '100px';
  divChild03.style.marginTop = '25px';
  divChild03.style.display = 'inline-block';
  divChild03.className = 'divChild03';
  border.appendChild(divChild03);
  const divChild04 = document.createElement('div');
  divChild04.style.width = '150px';
  divChild04.style.border = '1px';
  divChild04.style.borderStyle = 'solid';
  divChild04.style.marginLeft = '100px';
  divChild04.style.marginTop = '25px';
  divChild04.style.display = 'inline-block';
  divChild04.className = 'divChild04';
  border.appendChild(divChild04);
  const divChild05 = document.createElement('div');
  divChild05.style.width = '150px';
  divChild05.style.border = '1px';
  divChild05.style.borderStyle = 'solid';
  divChild05.style.marginLeft = '100px';
  divChild05.style.marginTop = '25px';
  divChild05.style.display = 'inline-block';
  divChild05.className = 'divChild05';
  border.appendChild(divChild05);
}

divCreate();

const divChild01Personalization = () => {
  const divChild01 = document.querySelector('.divChild01');
  const title01 = document.createElement('h1');
  title01.innerHTML = 'Cor de fundo';
  title01.style.fontSize = '20px';
  divChild01.appendChild(title01);
  const button01 = document.createElement('button');
  button01.innerHTML = 'white';
  button01.style.display = 'block';
  button01.style.margin = 'auto';
  button01.style.width = '100%';
  button01.addEventListener('click', () => {
    localStorage.setItem('cordefundo', 'white');
    if(localStorage.getItem('cordefundo') === 'white') {
      const body = document.querySelector('body');
      body.style.backgroundColor = 'white';
    }
  })
  divChild01.appendChild(button01);
  const button02 = document.createElement('button');
  button02.innerHTML = 'black';
  button02.style.display = 'block';
  button02.style.margin = 'auto';
  button02.style.width = '100%';
  button02.addEventListener('click', () => {
    localStorage.setItem('cordefundo', 'black');
    if(localStorage.getItem('cordefundo') === 'black') {
      const body = document.querySelector('body');
      body.style.backgroundColor = 'black';
    }
  })
  divChild01.appendChild(button02);
  const button03 = document.createElement('button');
  button03.innerHTML = 'green';
  button03.style.display = 'block';
  button03.style.margin = 'auto';
  button03.style.width = '100%';
  button03.addEventListener('click', () => {
    localStorage.setItem('cordefundo', 'green');
    if(localStorage.getItem('cordefundo') === 'green') {
      const body = document.querySelector('body');
      body.style.backgroundColor = 'green';
    }
  })
  divChild01.appendChild(button03);
  const button04 = document.createElement('button');
  button04.innerHTML = 'blue';
  button04.style.display = 'block';
  button04.style.margin = 'auto';
  button04.style.width = '100%';
  button04.addEventListener('click', () => {
    localStorage.setItem('cordefundo', 'blue');
    if(localStorage.getItem('cordefundo') === 'blue') {
      const body = document.querySelector('body');
      body.style.backgroundColor = 'blue';
    }
  })
  divChild01.appendChild(button04);
  const button05 = document.createElement('button');
  button05.innerHTML = 'yellow';
  button05.style.display = 'block';
  button05.style.margin = 'auto';
  button05.style.width = '100%';
  button05.addEventListener('click', () => {
    localStorage.setItem('cordefundo', 'yellow');
    if(localStorage.getItem('cordefundo') === 'yellow') {
      const body = document.querySelector('body');
      body.style.backgroundColor = 'yellow';
    }
  })
  divChild01.appendChild(button05);
}

divChild01Personalization();

const divChild02Personalization = () => {
  const divChild02 = document.querySelector('.divChild02');
  const title = document.createElement('h1');
  title.innerHTML = 'Cor da fonte';
  title.style.fontSize = '20px';
  divChild02.appendChild(title);
  const button01 = document.createElement('button');
  button01.innerText = 'black';
  button01.style.width = '100%';
  button01.addEventListener('click', () => {
    localStorage.setItem('cordafonte', 'black');
    if(localStorage.getItem('cordafonte') === 'black') {
      const body = document.querySelector('body');
      body.style.color = 'black';
    }
  })
  divChild02.appendChild(button01);
  const button02 = document.createElement('button');
  button02.innerText = 'red';
  button02.style.width = '100%';
  button02.addEventListener('click', () => {
    localStorage.setItem('cordafonte', 'red');
    if(localStorage.getItem('cordafonte') === 'red') {
      const body = document.querySelector('body');
      body.style.color = 'red';
    }
  })
  divChild02.appendChild(button02);
  const button03 = document.createElement('button');
  button03.innerText = 'white';
  button03.style.width = '100%';
  button03.addEventListener('click', () => {
    localStorage.setItem('cordafonte', 'white');
    if(localStorage.getItem('cordafonte') === 'white') {
      const body = document.querySelector('body');
      body.style.color = 'white';
    }
  })
  divChild02.appendChild(button03);
}

divChild02Personalization();

const divChild03Personalization = () => {
  const divChild03 = document.querySelector('.divChild03');
  const title = document.createElement('h1');
  title.innerHTML = 'Tamanho da fonte';
  title.style.fontSize = '20px';
  divChild03.appendChild(title);
  const button01 = document.createElement('button');
  button01.innerText = '8pt';
  button01.style.width = '100%';
  button01.addEventListener('click', () => {
    localStorage.setItem('tamanhodafonte', '8px');
    if(localStorage.getItem('tamanhodafonte') === '8px') {
      const body = document.querySelector('body');
      body.style.fontSize = '8px';
    }
  })
  divChild03.appendChild(button01);
  const button02 = document.createElement('button');
  button02.innerText = '10pt';
  button02.style.width = '100%';
  button02.addEventListener('click', () => {
    localStorage.setItem('tamanhodafonte', '10px');
    if(localStorage.getItem('tamanhodafonte') === '10px') {
      const body = document.querySelector('body');
      body.style.fontSize = '10px';
    }
  })
  divChild03.appendChild(button02);
  const button03 = document.createElement('button');
  button03.innerText = '12pt';
  button03.style.width = '100%';
  button03.addEventListener('click', () => {
    localStorage.setItem('tamanhodafonte', '12px');
    if(localStorage.getItem('tamanhodafonte') === '12px') {
      const body = document.querySelector('body');
      body.style.fontSize = '12px';
    }
  })
  divChild03.appendChild(button03);
  const button04 = document.createElement('button');
  button04.innerText = '14pt';
  button04.style.width = '100%';
  button04.addEventListener('click', () => {
    localStorage.setItem('tamanhodafonte', '14px');
    if(localStorage.getItem('tamanhodafonte') === '14px') {
      const body = document.querySelector('body');
      body.style.fontSize = '14px';
    }
  })
  divChild03.appendChild(button04);
  const button05 = document.createElement('button');
  button05.innerText = '20pt';
  button05.style.width = '100%';
  button05.addEventListener('click', () => {
    localStorage.setItem('tamanhodafonte', '20px');
    if(localStorage.getItem('tamanhodafonte') === '20px') {
      const body = document.querySelector('body');
      body.style.fontSize = '20px';
    }
  })
  divChild03.appendChild(button05);
}

divChild03Personalization();

const divChild04Personalization = () => {
  const divChild04 = document.querySelector('.divChild04');
  const title = document.createElement('h1');
  title.innerHTML = 'Espaçamento entre as linhas';
  title.style.fontSize = '20px';
  divChild04.appendChild(title);
  const button01 = document.createElement('button');
  button01.innerText = '1.0';
  button01.style.width = '100%';
  button01.addEventListener('click', () => {
    localStorage.setItem('espacamentoentrelinhas', '1em');
    if(localStorage.getItem('espacamentoentrelinhas') === '1em') {
      const body = document.querySelector('body');
      body.style.lineHeight = '1em';
    }
  })
  divChild04.appendChild(button01);
  const button02 = document.createElement('button');
  button02.innerText = 'normal';
  button02.style.width = '100%';
  button02.addEventListener('click', () => {
    localStorage.setItem('espacamentoentrelinhas', 'normal');
    if(localStorage.getItem('espacamentoentrelinhas') === 'normal') {
      const body = document.querySelector('body');
      body.style.lineHeight = 'normal';
    }
  })
  divChild04.appendChild(button02);
  const button03 = document.createElement('button');
  button03.innerText = '1.5';
  button03.style.width = '100%';
  button03.addEventListener('click', () => {
    localStorage.setItem('espacamentoentrelinhas', '1.5em');
    if(localStorage.getItem('espacamentoentrelinhas') === '1.5em') {
      const body = document.querySelector('body');
      body.style.lineHeight = '1.5em';
    }
  })
  divChild04.appendChild(button03);
  const button04 = document.createElement('button');
  button04.innerText = '2.0';
  button04.style.width = '100%';
  button04.addEventListener('click', () => {
    localStorage.setItem('espacamentoentrelinhas', '2em');
    if(localStorage.getItem('espacamentoentrelinhas') === '2em') {
      const body = document.querySelector('body');
      body.style.lineHeight = '2em';
    }
  })
  divChild04.appendChild(button04);
  const button05 = document.createElement('button');
  button05.innerText = '3.0';
  button05.style.width = '100%';
  button05.addEventListener('click', () => {
    localStorage.setItem('espacamentoentrelinhas', '3em');
    if(localStorage.getItem('espacamentoentrelinhas') === '3em') {
      const body = document.querySelector('body');
      body.style.lineHeight = '3em';
    }
  })
  divChild04.appendChild(button05);
}

divChild04Personalization();

const divChild05Personalization = () => {
  const divChild05 = document.querySelector('.divChild05');
  const title = document.createElement('h1');
  title.innerHTML = 'Tipo da fonte';
  title.style.fontSize = '20px';
  divChild05.appendChild(title);
  const button01 = document.createElement('button');
  button01.innerText = 'Arial';
  button01.style.width = '100%';
  button01.addEventListener('click', () => {
    localStorage.setItem('fonttype', 'Arial');
    if(localStorage.getItem('fonttype') === 'Arial') {
      const body = document.querySelector('body');
      body.style.fontFamily = 'Arial';
    }
  })
  divChild05.appendChild(button01);
  const button02 = document.createElement('button');
  button02.innerText = 'Times New Roman';
  button02.style.width = '100%';
  button02.addEventListener('click', () => {
    localStorage.setItem('fonttype', 'Times New Roman');
    if(localStorage.getItem('fonttype') === 'Times New Roman') {
      const body = document.querySelector('body');
      body.style.fontFamily = 'Times New Roman';
    }
  })
  divChild05.appendChild(button02);
}

divChild05Personalization();