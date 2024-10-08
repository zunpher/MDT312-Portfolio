window.onload = loginLoad;
function loginLoad() {
    var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin() {
    //ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
    var username = document.forms["myLogin"]["username"];
    var password = document.forms["myLogin"]["password"];

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const usernameParams = urlParams.get('username');
    const passwordParams = urlParams.get('password');

    if (username.value != usernameParams || password.value != passwordParams) {
        alert("Username หรือ Password ไม่ถูกต้อง");
        return false;
    }

    alert("Login สำเร็จ");
}