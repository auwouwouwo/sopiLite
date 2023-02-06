const Register = require("../model/model");

exports.getRegister = async(req,res)=>{
    try{
        const get = await Register.find();
        res.json(get);
    }catch(e){
        res.status(400).json({message: e.message});
    };
};

exports.postRegister = async(req,res)=>{
    try{
        const insert = new Register(req.body);
        const inserted = await insert.save();
        res.status(201).json(inserted);
    }catch(e){
        res.status(400).json({message: e.message});
    };
}

exports.getLogin = async(req,res)=>{
    try{
        const get = await Login.find();
        res.json(get)
    }catch(e){
        res.status(400).json({message: e.message});
    }
}
