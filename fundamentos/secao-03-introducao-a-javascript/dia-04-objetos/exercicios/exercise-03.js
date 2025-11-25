const school = {
  lessons: [
    {
      course: "Python",
      students: 20,
      professor: "Carlos Patrício",
      shift: "Manhã",
    },
    {
      course: "Kotlin",
      students: 10,
      professor: "Gabriel Oliva",
      shift: "Noite",
    },
    {
      course: "JavaScript",
      students: 738,
      professor: "Gustavo Caetano",
      shift: "Tarde",
    },
    {
      course: "MongoDB",
      students: 50,
      shift: "Noite",
    },
  ],
};

// 1 - Crie uma função que obtenha o valor da chave de acordo com sua posição no array. Essa função deve possuir dois parâmetros: o objeto e a posição no array.
const findIndex = (object, index) => Object.values(object)[index];

console.log(findIndex(school, 0));

// 2 - Crie uma função que retorne a soma do número total de estudantes em todos os cursos.
const totalStudents = (object) => {
  let sumStudents = 0;
  for (index = 0; index < object.lessons.length; index += 1) {
    sumStudents += object.lessons[index].students;
  }

  return `São ${sumStudents} alunos no total.`;
};

console.log(totalStudents(school));

// 3 - Crie uma função que verifica se uma determinada chave existe em todos os elementos do array lessons. O retorno deve ser um booleano (true ou false). Essa função deve possuir dois parâmetros: o objeto e o nome da chave.
const verifyProp = (object, keyName) => {
  for (index = 0; index < object.lessons.length; index += 1) {
    const keyNames = Object.keys(object.lessons[index]);
    console.log(keyNames.includes(keyName));
  }
};

verifyProp(school, 'professor');

// 4 - Crie uma função para alterar o turno para noite no curso de Python. Essa função deve ter três parâmetros: a base de dados a ser modificada, o nome do curso e o novo valor da chave.
const changeShift = (db, course, value) => {
  for (index = 0; index < db['lessons'].length; index += 1) {
    if (db['lessons'][index].course.toLowerCase() === course.toLowerCase()) {
      db['lessons'][index].shift = value;
    }
  }

  return db;
}

console.log(changeShift(school, 'Python', 'Noite'));