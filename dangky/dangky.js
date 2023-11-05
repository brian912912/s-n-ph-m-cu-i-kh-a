// var dangky = document.getElementById("dangkix1")
// var userN = document.getElementById("username").value;
// var pass = document.getElementById("password").value;



// dangky.addEventListener('click', function(){
//     if (userN != ""&& pass != ""){
//     localStorage.setItem("name", userN);
//     localStorage.setItem("pass" , pass);
//     console.log("thanhcong");       
// }})


// var dangnhap = document.getElementById("Đăng nhập")
// var userN1 = document.getElementById("username1").value;
// var pass1 = document.getElementById("password1").value;
// dangnhap.addEventListener('click' , function() {
//     if (userN != ""&& pass != ""){
//     var userN = localStorage.getItem("name");
//     var pass = localStorage.getItem("pass")
//     if(userN1 == userN && pass1 == pass){
//         alert("Đăng nhập thành công ")
//     }}
// })
let accounts = [];
const chuyentrang = document.getElementById("dangki")
            chuyentrang.addEventListener( 'click', function(){
                const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        const existingAccount = accounts.find(account => account.username === username);

        if (existingAccount) {
            alert('Username đã tồn tại. Vui lòng chọn username khác.');
        } else {
            const account = { username, password };
            accounts.push(account);
            localStorage.setItem('accounts', JSON.stringify(accounts));
            alert('Đăng ký thành công!');
            window.location.href = "../dangnhap/index.html"
        }
    } else {
        alert('Vui lòng nhập username và password.');
    }
})

function login() {
    const enteredUsername = document.getElementById('username1').value;
    const enteredPassword = document.getElementById('password1').value;
      console.log(enteredUsername);
      console.log(enteredPassword);
    if (enteredUsername && enteredPassword) {
        const loggedInAccount = accounts.find(account => 
            account.username === enteredUsername && account.password === enteredPassword
        );

        if (loggedInAccount) {
            alert('Đăng nhập thành công!');
            window.location.href = "../trang chủ/index.html";
            } else {
            alert('Sai tên đăng nhập hoặc mật khẩu.');
        }
    } else {
        alert('Vui lòng nhập tên đăng nhập và mật khẩu.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('accounts')) {
        accounts = JSON.parse(localStorage.getItem('accounts'));
    }
});