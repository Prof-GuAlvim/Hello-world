let nomeUsuário= prompt("qual o seu nome?");
let elemento = document.querySelector("#nome-usuário");

while(nomeUsuário == ""){
    nomeUsuário = prompt("qual o seu nome?");
}

if(nomeUsuário == null){
    elemento.textContent = "seja muito bem-vindo";
}else{
    elemento.textContent = nomeUsuário;
}


