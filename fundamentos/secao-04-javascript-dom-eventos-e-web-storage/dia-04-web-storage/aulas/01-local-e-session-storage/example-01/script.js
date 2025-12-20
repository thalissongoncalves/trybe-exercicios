localStorage.setItem('filme', 'The Lion King');
let recoveryLocalStorageString = localStorage.getItem('filme');
console.log(recoveryLocalStorageString);
console.log(typeof recoveryLocalStorageString);

// ---

localStorage.setItem('number', 10);
let recoveryLocalStorageNumber = JSON.parse(localStorage.getItem('number'));
console.log(recoveryLocalStorageNumber);
console.log(typeof recoveryLocalStorageNumber);

// ---

const favoriteMovie = {
  filme: 'Madagascar'
}

localStorage.setItem('objeto', JSON.stringify(favoriteMovie));
let recoveryLocalStorageObject = JSON.parse(localStorage.getItem('objeto'));
console.log(recoveryLocalStorageObject);
console.log(typeof recoveryLocalStorageObject);