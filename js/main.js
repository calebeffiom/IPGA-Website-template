let names = document.getElementById("name")
let email = document.getElementById("email")
let phonenumber = document.getElementById("number")
let message = document.getElementById("message")
var mail = document.getElementById("submit");


const send = ()=>{
    
    mail.href = `mailto:calebeffiom@gmail.com?subject=Enquires&body=Name:${names.value}%0d%0aEmail:${email.value}%0d%0aPhonenumber:${phonenumber.value}%0d%0aMessage:${message.value}`;
}
mail.addEventListener("click",()=>{send()})
