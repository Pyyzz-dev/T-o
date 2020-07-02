// Scope
const { isNumber } = require("util");
// Object 
function bai3(){
    var number = 30;
    number = "số 30";
    console.log(number);
}
// bai3();

function bai4(){
    const object = {
        name: "nodemy"
    }
    object.name = "YA";
    console.log(object);
}
// bai4();

function bai5(){
    var persons = [{
        name: "Nam",
        job: "Dev"
    },{
        name: "Phong",
        job: "Fresher"
    },{
        name: "Duong",
        job: "Tester"
    }]
    var infoPersons = persons.map(function(value, index){
        return value.name + " có job là " + value.job;
    })
    console.log(infoPersons);
}
// bai5();

function bai6(){
    var person = {
        name: 'Nam',
        job: 'Dev',
        phone: 0866633805,
        company: 'Nodemy',
        group: ['Nodejs.vn', 'Nodejs Viet Nam'],
        website: 'http://nodemy.vn'
      }
    for(param in person){
        console.log(param);
    }
}
// bai6();


function hoistingAndScope(){
    // var x = 5;
    function test(){
        console.log(x);
        var x = 10;
        console.log(x);
    }
    test();
}
// hoistingAndScope();

function excersiseSetTimeout(){
    console.log("1");
    setTimeout(function(){
        console.log("2");
    }, 2000);
    console.log("3");
    setTimeout(function(){
        console.log("4");
    }, 1000);
}
// excersiseSetTimeout();

// bài tập về callback
// việt một function tính tổng 2 số, nếu 1 trong 2 số input mà không phải số thì in ra lỗi, còn không thì in ra tổng

function demoCallBackTinhTong(){
    function tinhTong(number1, number2, callback){
        var err = "1 trong 2 số không phải là số";
        if(number1.isNumber() && number2.isNumber()){
            return callback(null, number1 + number2);
        } return callback(err);
    }
    tinhTong(2, 3, function(err, data){
        if(err){
            console.log(err);
            return;
        } console.log(data);
    })
}
demoCallBackTinhTong();