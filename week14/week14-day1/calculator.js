var express = require('express');
var app = express();

app.listen(8080);


app.get('/:operation/:num1/:num2', function(req, res) {
    var operation = req.params.operation;
    var firstNum = parseInt(req.params.firstNum);
    var secondNum = parseInt(req.params.secondNum);
    var result;

    switch(operation){
        case "add":
            result = firstNum + secondNum;
            break;
        case "subtract":
            result = firstNum - secondNum;
            break;
        case "multiply":
            result = firstNum * secondNum;
            break;
        case "divide":
            result = firstNum / secondNum;
            break;
        default:
            result = "Valid routes are add, subtract, multiply, divide";
            break;
    }

    res.send(result.toString());
});