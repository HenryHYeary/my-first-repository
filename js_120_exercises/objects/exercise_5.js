function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },
    
    listCourses() {
      return this.courses;
    },

    addCourse(course) {
      this.courses.push(course);
    },

    addNote(courseNumber, note) {
      let course = this.courses.find(course => course.code === courseNumber);
      if (course.hasOwnProperty('note')) {
        course.note += '; ' + note;
      } else {
        course.note = note;
      }
    },

    updateNote(courseNumber, note) {
      let course = this.courses.find(course => course.code === courseNumber);
      if (course) {
        course.note = note;
      }
    },

    viewNotes() {
      for (let index = 0; index < this.courses.length; index++) {
        if (this.courses[index].hasOwnProperty('note')) {
          console.log(`${this.courses[index].name}: ${this.courses[index].note}`);
        }
      }
    }
  }
}

function createSchool() {
  return {
    students: [],

    addStudent(name, year) {
      if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
        let student = createStudent(name, year);
        this.students.push(student);
        return student;
      } else {
        console.log('Invalid Year');
      }
    },

    enrollStudent(student, courseName, courseCode) {
      student.addCourse({name: courseName, code: courseCode});
    },

    addGrade(student, courseName, grade) {
      let course = student.listCourses().find(course => course.name === courseName);

      if (course) {
        course.grade = grade;
      }
    },

    getReportCard(student) {
      student.listCourses().forEach(course => {
        if (course.hasOwnProperty('grade')) {
          console.log(`${course.name}: ${String(course.grade)}`);
        } else {
          console.log(`${course.name}: In progress`);
        }
      })
    },

    courseReport(courseName) {
      let relevantStudents = this.students.filter(student => {
        return student.listCourses().some(course => {
          return course.name === courseName && getGrade(student, courseName) !== undefined; 
        });
      });

      if (relevantStudents.length === 0) {
        return undefined;
      }

      function getGrade(student, courseName) {
        let course = student.listCourses().find(course => course.name === courseName);

        if (course) {
          return course.grade;
        } else {
          return undefined;
        }
      }

      let relevantNamesAndGrades = relevantStudents.map(student => {
        return [student.name, getGrade(student, courseName)];
      });

      let courseAverage = relevantNamesAndGrades.reduce((sum, next) => sum + next[1], 0) / relevantNamesAndGrades.length;

      console.log(`=${courseName} Grades=`);
      relevantNamesAndGrades.forEach(student => console.log(`${student[0]}: ${student[1]}`));
      console.log('---');
      console.log(`Course Average: ${courseAverage}`);
    },
  };
}

let school = createSchool();
let foo = school.addStudent('foo', '3rd');
let bar = school.addStudent('bar', '1st');
let qux = school.addStudent('qux', '2nd');
school.enrollStudent(foo, 'Math', 101);
school.enrollStudent(foo, 'Advanced Math', 102);
school.enrollStudent(foo, 'Physics', 202);
school.addGrade(foo, 'Math', 95);
school.addGrade(foo, 'Advanced Math', 90);
school.enrollStudent(bar, 'Math', 101);
school.addGrade(bar, 'Math', 91);
school.enrollStudent(qux, 'Math', 93);
school.enrollStudent(qux, 'Advanced Math', 102);
school.addGrade(qux, 'Advanced Math', 90);

school.getReportCard(foo);
school.courseReport('Math');
school.courseReport('Advanced Math');
console.log(school.courseReport('Physics'));