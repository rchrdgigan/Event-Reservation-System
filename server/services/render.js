const axios = require('axios');

exports.homeRoutes = (req, res)=>{
    res.render('index');
}

exports.servicesRoutes = (req, res)=>{
    res.render('services');
}

exports.galleryRoutes = (req, res)=>{
    res.render('gallery');
}

exports.aboutRoutes = (req, res)=>{
    res.render('about us');
}

exports.birthdayRoutes = (req, res)=>{
    axios.get('http://localhost:3000/api/birthday/gal')
    .then(function (response) {
        res.render('birthday',{
            image: response.data
        });
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.christeningRoutes = (req, res)=>{
    axios.get('http://localhost:3000/api/christening/gal')
    .then(function (response) {
        res.render('christening',{
            image: response.data
        });
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.debutRoutes = (req, res)=>{
    axios.get('http://localhost:3000/api/debut/gal')
    .then(function (response) {
        res.render('debut',{
            image: response.data
        });
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.othersRoutes = (req, res)=>{
    axios.get('http://localhost:3000/api/other/gal')
    .then(function (response) {
        res.render('others',{
            image: response.data
        });
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.signupRoutes = (req, res)=>{
    res.render('signup');
}

exports.weddingRoutes = (req, res)=>{
    axios.get('http://localhost:3000/api/wedding/gal')
    .then(function (response) {
        res.render('wedding',{
            image: response.data
        });
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.contactRoutes = (req, res)=>{
    res.render('contact');
}

exports.reservaitonRoutes = (req, res)=>{
    res.render('reservation');
}

exports.adminChirstRoutes = (req, res)=>{
    axios.get('http://localhost:3000/api/christening/gal')
    .then(function (response) {
        res.render('admin-christening',{
            name: req.user.fname,
            image: response.data
        });
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.adminBirthRoutes = (req, res)=>{
    axios.get('http://localhost:3000/api/birthday/gal')
    .then(function (response) {
        res.render('admin-birthday',{
            name: req.user.fname,
            image: response.data
        });
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.adminWeddingRoutes = (req, res)=>{
    axios.get('http://localhost:3000/api/wedding/gal')
    .then(function (response) {
        res.render('admin-wedding',{
            name: req.user.fname,
            image: response.data
        });
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.adminDebutRoutes = (req, res)=>{
    axios.get('http://localhost:3000/api/debut/gal')
    .then(function (response) {
        res.render('admin-debut',{
            name: req.user.fname,
            image: response.data
        });
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.adminOtherRoutes = (req, res)=>{
    axios.get('http://localhost:3000/api/other/gal')
    .then(function (response) {
        res.render('admin-other',{
            name: req.user.fname,
            image: response.data
        });
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.adminCustomerRoutes = (req, res)=>{
    axios.get('http://localhost:3000/api/customers')
    .then(function (response) {
        res.render('admin-customer-list',{
            name: req.user.fname,
            user: response.data
        });
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.adminDashCountRoutes = (req, res)=>{
    axios.get('http://localhost:3000/api/customers')
    .then(function (response) {
        res.render('admin-dashboard',{
            name: req.user.fname,
            user: response.data
        });
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.adminContactRoutes = (req, res)=>{
    axios.get('http://localhost:3000/api/contacts')
    .then(function (response) {
        res.render('admin-contact',{
            name: req.user.fname,
            contact: response.data
        });
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.adminResrvationRoutes = (req, res)=>{
    axios.get('http://localhost:3000/api/reservation')
    .then(function (response) {
        res.render('admin-reservation-list',{
            name: req.user.fname,
            reservation: response.data
        });
    })
    .catch(err=>{
        res.send(err);
    })
}
