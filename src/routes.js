const express = require('express');
const routeStudents = require('./routes/students');
const routeTeachers = require('./routes/teachers');
const routeCourses = require('./routes/courses');

// ？为什么不写为express.router()也可以?
const router = express();

router.use('/students', routeStudents);

router.use('/teachers', routeTeachers);

router.use('/courses', routeCourses);

module.exports = router;