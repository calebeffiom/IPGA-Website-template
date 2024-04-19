let names = document.getElementById("name")
let email = document.getElementById("email")
let phonenumber = document.getElementById("number")
let message = document.getElementById("message")
var mail = document.getElementById("submit-btn")
// var btn = document.getElementById("submit-btn")


const send = ()=>{
    mail.href = `mailto:edulauchlabs@gmail.com?subject=Enquires&body=Name:%20${names.value}%0D%0AEmail:%20${email.value}%0D%0APhoneNumber:%20${phonenumber.value}%0D%0AMessage:%20${message.value}`;
}
mail.addEventListener("click",()=>{send()})