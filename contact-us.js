let username , useremail , usermessage

function uname() {
    username=document.getElementById("exampleInputName").value ;
    console.log("name : "+username);  
    var regexname = /^[A-Za-z]+$/;
    if (regexname.test(username)){
        document.getElementById("nameerror").style.visibility="hidden";
    }
    else{
        document.getElementById("nameerror").style.visibility="visible";
    }
}



function uemail(){
    useremail = document.getElementById("exampleInputEmail1").value;
    console.log("email : " + useremail);
    regexemail = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-zA-Z]{2,30})$/;
    if(regexemail.test(useremail)){
        document.getElementById("emailerror").style.visibility="hidden";
    }else{
        document.getElementById("emailerror").style.visibility="visible";
    }
}

function umessage(){
    usermessage = document.getElementById("exampleInputMessage").value;
    console.log("messgae : " + usermessage);
}

function dataofuser(){
    localStorage.setItem("name" , username);
    localStorage.setItem("email" , useremail);
    localStorage.setItem("message" , usermessage);
}