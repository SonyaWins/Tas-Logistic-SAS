const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/users');

passport.serializeUser((user,done) => {
    done(null,user.id);
});

passport.deserializeUser(async (id,done) => {
    const user = await User.findById(id);
    done(null,user);
});

passport.use('local-signup',  new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done)=>{
    const existUser = await User.findOne({email:email})
    if(existUser){
        return done(null,false,'error');
    }
    else{
        const newUser = new User();
        newUser.email = email;
        newUser.password = newUser.hashPassword(password);
        await newUser.save();
        done(null,newUser);
    }
    
}));

passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    const user = await User.findOne({email: email});
    if(!user){
        return done(null,false,'email error');
    }
    if(!user.validatePassword(password)){
        return done(null,false,'password error');
    }
    done(null,user);
}));