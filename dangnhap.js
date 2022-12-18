let username,password;
function Dangnhap(){
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    if(username == ""){
        alert("Ban phai nhap ten dang nhap");
        return false;
    }
    else if(password == ""){
        alert("Ban phai nhap mat khau");
        return false;
    }
    else if(username=="sontungmtp" && password=="sontungmtp"){
        location.href = "/casi/sontungadmin.html";
        return true;
    }
    else{
        location.href ="/baitaplon1.html";
        return true;
    }
}