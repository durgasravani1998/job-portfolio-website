function Validate(){
    var email=document.getElementById('email').value;
    var emailExp=/^[a-zA-z0-9]+@[a-zA-Z]+\.[a-z]$/;
    
    

    var pwd=document.getElementById('password').value;
    var pwdExp=/^[a-zA-Z0-9]+$/;

    var status = status1 = false;

    if(email==""){
        alert("Please Enter Email Id");
        status = false;
    }
    else {
        if(email.match(emailExp)){
        alert("Thank You For Entering Your Email Id");
        status = true;
        }
        else{
            alert("Your Email is not in Format");
        status = false;
        }

    }


    if(pwd==""){
        alert("Please Enter Yoru Mobile Number");
         status1 = false;
    }
    else{
        if(pwd.match(pwdExp)){
            alert("Thank You For Entering Your Mobile Number");
            status1 = true;
        }
        else{
            alert("Your Password is not in format");
            status1 = false;
        }
    }

    if(status==true && status1==true){
        return true;
    }
    else{
        return false;
    }
    

}
