import './style.css';

const dog = document.querySelector('#dog');
const cat = document.querySelector('#cat');
const surprise = document.querySelector('#surprise');
const petImage = document.querySelector('#petimage');

dog.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        petImage.src = data.message;
      });
});

cat.addEventListener('click', () => {
  fetch('https://aws.random.cat/meow')
      .then((response) => response.json())
      .then((data) => {
        petImage.src = data.file;
      });
});

surprise.addEventListener('click', () => {
  Promise.any([
    fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then((data) => {
          petImage.src = data.message;
        }),
    fetch('https://aws.random.cat/meow')
        .then((response) => response.json())
        .then((data) => {
          petImage.src = data.file;
        }),
  ]);
});
