function testMethodSprice() {
    var array = [1, 2, 3, 4, 5, 6, 7];
    array.splice(2,     //vị trí thêm phần tử (2 số 90 đấy)
        2,   //số lượng phần tử (ở array cũ) được xóa đi tính từ vị trí 2 (ở đây là 2 thì sẽ xóa 3 và 4)
        90, 90); // các phần tử được thêm vào

    console.log(array);
}
// testMethodSprice();

function testMethodConcat() {
    var myGirls = ["Cecilie", "Lone"];
    var myBoys = ["Emil", "Tobias", "Linus"];
    var myChildren = myGirls.concat(myBoys); // join 2 object
    console.log(myChildren);
}
// testMethodConcat();

function testMethodSlice() {
    var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    var citrus = fruits.slice(2, 3);
    console.log(fruits);
    console.log("--------------");
    console.log(citrus);
}
// testMethodSlice();

// Bài tập
function baiTap() {
    var array = [{
        username: "Hoang Xuan Phuc",
        class: "12A8",
        position: "ST",
        number: "9"
    }, {
        username: "Cao Hong Duc",
        class: "12A4",
        position: "CB",
        number: "7"
    }, {
        username: "Cao Tien Thuan",
        class: "12A8",
        position: "CAM",
        number: "10"
    }]

    var arrayThem = {
        username: "Nguyen Duong Phong",
        class: "12A4",
        position: "CM",
        number: "13"
    }
    // thêm object vào cuối array object đã cho
    array.push(arrayThem);
    console.log(array);
    console.log("-----------------");

    // xóa phần tử đầu tiên của array object đã cho
    array.shift();
    console.log(array);
    console.log("-----------------");

    // định nghĩa 1 function in ra giá trị của array theo vị trí, số lượng phần tử mà người dùng nhập vào
    function findElement(position, numberOfElement) {
        var result = array.splice(position, numberOfElement);
        console.log(result);
        console.log("-----------------");
    }
    findElement(1, 3);
}
// baiTap();

// map và filter
function workWithMap(){
    var arrayObj = [{
        name: "nodemy",
        price: 3000
    },{
        name: "demo",
        price: 2000
    },{
        name: "Hải Phòng",
        price: 5000
    }]
    var sum = 0;
    var resultPrice = arrayObj.map(function(value, index){
        return sum += value.price;
    })
    console.log(sum);
}
// workWithMap();


