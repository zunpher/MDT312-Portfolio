window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myRegister");
    form.onsubmit = validateForm;
}

function validateForm() {

    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var firstname = document.forms["myRegister"]["firstname"];
    var lastname = document.forms["myRegister"]["lastname"];
    var gender = document.forms["myRegister"]["gender"];
    var bday = document.forms["myRegister"]["bday"];
    var email = document.forms["myRegister"]["email"];
    var username = document.forms["myRegister"]["username"];
    var password = document.forms["myRegister"]["password"][0];
    var retypePassword = document.forms["myRegister"]["password"][1];

    if (firstname.value=="" || lastname.value=="" || gender.value=="" || bday.value=="" || email.value=="" || username.value=="" || password.value=="" || retypePassword.value=="") {
        document.getElementById("errormsg").innerHTML="ข้อมูลไม่ครบถ้วน";
        return false;
    }

    if (password.value != retypePassword.value) {
        document.getElementById("errormsg").innerHTML="รหัสผ่านไม่ตรงกัน";
        return false;
    }

    return true;
}