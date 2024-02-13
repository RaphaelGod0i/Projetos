// Gera números aleatórios entre 1 e 10 para a multiplicação
const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

// Obtém os elementos HTML relevantes
const questionEl = document.getElementById("pergunta");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");

// Inicializa a pontuação (score) do jogo
let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}

// Exibe a pontuação atual na página
scoreEl.innerText = `score: ${score}`;

// Exibe a pergunta atual na página
questionEl.innerText = `Quanto é ${num1} * ${num2}?`;

// Calcula a resposta correta
const correctAns = num1 * num2;

// Adiciona um evento de envio ao formulário
formEl.addEventListener("submit", () => {
  // Obtém a resposta do usuário
  const userAns = +inputEl.value;

  // Verifica se a resposta do usuário está correta e atualiza a pontuação
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

// Atualiza a pontuação no armazenamento local
function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}