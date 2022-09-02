const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let symbolsEl = document.getElementById('symbols-el')
let numbersEl = document.getElementById('numbers-el')
let passLenEl = document.getElementById('passlen-el')
let firstEl = document.getElementById('first-el')
let secondEl = document.getElementById('second-el')
 
let passChars=[]
let passLen = 0
let pass = ""
let isAlive = false

function validateNumber(){
  if (passLenEl.value<=15 && passLenEl.value>=7){
      document.getElementById("inputerror").textContent = ""
      return passLenEl.value}
  else{
    return document.getElementById("inputerror").textContent = "*Please enter value between 7 and 15"
  }          
}

function passList(){
          if (symbolsEl.checked == true && numbersEl.checked == true){ 
               isAlive=true 
               passchars = characters.concat(numbers)
               document.getElementById("checkboxerror").textContent = ""
               return passchars
               }
          else if(symbolsEl.checked == true && numbersEl.checked == false){
            isAlive=true  
            passchars = characters
            document.getElementById("checkboxerror").textContent = ""
            return passchars
          }
          else if(symbolsEl.checked == false && numbersEl.checked == true){
            isAlive=true                
            passchars = numbers
            document.getElementById("checkboxerror").textContent =""
            return passchars
            }
          else{ 
            return document.getElementById("checkboxerror").textContent = "*Please mark atleast one checkbox "
          } 
}

function renderPass(){
    pass = "" 
    passLen = validateNumber()   
    passChars = passList() 
    if(isAlive){  
           for(let i=0;i<passLen;i++)
           {
                pass+=passChars[(Math.floor(Math.random()*passChars.length))]
           }
    }            
    return pass
}

function generatePass() {
            firstEl.textContent = renderPass()
            secondEl.textContent = renderPass()
            isAlive=false  
}

function copyFn(clicked_id){
    if(clicked_id=="first-el"){
         var copyText = firstEl.textContent
    }
    else{
         var copyText = secondEl.textContent
    }
    navigator.clipboard.writeText(copyText)
    alert("Copied the text: " + copyText)
}

function clearBox(elementID)
{
    passChars = "" 
    passLen = 0   
    firstEl.textContent = ""
    secondEl.textContent = ""
    
}    