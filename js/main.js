let names = document.getElementById("name")
let email = document.getElementById("email")
let phonenumber = document.getElementById("number")
let message = document.getElementById("message")
var mail = document.getElementById("submit-form")
var btn = document.getElementById("submit-btn")


const send = ()=>{
    mail.action = `mailto:calebeffiom974@gmail.com?subject=Enquires`;
}
btn.addEventListener("click",()=>{send()})