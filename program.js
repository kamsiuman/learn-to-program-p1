var book = require("./lib/grade.js").book1;
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

// const appInsightss = require("applicationinsights");
// var appInsights = require("applicationinsights");
// appInsights.setup("e8ad6213-e18f-48a8-bd81-a9b344fbcb5b")
//     .setAutoDependencyCorrelation(true)
//     .setAutoCollectRequests(true)
//     .setAutoCollectPerformance(true)
//     .setAutoCollectExceptions(true)
//     .setAutoCollectDependencies(true)
//     .setAutoCollectConsole(true)
//     .setUseDiskRetryCaching(true)
//     .start();

// var client = appInsights.defaultClient;

// client.trackEvent({
//   name: "my custom event",
//   properties: {
//     customProperty: "custom property value",
//   },
// });
// client.trackException({
//   exception: new Error("handled exceptions can be logged with this method"),
// });
// client.trackMetric({
//   name: "custom metric",
//   value: 3,
// });
// client.trackTrace({
//   message: "trace message",
// });
// client.trackDependency({
//   target: "http://dbname",
//   name: "select customers proc",
//   data: "SELECT * FROM Customers",
//   duration: 231,
//   resultCode: 0,
//   success: true,
//   dependencyTypeName: "ZSQL",
// });
// client.trackRequest({
//   name: "GET /customers",
//   url: "http://myserver/customers",
//   duration: 309,
//   resultCode: 200,
//   success: true,
// });
// client.trackEvent("Server is running on port" + port);

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

app.listen(port, () => console.log("Server is running on port" + port));

console.log("server ready..............");
