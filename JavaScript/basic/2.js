var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = myArrayMax(points);

function myArrayMax(arr) {
    var len = arr.length;
    var max = -Infinity;
    console.log(max);
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
}

document.addEventListener("DOMContentLoaded",function(){
  //code viet o day
  var x1 = document.getElementById('n1');
  console.log = (x1);
  x1.onclick = function(){
      console.log('ban vua click vao view'+ x1);
      x1.classList.add('dixuong');
  }
},false)