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

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const getNumberOfStudentsMath = (obj) => {
    let total = 0;
    const keys = Object.keys(obj);
    for (index in keys) {
      if(obj[keys[index]].materia === 'Matemática'){
      total += obj[keys[index]].numeroEstudantes;
      }
    }
    return total;
  }

console.log(getNumberOfStudentsMath(allLessons));

// ------------------------------------------------------------------------------------------------

const getInfo = (obj, name) => {
    const allLessons = [];
    let allStudent = 0;
    const values = Object.values(obj);
    for (index in values) {
      if (values[index].professor === name) {
        allLessons.push(values[index].materia)
        allStudent += values[index].numeroEstudantes;
      }
    }
    return { aulas: allLessons, estudantes: allStudent };
  }
  
  const createReport = (allLessons, name) => {
    const report = {};
    report.professor = name;
    Object.assign(report, getInfo(allLessons, name));
    return report;
  }
  console.log(createReport(allLessons, 'Maria Clara'));