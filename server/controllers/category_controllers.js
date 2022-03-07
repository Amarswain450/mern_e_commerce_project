const {validationResult} = require('express-validator');
const Category = require('../models/Category');

class CategoryController{
    async create(req, res){
        const errors = validationResult(req);
        if(errors.isEmpty()){
            const {name} = req.body;
            try{
                const exist = await Category.findOne({name});
                if(!exist){
                    await Category.create({name});
                    return res.status(201).json({message: 'Your category has created'})
                }else{
                    return res.status(400).json({ errors: [{msg: `${name} category is already taken`}] }); 
                }
            }catch(err){
                console.log(err.message);
                return res.status(500).json("server error...!!!");
            }
        }else{
            return res.status(400).json({ errors: errors.array() });
        }
    }

    async categories(req, res){
        const page = req.params.page;
        const perPage = 3;
        const skip = (page - 1) * 3;
        try{
            const count = await Category.find({}).countDocuments();
            const response = await Category.find({}).skip(skip).limit(perPage).sort({updatedAt: -1});
            return res.status(200).json({categories: response, perPage, count});
        }catch(error){
            console.log(error.message);
        }
    }
}

module.exports = new CategoryController;