const express = require("express");
const router = express.Router();

const burgers = require("models/burger.js");

router.get("/", (req, res) => {
    burgers.selectAll( data => {
        const hdbObject = {
            burgers: data
        };
        res.render("index", hdbObject)
    });
})

router.post("/api/burgers", (req,res) => {
    burgers.insertOne(
        [
        "name", "devoured"
        ],
        [
        req.body.name, req.body.devoured
        ], result => {
            res.json({ id: result.insertId })
        });
});

router.put("/api/burgers/:id", (req, res) => {
    const condition = "id = " + req.params.id;

    burgers.updateOne({
        devoured: req.body.devoured
    }, condition, result => {
        if (result.changedRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})

module.exports = router;