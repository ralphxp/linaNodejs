module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        
        phone: {
            type: Sequelize.STRING,
            allowNull: false,
            require:true
        },

        verificationToken:{
            type: Sequelize.STRING,
            allowNull:true
        },
        
        password: {
            type: Sequelize.STRING,
            allowNull:false
        },
        passwordSalt:{
            type: Sequelize.STRING,
            allowNull:true
        },
        
    });

    return User;
};