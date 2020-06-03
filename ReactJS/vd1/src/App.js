import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//tạo reactjs : create-react-app vd1
//chạy reactjs: npm start
// npm install--save bootstrap
// npm install--save reactstrap react react - dom
// import 'bootstrap/dist/css/bootstrap.css';
// cách số 1 function basic
function One ()
{
  return (
    <div>
      <h2>đây là cách định nghĩa số 1 trong Reactjs</h2>
      {/* <h2>cho phép nhiều thẻ lồng vào nhau, nhưng không cho ngang hàng</h2> */ }
      <div className="list-group">
        <button type="button" className="list-group-item list-group-item-action active">Active item</button>
        <button type="button" className="list-group-item list-group-item-action">Item</button>
        <button type="button" className="list-group-item list-group-item-action disabled">Disabled item</button>
      </div>
    </div>
  );
  // cách này không cho phép trả về hai thẻ ngang hàng nhau.
}
// cách số 2 anonymous function
var Two = function ()
{
  return (
    <div>
      <h2>đây là cách khai báo số 2</h2>

    </div>

  );
}
//cách số 3 arrow function es6
var Three = () => (
  <div>
    <h2>Đây là cách số 3</h2>

  </div>
);

//cách số 4 class
class Four extends Component
{
  render ()
  {
    return (
      <div>
        <button>Cách số 4</button>
      </div>
    );
  }
}

//rcjc goi component
//format code gọn gàn shift + alt + F
class Five extends Component
{
  render ()
  {
    return (
      <div>
        <hr></hr>
      </div>
    );
  }
}

// sữ dụng props cách 1
function NumberOne ( props )
{
  return (
    <div class="card-columns">
      <div class="card">
        <img class="card-img-top" src={ props.linkanh } alt=""></img>
        <div class="card-body">
          <h4 class="card-title">{ props.tieude }</h4>
          <p class="card-text">đây là một đoạn test mẫu</p>
        </div>
      </div>
    </div>
  );
}

// sữ dụng props cách 2 với class để định nghĩa và thao tác với props
class NumberTwo extends Component
{
  render ()
  {
    return (
      <div class="col-4">
        <div class="card">
          <img class="card-img-top" src={ this.props.linkanh } alt=""></img>
          <div class="card-body">
            <h4 class="card-title">{ this.props.tieude }</h4>
            <p class="card-text">đây là một đoạn test mẫu</p>
          </div>
        </div>
      </div>
    );
  }
}
const a1 = "phong"; // biến dùng 1 lần
class App1 extends Component
{
  render ()
  {
    return (
      <div>
        <h3>tên tôi là : { a1 }</h3>
        {/* đây kp là html đây là jsx */ }
      </div>
    );
  }
}

const so = [ 1, 2, 3, 4, 5 ];
const x2so = so.map( ( x ) => x * 2 + "," );//map như kiểu for x duyệt hết từng phần tử
const lapso = so.map( ( x ) => (
  <div>
    <li>So thu : { x } </li>
  </div>

) );
class App2 extends Component
{
  render ()
  {
    return (
      <div>
        { x2so }
        { lapso }
      </div>
    );
  }
}



function App ()
{
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>
          {/* cách gọi function đầu tiên */ }
          <One></One>
          <Two></Two>
          <Three></Three>
          <Four></Four>
          <Five></Five>
          {/* <Three/> kiểu gọi số 2 */ }
        </p>
        {/* cách gọi hàm truyền props */ }
        <div>
          <NumberOne tieude="The Best Designer" linkanh="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/86872747_661740774633216_3317945043129466880_n.jpg?_nc_cat=100&_nc_sid=7aed08&_nc_ohc=LTN5BGkSOqEAX-klf2m&_nc_ht=scontent-hkt1-1.xx&oh=b8a7031523b74d4ecc8834914cba54d6&oe=5E99BDA0" />
          <NumberOne tieude="Thư And Phong" linkanh="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-0/p640x640/83228929_645257526281541_5083799608266588160_o.jpg?_nc_cat=108&_nc_sid=8024bb&_nc_ohc=xbNofwDb_asAX8DTQKi&_nc_ht=scontent-hkt1-1.xx&_nc_tp=6&oh=3efd25f06769bdebb47eb3d88b513773&oe=5E94B3BC" />
          <NumberOne tieude="A buy new pet of me" linkanh="https://scontent.fsgn4-1.fna.fbcdn.net/v/t31.0-8/p960x960/22792596_687601304763743_6245840137267447866_o.jpg?_nc_cat=101&_nc_sid=13bebb&_nc_ohc=t2zJGDZl7D8AX8fx9O9&_nc_ht=scontent.fsgn4-1.fna&_nc_tp=6&oh=8a7d4510b98fd75b1d08f2999c5faca6&oe=5E99BA9D" />
        </div>

        <div class="container">
          <div class="row">
            <NumberTwo tieude="Viruts Corona" linkanh="https://kenh14cdn.com/zoom/280_175/2020/3/8/screen-shot-2020-03-08-at-95833-am-1583636344280219826160-crop-1583637066554418139373.png" />

            <NumberTwo tieude="Corona thứ 21" linkanh="https://kenh14cdn.com/zoom/280_175/2020/3/7/649184862001052275658237087265267595608064n-156142078434694497712-1561420806437757404187-15835592863071686874033-crop-15835594357791980457480.png"></NumberTwo>
          </div>
        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Phong learn ReactJS
        </a>
        <App1></App1>
        <App2></App2>
      </header>

    </div>
  );
}

export default App;
