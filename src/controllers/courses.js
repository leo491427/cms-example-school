const Course = require('../models/courses');
const Student = require('../models/students');

async function getAllCourses(req, res) {
    const courses = await Course.find().exec();
    return res.json(courses);
  }

async function getCourseById (req, res) {
    const {idCourse: code} = req.params;
    const course = await Course.findById(code).populate('students', 'firstName lastName');

    if(!course) {
        return res.status(404).json('course not found');
    }
    return res.json(course);
}

async function addCourse(req, res) {
    const {name, _id, description} = req.body;
    const course = new Course({
      _id,
      name,
      description,
    });
    await course.save();
    return res.json(course);
}

async function updateCourseById (req, res) {
    const {idCourse: code} = req.params;
    const {name, description} = req.body;

    const newCourse = await Course.findByIdAndUpdate(code, {name, description}, {new:true});

    if(!newCourse) {
        return res.status(404).json('course not found');
    }
    return res.json(newCourse);
}

async function deleteCourseById (req, res) {
    const {idCourse: code} = req.params;
    const course = await Course.findByIdAndDelete(code);

    if(!course) {
        return res.status(404).json('course not found');
    }

    await Student.updateMany(
        {_id: {$in: course.students}},
        {$pull: {courses: course._id}}
    );

    return res.json(course);
}


module.exports = {
    getAllCourses,
    getCourseById,
    addCourse,
    updateCourseById,
    deleteCourseById,
}