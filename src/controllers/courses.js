
function getAllCourses (req, res) {
    return res.json('getAllCourses2');
}

function getCourseById (req, res) {
    const {idCourse} = req.params;
    return res.json(`getCourseNo ${idCourse}`);
}

function addCourse (req, res) {
    return res.json(`addCourse`);
}

function updateCourseById (req, res) {
    const {idCourse} = req.params;
    return res.json(`updateCourseById ${idCourse}`);
}

function deleteCourseById (req, res) {
    const {idCourse} = req.params;
    return res.json(`deleteCourseNo ${idCourse}`);
}


module.exports = {
    getAllCourses,
    getCourseById,
    addCourse,
    updateCourseById,
    deleteCourseById,
}