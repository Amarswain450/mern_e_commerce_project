const { validationResult } = require('express-validator');
const User = require('../models/User');
const {authService, jwtToken} = require('../services/authService');

module.exports.registerController = async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        const {name, email, password} = req.body;
        try{
            const emailExist = await User.findOne({email});
            if(!emailExist){
                const hashed = await authService(password);
                const user = await User.create({
                    name,
                    email,
                    password: hashed
                });
                const token = jwtToken({id: user._id, name: user.name});
                return res.status(200).json({ msg: 'Your account has been created', token }); 
            }else{
                return res.status(400).json({ errors: [{msg: `${email} is already taken`}] }); 
            }
        }catch(err){
            console.log(err.message);
            return res.status(500).json("server error...!!!");
        }
    }else{
        return res.status(400).json({ errors: errors.array() });
    }
}