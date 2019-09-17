let btcad =  document.querySelector("#bt-cad");

let nome =  document.querySelector("#nome");
let telefone =  document.querySelector("#phone");
let email =  document.querySelector("#email");
let senha =  document.querySelector("#senha");
let senhaConfirm =  document.querySelector("#senhaConfirm");

btcad.addEventListener("click",cadastrar);

function cadastrar(){ 
    verSenha(senha.value,senhaConfirm.value);
    

}
function verSenha(s,s2){
    if(s != s2){
        alert("Senha não corresponde");
    }
    else{
        console.log(nome.value);
        console.log(telefone.value);
        console.log(email.value);
        console.log(senha.value);
    }
}




