
function getAllStudents (req, res) {
    return res.json('getAllStudents2');
}

function getStudentById (req, res) {
    const {idStudent} = req.params;
    return res.json(`getStudentNo ${idStudent}`);
}

function addStudent (req, res) {
    return res.json(`addStudent`);
}

function updateStudentById (req, res) {
    const {idStudent} = req.params;
    return res.json(`updateStudentById ${idStudent}`);
}

function deleteStudentById (req, res) {
    const {idStudent} = req.params;
    return res.json(`deleteStudentNo ${idStudent}`);
}

function addStudentCourseById (req, res) {
    const {idStudent, idCourse} = req.params;
    return res.json(`addStudent${idStudent} CourseNo${idCourse}`);
}

function deleteStudentCourseById (req, res) {
    const {idStudent, idCourse} = req.params;
    return res.json(`deleteStudent${idStudent} CourseNo${idCourse}`);
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