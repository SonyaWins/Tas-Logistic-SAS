const {Router} = require("express");
const router = Router();
const passport = require('passport');
const Order = require('../models/orders');

router.get('/',(req,res)=>{
    res.json({Data:"Hello Express!"});
});

router.get('/getx',(req,res)=>{
    console.log(req.query.code);
    res.status(404).json({err:"NOT PARAMS FOUND"});
});

router.get('/signup',(req,res,next)=>{
    res.send('ok signup');
})

router.post('/signup',passport.authenticate('local-signup',{
    successRedirect: '/',
    failureRedirect: '/signup',
    passReqToCallback: true
}));

router.get('/signin',(req,res,next)=>{
    res.send('Login');
});

router.post('/signin',passport.authenticate('local-signin',{
    successRedirect: '/',
    failureRedirect: '/signup',
    passReqToCallback: true
}));

router.get('/orders',(req,res,next)=>{
    ordenes = Order.find(this.all);
    res.send.json(ordenes)
});


//is authenticated
router.use((req,res,next)=>{
    isAuthenticated(req,res,next);
    next();
});

router.get('/logout',(req,res,next) =>{
    req.logout();
    res.redirect('/')
})

router.get('/profile',(req,res,next)=>{
    res.send('PROFILE')
})


function isAuthenticated(req,res,next)  {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/signin');
};

module.exports = router;