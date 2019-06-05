const express = require('express');
const routeStudents = require('./routes/students');
const routeTeachers = require('./routes/teachers');
const routeCourses = require('./routes/courses');
const routeUsers = require('./routes/users');
const routeAuth = require('./routes/auth');
const authGuard = require('./middleware/authGuard');

// ？为什么不写为express.router()也可以?
const router = express.Router();

router.use('/students', routeStudents);

router.use('/teachers', routeTeachers);

router.use('/courses', authGuard, routeCourses);   //authGuard中间件完成Token认证

router.use('/users', routeUsers);

router.use('/auth', routeAuth);

module.exports = router;