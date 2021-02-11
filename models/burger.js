const orm = require("config/orms.js");

const burgers = {
    selectAll: function(cb){
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, (res) => {
            cb(res);
        });
    },

    updateOne: function(objColVals, condition, cb){
        orm.updateOne("burgers", objColVals, condition, (res) => {
            cb(res);
        });
    }
};


module.exports = burgers