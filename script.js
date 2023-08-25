function generateRandomCaptcha(length) {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*+';
    var captcha = '';

    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        captcha += characters[randomIndex];
    }

    return captcha;
}

var captcha = generateRandomCaptcha(5);
document.getElementById("capt").value = captcha;

function validcap(){
    var stg1 = document.getElementById('capt').value;
    var stg2 = document.getElementById('textinput').value;
    if(stg1 == stg2){
        alert("Form is validated Succesfully");
        return true;
    } else {
        alert("Please enter a valid captcha!");
        return false;
    }
}
