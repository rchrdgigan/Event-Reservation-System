function authRole(role) {
    return (req, res, next)=>{
        if(req.user.role !== role){
            req.flash('success_msg', 'Your not allowed!');
            res.redirect('/admin-login');
        }
        next()
    }
}

function checkNotAuth(req, res, next) {
    if(req.isAuthenticated()){
        if(req.user.role == 'client' ){
            return res.redirect('/reservation');
        }else{
            return res.redirect('/admin-dashboard');
        }
    }
    next()
}

module.exports = {
    ensureAuthenticated: function(req, res, next) {
        if(req.isAuthenticated()){
            return next();
        }
        req.flash('error_msg', 'You need to be login!');
        res.redirect('/login');
    },
    authRole,
    checkNotAuth
}