function validateForm() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    if (username == null || username == "") {
        alert("!Please Enter Your Username.");
        return false;
    }

    if (password == null || password == "") {
        alert("!Please Enter Your Password.");
        return false;
    }

    alert("Login Success");
}