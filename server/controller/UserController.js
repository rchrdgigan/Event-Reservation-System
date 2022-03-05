var User = require('../model/User');
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');

exports.create = (req, res)=> {
    const { fname, lname, address, contact_no, fb_name, email, password, password2 } = req.body;
    let errors = [];

    //Check required fields
    if(!fname || !lname || !address || !contact_no || !fb_name || !email || !password || !password2){ 
        errors.push({msg:'Please fill in all fields'});
    }

    //Check password match
    if(password !== password2){
        errors.push({msg:'Password do not match'});
    }

    //Check password lenght
    if(password.length < 6){
        errors.push({msg:'Password should be at least 6 characters'});
    }

    if(errors.length > 0){
        res.render('signup',{
            errors,
            fname,
            lname,
            address,
            contact_no,
            fb_name,
            email,
            password,
            password2
        });
    }else{
        User.findOne({email:email})
        .then(user => {
            if(user){
                errors.push({msg:'Email is already registered'});
                res.render('signup',{
                    errors,
                    fname,
                    lname,
                    address,
                    contact_no,
                    fb_name,
                    email,
                    password,
                    password2
                });
            }else{
                const newUser = new User({
                    fname,
                    lname,
                    address,
                    contact_no,
                    fb_name,
                    email,
                    password,
                    role: 'client'
                });

                bcrypt.genSalt(10, (err, salt)=>
                bcrypt.hash(newUser.password, salt, (err, hash)=> {
                    if(err) throw err;

                    newUser.password = hash;

                    newUser.save()
                    .then(user =>{
                        req.flash('success_msg', 'You are now register and can login');
                        res.redirect('/login');
                    })
                    .catch(err => console.log(err));
                }))
            }
        });
    }
}

exports.find = (req, res)=>{
    User.find({role:'client'})
    .then( user => {
        res.send(user)
    })
    .catch(err => {
        res.status(500).send({message: err.message | "Error retriving user"})
    })
}

exports.login = (req, res, next)=> {
    passport.authenticate('local',{
        successRedirect: '/reservation',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
}

exports.adminLogin = (req, res, next)=> {
    passport.authenticate('local',{
        successRedirect: '/admin-dashboard',
        failureRedirect: '/admin-login',
        failureFlash: true
    })(req, res, next);
}

exports.logout = (req, res)=> {
    req.logout();
    req.flash('success_msg', 'Your account has been logout!');
    res.redirect('/login');
}

exports.adminLogout = (req, res)=> {
    req.logout();
    req.flash('success_msg', 'Your account has been logout!');
    res.redirect('/admin-login');
}

exports.delete = (req, res)=> {
    const id = req.params.id;

    User.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
        }else{
            res.send({
                message : "User was deleted successfully!"
            })
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Could not delete User with id=" + id
        });
    });
}