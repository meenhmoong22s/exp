// console.log('heloooword');

// "babamama"
// x = 5;
// y = "babamama" + x;
// console.log(x);
// console.log(y);
// console.log(y);//crt + shift + d = nhân đôi

// function run() {
// 	// mỗi lần click sẽ cộng đi 1 đơn vị
// 	x++;
// 	//dùng chia lấy dư để quay trở về ban đầu giá trị của x
// 	// thủ thuật chia lấy dư làm cho giá trị mình muốn chỉ trong phạm vi mình muốn
// 	console.log('gia tri cua y la:'+ ((x%5)));
// }
/*---------------------------------------------------------------------------------*/
// var diem = 6;
// var hv = ['dung','dong','loc'];
// console.log(hv[1]);

// var phongThanh = { // this is Object
// 	name: 'Phong',
// 	chieucao: 172,
// 	cannang: 60,
// 	ngoaihinh: function() {
// 		if (this.chieucao/this.cannang < 3){
// 			return (console.log('goodbody'));
// 		}else{
// 			return (console.log("badbody"));
// 		}
// 	}
// }

// console.log(phongThanh.name); // truy xuaats toi doi tuong (object)
// console.log(phongThanh.ngoaihinh()); //truy xuat toi ham ( function)
/*---------------------------------------------------------------------------------------*/
//bai12
// console.log("hien thi dau nhay doi trong cap dau nhay ta lam nhu sau \" them set vao truoc dau nhay\"");

// var sv = [ 'lan','trung','huong','hieu'];
// 			//0		1		2		3
// for (var i = 0; i < sv.length; i++) {
// 	console.log(sv[i]); // vong lap for co dien dung de truy xuat mang thong thuong thong qua so thu tu
// 												//phan tu cua mang
// }

// var hs = {
// 	name: 'lan',
// 	old:20,
// 	sex: 'female',
// 	tall:'170cm',
// 	weigth: '55kg'

// }
// var x; // x o day dai dien cho tung phan tu trong doi tuong vd:name,old,sex....
// for(x in hs){
// 	console.log(hs[x]); //for in dung de truy xuat doi tuong (object)
// }
/*---------------------------------------------------------------------------------------------*/
// bai13 chế độ use strict (chế độ nghiêm khắc nếu không khai báo var sẽ báo lỗi!)

				// 'use strict'
// x = 10; console.log(x); //như vậy sẽ báo lỗi!
// var x = 10; console.log(x); // nv se k loi

// var x = 'mot doan text de vi du ve cac phuong thuc xu li chuoi';
// console.log('do dai cua chuoi la:')
// console.log(x.length); // tra ve do dai cua chuoi
// // var vtri = x.indexOf('phuong thuc');
// var vtri = x.search('phuong thuc'); // giong ham indexOf
// // neu tim thay no se tra ve vi tri cua chuoi can tim
// //neu khon tim thay  thi ham indexOf se tra ve la -1
// if (vtri != -1) {
// 	console.log('tim thay chuoi can tim');
// 	var thaythe = x.replace('phuong thuc','methods'); // replace dung de thay the chuoi
// 	console.log(thaythe);
// }else{
// 	console.log('khong tim thay chuoi can tim');
// }

// var i = "Phong, Vien, Dao, Hao, Chien";
// var array = i.split(','); // ham split dung de bien mot chuoi ngan cach nhau boi dau , thanh 1 mang
// console.log(array);
// for (var i = 0; i < array.length; i++) {
// 	console.log(array[i]);
// }

// var number1 = 10;
// var number2 = 9;
// number2 = number2.toString(); // ham toString() dung de bien so thanh chu
// console.log(number1+number2);

// var chuso = '10';
// var chuso1 = '1';
// var number3 = 20;
// chuso = Number(chuso); // ham Number() dung de bien kieu chu thanh dang so
// chuso1 = parseInt(chuso1); // giong ham Number() nhung dua ve kieu so nguyen
// console.log(chuso + number3 + chuso1);
/*------------------------------------------------------------------------------*/
//Function in JavaScript

// function tinhtong(x1,x2){
// 	var tong = x1 + x2;
// 	console.log('Tong cua x1 va x2 la:' + tong);
// }

// tinhtong(1,1);
// tinhtong('lala','haha');
//--------------------------------------------------------------------------------------
// lay noi dung cua the trong js

// var x1 = document.getElementsByTagName('h1');
// console.log(x1);
// //lay phan thu thu 0 trong mot mang the p dc lay ve
// var x2 = document.getElementsByTagName('p');
// console.log(x2[0]);
// //lay noi dung trong the p bang cach .innerHTML
// console.log(x2[0].innerHTML);
// // thay doi noi dung trong the p lay ve 
// x2[0].innerHTML = 'website did hacker';

// var cactieude = document.getElementsByTagName("h4");
// console.log(cactieude);
// for (var i = 0; i < cactieude.length; i++) {
// 	if (i==2) {
// 	cactieude[i].innerHTML = "<button class='btn btn-info btn-block'>Phong dep trai </button>";	
// 	}
	
// }

// var x = document.getElementById('tieude');
// console.log(x)

// var y = document.getElementsByClassName('card-title');
// console.log(y);
// for (var i = 0; i < y.length; i++) {
// 	y[i].innerHTML = 'web đã được hack';
// }

// var z = document.querySelector('.card-text'); // lấy về phần tử đầu tiên trong cách gọi css
// console.log(z); // hàm đa năng but ít dùng

// var a = document.querySelectorAll('.card-columns .card:first-child .card-body'); 
// console.log(a[0]);
//truy xuất class or tag dùng ('.noidung')
									// giống với document.getElementsByClassName('card-title');
// for (var i = 0; i < a.length; i++) {// và document.getElementsByTagName("h4");
// 	if (i==0) {
// 		console.log(a[i]);
// 		a[i].innerHTML = 'phong dep trai ';	
// 	}
	
// }
// var b = document.querySelectorAll('#tieude'); // truy xuất Id với querySelectorAll dùng '#noidung'
// // giống với document.getElementById('tieude');
// //nen dung document.querySelector de lay Id vi no chi tra ve 1 phan tu
// console.log(b[0]);	// nhưng trả về một mảng chứ không trả về 1 phần tử như document.getElementById('tieude');

// var c = document.querySelectorAll('[data-thongbao]');
// console.log(c[0]); // co the goi theo kieu data- thuoc tinh , cung tra ve 1 mang

//BO BA HAM XU LY VOI GIAO DIEN
// var x1 = document.querySelectorAll('.n1');
// console.log(x1[0]);
// // x1[0].classList.remove('btn-outline-infor'); // xoa class
// x1[0].classList.remove('n1'); 

// x1[0].classList.add('btn-outline-infor'); // them class

// var x2 = document.querySelectorAll('.n2');
// x2[0].classList.toggle('btn-block'); // ham cong tac. Co class thi tu dong xoa khong co class thi 
										// tu them vao

// HAM MAC DINH DE XU LY SU KIEN 
// DOCUMENT READY Trong jquery $(function(){}) la xong
// document.addEventListener("DOMContentLoaded",function(){
//     //code viet o day
// },false);
document.addEventListener("DOMContentLoaded",function(){
    //code viet o day
    var x1 = document.getElementById("n1");
    console.log = (x1);
    x1.onclick = function(){
        console.log('ban vua click vao view'+ x1);
        x1.classList.add('dixuong');
    }
},false)

