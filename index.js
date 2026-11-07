const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//let characterCount = 15;
    
function generatePassword(){
    let firstPassword = "";
    let secondPassword = "";
    
    for (let i = 0; i < sliderEl.value; i++) {
    let passwordStringOne = (Math.floor(Math.random()*characters.length));
    firstPassword += characters[passwordStringOne]
    let passwordStringTwo = (Math.floor(Math.random()*characters.length));
    secondPassword += characters[passwordStringTwo]
    }
    // End of Loop
    passwordOneEl.textContent = firstPassword;
    passwordTwoEl.textContent = secondPassword;
}

    let passwordOneEl = document.getElementById("passwordOne");
    let passwordTwoEl = document.getElementById("passwordTwo");


    let sliderEl = document.getElementById("mySlider")
    let lengthDisplayEl = document.getElementById("lengthDisplay")

function updateCount(){
    let currentCount = sliderEl.value;
    lengthDisplayEl.textContent = currentCount;
}

function copyPasswordOne(){
    navigator.clipboard.writeText(passwordOneEl.textContent);
    alert(passwordOneEl.textContent);
}

function copyPasswordTwo(){
    navigator.clipboard.writeText(passwordTwoEl.textContent);
    alert(passwordTwoEl.textContent);
}