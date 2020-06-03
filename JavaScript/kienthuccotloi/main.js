//____________________________________________________
//____________________________________________________
//              Chuỗi trong JavaScript
var fullName = 'Thanh Phong';
//kiểm tra data type
console.log(typeof fullName);
//một số case sử dụng backslash (\)
var vdbl = 'su dung \'backslash\' va \\';
console.log(vdbl);
//template string ES6
//cách 1
console.log('Plus String:'+ fullName + ' ' + vdbl);
//cách 2
console.log(`Plus String:${fullName} ${vdbl}`);
//____________________________________________________
//____________________________________________________
//____________________________________________________
//              Các thao tác với chuỗi
var myString = 'JS lam viec voi JS chuoi trong JS';
//0. keyword: JavaScript String methods
//1. lenght
console.log(myString.length);

//2. find index
console.log(myString.indexOf('JS'));
//indexOf cho phép set vtri find
console.log(myString.indexOf('JS',7));
console.log(myString.lastIndexOf('JS'));
//search không cho phép set vtri find
console.log(myString.search('JS'));

//3. cut string
//phai -> trai
console.log(myString.slice(2,6));
//trai -> phai
console.log(myString.slice(-6,-2));

//4. replace (ghi đè)
console.log(myString.replace('JS','JavaScript'));
//biểu thức chính qui /JS/g
console.log(myString.replace(/JS/g,'JavaScript'));

//5. convert to upper case
console.log(myString.toUpperCase());

//6. convert to lower case
console.log(myString.toLowerCase());

//7. trim (loại bỏ khoảng trắng thừa)
console.log(myString.length);
//kiểm tra đã loại bỏ thành công
console.log(myString.trim().length);

//8. split (cắt chuỗi thành mảng)
var language = 'JavaScript, PHP, Ruby';
console.log(language.split(','));
console.log(language.split(''));

//9. get a character by index
const myString2 = 'Phong Thanh';
//khi nhập vào 1 vtri không tồn tại 
//charAt sẽ trả về 1 chuỗi rỗng
console.log(myString2.charAt(1));
//khi nhập vào 1 vtri không tồn tại
//sẽ trã về undefined
console.log(myString2[12]);
//__________________________________________________
//____________________________________________________
//____________________________________________________
//Keyword: JavaScript number methods
//                  Kiểu số trong JS
var age = 22;
var PI = 3.14;
var result = 20 / 'acb';
//cách kiểm tra NaN (đại diện cho một kiểu số không hợp lệ)
console.log(isNaN(result));
//change number -> string and theway check!
console.log(typeof age.toString());
//cách làm tròn số thập phân toFixed(2) = làm tròn 2 số sau dấu chấm.
console.log(PI.toFixed());
//__________________________________________________
//____________________________________________________
//____________________________________________________

//              Mảng trong JavaScript - Array
//mảng có thể chứa được tất cả kiểu dữ liệu trong JS
var languages = [
    'JavaScript', //note ,
    'PHP',
    'Ruby',
    null,
    undefined,
    function(){

    },
    {},
    123
];
console.log(languages);
//lấy ra phần tử theo vtri truyền vào
console.log(languages[0]);
console.log(languages.length);
console.log(typeof languages);
// cách kiểm tra object trả về có phải là một mảng 
//trả về true là đúng
console.log(Array.isArray(languages));
//đối với object sẽ trả về là false
console.log(Array.isArray({}));

//____________________________________________________
//____________________________________________________
//____________________________________________________
//__________________NOTE______________________________
//____________________________________________________
//____________________________________________________

//              Các thao tác với Array
//Keyword: JavaScript Array methods
var languages1 = [
    'JavaScript',
    'PHP',
    'Ruby'
];

//1. to string (change Array -> String)
console.log(languages1.toString()); 

//2. join (chức năng như hàm trên but can change ', ')
console.log(languages1.join(', '));

//3. pop (xóa đi phần tử cuối mảng và trả về phần tử đó)
console.log(languages1.pop());
console.log(languages1);

//4. push (thêm element vào cuối array và trả về Độ Dài của mảng)
console.log(languages1.push('ReactJS','Redux'));
console.log(languages1);

//5. shift (ngược lại với pop)
console.log(languages1.shift());
console.log(languages1);
// khi xóa hết đến phần tử cuối cùng thì sẽ trả về underfind

//6. unshift (giống push but thêm vào đầu mảng thay vì 
//thêm vào cuối mảng và củng trả về Độ Dài mảng)
console.log(languages1.unshift('Python','CSS'));
console.log(languages1);

//7. splicing (xóa bất kì elemem trong mảng, cắt, chèn elemen mới )
//(chọn vtri start, điền vtri cần xóa, thêm các element)
//                           (1,0,'HTML','C++')
console.log(languages1.splice(1,3,'HTML','C++'));
console.log(languages1);

//8. concat (phương thức nối mảng)
//nếu nhưng không dùng concat để nối mảng ta dùng (tostring) để chuyển mảng thành chuỗi sau đó cộng 2 chuỗi lại với nhau rồi dùng (split) để cắt chuỗi thành mảng.console.log(language.split(',')); v là nối được 2 mảng lại với nhau.
console.log(languages1.concat(languages1));

//9. slicing (dùng để cắt a few element) 
// slice sẽ không lấy giá trị kết thúc bắt đầu cắt từ 1 tới 2 nhưng sẽ k lấy giá trị thứ 2
console.log(languages1.slice(1,2)); // lấy xuôi
console.log(languages1.slice(-3,-2)); // lấy ngược
// or dùng để coppy mảng bằng cách dưới
console.log(languages1.slice(0));

//                  Array Methods
var courses = [
    {
        id: 1,
        name: 'JavaScript',
        coin: 250
    },
    {
        id: 2,
        name: 'Java',
        coin: 0
    },
    {
        id: 3,
        name: 'Script',
        coin: 0
    },
    {
        id: 4,
        name: 'vaScri',
        coin: 0
    },
    {
        id: 5,
        name: 'Javipt',
        coin: 0
    },
    {
        id: 7,
        name: 'Java',
        coin: 0
    },
];
//forEach() is methods duyệt qua từng phần tử của mảng
courses.forEach(function(x,index){
    console.log(x,index);
    
});

//every() giống hàm trên nhưng trả về boolen
// x đại diện cho courses
console.log(courses.every(function(x,index){
    console.log(index);
    return x.coin === 0;
    //false vì có 1 coin > 0
    //rất hữu ích khi dùng kiểm tra tất cả các phần tử thỏa mãn 1 đk gì đó

}));

//some() giống hàm trên 
console.log(courses.some(function(x,index){
    console.log(index);
    return x.coin === 0;
    //false vì có 1 coin > 0

}));
//find() tìm kiếm và chỉ trả về 1 phần tử
console.log(courses.find(function(x,index){
    return x.name == 'Java';

}));
//filter giống find but return về tất cả đk thỏa mãn (phiểu lọc)
//theo kiểu dữ liệu mãng
console.log(courses.filter(function(x,index){
    return x.name == 'Java';

}));

//map() nó trả về 3 giá trị but giá trị thứ 3 ít được dùng
console.log(courses.map(function(x,index,originArray){
    return {
        id: x.id,
        name: ` khóa học: ${x.name}`,
        coinText: ` Giá: ${x.coin}`,
        coin: x.coin,
        index: index,
        originArray: originArray,

    };

}));
//reduce() nhận vào 2 tham số 1 fun and 1 biến ktao 
// đồng thời nó trả về 4 giá trị : gt ktao, gt htai, index, orignarray              
//dùng khi muốn trả về một giá trị tổng duy nhất
var totalCoin = courses.reduce(function(gtkt,gtht){
    return gtkt + gtht.coin;
},0 /*đây là biến khởi tạo */);
console.log(totalCoin);
var totalCoinhightlv = courses.reduce((a,b) => a + b.coin , 0 );
console.log('nâng cao:' + totalCoinhightlv);

//ứng dụng vào btap làm phẳng mảng
var depthArray = [1,2,[3,4],5,6,[7,8,9]];
//x ở đây đại diện cho biến lưu trữ, y đại diện cho depthArray
var flatArray = depthArray.reduce(function(x,y){
    return x.concat(y);
},[]/*khởi tạo biến lưu trữ theo mong muốn nhận được theo kiểu dữ liệu cần */);
console.log(flatArray);

//____________________________________________________
//____________________________________________________

//              Function in JavaScript

function showDialog() {
    console.log('không thực thi khi định nghĩa');

}
showDialog(); // gọi hàm
//truyền tham số
function truyenthamso(thamso,thamso2) {
    console.log(thamso);
    console.log(thamso2);
}
truyenthamso('tham số thứ nhất','tham số thứ hai');

//đối tượng arguments
function truyenthamso2() {
    console.log(arguments);
}
truyenthamso2('arguments có thể nhận nhiều ts','vidu nhu nay');

//vòng lặp for of 
//đối tượng arguments
function truyenthamso3() {
    var myString3 = '';
    for (var param of arguments){
        myString3 += `${param} - `;
    }
    console.log(myString3);
}
truyenthamso3('arguments có thể nhận nhiều ts','vidu nhu nay');

//Return (sau khi return thì không thực thi bất kì lệnh nào sau đó)
function cong(a,b){
    return a.toString() + b.toString();
}
console.log(cong(2,6));

//Định nghĩa hàm trong hàm
function ham() {
    function hamham() {
        console.log('hàm trong hàm');
        
    }
    hamham(); // chỉ hoạt động trong phạm vi định nghĩa của nó
}
ham();

//*Các loại function
    //1.declaration function
    declaration();
    //có thể gọi trước khi định nghĩa
    function declaration() {
        console.log('có thể gọi trước khi định nghĩa');
        
    };
    //không thể gọi trước khi định nghĩa
    //2.expression function
    var exp = function() {
        console.log('không thể gọi trước khi định nghĩa');
    };
    exp();

    setTimeout(function(){

    });

    var myObject = {
        myFunction: function(){

        }
    }
    //3.Arrow function
//____________________________________________________

// Includes methods (có trong array và string)
// sữ dụng để kiểm tra chuỗi
var title = 'kiem tra chuoi';
//có thể truyền vào 2 đối số: tìm kiếm và index
console.log(title.includes('kiem',5));

//sữ dụng với mãng
var courses2 = ['JavaScript','CSS','HTML'];
//có thể truyền vào 2 đối số: tìm kiếm và index
console.log(courses2.includes('CSS',2)); //false

//_________________________________________________

//                  Polyfill

//_________________________________________________

//              Object in JavaScript

var emailkey = 'email';
var myInfo = {
    //function -> phương thức / methods
    //Others -> thuộc tính / property
    name: 'Thanh Phong',
    age: 22,
    address: 'Ninh Thuan, VN',
    [emailkey]: 'ntpit98@gmail.com',
    getName: function(){
        return this.name;
    }
};
myInfo.sex = 'Nam'; // thêm đối tượng
delete myInfo.sex; // xóa đối tượng
console.log(myInfo.getName()); // nhớ gọi function phai có ()
console.log(myInfo);

//              Object contructor

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName1 = function() {
        return `${this.firstName} ${this.lastName}`;
    };
}

var author = new User('Son','Dang','Hinh1');
var use = new User('Phong','Thanh','Hinh2');

//thêm đối tượng như bình thường với contructor
author.tieude = 'giang vien tai f8';
use.binhluan = 'rat co tam';

console.log(author.getName1());
console.log(use.getName1());
console.log(author);
console.log(use);

//____________________________________________________
//              Object prototype - basic

User.prototype.className = 'f8';
console.log(use.className);
User.prototype.getclassName = function() {
    return this.className;
};
console.log(use.getclassName()); // chú ý khi gọi phương thức ()

//_________________________________________

//                  đối tượng Date
// keyword: javascript object date mozilla

var date = new Date();
console.log(date); // trả về object
var year = date.getFullYear();
var month = date.getMonth() + 1; // 0 -> 11
var day = date.getDay();
console.log(`${day}/${month}/${year}`);
//__________________________________________
var date = Date();
console.log(date); // trả về string
//__________________________________________

//          câu lệnh điệu kiện trong js

//                      if-else

var neu = 3;

if (neu === 3) {
    console.log('là bằng 3');
    
} else if(neu === 4) {
    console.log('là bằng 4');
    
} else {
    console.log('không biết');
    
}

//                         switch

switch (neu) {
    case 2:
    case 3:
    case 4:
        console.log('là bằng 2,3,4');
        
        break;
    case 5:
        console.log('là bằng 5');
        
        break;

    default:
        console.log('không biết');
        
        break;
}

//                  toán tử 3 ngôi 
var khoaHoc = {
    name: 'javascript',
    coin: 0,

}
var result = khoaHoc.coin > 0 ? `${khoaHoc.coin} Coins` : 'Miễn Phí';

console.log(result);

//________________________________________________________

//                  Vòng lặp - loop

//1.for - lặp với điều kiện đúng
//2.for/in - lặp qua key của đối tượng
for (var key in myInfo) {
  console.log(myInfo[key]);
  //key của object là string (chuỗi) là tên của đối tượng
  //vd name: or age:
}
for(var key in languages){
    console.log(languages[key]);
    // key của array là number (số) là index của các phần tử mãng 1 2 3
}
for(var key in language){
    console.log(language[key]);
    // ngoài ra củng có thể lấy ra từ chữ của 1 chuỗi
}
//3.for/of - lặp qua value của đối tượng
for (var value of languages){
    console.log(value);
    // không lấy ra đc giá trị của object
    //nhưng vẫn có cách để lấy ra
}
for (var value of Object.values(myInfo)){
    console.log(value);
    // lưu ý Object.valueS là số nhiều phải thêm s mới chạy đc

}
//4.while - lặp khi điều kiện đúng

//5.do/while - lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng

var loop = 0;

do {
    loop ++;
    console.log(loop);
    
} while (loop < 10);

//              break and continue in loop

for (var i = 0 ; i < 10 ; i++){
    if(i%2 !== 0 ){
        continue;
    }
    console.log(i);
    // if(i=6){
    //     break;
    // }
};

myArray = [
    [1,2],
    [3,4],
    [5,6]
];
for(var i = 0 ; i < myArray.length; i++){
    for(var j = 0; j < myArray[i].length; j++){
        console.log(myArray[i][j]);
        
    }
}

//________________________________________________________

//                      Math Object

/*
- Math.PI
- Math.round()
- Math.abs()
- Math.ceil()
- Math.floor()
- Math.random()
- Math.min()
- Math.max()
*/

console.log(Math.PI); // số pi 3,14
console.log(Math.round(1.5)); // làm tròn số thập phân
console.log(Math.abs(-4)); // giá trị tuyệt đối
console.log(Math.ceil(4,1)); // làm tròn trên
console.log(Math.floor(4,1)); // làm tròn dưới
console.log(Math.random()); // trả về số thập phân nhỏ hơn 1
console.log(Math.min(-101,20,30,40)); // trả về số nhỏ nhất
console.log(Math.max(100,300,40,30)); // trả về số lớn nhất

//_________________________________________________________

//_________________________________________________________

//                      Callback

/*là hàm và được truyền qua đối số */

function myFunction1(x) {
    if (typeof x === 'function'){
        x('học lập trình');
    }
};

function myCallback(value){
    console.log('value:', value); 
    console.log('value:' + value); 
    
}
myFunction1(myCallback);


//_____________________________________________________

//          HTML DOM (Document Object Model)
// DOM Có 3 thành phần
//1. Element
//2. Attribute
//3. Text


//______________________________________________________
// JavaScript: Browser | Server (NodeJS)
// API (Application programming interface)

//Browser: HTML -> DOM -> Web API

var x = 7 , y = '7', z = 'seven';
console.log(parseInt(x+y));
console.log(parseInt(y+z));
console.log(parseInt(z+x));

console.log(false == '0');
console.log(false === '0');
console.log(0.1+0.2 == 0.3);
console.log(typeof NaN);
var param;
console.log(param);

var a=1, b= '1';
var c = a===b ? "a" : "b";
console.log(c);

var fullname = "thefrist";
var obj = {
    fullname: "thesecond",
    prop:{
        fullname:"thethird",
        getfullname: function(){
            return this.fullname;
        }
    }
}
var test = obj.prop.getfullname;
console.log(obj.prop.getfullname); //trả về this.fullname

console.log(obj.prop.getfullname());
console.log(test.call(obj)); //chổ này khi gọi hàm sẽ là this.fullname = "thefrist";


// Scrolltotop tao 1 btn đặt id = scrolltotop, trong js khai báo biến const btnScrollToTop = document.querySelector("truyen vao id của btn scrolltotop"), sau đó .addEventlistener('click',function(){windown.scrollTo(set 0,0)}) là được một nút scrolltotop.