const inputField = document.getElementById('inputVetor');
const btnProcessar = document.getElementById('btnProcessar');
const consoleOutput = document.getElementById('console');

// a. 
function lerVetor() {
    const texto = inputField.value.trim();
    const vetor = texto.split(/\s+/).filter(x => x !== "").map(Number);
    
    if (vetor.length !== 10 || vetor.some(isNaN)) {
        throw new Error("Erro: Informe exatamente 10 números inteiros.");
    }
    return vetor;
}

// b. 
function imprimirInicioFim(vetor) {
    consoleOutput.innerHTML += `-> Ordem direta: [${vetor.join(", ")}]\n`;
}

// c. 
function imprimirFimInicio(vetor) {
    const invertido = [...vetor].reverse();
    consoleOutput.innerHTML += `-> Ordem inversa: [${invertido.join(", ")}]\n`;
}

// d. 
function imprimirValoresIndicesImpares(vetor) {
    const valores = vetor.filter((_, index) => index % 2 !== 0);
    consoleOutput.innerHTML += `-> Valores nos índices ímpares: ${valores.join(", ")}\n`;
}

// e. 
function calcularSomaIndicesPares(vetor) {
    return vetor.reduce((soma, valor, index) => {
        return index % 2 === 0 ? soma + valor : soma;
    }, 0);
}

// f.
function encontrarMaiorValor(vetor) {
    let maior = vetor[0];
    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i];
        }
    }
    return maior;
}

function executarProcessamento() {
    consoleOutput.innerHTML = "";
    
    try {
        const vetorProcessado = lerVetor();
        
        imprimirInicioFim(vetorProcessado);
        imprimirFimInicio(vetorProcessado);
        imprimirValoresIndicesImpares(vetorProcessado);
        
        const somaPares = calcularSomaIndicesPares(vetorProcessado);
        consoleOutput.innerHTML += `-> Soma das posições pares: ${somaPares}\n`;
        
        const maiorElemento = encontrarMaiorValor(vetorProcessado);
        consoleOutput.innerHTML += `-> Maior valor encontrado: ${maiorElemento}\n`;

    } catch (erro) {
        consoleOutput.innerHTML = `<span style="color: #f28b82;">${erro.message}</span>`;
    }
}

btnProcessar.addEventListener('click', executarProcessamento);