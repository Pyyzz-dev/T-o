var arr = [{
    name: 'Dung',
    age: 24,
    salary: 1000,
    card: {
        bank: 'TP Bank',
        expried: '20-11-2022'
    }
},{
    name: 'Viet Anh',
    age: 22,
    salary: 1500,
    card: {
        bank: 'TP Bank',
        expried: '20-03-2020'
    }
}, {
    name: 'Dung',
    age: 25,
    salary: 4000,
    card: {
        bank: 'Viettin Bank',
        expried: '20-12-2024'
    }
}, {
    name: 'Sang',
    age: 20,
    salary: 1500,
    card: {
        bank: 'Techcom Bank',
        expried: '10-11-2020'
    }
}]

// 1. dùng hàm map để lọc ra tất cả những ngân hàng được sử dụng
// 2. sắp xếp ngày hết hạn của các thẻ ngân hàng
// 3. in ra các bạn dùng thẻ ngân hàng TP Bank

function ex1(){
    var ex1 = arr.map(function(value, index){
        return value.card.bank;
    })
    console.log(ex1);
    console.log("---------------");
}
// ex1();


function ex2(){
    var ex2 = arr.sort(function(a,b){
        var arr1 = a.card.expried.split("-");
        var date1 = new Date(arr1[2], arr1[1], arr1[0]);
        var arr2 = b.card.expried.split("-");
        var date2 = new Date(arr2[2], arr2[1], arr2[0]);
        return date1 - date2;
    })
    console.log(ex2);
    console.log("---------------");
}
// ex2();

function ex3(){
    var ex3 = arr.filter(function(value, index){
        if(value.card.bank == "TP Bank"){
            return value.name;
        }
    })
    console.log(ex3);
}
// ex3();

function settimeOut(){
    function time(param1, param2){
        var param1;
        var param2;
        param1 +=1;
        param2 +=1;
        console.log(param1 + " " + param2);
    }
    setTimeout(time, 3000 , 3, 5);
}
// settimeOut();

// demoPromise();
function demoPromise(){
   var readFile = require("fs");
   var promise = new Promise(function(resolve, reject){
       readFile.readFile("./text.txt", function(err, data){
           if(err){
               reject("Không load được");
           } else{
               resolve("Load được rồi " + data.toString());
           }
       })
   })
   promise
   .then(function(data){
       console.log("Then là được" ,data);
   })
   .catch(function(err){
       console.log("Error", err);
   })
}

function testCall(){
    function capitalName(){
		this.name = this.name.toUpperCase();
	}
    var person1 = {
        name: 'nam', birthDay: '1996-11-26'
    }
    var person2 = {
        name: 'hiep', birthDay: '1999-01-26'
    }
    // capitalName.call(person1);
    function formatBirthDay(){
        var subDate = this.birthDay.split("-");
        this.birthDay = subDate[2] + "/" + subDate[1] + "/" + subDate[0];
    }
    formatBirthDay.call(person1);
    formatBirthDay.call(person2);
    console.log(person1);
    console.log("---------------");
    console.log(person2);
}
// testCall();

function clockOnline(){  
    setInterval(function(){
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        console.log(time);
    }, 1000)
}
// clockOnline();

var demoArray = [{
    name:"Phong",
    age: 11
}, {
    name: "Nam",
    age: 28
}]

function demo1(){
    for(var i = 0; i < demoArray.length; i++){
        demoArray[1].name = "Tèo";
    }
    console.log(demoArray);
}
demo1();
console.log(demoArray);
