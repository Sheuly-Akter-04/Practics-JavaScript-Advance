window.alert("Java Script");
alert("JavaScript");
var nam = "Sheuly";
var age;
age = 23;
var number = 2.2721;
let b;
a = 15;
b = "s";

var x = "It";
var y = " Js";
var z = x + y;

var text = prompt("Enter your name :");
var p = "Smile";
p = p.toUpperCase();

var ab = 3;
ab += 6; // ab = ab+6
document.write("Assignment oparator = ", ab, "<br>");
//Assignment oparator -> =, +=, -=, *=, /=, %=, **=
//Arithmetic oparator -> +, -, *, /, **(exponent), %(modulus), ++

var num1 = prompt("Enter number: <br>");//For not assign fixed value
var num2 = 3;
num1 = parseInt(num1, 10);//For full number & parsefloat for float number

//////
var sum, sub;
sum = num1 + num2;
sub = num1 - num2;
document.write("sum = " + sum, "<br>");
document.write("sub = " + sub, "<br>");

//////////
var base = parseFloat(prompt("Base value = "));
var height = parseInt(prompt("Height = "));
var area = base * height;
document.write("Area = " + area, "<br>");

////////
var farn = parseFloat(prompt("Fahrenheit ="));
var cels = (farn - 32) * (5 / 9);// Temperature change
document.write("Celsius value = " + cels, "<br>");

///////
var nu = 2;
if (nu % 2 == 0)
    document.write("Even <br>");
if (nu % 2 != 0)
    document.write("Odd <br>");

//////
var nm = prompt("Enter if num : <br>");
if (nm > 0)
    document.write("Positive <br>");
if (nm < 0)
    document.write("Negative <br>");

//////
var marks = prompt("Enter marks: <br>");
if (marks >= 90)
    document.write("A+ <br>");
else if (marks >= 85)
    document.write("A <br>");
else (marks >= 80)
document.write("B+ <br>");

/////
var mark = prompt("Enter mark: <br>");
if (mark > 100 || mark < 0)// || will be true if one is true
    document.write("Invalid mark <br>");
else if (mark >= 90 && mark <= 100)// if 1 condition false then whole false
    document.write("A+ <br>");
else if (mark >= 85 && mark <= 90)
    document.write("A <br>");
else (mark >= 80 && mark <= 85)
document.write("B+ <br>");

/////
var digit = prompt("Enter switch: <br.");
switch (digit) {
    case "0":
        document.write("Zero <br>");
        break;
    case "1":
        document.write("One <br>");
        break;
    default:
        document.write("Not digit <br>");
}

//////
for (var c = 1; c <= 5; c = c + 1)// starting, condition, update
{
    document.write("<h1> For loop </h1> <br>");
}
document.write("End <br>");
////
for (var d = 1; d <= 27; d = d + 1)// starting, condition, update
{
    document.write(" " + d, "<br>");
}
document.write("End <br>");

////
var add = 0;// 1+2+3+4... =
for (var e = 1; e <= 5; e = e + 1) {
    add = add + e;
}
document.write(add);

//////
for (var f = 1; f <= 10; f++)// starting, condition, update
{
    if (f == 10) {
        continue;
    }
}
document.write(" " + f, "<br>");
document.write("Last <br>");

////Ternary operator alternative of if/else
var nm = Number(prompt("Ternary operator number:"));
var result = nam > 0 ? "posi-tive" : "Nega-tive"
document.write(result);
//// Function Creation
function sqaure(f) {
    var ff = nn * nn;
    document.write("ff = " + ff + "<br>");
}
sqaure(5); // function calling

//// Function Creation
function addition(ff, ee) {
    var fff = ff + ee;
    document.write("Function sum = " + fff, "<br>");
}
addition(5, 6);

//// Immediately Function (IIFEs)
(function addition(msg) {
    document.write(msg, "<br>");
})("Happy");

/// Function Expression
var g = function h(mg) {
    document.write(mg, "<br>");
};
h("Happy");

///// Array
var names = new Array(2);
names[0] = "Sheuly";
names[1] = "Niishat";
///// Array; push & pop
var hh = ["a", "b"];
document.write(hh.length);
hh.push("a");// inside
document.write(hh.length);
hh.pop()//out the last one
document.write(hh);
//// Array concation
var sub1 = ["Web", "Js"];
var sub2 = ["C", "C++"];
var sub = sub1.concat(sub2);
document.write(sub);

/// loop of array
var multi = new Array();
for (var g = 0; g < 5; g++) {
    multi[g] = parseInt(prompt("Multiplication number : <br>"));
}
var mul = 0;
for (var g = 0; g < 5; g++) {
    document.write(multi[g]);
    mul = mul + mul[g];
}
document.write("Multiplication result = " + mul, "<br>");
///// To add or remove elements but not effect on main array
var subject = [aa, bb, cc];
document.write(subject);
subject.splice(2, 1, "abc", "bca", "<br>");//add
document.write(subject);
subject.splice(3);//remove
document.write(subject);

//// Object creation
function emplyee(ne, ag) {/// constuction creation of object
    this.ne = ne;/// multiple object creation
    this.ag = ag;

    this.display = fuction(); {
        document.write(this.ne); /// multiple output creation
        document.write(this.ag);
    }  //build function on constractor
}
var emplyee1 = new emplyee("i", 23);
var employee2 = new emplyee("s", 22);
var employee3 = new emplyee("a", 21);

emplyee1.display();
emplyee3.display();

//// Math object: Math.floor,rounf, sin,max
var k = parseInt(prompt("Enter 1st math object num:"));
var kk = parseInt(prompt("Enter 2nd math object num:"));

var maximum = Math.max(k, kk);
document.write("maximum <br>");
/// Math.floor(Math.random()*6) -> function for value between 0-5
///Math.floor(Math.random()*6) +1 -> function for value between 1-5

/// Gussing Game.. using math object
var numOfWon = 0;
var numOfLost = 0;

for (var lll = 1; lll <= 5; lll++) {
    var l = parseInt(prompt("Enter guess number from 1 to 5: "));//guess number
    var ll = Math.floor(Math.random() * 5) + 1;//random number
    if (l == ll) {
        document.write("Won <br>");
        numOfWon++;
    } else {
        document.write("Lost. Random number was: <br>");
    }
}
document.write("Total number of won" + numOfWon + "<br>");
document.write("Total number of lost" + numOfLost + "<br>");

/////Date object & method
var date = new Date();
document.write(date, "<br>")//Display todays date

var year = date.getFullYear();
document.write(year, "<br>")// Display only full year i 4 digit

var month = date.getMonth();
document.write(month, "<br>")// will be display month (0-11)(jan-dec)

var currentDay = date.getDay();
document.write(currentDay, "<br>")// Current date is showed

var currentHour = date.getHours();
document.write(currentHour, "<br>")// Current hour is showed

//////Document object model (DOM)
var domheading1 = document.getElementById("domheading1 <br>");
domheading1.innerHTML = "DOM";//This is dom heading will be replace by DOM

//// Query Selector -> which is combined of getElementBy Id->(#),TagName(tag name), ClassName->(.)
document.querySelector("a").innerHTML = "This is changed dom";
// to display unorder list hyper text
//document.querySelector("li a").innerHTML = "This is changed dom";
//( parent, child)
/// to change class name
//document.querySelector(".my.div").innerHTML = "This is changed dom";
//in DOM method will be hold get ElementById(), proprrties= innerHTML


/// Onclick event &&& <button onclick="alert('Hiii')">Click it</button>
function onclickmsg() {
    alert("Button");
}

//// for msg multiple button onclick
var mymssg = document.querySelector("#paraId");
function mymsg1() {
    mymssg.innerHTML = "It is clicked button1";
}

var mymssg = document.querySelector("#paraId");
function mymsg2() {
    mymssg.innerHTML = "It is clicked button2";
}
////var mymssg = document.querySelector("#myImg"); for picture shown in button
//function myImg1(){
// mymssg.src = "folder name/pic name.jpg";

/// Image slider or continus changing
var photos = ["img/Flower.jpg", "img/pic.jpg", "img/Night.jpg"];
var imgTag = document.querySelector("img <br>");

var count = 0;
function next() {
    count++;

    if (count >= photos.length) {
        count = 0;
        imgTag.src = photos[count];
    } else {
        imgTag.src = photos[count];
    }

}

function prev() {
    count--;

    if (count < 0) {
        count = photos.length - 1;
        imgTag.src = photos[count];
    } else {
        imgTag.src = photos[count];
    }

}

/// Changing CSS style dynamically
function addStyle() {
    var cssvar = document.querySelector("#paraid");
    cssvar.classList.add("para-style");

    /// document.querySelector("#paraid").style.color = "green"; // work as like previous 2 lines
}
function remStyle() {
    var cssvar = document.querySelector("#paraid");
    cssvar.classList.remove("para-style");
}

//////Event listener that's means after clicking text it change colour & also remove
document.querySelector("button").addEventListener("click", evenfun); //("listener name" , function)
function evenfun() {
    alert(" Hi Event");
}
var ev = document.querySelector("HII");
ev.addEventListener("click", function () {
    alert("hello");
});

//var ev = document.querySelector("HII");
//ev.addEventListener("mouseover",function(){
//ev.classList.add("para-style");
//});
//ev.addEventListener("mouseout",function(){
// ev.classList.remove("para-style");
//});

// querySelectorAll = use for multiple button

/// DOM event onchange
// Change event
//console.clear();   ---command
const input = document.querySelector("input");
// var , let & const = same
input.addEventListener('change', cangeHandler)

function cangeHandler(s) {
    document.write("Changed name <br>");
}
/// load, unload, scroll, resize, toggle
//load
window.addEventListener('load', function () {
    document.write("load <br>");
}); // window can be replace another object

//unload
window.addEventListener('unload', function () {
    document.write("unload <br>");
});

///scroll
window.addEventListener('scroll', function () {
    document.write("scroll <br>");
});

// resize
window.addEventListener('resize', function () {
    var wwidth = window.outerWidth;
    var hheight = window.outerHeight;
    document.write(`window height: ${hheig}, Window width: ${wwidth}`, "<br>");
});

///toggle used in details elevent of html
var details = document.querySelector("details");
details.addEventListener('toggle', function () {
    document.write("toggle <br>");
});
/// no name of function = function()

/// button or space colour
var int = document.querySelector("int");
int.addEventListener("blur", function () {
    input.style.backgroundColor = "orange";
    input.style.padding = "1.2rem";
});

//// Clipboard Event
const iint = document.querySelector("iint");
int.addEventListener('copy', function () {
    console.log("You have copied the text <br>");
});

/// have to take name

function intName() {
    var h11 = document.createElement('h11 <br>');
    let ttext;
    var nname = prompt("Enter full name: <br>");
    if (nname == null || name == '') {
        ttext = 'No name found';
    } else {
        ttext = nname;
    }
    var textNode = document.createTextNode(ttext);
    h11.appendChild(textNode);
    document.body.appendChild(h11);
}

intName();

///// Set Time out
// setTimeout(()=>{
//     console.log("hii");
// }, 1000);

/// Error handeling -> try, catch, finally, throw

///try (have code) & catch (will be handle whenever try have error otherwise not work) & finally (works those code that want to display always with or without error)
try {
    //code test
    alert("This is for try block <br>");
    alert(m);// it is an error but program will be not stop

} catch (err) {//must have to give a parameter
    //handle error
    alert("Inside the catch block <br>");
    console.log(err);
    //document.write(err);
    console.log(err.name);
    console.log(err.message);
} finally {
    alert("It is 2nd try block <br>");
}

/// Canvas Drawing graphics on web page
var ccan = document.getElementById("mycanvas");
var ctx = ccan.getContext("2d");

ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.strokeRect(10, 10, 380, 280);
ctx.fillStyle = "green";
ctx.fillRect(12, 12, 378, 276);

var centerX = c.width / 2;
var centerY = c.height / 2;

ctx.beginPath();
ctx.arc(centerX, centerY, 80, 0, 2 * Math.PI, false);
ctx.fillStyle = "red";
ctx.fillStyle();
ctx.stroke();

///// ES6 normal things
let eee = 25;
let ef = 30;

// let ssum = eee + ef;
// document.write(`The sum is ${ssum} . and it end `);
document.write(`The sum is ${eee + ef} . and it end `);

let se = "Java Script";
let msg = `This is ${se} document. ES6 start <br>`;
document.write( msg);

/// ES6 function calling
// const, fun name, (parameter), => ,{},fun call/value
const aadd = (xx, yy) => {
    let suum = xx + yy;
    document.write(suum);
}
aadd(27,23);

/// ES6 hosting = default behavior works on var, on strict mode use "use strict" & also declear var
/// ES6 default & rest paramenter
function numm(ac, ad, ...az){ //rest parameter sign = .... at last one
  document.write(`ac = ${ac}, ad = ${ad}, az = ${az}`,"<br>");
}
numm(1,2,3,4,5);

/// ES6 Spread operator define = ... use dot as like rest parameter but in any place parameter
function addnum(m,n,k){
    return m+n+k;
}
let nnum = [1,2,3]
document.write(addnum(...nnum ,"<br>"))

//// ES6 object literals
function stu(cllass,roll){
    return{
        cllass,
        roll  
    }
}
document.write(stu("SSC",1,"<br>"));
let mssg = {
    body(){
        return `This is an object function` 
    }
}
document.write(mssg.body(),"<br>");

/// ES6 for of & for in into the loop 
/// for of
const nnaames = [s1, s2, s3]
for(let nnaame of  nnaames){
    document.write(nnaame,"<br>");//nnaames will replace nnaame
}

//// for in
let info = {
    ID : 201,
    funam : `For in name`,
    cgpa : 3.92
}
for(let na in info){
    document.write(`${na} : ${info[na]},"<br>"`);
}

//// ES6 For each function = receive a function
var arrayy = [5,10,15,20];
numbers.forEach(function(v){
    document.write(v,"<br>");
});

////  ES6 For each function do sqaures number
var arrayy = [5,10,15,20];
var sqaureNum = [];
numbers.forEach(function(v){
    sqaureNum.push(v*v);
});
document.write(sqaureNum,"<br>");

////  ES6 For each function do add 5 number
var arrayy = [5,10,15,20];
document.write(arrayy, "<br>");
var sqaureNum = [];
numbers.forEach(function(v,index,arr){
    arr[index] = +5;
});
document.write(numbers,"<br>");

////ES6 map not need to declare c array for staying value, it take value itself arry & filter array 
/// map = like for each but not need var array because it return array 
var arrayy = [2,3,4,5,6];

var sqaureNum = numbers.map(function(v){
    return(v*v);
});
document.write(sqaureNum,"<br>");

//// ES6 Filter = will be filter with condition in array 
var farrayy = [12,34,6,78,98,0];

var fNum = numbers.filter(function(vc){
    return vc>10;
});
document.write(fNum,"<br>");

//// ES6 Arrow function
 const msgg = () => "It is arrow function 1";
 document.write(msgg,"<br>");

////ES6 Arrow function with parameter 
const add1 = (nuum1, nuum2) => nuum1 + nuum2;
document.write(add1(50,50),"<br>");

/// ES6 Arrow function with map & filter 

var clients = [
    {
        idd: 1,
        naame: 'Srity',
        salary: 2000
    },
    {
        idd: 2,
        naame: 'Adhora',
        salary: 1000
    },
        {
        idd: 3,
        naame: 'Rodela',
        salary: 500
    }
]

//previous way
function clientNam() {
    return clients.filter(function(mm){
        return mm.salary >1000;
    }).map(function(nm){
        return nm.naame;
    });
}
document.write(clientNam(),"<br>");

/// Arrow function
const clientNam1 = () => {
     return clients.filter((ii) => ii.idd > 1).map(jj => jj.salary);
}
document.write(clientNam1(),"<br>");

//// ES6 Destructuring array & object 
/// array destructure
let serial = [7, 8, 9, 10]
let [ser1, ser2, ...Z ] = serial;
document.write(ser1,"<br>");
document.write(Z,"<br>");

/// array destructure on Swap variable 
let ss = 97, sa = 98;
[ss, sa] = [sa, ss];
document.write(ss,"<br>");
document.write(sa,"<br>");

/// object destructure
const infos = {
    rollno : 23,
    gpa : 3.92,
    fulln :'SS'
}
const {rollno,fulnn} = infos
document.write(rollno,"<br>");
document.write(infos.find(ko => ko.gpa>3.90,"<br>")); ///find() function 

/// nested object destructure
const infoS = {
    rollno : 23,
    gpa : 3.92,
    fulln : 'SS',
    languages : {
        native : 'Bangla',
        beginner : 'Engish'
    } 
}
const {fulln,languages} = infos
document.write( languages.native,"<br>");

//// function parameter destructuring
const sInfo = ({clas, agge}) => {
    document.write(`${clas}, ${agge}`,"<br>");
}
const Info = {
    clas: 9,
    agg:"Shilpi"
}
sInfo(Info);

/// ES6 find() method of array = gives 1st value of program
let evNum = [5,55,12,27,98];
let evenNum = evNum.find(yo => yo%2===0);
document.write(evenNum, "<br>");

/// ES6 findIndex() method of array = gives 1st index number 
let evnum = [5,55,12,27,98];
let evennum = evnum.findIndex(yo => yo%2===0);
document.write(evennum, "<br>");

//// ES6 modules & class 
import {sentence, setSentence} from "./module";
document.write(sentence);

setSentence("This is 2nd line of module, <br>");
document.write(sentence);

///// ES6 Synchronous & Asynchronous = setTimeout()
// JS by default Synchronous = after finish 1, 2 start 
///Asynchronous
const task1 = () => {
    document.write("Task 1, <br>");
};
const dataload = () => {
    document.write("Task 2, <br>")
};
const task2 = () => {
    setTimeout(dataload, 2000, "<br>");
};

//// const task2 = () => {
    //setTimeout(() => {
       // document.write("Task 2, date loading, <br>")  
    //}, 3000);
//}
task1();
task2();

//// ES6 callback & higher order function 
//normall function 
function sqaure(q){
    document.write(`The square of $(q): ${q*q}`, "<br>");
};
//// callback
function higherOrderFunction (numf,callback){
    callback(numf);
};
sqaure(7);
higherOrderFunction(9,sqaure);

///// ES6 Promise as like callback = panding, resolve, reject according to condition 
const Promise1 = new Promise((resolve, reject)=>{
    let completedPromise = true;//condition
    if(completedPromise){
        resolve('Promise1 complete, <br>');
    }else{
        reject('Not complete promise1, <br>');
    }
});
Promise1.then((res)=> {// work with resolve function 
document.write(res);
})
.catch((errr) => {// 1 catch enough to handle err
    document.write(errr);
});
document.write("End, <br>");

////promise.all() = can call selecting promises
/// promise.race() = give output of 1 response that 1st solve
/// await() = use for waiting that async function 

/// API calling 
///XMLHttpRequest() = used for xml api calling 
/// get data
const getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https....');///default surver
    
    xhr.onload = () => {
        let data = xhr.response;
        document.write(JSON.parse(data),"<br>");
    }
    xhr.onerror = () => {
        document.write('xml error is here, <br>');
    }
    xhr.send();
}
getData();

/// for call several api
const makeRequest = (mmethod, url) => {
    const xhr = new XMLHttpRequest();
    xhr.open(mmethod, url);///default surver
    
    xhr.onload = () => {
        let data = xhr.response;
        document.write(JSON.parse(data),"<br>");
    }
    xhr.onerror = () => {
        document.write('xml error is here, <br>');
    }
    xhr.send();
}
const ggetData = () => {
   makeRequest('GET', 'https....');///here use different url
}
ggetData();

//// sent  data
const mmakeRequest = (mmethod, url, ddata) => {
    const xhr = new XMLHttpRequest();
    xhr.open(mmethod, url);///default surver

    xhr.setRequestHeader('Content-Type', 'appication/json')
    
    xhr.onload = () => {
        let data = xhr.response;
        document.write(JSON.parse(data),"<br>");
    }
    xhr.onerror = () => {
        document.write('xml error is here, <br>');
    }
    xhr.send(JSON.stringify(ddata));
}
const gggetData = () => {
   mmakeRequest('GET', 'https....');///here use different url
}
const sendData = () => {
    makeRequest('POST', 'https://', {
        title: 'foo',
        body: 'bar',
        userId: 55,
    });
}
const updateData = () => {
    makeRequest('PUT', 'https://', {/// put = update data
        title: 'hii',
        body: 'carry',
        userId: 505,
    });
}
const updateSingleData = () => {
    makeRequest('PATCH', 'https://', {// PATCH = only change 1 thing not full body 
        title: 'Wait',
    });
}
const deleteData = () => {
    makeRequest('DELETE', 'https://', {// PATCH = only change 1 thing not full body 
    });
}

gggetData();
updateData();
updateSingleData();
deleteData();

//// fetch API calling 
// by default return promise only network error 
fetch("https://jsomplaceholder.typicode.com/posts/101")
.then((res)=> res.json())
.then((res)=> document.write(res))
.catch((errr)=> document.write(errr));

/// get method for 100 times 
fetch("https://jsomplaceholder.typicode.com/posts/101")
.then((res)=> {
    if(!res.ok){
        const publish= 'Error of fetch get api : ${res.status}';
        throw new Error(publish);
    }return res.json();
})
.then((res)=> document.write(res))
.catch((errr)=> document.write(errr));

/// put method 
fetch("https://jsomplaceholder.typicode.com/posts/1",{
    method: "POST",
    headers: {
        "Content-type": "appication/json; charset=UTF-8",
    },
    body: JSON.stringify({
        id: 1,
        title: "fetch",
        body: "barr",
        userId: 1,
    }),
})
.then((res)=> {
    if(!res.ok){
        const publish= 'Error of fetch get api : ${res.status}';
        throw new Error(publish);
    }return res.json();
})
.then((res)=> document.write(res))
.catch((errr)=> document.write(errr)); 

/// patch method 
fetch("https://jsomplaceholder.typicode.com/posts/1",{
    method: "PATCH",
    headers: {
        "Content-type": "appication/json; charset=UTF-8",
    },
    body: JSON.stringify({
        title: "fetch PATCH",

    }),
})
.then((res)=> {
    if(!res.ok){
        const publish= 'Error of fetch get api : ${res.status}';
        throw new Error(publish);
    }return res.json();
})
.then((res)=> document.write(res))
.catch((errr)=> document.write(errr)); 

/// delete  method 
fetch("https://jsomplaceholder.typicode.com/posts/1",{
    method: "DELETE",
})
.then((res)=> {
    if(!res.ok){
        const publish= 'Error of fetch get api : ${res.status}';
        throw new Error(publish);
    }return res.json();
})
.then((res)=> document.write(res))
.catch((errr)=> document.write(errr)); 

/// async await 
const makeeRequest = async (urrl, confg) => {
    const ress = await fetch(urrl)
    .then((ress)=> {
        if(!ress.ok){
            const ppublish= 'Error of fetch async: ${ress.status}';
            throw new Error(ppublish);
        }
    })
    const daata = await ress.json();
    return daata;
}
const gettdata = () => {
    makeeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((ress) => document.write(ress))
    .catch((errr) => document.write(errr))
};///make request 
gettdata();

//// send data 
const makkeRequest = async (urrl, confg) => {
    const ress = await fetch(urrl, confg)
    .then((ress)=> {
        if(!ress.ok){
            const ppublish= 'Error of fetch send data: ${ress.status}';
            throw new Error(ppublish);
        }
    })
    const daata = await ress.json();
    return daata;
}
const seenddata = () => {
    makkeRequest("https://jsonplaceholder.typicode.com/posts",{
        method: "POST",
        body: JSON.stringify({
        title: "fetch senddata",
        body: "barr",
        userId: 101,
    }),
    headers: {
        "Content-type": "appication/json; charset=UTF-8",
    },
})
    .then((ress) => document.write(ress))
    .catch((errr) => document.write(errr))
};
seenddata();

/// update data

const updata = () => {
    makkeRequest("https://jsonplaceholder.typicode.com/posts/1",{
        method: "PUT",
        body: JSON.stringify({
            id: 1,
        title: "fetch update data",
    }),
    headers: {
        "Content-type": "appication/json; charset=UTF-8",
    },
})
    .then((ress) => document.write(ress))
    .catch((errr) => document.write(errr))
};
updata();

//// delete data 
const dedata = () => {
    makkeRequest("https://jsonplaceholder.typicode.com/posts/1",{
        method: "DELETE",
    })
    .then((ress) => document.write(ress))
    .catch((errr) => document.write(errr))
};
dedata();

/// axios = javascript API calling











console.log(a);
console.log(b);
document.write("Hi <br>");
document.write(nam, "<br>");
document.write(age, "<br>");
console.log("Hello <br>");
console.log(number.toPrecision(2), "<br>")
document.write(z, "<br>");

document.write("Number of character " + text.length, "<br>");
//library function of string
document.write(p, "<br>");
