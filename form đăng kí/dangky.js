var dangky = document.getElementById("dangkix1")
var userN = document.getElementById("username").value;
var pass = document.getElementById("password").value;

dangky.addEventListener('click', function(){
    localStorage.setItem("name", userN);
    localStorage.setItem("pass" , pass);
    console.log("thanhcong");       
})


var dangnhap = document.getElementById("Đăng nhập")
var userN1 = document.getElementById("username1").value;
var pass1 = document.getElementById("password1").value;
dangnhap.addEventListener('click' , function() {
    var userN = localStorage.getItem("name");
    var pass = localStorage.getItem("pass")
    if(userN1 == userN && pass1 == pass){
        alert("Đăng nhập thành công ")
    }
})