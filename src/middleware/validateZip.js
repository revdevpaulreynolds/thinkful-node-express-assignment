function validateZip(req, res, next) {
    let potentialZip = parseInt(req.params.zip);
    potentialZip = potentialZip.toString();
    if (potentialZip.length !== 5) {
        next(`Zip (${req.params.zip}) is invalid!`)
    } else {
        next();
    }
}

module.exports = validateZip;
