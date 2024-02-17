module.exports = (sequelize, Sequelize) => {
    const UserInfo = sequelize.define("UserInfo", {
       
        firstname: {
            type: Sequelize.STRING,
            allowNull: true
        },
        lastname: {
            type: Sequelize.STRING,
            allowNull: true
        },
        email:{
            type: Sequelize.STRING,
            allowNull:true
        },
        dob: {
            type: Sequelize.STRING,
            allowNull: true
        },
        gender: {
            type: Sequelize.STRING,
            allowNull: false
        },

        intensions:{
            type:Sequelize.STRING
        }

    });

    return UserInfo;
}