var db = require('./db');

module.exports.handleSignup = (email, password) => {
    // Check email already exists

    // Save user to the DB
    db.saveUser({email,password});

    // Send welcome email.
};