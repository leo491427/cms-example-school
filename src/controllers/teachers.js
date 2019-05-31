
function getAllTeachers (req, res) {
    return res.json('getAllTeachers2');
}

function getTeacherById (req, res) {
    const {idTeacher} = req.params;
    return res.json(`getTeacherNo ${idTeacher}`);
}

function addTeacher (req, res) {
    return res.json(`addTeacher`);
}

function updateTeacherById (req, res) {
    const {idTeacher} = req.params;
    return res.json(`updateTeacherById ${idTeacher}`);
}

function deleteTeacherById (req, res) {
    const {idTeacher} = req.params;
    return res.json(`deleteTeacherNo ${idTeacher}`);
}

function addTeacherCourseById (req, res) {
    const {idTeacher, idCourse} = req.params;
    return res.json(`addTeacher${idTeacher} CourseNo${idCourse}`);
}

function deleteTeacherCourseById (req, res) {
    const {idTeacher, idCourse} = req.params;
    return res.json(`deleteTeacher${idTeacher} CourseNo${idCourse}`);
}


module.exports = {
    getAllTeachers,
    getTeacherById,
    addTeacher,
    updateTeacherById,
    deleteTeacherById,
    addTeacherCourseById,
    deleteTeacherCourseById,
}