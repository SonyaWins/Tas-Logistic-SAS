const {Router} = require("express");
const router = Router();
const passport = require('passport');
const Order = require('../models/orders');
const Distance = require('../models/distances')

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

//CONSULTAR ORDEN
router.get('/orders',async (req,res)=>{
    ordenes =  await Order.find();
    res.send(ordenes);
});

//CREAR ORDEN
router.post('/orders/create', async (req,res)=>{
    const orden = new Order(req.body);
    await orden.save();
    res.redirect('/');
   
});

//CONSULTAR DISTANCIA
router.get('/distances',async (req,res)=>{
    ordenes =  await Distance.find();
    res.send(ordenes);
});

//CREAR DISTANCIA
router.post('/distances/create', async (req,res)=>{
    const distancia = new Distance(req.body);
    await distancia.save();
    res.redirect('/');
   
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