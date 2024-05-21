alert('Olá mundo');
let nomeUsuario = prompt("Qual o seu nome?");
let elemento = document.querySelector("#nome-usuario");
elemento.textContent = nomeUsuario;

while (nomeUsuario = ""){
    nomeUsuario = prompt("Qual o seu nome?");

}
elemento.textContent = nomeUsuario;

if(nomeUsuario == null){
    elemento.textContent = 'Seja muito bem-vindo';
}
elemento.textContent = nomeUsuario;