const mods = [
  { mod: 1, students: 27, instructors: 3 },
  { mod: 2, students: 33, instructors: 3 },
  { mod: 3, students: 20, instructors: 2 },
  { mod: 4, students: 16, instructors: 2 }
];

   /* Return an array of objects where the keys are mod (the number of the module) and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
     [
       { mod: 1, studentsPerInstructor: 9 },
       { mod: 2, studentsPerInstructor: 11 },
       { mod: 3, studentsPerInstructor: 10 },
       { mod: 4, studentsPerInstructor: 8 }
     ]
     */

const getStudentsPerInstructor = (modsArray) => {
  const studentsPerInstructor = modsArray.map((mod) => {
    const avgStudPerInstructor = (mod.students / mod.instructors)
    return object = {
      mod: mod.mod, 
      studentsPerInstructor: avgStudPerInstructor
    }
  })
  return studentsPerInstructor
}
console.log(getStudentsPerInstructor(mods))