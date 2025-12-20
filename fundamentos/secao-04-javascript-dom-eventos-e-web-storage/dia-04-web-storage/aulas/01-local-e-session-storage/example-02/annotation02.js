let organization = {
  name: 'trybe',
  since: 2019,
};

// A variável 'storage' pode ser localStorage ou sessionStorage
let storage = localStorage;

storage.setItem('escola', JSON.stringify(organization));
let recoveredOrganization = JSON.parse(storage.getItem('escola'));
console.log(recoveredOrganization); // { name: 'trybe', since: 2019 }

let classes = ['2019/set', '2019/oct'];
storage.setItem('turmas', JSON.stringify(classes));
let recoveredClasses = JSON.parse(storage.getItem('turmas'));
console.log(recoveredClasses); // ['2019/set', '2019/oct']