const container = document.getElementById('matrixInputContainer');
const output = document.getElementById('console');

for (let i = 0; i < 25; i++) {
    const input = document.createElement('input');
    input.type = 'number';
    input.value = Math.floor(Math.random() * 100);
    input.className = 'cell';
    container.appendChild(input);
}
// a. Função para preencher a matriz e retorná-la
function obterMatriz() {
    const inputs = document.querySelectorAll('.cell');
    let matriz = [];
    let k = 0;
    for (let i = 0; i < 5; i++) {
        matriz[i] = [];
        for (let j = 0; j < 5; j++) {
            matriz[i][j] = parseInt(inputs[k++].value) || 0;
        }
    }
    return matriz;
}
// b. Função que imprime a matriz na tela
function imprimirMatriz(matriz) {
    let texto = "--- MATRIZ COMPLETA ---\n";
    matriz.forEach(linha => {
        texto += linha.map(n => n.toString().padStart(3, ' ')).join(" | ") + "\n";
    });
    return texto + "\n";
}

// c. Elementos da diagonal principal (i == j)
function diagonalPrincipal(matriz) {
    let elementos = [];
    for (let i = 0; i < 5; i++) elementos.push(matriz[i][i]);
    return `Diagonal Principal: ${elementos.join(", ")}\n`;
}

// d. Elementos da diagonal secundária (i + j == n - 1)
function diagonalSecundaria(matriz) {
    let elementos = [];
    for (let i = 0; i < 5; i++) elementos.push(matriz[i][4 - i]);
    return `Diagonal Secundária: ${elementos.join(", ")}\n`;
}

// e. Elementos das linhas ímpares (Índices 1 e 3)
function linhasImpares(matriz) {
    let result = "Elementos das Linhas Ímpares (índices 1 e 3):\n";
    for (let i = 1; i < 5; i += 2) {
        result += ` Linha ${i}: ${matriz[i].join(", ")}\n`;
    }
    return result + "\n";
}

// f. Elementos das colunas pares (Índices 0, 2, 4)
function colunasPares(matriz) {
    let result = "Elementos das Colunas Pares (índices 0, 2, 4):\n";
    for (let i = 0; i < 5; i++) {
        let cols = [];
        for (let j = 0; j < 5; j += 2) cols.push(matriz[i][j]);
        result += ` Fila ${i}: ${cols.join(", ")}\n`;
    }
    return result + "\n";
}

// g. Linhas pares e colunas ímpares
function linhasParesColunasImpares(matriz) {
    let result = "Linhas Pares (0,2,4) e Colunas Ímpares (1,3):\n";
    for (let i = 0; i < 5; i += 2) {
        let cols = [];
        for (let j = 1; j < 5; j += 2) cols.push(matriz[i][j]);
        result += ` Linha ${i}: ${cols.join(", ")}\n`;
    }
    return result;
}

function executarAlgoritmo() {
    const matriz = obterMatriz(); //
    
    let log = "";
    log += imprimirMatriz(matriz); //
    log += diagonalPrincipal(matriz); //
    log += diagonalSecundaria(matriz); //
    log += linhasImpares(matriz); //
    log += colunasPares(matriz); //
    log += linhasParesColunasImpares(matriz); //
    
    output.innerText = log;
}

function limparCampos() {
    document.querySelectorAll('.cell').forEach(input => input.value = "");
    output.innerText = "Os resultados aparecerão aqui...";
}