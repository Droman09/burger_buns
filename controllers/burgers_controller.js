const express = require("express");
const router = express.Router();

//Import burger model 
const burger = require("../models/burger.js");

//Routes and logic 
router.get("/", (req, res) => {
    burger.selectAll(data => {
        var hdbObject = {
            burgers: data
        };
        console.log(hdbObject)
        res.render("index", hdbObject)
    });
})

router.post("/api/burgers", (req, res) => {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], result => {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, result => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})

//Export routes
module.exports = router;