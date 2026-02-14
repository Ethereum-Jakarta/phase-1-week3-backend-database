module.exports = (err, req, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!'})
}