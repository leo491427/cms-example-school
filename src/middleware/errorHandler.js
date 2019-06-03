module.exports = (err, req, res, next) => {
    if (err.name === 'ValidationError') {
        console.log(err.message);
        return res.status(400).json(err.message);
    }
    if (err.name === 'CastError') {
        console.log(err.message);
        return res.status(400).json(err.message);
    }
    console.error(err.message);
    return res.status(500).json(err.message);
}