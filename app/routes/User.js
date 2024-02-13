module.exports = app => {
    const Users = require("../controllers/UserController");

    var router = require("express").Router();


    router.post("/", Users.create);

    router.get("/", Users.findAll);


    router.get("/:id", Users.findOne);


    router.put("/:id", Users.update);

    router.delete("/:id", Users.delete);



    app.use('/api/users', router);
};
