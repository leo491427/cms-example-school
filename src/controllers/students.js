const Student = require('../models/students');
const Course = require('../models/courses')

async function getAllStudents (req, res) {
    const students = await Student.find().exec();
    return res.json(students);
}

async function getStudentById (req, res) {
    const {idStudent} = req.params;
    const student = await Student.findById(idStudent).populate('courses', 'name createdAt');
    // 上面一句可以写 const student = await Student.findOne({_id: idStudent});
    // 上面一句populate第二个参数规定显示哪些key-value,如果没有全部显示。populate可以链式，引入多个ref, 如.populate().populate...

    if(!student) {
        return res.status(404).json('student not found');
    }
    return res.json(student);
}

async function addStudent (req, res) {
    const {firstName, lastName, email} = req.body;
    const student = new Student({
        firstName,
        lastName,
        email,
    });
    await student.save();
    return res.json(student);
}

async function updateStudentById (req, res) {
    const {idStudent: code} = req.params;
    const {firstName, lastName, email} = req.body;

    const newstudent = await Student.findByIdAndUpdate(code, {firstName, lastName, email}, {new:true});

    if(!newstudent) {
        return res.status(404).json('course not found');
    }
    return res.json(newstudent);
}

async function deleteStudentById (req, res) {
    const {idStudent: code} = req.params;
    const student = await Student.findByIdAndDelete(code);

    if(!student) {
        return res.status(404).json('course not found');
    }

    await Course.updateMany(
        {_id: {$in: student.courses}},
        {$pull: {students: student._id}}
    );

    return res.json(student);
}

async function addStudentCourseById (req, res) {
    const {idStudent, idCourse: code} = req.params;
    const course = await Course.findById(code);
    const student = await Student.findById(idStudent);

    if (!student || !course) {
        return res.status(404).json('student or course not found');
    }

    student.courses.addToSet(course._id);  //将course的信息添加到student数据库中
    await student.save();

    course.students.addToSet(student._id); //将student的信息添加到course数据库中
    await course.save();

    return res.json(student);
}

async function deleteStudentCourseById (req, res) {
    const {idStudent, idCourse} = req.params;
    const course = await Course.findById(idCourse);
    const student = await Student.findById(idStudent);

    if (!student || !course) {
        return res.status(404).json('student or course not found');
    }

    const coursesArrayLength = student.courses.length;  //判断pull后是否courses内容被删减了，如果没有则提示错误
    student.courses.pull(course._id);   //如果没有判断，即使pull不成功也没有提示，程序可以继续执行，但不利于判断
    if(student.courses.length === coursesArrayLength) {
        return res.status(404).json('delete course failed');
    }

    await student.save();
    return res.json(student);
}


module.exports = {
    getAllStudents,
    getStudentById,
    addStudent,
    updateStudentById,
    deleteStudentById,
    addStudentCourseById,
    deleteStudentCourseById,
}