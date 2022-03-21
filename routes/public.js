const express = require('express');

const publicController = require('../controllers/public');

const router = express.Router();

//Login
router.get('/', publicController.getLogin);
//Register
router.get('/register', publicController.getRegister);
//Recover
router.get('/recover', publicController.getRecover);
//Home
router.get('/home', publicController.getHome);
//Home
router.get('/nearby', publicController.getNearby);
//Info Place
router.get('/info-place', publicController.getInfoPlace);
//Map
router.get('/map', publicController.getMap);
//Reviews
router.get('/reviews', publicController.getReviews);
//New Review
router.get('/new-review', publicController.getNewReview);
//New Review
router.get('/new-review-2', publicController.getNewReview2);
//Open Gallery
router.get('/open-gallery', publicController.getOpenGallery);
//Open Gallery
router.get('/history', publicController.getHistory);
//Saved Maps
router.get('/saved-maps', publicController.getSavedMaps);
//Saved Places
router.get('/saved-places', publicController.getSavedPlaces);
//Search
router.get('/search', publicController.getSearch);
//Results
router.get('/results', publicController.getResults);


//500 View
router.get('/500', publicController.get500);

// 404 Not Found
router.use(publicController.use404);
//Errors Handling
router.use(publicController.use500);

module.exports = router;