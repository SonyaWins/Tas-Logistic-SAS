const {Router} = require("express");
const router = Router();
const passport = require('passport');
//const products = require('../database.json')
//const _ = require('underscore')

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


module.exports = router;