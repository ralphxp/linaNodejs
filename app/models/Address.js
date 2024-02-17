module.exports = (sequelize, Sequelize)=>{
    const Address = sequelize.define('Address', {
        
        latitude: {
            type:Sequelize.FLOAT,
            allowNull:true
        },
        longitude: {
            type:Sequelize.FLOAT,
            allowNull:true
        },
        country: {
            type: Sequelize.STRING,
            allowNull:true
        },
        state:{
            type: Sequelize.STRING,
            allowNull:true
        },
        city:{
            type: Sequelize.STRING,
            allowNull:true
        },
        street:{
            type: Sequelize.STRING,
            allowNull:true
        },
        postcode:{
            type: Sequelize.BIGINT,
            allowNull:true
        }
    });

    return Address;
}