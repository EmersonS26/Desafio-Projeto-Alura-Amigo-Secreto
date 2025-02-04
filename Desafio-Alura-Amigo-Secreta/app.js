let Nomes = ["Carlos", "Joana", "Celso", "Bruna", "Monique"];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome && !Nomes.includes(nome)) {
        Nomes.push(nome);
        input.value = ""; // Limpa o campo de entrada
        atualizarLista();
    } else {
        alert("Nome inválido ou já adicionado.");
    }
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    Nomes.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (Nomes.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }

    let sorteio = [...Nomes];
    let resultado = [];
    let tentativas = 0;

    do {
        sorteio = sorteio.sort(() => Math.random() - 0.5);
        tentativas++;
    } while (sorteio.some((nome, i) => nome === Nomes[i]) && tentativas < 10);

    for (let i = 0; i < sorteio.length; i++) {
        let amigoSecreto = sorteio[(i + 1) % sorteio.length];
        resultado.push(`${sorteio[i]} → ${amigoSecreto}`);
    }

    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";
    resultado.forEach(par => {
        let li = document.createElement("li");
        li.textContent = par;
        resultadoLista.appendChild(li);
    });
}

// Atualiza a lista inicial na interface
atualizarLista();
