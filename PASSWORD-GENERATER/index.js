const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordLength = 15
let randomPassword1 = document.getElementById("random-password1")
 let randomPassword2 = document.getElementById("random-password2")
 
//  console.log(randomPassword1)

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
    // console.log(randomPassword)
    // randomPassword1.textContent += randomPassword

}
console.log(randomPassword1)

function generateTwopassword(){
    let randomPassword = ""
    for( let i = 0; i < passwordLength; i++ ){
        randomPassword += generateChar()
    }
    return randomPassword
    console.log(randomPassword1)
}
function generate(){
    randomPassword1.textContent  = generateOnepassword()  
    randomPassword2.textContent =  generateTwopassword()
}

// const generatedPasswordOne = generateOnepassword()   

// console.log("Here is a random password: ", generatedPasswordOne)
//  function copypassword1() {
//     let text =  document.getElementById("random-password1")
//     //  text.select
//      text.select()
//     //  text.setSelectionRange(0, 999)
//      navigator.clipboard.writeText(text.Value)
//  }
