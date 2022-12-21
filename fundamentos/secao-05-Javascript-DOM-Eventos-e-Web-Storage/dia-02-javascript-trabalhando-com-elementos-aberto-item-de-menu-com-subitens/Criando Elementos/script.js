// Crie um irmão para elementoOndeVoceEsta.

const pai = document.getElementById('pai');
irmaoElementoOndeVoceEsta = document.createElement('section');
irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmaoElementoOndeVoceEsta);

// Crie um filho para elementoOndeVoceEsta.

const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
terceiroEUltimoFilhoDoFilho = document.createElement('section');
terceiroEUltimoFilhoDoFilho.id = 'terceiroEUltimoFilhoDoFilho';
elementoOndeVoceEsta.appendChild(terceiroEUltimoFilhoDoFilho);

const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.id = 'segundoFilhoDoFilho';

// Crie um filho para primeiroFilhoDoFilho.

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
primeiroFilhoDoFilhoDoFilho = document.createElement('section');
primeiroFilhoDoFilhoDoFilho.id = 'primeiroFilhoDoFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(primeiroFilhoDoFilhoDoFilho);

// A partir desse filho criado, acesse terceiroFilho.

const terceiroFilho = document.getElementById('primeiroFilhoDoFilhoDoFilho').parentNode.parentNode.nextElementSibling;
console.log(terceiroFilho);