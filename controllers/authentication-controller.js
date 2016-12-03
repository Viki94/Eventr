/* globals module */

const sha1 = require("sha1");

module.exports = function(data) {
    return {
        signUp(req, res) {
            let { username, password, email} = req.body;

            let passwordHash = sha1(password);
            data.createUser(username, passwordHash, email)
                .then(user => {
                    return res.redirect("/user/sign-in", { user: req.user });
                })
                .catch(err => {
                    console.log(err);
                });
        },
        signOut(req, res) {
            req.logout();
            res.redirect("/");
        },
        getSignUpForm(req, res) {
            return res.render("authentication/sign-up", { user: req.user });
        },
        getSignInForm(req, res) {
            return res.render("authentication/sign-in", { user: req.user });
        }
    };
};