const express = require('express');
const {
    getAllStudents,
    getStudentById,
    addStudent,
    updateStudentById,
    deleteStudentById,
    addStudentCourseById,
    deleteStudentCourseById
} = require('../controllers/students');

// ？为什么不写为express.router()也可以?
const routeStudents = express();

routeStudents.get('', getAllStudents);

// ？为什么此处如果把get换为use，也能使用？
routeStudents.get('/:idStudent', getStudentById);

routeStudents.post('', addStudent);

routeStudents.put('/:idStudent', updateStudentById);

routeStudents.delete('/:idStudent', deleteStudentById);

routeStudents.post('/:idStudent/courses/:idCourse', addStudentCourseById)

routeStudents.delete('/:idStudent/courses/:idCourse', deleteStudentCourseById);


module.exports = routeStudents;