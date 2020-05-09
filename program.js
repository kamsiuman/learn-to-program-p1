var book = require('./lib/grade.js').book1;
var express = require('express');
var app = express();


app.get("/", function (req, res) {
    res.send("Hello mark wong world");
});



app.get("/grade", function (req, res) {

    var grades = req.query.grades.split(",");
    for (let index = 0; index < grades.length; index++) {
        book.addGrade(parseInt(grades[index]));
    }

    var average = book.getAverage();

    res.send("Your average is " + average);

});




app.listen(3000);

console.log("server ready..............");