function validates(){
    var name=document.myform.name.value;
    //let name = document.forms["myform"]["name"].value;
    var password=document.myform.password.value;
    var reenter_password=document.myform.reenter.value;
    var validName=document.getElementById("valid_name");
    var validPassword=document.getElementById("valid_password");
    var validEmail=document.getElementById("email");
    var email_id=document.myform.email.value;
    var validPhone=document.getElementById("phone");
    var course=document.myform.Subject.value;
    var validcourse=document.getElementById("course");
    var phone_num=document.myform.phone.value;
    var regex = /^\S+@\S+\.\S+$/;
    var phone=/\d{10}/;

    if( name==""){
      //  alert('enter the name');
        
       validName.textContent="Name must be filled"
       validName.style.color="red";
       return false;
    }

    else if(password.length<6) {
        if( name!=""){
              validName.textContent="";
        }
        validPassword.textContent="Password must be atleast 6 letters long";
        validPassword.style.color="red";
        return false;
    }
    else if(password!=reenter_password){
        if( password.length>=6){
            
            validPassword.textContent="";
      }
        document.getElementById("reenter").innerHTML="password must be same";

        return false;
    }
    else if( email_id==""||regex.test(email_id)==false){
        if(password==reenter_password){
            document.getElementById("reenter").innerHTML=" ";
        }
        validEmail.textContent="Enter correct Email Id"
        validEmail.style.color="red";
        return false;
    }
    else if( phone_num==""||phone.test(phone_num)==false){
        if( email_id!=""||regex.test(email_id)==true){
            validEmail.textContent="";
        }
        validPhone.textContent="Enter correct phone number"
        validPhone.style.color="red";
        return false;
    }
    else if(course=="Select"){
        if( phone_num!=""||phone.test(phone_num)==true){
        validPhone.textContent="";
     }
     validcourse.textContent="Select any course"
        validcourse.style.color="red";
        return false;
    }


}