const orm = require("../config/orms.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
           
        });
    },

    insertOne: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, res => {
            cb(res);
        });
    },

    updateOne: function(objColVals, condition, cb){
        orm.updateOne("burgers",objColVals, condition, res => cb(res));
    }
};

// Export database functions for the controller 
module.exports = burger;