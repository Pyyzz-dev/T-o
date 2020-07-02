var greeting = "Welcome to Nodemy, Nodemy is stand for Nodejs Academy";

// đếm xem có bao nhiêu ký tự
function countChar() {
    console.log(greeting.length);
}
// countChar(); output: 53

// indexOf xem "nodemy" nằm ở vị trí nào
function indexOfnodemy() {
    console.log(greeting.indexOf("nodemy"));
}
// indexOfnodemy(); output: -1 --> không có "nodemy"

// indexOf xem "Nodemy" nằm ở vị trí nào
function indexOfNodemy() {
    console.log(greeting.indexOf("Nodemy"));
}
// indexOfNodemy(); output: 11 --> Nodemy ở vị trí 11..

// dùng .startWith kiểm tra xem có bắt đầu với Welcome không
function checkStartWith() {
    console.log(greeting.startsWith("Welcome"));
}
// checkStartWith(); output: true

// dùng .substring để lấy chữ Academy
function checkSubString() {
    console.log(greeting.substring(46, 53));
}
// checkSubString(); output: Academy, Academy có vị trí từ 46 -> 53

// dùng .split để tách các từ
function checkSplit() {
    console.log(greeting.split(" "));
}
// checkSplit(); output: một mảng mà mỗi phần tử là một từ trong chuỗi đã cho

//dùng .trim() để xóa các dấu cách ngoài rìa
function checkTrim() {
    console.log(greeting.trim(" Welcome to Nodemy, Nodemy is stand for Nodejs Academy "));
}
// checkTrim();

//dùng .include để kiểm tra xem Nodemy có trong câu trên không
function checkInclude() {
    console.log(greeting.includes("Nodemy"));
}
// checkInclude(); output: true --> có tồn tại Nodemy

//dùng .replace để thay thế Nodemy thành NODEMY
function checkReplace() {
    console.log(greeting.replace("Nodemy", "NODEMY"));
}
// checkReplace(); từ Nodemy đầu tiên được tìm thấy sẽ trở thành NODEMY

//dùng .toUppercase để in hoa chữ cái
function checkToUpperCase() {
    console.log(greeting.toUpperCase());
}
// checkToUpperCase();

//dùng .charAt để lấy 1 ký tự ở vị trí số 4
function checkCharAt() {
    console.log(greeting.charAt(4));
}
// checkCharAt();


var array = [1, 5, 7, 8, 9, 15];
// in ra các số chẵn trong mảng
function printEven() {
    var newArray = array.filter(function(value, index) {
        return value % 2 == 0;
    })
    console.log(newArray);
}
// printEven();

// in ra các số lẻ trong mảng
function printOdd() {
    var newArray = array.filter(function(value, index) {
        return value % 2 == 1;
    })
    console.log(newArray);
}
// printOdd();

//  in ra các số lớn hơn hoặc bằng 5 trong mảng
function printBiggerThan5() {
    var newArray = array.filter(function(value, index) {
        return value >= 5;
    })
    console.log(newArray);
}
// printBiggerThan5();

// in ra các số chia hết cho 5 trong mảng
function printDivide0For5() {
    var newArray = array.filter(function(value, index) {
        return value % 5 == 0;
    })
    console.log(newArray);
}
// printDivide0For5();

// Tìm các số >5 của mảng và tăng các giá trị đó lên 1 đơn đơn vị
function printBiggerThan5andIncrease1() {
    var subArray = array.filter(function(value, index) {
        return value > 5;
    })
    var newArray = subArray.map(function(value, index) {
        return value + 1;
    })
    console.log(newArray);
}
// printBiggerThan5andIncrease1();

// splice để xóa 1 phần tử trong mảng
function testSplice() {
    console.log(array.splice(1, 1));
    console.log(array);
}
// testSplice();

//push thêm 1 phần tử vào cuối mảng
function testPush() {
    console.log(array.push(13));
    console.log(array);
}
// testPush();

//dùng vòng for tăng kết quả của các phần tử array lên 2 lần
function useForInsteadOfMap() {
    for (var i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    console.log(array);
}
// useForInsteadOfMap();


var arrayPerson = [{
    name: "Trung",
    class: "Nodemy01",
    dateJoin: "05 - 02 - 2020",
    age: 20
}, {
    name: "Phong",
    class: "Nodemy01",
    dateJoin: "06 - 01 - 2020",
    age: 19
}, {
    name: "Nam",
    class: "Nodemy02",
    dateJoin: "25 - 01 - 2020",
    age: 20
}]

// dùng .sort  để sắp xếp mảng object có tuổi tăng dần
function useSortToSortAge() {
    console.log(arrayPerson.sort(function(a, b) {
        return a.age - b.age;
    }));
}
// useSortToSortAge();

// dùng .sort để sắp xếp mảng theo ngày tham gia của học viên
function useSortToSortDateJoin() {
    var subArray = arrayPerson.sort(function(a, b) {
        return a.dateJoin.substring(0, 2) - b.dateJoin.substring(0, 2);
    })
    console.log(subArray);
}
// useSortToSortDateJoin();

// để tìm ra những học viện tham gia trước tháng 2
function useFilterToFindBehind2() {
    console.log(arrayPerson.filter(function(value, index) {
        return parseInt(value.dateJoin.substring(5, 7)) < 2;
    }));
}
// useSortToFindBehind2();

// để tạo mảng mới, viết hoa toàn bộ Tên học viện : (Trung => TRUNG)
function useMapToUpperCase() {
    console.log(arrayPerson.map(function(value, index) {
        return value.name.toUpperCase();
    }));
}
// useMapToUpperCase();

function clone() {
    var doan = {
        name: 'Doan',
        age: 22,
        salary: 1000
    }
    var trung = {...doan }; // clone
    trung.clone = true;
    console.log(trung);
}
// clone();

function testAssign(){
    var doan = {
        name: 'Doan',
        age: 22,
        salary: 1000
    }
    var trung = Object.assign({clone: true}, doan);
    console.log(trung);
}
// testAssign();



