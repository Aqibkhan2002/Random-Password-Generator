let copy=document.querySelector(".copy")
let btn=document.querySelector(".btn")
let password=document.querySelector("input")

let lowerCase="abcdefghijklmnopqrstuvwxyz"
let upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let number="0123456789"
let special="!@#$%^&*?=/<>.+-_|~"
let allChar=lowerCase+upperCase+number+special

 let len=12;
btn.addEventListener("click",generatePassword)

function generatePassword()
{
    let pass="";
    pass+=lowerCase[Math.floor(Math.random()*26)]
    pass+=upperCase[Math.floor(Math.random()*26)]
    pass+=number[Math.floor(Math.random()*10)]
    pass+=special[Math.floor(Math.random()*18)]

    while(len>pass.length)
        pass+=allChar[Math.floor(Math.random()*allChar.length)]
        password.value=pass   
}

copy.addEventListener("click",copyClipboard)

function copyClipboard()
{   
    if(password.value)
    {
         password.select();
         document.execCommand("copy")  
    }
    else
    {
         navigator.clipboard.writeText("");
         alert("Generate Password first")
    }       
}