const express = require('express');
const route = express.Router();
const multer = require('multer');
const { ensureAuthenticated ,authRole ,checkNotAuth } = require('../../auth0');

const services = require('../services/render')

const UserController = require('../controller/UserController')
const ContactController = require('../controller/ContactController')
const ReservationController = require('../controller/ReservationController');
const GalleryChristeningController = require('../controller/GalleryChristeningController');
const GalleryBirthdayController = require('../controller/GalleryBirthdayController');
const GalleryWeddingController = require('../controller/GalleryWeddingController');
const GalleryDebutController = require('../controller/GalleryDebutController');
const GalleryOtherController = require('../controller/GalleryOtherController');

const storage_christening = multer.diskStorage({
    destination:function (request, file, callback) {
        callback(null, './assets/img/christening');
    },

    filename:function (request, file, callback) {
        callback(null,Date.now() + file.originalname );
    },
})
const upload_christening = multer({
    storage: storage_christening,
    limits: {
        fieldSize: 1024 * 1024 * 3,
    },
});


const storage_birth = multer.diskStorage({
    destination:function (request, file, callback) {
        callback(null, './assets/img/birthday');
    },

    filename:function (request, file, callback) {
        callback(null,Date.now() + file.originalname );
    },
})
const upload_birth = multer({
    storage: storage_birth,
    limits: {
        fieldSize: 1024 * 1024 * 3,
    },
});

const storage_wedding = multer.diskStorage({
    destination:function (request, file, callback) {
        callback(null, './assets/img/wedding');
    },

    filename:function (request, file, callback) {
        callback(null,Date.now() + file.originalname );
    },
})
const upload_wedding = multer({
    storage: storage_wedding,
    limits: {
        fieldSize: 1024 * 1024 * 3,
    },
});

const storage_debut = multer.diskStorage({
    destination:function (request, file, callback) {
        callback(null, './assets/img/debut');
    },

    filename:function (request, file, callback) {
        callback(null,Date.now() + file.originalname );
    },
})
const upload_debut = multer({
    storage: storage_debut,
    limits: {
        fieldSize: 1024 * 1024 * 3,
    },
});


const storage_other = multer.diskStorage({
    destination:function (request, file, callback) {
        callback(null, './assets/img/other');
    },

    filename:function (request, file, callback) {
        callback(null,Date.now() + file.originalname );
    },
})
const upload_other = multer({
    storage: storage_other,
    limits: {
        fieldSize: 1024 * 1024 * 3,
    },
});

route.get('/',services.homeRoutes);
route.get('/services',services.servicesRoutes);
route.get('/gallery',services.galleryRoutes);
route.get('/about-us',services.aboutRoutes);
route.get('/birthday',services.birthdayRoutes);
route.get('/christening',services.christeningRoutes);
route.get('/debut',services.debutRoutes);
route.get('/others',services.othersRoutes);
route.get('/wedding',services.weddingRoutes);
route.get('/contact',services.contactRoutes);

route.post('/contact',ReservationController.create);

//Client
route.get('/reservation', ensureAuthenticated, authRole('client'), (req, res)=>
    res.render('reservation',{
        email: req.user.email,
    }));
route.post('/reservation',ReservationController.create);

route.get('/login', checkNotAuth, (req, res)=>
res.render('login'));

route.get('/admin-login', checkNotAuth, (req, res)=>
res.render('admin-login'));

route.get('/signup',services.signupRoutes);
route.post('/signup', UserController.create);

route.post('/login', UserController.login);
route.post('/admin-login', UserController.adminLogin);

route.get('/logout', UserController.logout);
route.get('/admin-logout', UserController.adminLogout);

//Admin
route.get('/admin-dashboard', ensureAuthenticated, authRole('admin'), (req, res)=>
    res.render('admin-dashboard',{
        name: req.user.fname
    }));
route.get('/admin-customer-list',services.adminCustomerRoutes);
route.get('/admin-dashboard',services.adminDashCountRoutes);
route.get('/admin-contact',services.adminContactRoutes);
route.get('/admin-reservation-list',services.adminResrvationRoutes);

route.get('/admin-christening',services.adminChirstRoutes);
route.post('/admin-christening', upload_christening.single('image'), GalleryChristeningController.create);

route.get('/admin-birthday',services.adminBirthRoutes);
route.post('/admin-birthday', upload_birth.single('image'), GalleryBirthdayController.create);

route.get('/admin-wedding',services.adminWeddingRoutes);
route.post('/admin-wedding', upload_wedding.single('image'), GalleryWeddingController.create);

route.get('/admin-debut',services.adminDebutRoutes);
route.post('/admin-debut', upload_debut.single('image'), GalleryDebutController.create);

route.get('/admin-other',services.adminOtherRoutes);
route.post('/admin-other', upload_other.single('image'), GalleryOtherController.create);

//API
route.get('/api/customers',UserController.find);
route.delete('/api/customers/:id',UserController.delete);
route.get('/api/contacts',ContactController.find);
route.delete('/api/contacts/:id',ContactController.delete);
route.get('/api/reservation',ReservationController.find);
route.delete('/api/reservation/:id',ReservationController.delete);

route.get('/api/christening/gal',GalleryChristeningController.find);
route.delete('/api/christening/gal/:id',GalleryChristeningController.delete);

route.get('/api/birthday/gal',GalleryBirthdayController.find);
route.delete('/api/birthday/gal/:id',GalleryBirthdayController.delete);

route.get('/api/wedding/gal',GalleryWeddingController.find);
route.delete('/api/wedding/gal/:id',GalleryWeddingController.delete);

route.get('/api/debut/gal',GalleryDebutController.find);
route.delete('/api/debut/gal/:id',GalleryDebutController.delete);

route.get('/api/other/gal',GalleryOtherController.find);
route.delete('/api/other/gal/:id',GalleryOtherController.delete);

module.exports = route