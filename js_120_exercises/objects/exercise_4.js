function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },
    
    listCourses() {
      console.log(this.courses);
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

let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"

/*
Sligtly more straightforward solution

function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    listCourses() {
      console.log(this.courses);
    },

    addCourse(course) {
      course.notes = [];
      this.courses.push(course);
    },

    findCourseByCode(courseNumber) {
      return this.courses.find(course => {
        return course.code === courseNumber;
      })
    },

    addNote(courseNumber, courseNote) {
      let course = this.findCourseByCode(courseNumber);

      course.notes.push(courseNote);
    },

    viewNotes() {
      this.courses.forEach(course => {
        console.log(`${course.name}: ${course.notes.join('; ')}`);
      })
    },

    updateNote(courseNumber, courseNote) {
      let course = this.findCourseByCode(courseNumber);

      course.notes = [];

      course.notes.push(courseNote);
    }
  }
}

let foo = createStudent('Foo', '1st');
foo.info();
foo.listCourses();
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();

foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
foo.updateNote(101, 'Fun course');
foo.viewNotes();
*/