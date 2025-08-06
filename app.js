//inicializacion de variables
let amigos=[];
let amigo=document.querySelector("#amigo");
let listaDeAmigos=document.querySelector("#listaAmigos");
let amigoSecreto=document.querySelector("#resultado");

const agregarAmigo=()=>{
  if (amigo.value == ""){
    alert("Por favor, inserte un nombre.");
  }else{
    amigos.push(amigo.value);
    console.log(amigos);
    amigo.value="";
    agregaAmigoLista()
  }
}

const agregaAmigoLista=()=>{
  listaDeAmigos.innerHTML="";
  for (let i=0;i < amigos.length;i++){
    listaDeAmigos.innerHTML+=`<li>${amigos[i]}</li>`;
  }
}

const sortearAmigo=()=>{
  if (amigos.length === 0){
    alert("Debe tener al menos un amigo para inicar el sorteo");
  }else{
    let numeroAmigo=Math.floor(Math.random() * amigos.length)
    amigoSecreto.textContent=amigos[numeroAmigo];
  }
}