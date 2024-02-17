const db = require("../models");

const Interest = db.interest;
const Op = db.Sequelize.Op;


exports.create = (name)=>{
    const interest = {name:name}

    Interest.create(interest)
    .then(res=>{})
    .catch(error=>error)
}

exports.update = (id, name)=>
{

}

exports.delete = (id)=>{
    
}