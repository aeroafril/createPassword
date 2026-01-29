const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIcon = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alertContainer");

btnEl.addEventListener("click", ()=>{
    createPassword();
})

copyIcon.addEventListener("click", ()=>{
    copyPassword();
    if(inputEl.value){
        alertContainerEl.classList.remove("active");
        setTimeout(()=>{
            alertContainerEl.classList.add("active");
        }, 2000)
    }
})

function createPassword(){
    const chars = "1234567890qwertyuiopasdfghjklzxcvbnm!@#$%^&*()_+-=[];|QWERTYUIOPASDFGHJKLZXCVBNM";
    const passwordLength = 12;
    let password = "";
    for(let index = 0; index < passwordLength; index++){
        const randomNum = Math.floor(Math.random() * chars.length)
        password+= chars.substring(randomNum, randomNum+1);
    }
    inputEl.value = password;
    alertContainerEl.innerText = password + " copied!";
}

function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0,9999);
    navigator.clipboard.writeText(inputEl.value);

}