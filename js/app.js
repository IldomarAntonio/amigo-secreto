let listaAmigos = [];
let sorteio = [];

function adicionar() {
  let input = document.getElementById('nome-amigo');
  let nomeAmigo = input.value.trim();
  
  if (nomeAmigo !== "" && !listaAmigos.includes(nomeAmigo)) {
    listaAmigos.push(nomeAmigo);
    input.value = "";
    atualizarListaAmigos();
  } else {
    alert("Nome inválido ou já incluído.");
  }
}

function atualizarListaAmigos() {
  let lista = document.getElementById('lista-amigos');
  lista.innerHTML = listaAmigos.join('<br>');
}

function sortear() {
  if (listaAmigos.length < 2) {
    alert("É necessário ao menos 2 amigos para sortear.");
    return;
  }
  
  let amigosSorteio = [...listaAmigos];
  sorteio.length = 0;

  while (amigosSorteio.length > 0) {
    let amigo = amigosSorteio.pop();
    let amigoSorteado;

    do {
      amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    } while (amigoSorteado === amigo || sorteio.includes(`${amigo} → ${amigoSorteado}`));

    sorteio.push(`${amigo} → ${amigoSorteado}`);
  }

  atualizarListaSorteio();
}

function atualizarListaSorteio() {
  let lista = document.getElementById('lista-sorteio');
  lista.innerHTML = sorteio.join('<br>');
}

function reiniciar() {
  listaAmigos.length = 0;
  sorteio.length = 0;
  atualizarListaAmigos();
  atualizarListaSorteio();
}
