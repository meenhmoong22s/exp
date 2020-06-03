//truy xuat cai nut
//truoc khi truy xuat phai document ready
document.addEventListener("DOMContentLoaded", function () {
    //dung code o day
    var nut = document.getElementById("nut1");
    // console.log(nut); //kiem tra da get dc nut chua
    var khoi = document.getElementsByClassName("card")
    // console.log(khoi); // kiem tra da get dc khoi chua
    console.log(khoi[0]); // kiem tra phan tu thu n cua khoi

    nut.onclick = function () {
        // console.log("click thanh cong"); // kiem tra da click success
        // khoi[0].classList.add("diphai"); // them class css diphai vao khoi
        khoi[0].classList.toggle("diphai"); // ham toggle khi chua co (diphai) ham se tu them vao khi co (diphai) roi ham se tu xoa did 

    }
    //animattion hai chieu js
    var nuthu = document.getElementById("nuthieuung");
    var khoichuyendong = document.getElementById("kcd");//byId tra ve phan tu //ByClassName tra ve mang
    console.log(khoichuyendong);
    
    var trangthai = "lan1";
    nuthu.onclick = function(){
        // console.log("bua vua click vao nut thanh cong");
        if (trangthai == "lan1") {
            // console.log(Click lan 1);
            trangthai = "lan2";
            //xu li code hieu ung lan 1
            khoichuyendong.classList.remove("move2");
            khoichuyendong.classList.add("move1");

        } else if(trangthai == "lan2"){
            // console.log(Click lan 2);
            trangthai = "lan1";
            //xu li code hieu ung lan 2
            khoichuyendong.classList.remove("move1");
            khoichuyendong.classList.add("move2");
        }

    }

}, false)