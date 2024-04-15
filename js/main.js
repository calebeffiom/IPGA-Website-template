let names = document.getElementById("name")
let email = document.getElementById("email").value
let phonenumber = document.getElementById("number").value
let message = document.getElementById("message").value
var mail = document.getElementById("submit");


const send = ()=>{
    mail.href = `mailto:calebeffiom@gmail.com?subject=Enquires&body=Name:${names.value}%0d%0aEmail:${email}%0d%0aPhonenumber:${phonenumber}%0d%0Message:${message}%0d%0a`;
}
mail.addEventListener("click",()=>{send()})
