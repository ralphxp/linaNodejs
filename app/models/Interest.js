module.exports = (sequelize, Sequelize)=>{
    const Interest = sequelize.define("Interest", {
        user_id: {
            type:Sequelize.INTEGER,
            allowNull:false
        },
        name:{
            type:Sequelize.STRING,
            allowNull:false
        }
    });

    return Interest
}