const express = require('express');
const {
    getAllTeachers,
    getTeacherById,
    addTeacher,
    updateTeacherById,
    deleteTeacherById,
    addTeacherCourseById,
    deleteTeacherCourseById,
} =require('../controllers/teachers');

const routeTeachers = express();

routeTeachers.get('', getAllTeachers);

routeTeachers.get('/:idTeacher', getTeacherById);

routeTeachers.post('', addTeacher);

routeTeachers.put('/:idTeacher', updateTeacherById);

routeTeachers.delete('/:idTeacher', deleteTeacherById);

routeTeachers.post('/:idTeacher/courses/:idCourse', addTeacherCourseById)

routeTeachers.delete('/:idTeacher/courses/:idCourse', deleteTeacherCourseById);

module.exports = routeTeachers;