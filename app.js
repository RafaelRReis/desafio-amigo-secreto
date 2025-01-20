//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let amigo = document.querySelector('input').value;    

    if (amigo == "") {
        
        alert('Por gentileza Digite o nome do amigo antes de clicar no botão Adicionar');
        limparCampo();
    
    } else if (amigos.includes(amigo) == true) {

        alert('Esse amigo já consta na lista, digite outro nome');
        limparCampo();
    
    } else {

        amigos.push(amigo);
        limparCampo();
        criarListaTela(amigos,'listaAmigos');
       
    }
    
}

function sortearAmigo() {

    if (amigos != ""){

        let sorteado = amigos[Math.floor(Math.random() * amigos.length)]
        textoSorteado = `O amigo secreto sorteado é: ${sorteado}`
        exibirNaTela('resultado', textoSorteado)

    } else {
        
        alert("Antes de sortear é necessário preencher os amigos");
    
    }
}

function limparCampo() {
    let amigo = document.querySelector('input');
    amigo.value = '';
}

function exibirNaTela(tag, texto){

    let campo = document.getElementById(tag);
    campo.innerHTML = texto;

}

function criarListaTela(listaAmigos,tag) {
       
    let lista = document.createElement("ul"); 

    listaAmigos.forEach(function(item) {

        let li = document.createElement("li");
        li.innerHTML = item;
        lista.append(li);

    });

    let campo = document.getElementById('listaAmigos');
    campo.innerHTML = "";
    campo.append(lista);

}    

