const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

const addKeyAndValue = (object, key, value) => {
    return object[key] = value;
}

addKeyAndValue(lesson2, 'turno', 'noite');

console.log(lesson2);

// ------------------------------------------------------------------------------------------------

const listKeys = (object) => {
    return Object.keys(object);
}

listKeys(lesson3);

console.log(listKeys(lesson3));

// ------------------------------------------------------------------------------------------------

const sizeOfAnObject = (object) => Object.values(object).length;

sizeOfAnObject(lesson3);

console.log(sizeOfAnObject(lesson3))

// ------------------------------------------------------------------------------------------------

const listValues = (object) => {
    return Object.values(object);
}

listValues(lesson3);

console.log(listValues(lesson3));

// ------------------------------------------------------------------------------------------------

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

// ------------------------------------------------------------------------------------------------

const TotalNumberOfStudents = (obj01, obj02, obj03) => {
    const obj01TotalStudents = Object.values(obj01);
    const obj02TotalStudents = Object.values(obj02);
    const obj03TotalStudents = Object.values(obj03);

    return obj01TotalStudents[1] + obj02TotalStudents[1] + obj03TotalStudents[1];
}

TotalNumberOfStudents(lesson1, lesson2, lesson3);

console.log(TotalNumberOfStudents(lesson1, lesson2, lesson3));

// ------------------------------------------------------------------------------------------------

const positionValue = (obj, position) => {
    const objClone = Object.values(obj);
    return objClone[position];
}

positionValue(lesson1, 0);

console.log(positionValue(lesson1, 0));

// ------------------------------------------------------------------------------------------------

const verifyKeyAndValue = (obj, key, value) => {
    const objKeys = Object.keys(obj);
    const objValues = Object.values(obj);

    for (index in objKeys && objValues) {
        if (objKeys[index] === key && objValues[index] === value) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(verifyKeyAndValue(lesson1, 'materia', 'Matemática'));