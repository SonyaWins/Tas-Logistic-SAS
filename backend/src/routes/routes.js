const {Router} = require("express");
const router = Router();
//const products = require('../database.json')
//const _ = require('underscore')

router.get('/',(req,res)=>{
    res.json({Data:"Hello Express!"});
});

router.get('/getx',(req,res)=>{
    console.log(req.query.code);
    res.status(404).json({err:"NOT PARAMS FOUND"})
});


module.exports = router;