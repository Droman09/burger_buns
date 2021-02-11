// Import MySQL connection
const connection = require("config/connection.js");

function printQuestionMarks(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push("?")
    };
    return arr.toString()
}

function obj(ob){
    const arr = [];

    for(var key in ob) {
        var value = ob[key];

        if(Object.hasOwnProperty.call(ob,key)){
            if (typeof value === "string" && value.indexOf(" ")>= 0) {
                value = " " + value + " ";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString()
}

const orm = {

    selectAll: function(cb){
        const query = "SELECT * FROM burgers;"
        connection.query(query, (err, result)=> {
            if (err) throw err;
            cb(result);
        })
    },

    insertOne:function(table, cols, vals, cb){
        var query = "INSERT INTO " + table;
        query += " (";
        query += cols.toString();
        query += ") ";
        query += "VALUES (";
        query += printQuestionMarks(vals.lenght);
        query += ") ";

        conneciton.query(query, vals, (err, result)=> {
            if(err) throw err;
            cb(result)
        })

    },

    updateOne: function(table, objColVals, condition, cb){
        var query = "UPDATE " + table;
        query += " SET ";
        qurty += obj(objColVals);
        query += " WHERE ";
        query += condition;

        connection.query(query,(err, result) =>{
            if(err) throw err;
            cb(result);
        });
    }

};

module.export = orm;