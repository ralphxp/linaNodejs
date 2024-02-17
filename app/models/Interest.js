module.exports = (sequelize, Sequelize)=>{
    const Interest= sequelize.define('Interests', {
        name:{
            type:Sequelize.STRING
        }
    })

    return Interest
}