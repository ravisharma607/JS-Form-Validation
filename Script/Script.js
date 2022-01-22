console.log('I am running here')
function validation(){
    var user = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('phone-number').value;
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('confirm-password').value;





    if(user == ""){
        document.getElementById('userAlert').innerHTML = '** username Required';
        return false;
    }
    if((user.length <=2) || (user.length >12)){
        document.getElementById('userAlert').innerHTML = '** username must be between 2 to 12';
        return false;
    }
    if(!isNaN(user)){
        document.getElementById('userAlert').innerHTML = '** username must be character only';
        return false;
    }

    if(email == ""){
        document.getElementById('emailAlert').innerHTML = '** email Required';
        return false;
    }
    if(email.indexOf('@') <= 0){
        document.getElementById('emailAlert').innerHTML = '** Invalid position of @';
        return false;
    }
    if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-4)!='.')){
        document.getElementById('emailAlert').innerHTML = '** . invalid position';
        return false;
    }


    if(number == ""){
        document.getElementById('numberAlert').innerHTML = '** number Required';
        return false;
    }
    if(isNaN(number)){
        document.getElementById('numberAlert').innerHTML = '** number must be digit only';
        return false;
    }

    if(number.length !=10){
        document.getElementById('numberAlert').innerHTML = '** mobile number must be 10 digit only';
        return false;
    }


    if(password == ""){
        document.getElementById('passwordAlert').innerHTML = '** password Required';
        return false;
    }
    if((password.length <=5) || (password.length >10)){
        document.getElementById('passwordAlert').innerHTML = '** password must be contain 5 to 10 character';
        return false;
    }

    if(cpassword == ""){
        document.getElementById('cpasswordAlert').innerHTML = '** password confirmation Required';
        return false;
    }
   if(password!=cpassword){
    document.getElementById('cpasswordAlert').innerHTML = `** password didn't matched`;
    return false;
   }
}