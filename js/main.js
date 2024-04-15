let names = document.getElementById("name")
let email = document.getElementById("email")
let phonenumber = document.getElementById("number")
let message = document.getElementById("message")
var mail = document.getElementById("submit-form")
var btn = document.getElementById("submit-btn")


const send = ()=>{
    mail.action = `mailto:calebeffiom@gmail.com?subject=Enquires&body=Name:%20${names.value}%0d%0a%0d%0aEmail:%20${email.value}%0d%0a%0d%0aPhonenumber:%20${phonenumber.value}%0d%0a%0d%0aMessage:%20${message.value}`;
}
btn.addEventListener("click",()=>{send()})