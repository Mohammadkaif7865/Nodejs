module.exports = reqFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send("Please provide a valid age");
    } else if (req.query.age < 18) {
        res.send("You cannot use this page , You are under 18");
    } else {

        next();
    }
};