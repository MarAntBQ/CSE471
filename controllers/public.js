const socialLinks = {
    Facebook: "https://www.facebook.com/",
    Twitter: "https://twitter.com/",
    WhatsApp: "https://api.whatsapp.com/send?phone=593",
    Phone: "tel:+99999999999",
    Instagram: "https://www.instagram.com/",
    Youtube: "https://www.youtube.com/",
    Email: "mailto:@",
    Copyright: "https://Sites.MarBust.com"
}



//Home
exports.getLogin = (req, res, next) => {
    res.render('template-login', {
        pageTitle: 'Login',
        PagetoLoad: 'login',
        SocialLinks: socialLinks
    });
};
//Register
exports.getRegister = (req, res, next) => {
    res.render('template-login', {
        pageTitle: 'Register',
        PagetoLoad: 'register',
        SocialLinks: socialLinks
    });
};
//Recover Password
exports.getRecover = (req, res, next) => {
    res.render('template-login', {
        pageTitle: 'Recover Password',
        PagetoLoad: 'recover',
        SocialLinks: socialLinks
    });
};


//Home
exports.getHome = (req, res, next) => {
    res.render('template', {
        pageTitle: 'Home',
        PagetoLoad: 'home',
        SocialLinks: socialLinks
    });
};
//Nearby
exports.getNearby = (req, res, next) => {
    res.render('template', {
        pageTitle: 'Nearby Places',
        PagetoLoad: 'nearby',
        SocialLinks: socialLinks
    });
};
//Info Place
exports.getInfoPlace = (req, res, next) => {
    res.render('template', {
        pageTitle: 'Information about Place',
        PagetoLoad: 'info-place',
        SocialLinks: socialLinks
    });
};
//Map
exports.getMap = (req, res, next) => {
    res.render('template', {
        pageTitle: 'Map',
        PagetoLoad: 'map',
        SocialLinks: socialLinks
    });
};
//Reviews
exports.getReviews = (req, res, next) => {
    res.render('template', {
        pageTitle: 'Reviews',
        PagetoLoad: 'reviews',
        SocialLinks: socialLinks
    });
};
//New Review
exports.getNewReview = (req, res, next) => {
    res.render('template', {
        pageTitle: 'New Review',
        PagetoLoad: 'new-review',
        SocialLinks: socialLinks
    });
};
//New Review
exports.getNewReview2 = (req, res, next) => {
    res.render('template', {
        pageTitle: 'New Review',
        PagetoLoad: 'new-review-2',
        SocialLinks: socialLinks
    });
};
//Open Gallery
exports.getOpenGallery = (req, res, next) => {
    res.render('template', {
        pageTitle: 'Open Gallery',
        PagetoLoad: 'open-gallery',
        SocialLinks: socialLinks
    });
};
//History
exports.getHistory = (req, res, next) => {
    res.render('template', {
        pageTitle: 'History',
        PagetoLoad: 'history',
        SocialLinks: socialLinks
    });
};
//Saved Maps
exports.getSavedMaps = (req, res, next) => {
    res.render('template', {
        pageTitle: 'Saved Maps',
        PagetoLoad: 'saved-maps',
        SocialLinks: socialLinks
    });
};
//Saved Places
exports.getSavedPlaces = (req, res, next) => {
    res.render('template', {
        pageTitle: 'Saved Places',
        PagetoLoad: 'saved-places',
        SocialLinks: socialLinks
    });
};
//Search
exports.getSearch = (req, res, next) => {
    res.render('template', {
        pageTitle: 'Search',
        PagetoLoad: 'search',
        SocialLinks: socialLinks
    });
};
//Results
exports.getResults = (req, res, next) => {
    res.render('template', {
        pageTitle: 'Search Results',
        PagetoLoad: 'results',
        SocialLinks: socialLinks
    });
};








//Get 500
exports.get500 = (req, res, next) => {
    res.render('template', {
        pageTitle: 'Error de Validación',
        PagetoLoad: '500',
        SocialLinks: socialLinks
    });
};



//404
exports.use404 = (req, res, next) => {
    res.status(404).render('template', {
        pageTitle: 'Page Not Found',
        PagetoLoad: '404',
        SocialLinks: socialLinks
    });
};

//500
exports.use500 = (req, res, next) => {
    res.status(500).render('template', {
        pageTitle: 'Error de Validación',
        PagetoLoad: '500',
        SocialLinks: socialLinks
    });
};