function authUser(req, res, next) {
    if(req.user == null){
        req.flash('success_msg', 'You need to login!');
        res.redirect('/login');
    }
    next()
}
module.exports = {
    authUser,
}