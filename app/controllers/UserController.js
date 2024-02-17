const db = require("../models");

const User = db.users;
const UserInfo = db.userinfo;
const Address = db.address;
const UserInterest = db.userinterest;
const Op = db.Sequelize.Op;
const bycrypt = require('bcrypt');

exports.create = async (req, res) => {

    if (!req.body.phone) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }


    const user = {
        phone: req.body.phone,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        gender: req.body.gender,
        password: req.body.password,
        street: req.body.street
    };
    let passwordSalt = await bycrypt.hash(user.password, 10)

    User.create({
        phone: user.phone,
        password: passwordSalt,
        passwordSalt: user.password,
        verificationToken: null,
    
    }, {model:UserInfo})
        .then(async data => {
            const ui = await UserInfo.create(
                {
                    userId:data.id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    gender: user.gender,
                    dob: req.body.dob || null,
                    email: req.body.email || null,
                    intensions: req.body.interest || null
                }
            )
            await UserInterest.create({
                InterestId: 1,
                userId:data.id,
            });

            await Address.create({
                userId:data.id,
                street: user.street
            })
            res.send(data);
        })
        .catch(err => {
            // console.log(err.errors[0])
            res.status(500).send({
                message:
                    err.errors[0].meesage || "Some error occurred while creating the User."
            });
        });

};

exports.findAll = (req, res) => {

    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    User.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Users."
            });
        });

};

exports.findOne = (req, res) => {
    const id = req.params.id;

    User.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find User with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving User with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    User.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating User with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    User.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete User with id=${id}. Maybe User was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User with id=" + id
        });
      });
};

exports.deleteAll = (req, res) => {

};

exports.findAllPublished = (req, res) => {

};