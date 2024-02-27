const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//default value
var passwordLength = 16
let randomPassword1 = document.getElementById("random-password1")
 let randomPassword2 = document.getElementById("random-password2")
 let seekbar  = document.getElementById("seekbar");

 function updateButton() {
    // Get the seekbar element
    var seekbar = document.getElementById("seekbar");
    
    // Get the current value of the seekbar
    var currentValue = seekbar.value;
    passwordLength = seekbar.value
    // Update the display of the button's text
    var button = document.getElementById("valueButton");
    button.textContent = currentValue;

    return currentValue
}

//this fucntion generare a random character and store in randompassword variable.
function generateChar(){
 let generatRandomChar = Math.floor( Math.random() * characters.length )
  return characters[generatRandomChar]
}

function generateOnepassword(){
    let randomPassword = ""
    for( let i = 0; i < passwordLength; i++ ){
        randomPassword += generateChar()
        
    }
    return randomPassword
}

//storing password in the varialbe 
function generateTwopassword(){
    let randomPassword = ""
    for( let i = 0; i < passwordLength; i++ ){
        randomPassword += generateChar()
    }
    return randomPassword
}

function generate(){
    randomPassword1.textContent  = generateOnepassword()  
    randomPassword2.textContent =  generateTwopassword()
}

//showing the notification 
function showNotification(message) {
    var notificationElement = document.getElementById("notification");
    notificationElement.textContent = message;
    notificationElement.classList.add("show");

    // Hide the notification after a delay (e.g., 2 seconds)
    setTimeout(function () {
        notificationElement.classList.remove("show");
        notificationElement.textContent = "";
    }, 2000);
}

function copypassword1() {
    var copyText = document.getElementById("random-password1");
    navigator.clipboard.writeText(copyText.textContent)
        .then(function () {
            showNotification("Text copied to clipboard!");
        })
        .catch(function (err) {
            console.error('Unable to copy text to clipboard', err);
        });
}

function copypassword2() {
    var copyText = document.getElementById("random-password2");
    navigator.clipboard.writeText(copyText.textContent)
        .then(function () {
            showNotification("Text copied to clipboard!");
        })
        .catch(function (err) {
            console.error('Unable to copy text to clipboard', err);
        });
}


//cheking stremgth of password

var pass = document.getElementById("password")
var msg = document.getElementById("message")
var str = document.getElementById("strength")

pass.addEventListener('input',() => {
    if(pass.value.length > 0){
        msg.style.display = "block"
    }
    else{
        msg.style.display = "none"
    }

    if(pass.value.length < 4){
        str.innerHTML = "weak";
        pass.style.borderColor = "#ff5925"
        msg.style.color = "#ff5925"
    }
    else if(pass.value.length >= 4 && pass.value.length < 8){
        str.innerHTML = "Medium";
        pass.style.borderColor = "yellow"
        msg.style.color = "yellow"
    }
    else if (pass.value.length >= 8){
        str.innerHTML = "Strong";
        pass.style.borderColor = "green"
        msg.style.color = "green"
    }
})

