module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        firstname: {
            type: Sequelize.STRING,
            null: true
        },
        lastname: {
            type: Sequelize.STRING,
            null: true
        },
        phone: {
            type: Sequelize.STRING,
            null: false,
            require:false
        },
        dob: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.BOOLEAN
        }
    });

    return User;
};