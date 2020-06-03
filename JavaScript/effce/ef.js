document.addEventListener("DOMContentLoaded",function(){
    //khai bao cac bien can dung
    var nut = document.querySelector(".nut"),
        menutrai = document.querySelector(".menutrai"),
        noidungto = document.querySelector(".noidungto"),
        nenden = document.querySelector(".nenden");
    // console.log(nut);
    // khi click vao nut xanh
    nut.onclick = function(){
        nenden.classList.add("len");
        // cho ca khoi to dich sang phai
        noidungto.classList.add("dichphai");
    }    
    nenden.onclick = function(){
        nenden.classList.remove("len");
        noidungto.classList.remove("dichphai");
        //dua ve trang thai ban dau
    }
},false)