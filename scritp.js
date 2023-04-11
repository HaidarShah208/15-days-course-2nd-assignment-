///////// Question no 1
function NumberAdd(num) {
    return function(x) {
        return x + num;
    };
}
const addFive = NumberAdd(5);
console.log(addFive(5)); // Output: 5
console.log(addFive(15)); // Output: 15




//////// Question no 2
// var seach = +prompt("check number")
// function searchArray(arr, value) {
//     if (arr.length === 0) {
//         return false;
//     }
//     if (arr[0] === value) {
//         return true;
//     }
//     return searchArray(arr.slice(1), value);
// }
// const arr = [1, 2, 3, 4, 5];
// console.log(searchArray(arr, seach));




////////////// Question 3
function addHead(text) {
    let headi = document.getElementById("demos");
    headi.innerHTML = "<h1>" + text + "</h1>";

}
console.log(addHead("This paragraph is generated"));



////////////// Question 4
function listAdd(text) {
    var list = document.getElementById("orderList");
    var newItem = document.createElement("li");
    var itemText = document.createTextNode(text);
    newItem.appendChild(itemText);
    list.appendChild(newItem);
}
listAdd("this is new heading")
listAdd("this is new order list")




//// question 5
// var changecolor = prompt("enter color for heading")

// function backgroundColor(element, color) {
//     element.style.backgroundColor = color;
// }

// const mycolor = document.getElementById('headings');
// backgroundColor(mycolor, changecolor);


////// question 6
var fst = prompt("enter name")
var snd = prompt("enter your age")

function objectInLocal(key, obj) {
    const objString = JSON.stringify(obj);
    localStorage.setItem(key, objString);
}
const objCreat = { name: fst, age: snd };
objectInLocal('Objectkey', objCreat);




///// question no 7
// let already = localStorage.getItem("students");
// let student = already ? JSON.parse(already) : [];

// function creatStudent() {
//     let main = {
//         name: prompt("Enter Name"),
//         rollNo: +prompt("Enter Roll no"),
//         teacher: prompt("Enter Teachers Name"),
//         className: prompt("Enter Your Class"),
//     };
//     student.push(main);
//     console.log(student);
//     let stringify = JSON.stringify(student);
//     localStorage.setItem("students", stringify);
// }
// creatStudent();





////// questin no 8
function toLocalStorage(obj) {
    for (var prop in obj) {
        lStorage.setItem(prop, obj[prop]);
    }
    var newObj = {};
    for (var i = 0; i < lStorage.length; i++) {
        var key = localStorage.key(i);
        newObj[key] = localStorage.getItem(key);
    }
    return newObj;
}
toLocalStorage()