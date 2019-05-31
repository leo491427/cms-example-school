const express = require('express');
const {
    getAllCourses,
    getCourseById,
    addCourse,
    updateCourseById,
    deleteCourseById,
} =require('../controllers/courses');

const routeCourses = express();

routeCourses.get('', getAllCourses);

routeCourses.get('/:idCourse', getCourseById);

routeCourses.post('', addCourse);

routeCourses.put('/:idCourse', updateCourseById);

routeCourses.delete('/:idCourse', deleteCourseById);


module.exports = routeCourses;