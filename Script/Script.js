function clearErrors() {
    var errors = document.getElementsByTagName('span');
    for (let item of errors) {
        item.innerHTML = '';
    }
}

function validation() {
    clearErrors();
    // Colleting values from input
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone-number').value;
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;

    // username validation
    if (username == '') {
        document.getElementById('userAlert').innerHTML = " ** Username required";
        return false;
    }

    else if (username.length <= 2 || username.length >= 20) {
        document.getElementById('userAlert').innerHTML = " ** Username must be 2 to 20 character only";
        return false;
    }
    else if (!isNaN(username)) {
        document.getElementById('userAlert').innerHTML = " ** Username must be characters only";
        return false;
    }


    // user email validation
    if (email == '') {
        document.getElementById('emailAlert').innerHTML = " ** email required";
        return false;
    }
    else if (email.indexOf('@') <= 0) {
        document.getElementById('emailAlert').innerHTML = " ** Invalid email";
        return false;
    }
    else if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
        document.getElementById('emailAlert').innerHTML = '** invalid email';
        return false;
    }


    // user phone number validation
    if (phone == '') {
        document.getElementById('numberAlert').innerHTML = " ** Phone Nomber required";
        return false;
    }
    if (isNaN(phone)) {
        document.getElementById('numberAlert').innerHTML = " ** Phone Nomber must be digits only";
        return false;
    }
    if (phone.length != 10) {
        document.getElementById('numberAlert').innerHTML = " ** Phone Nomber must be 10 digits only";
        return false;
    }


    // user password validation
    if (password == '') {
        document.getElementById('passworAlert').innerHTML = " ** Password required";
        return false;
    }
    else if (password.length <= 3 || password.length >= 15) {
        document.getElementById('passworAlert').innerHTML = " ** Password must be 3 to 15 characters only";
        return false;
    }

    // user confirm password validation and checking
    if (cpassword == '') {
        document.getElementById('cpasswordAlert').innerHTML = " ** Password Confirmation required";
        return false;
    }
    if (cpassword != password) {
        document.getElementById('cpasswordAlert').innerHTML = " ** Password didn't matched";
        return false;
    }
}