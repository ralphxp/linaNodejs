module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        
        phone: {
            type: Sequelize.STRING,
            allowNull: false,
            require:true
        },
        
        password: {
            type: Sequelize.STRING,
            allowNull:false
        }
    });

    return User;
};