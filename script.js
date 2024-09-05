const dialogueText = document.getElementById('dialogue-text');
const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');
const resetButton = document.getElementById('reset-button');

let currentLevel = 0;

const levels = [
    {
        text: "Bem-vindo ao jogo! Clique no botão abaixo para começar.",
        next: "Você encontrou o bilhete escondido na sala de aula! Onde você acha que pode encontrar o próximo item?",
        buttonText: "Próximo"
    },
    {
        text: "Você encontrou o bilhete escondido! Agora, vamos procurar o material para o projeto em dupla.",
        next: "Você conseguiu todos os materiais para o projeto. A surpresa para o evento da escola está por conta.",
        buttonText: "Próximo"
    },
    {
        text: "Ótimo trabalho! Agora, prepare a surpresa para o evento da escola.",
        next: "Parabéns! Você fez a declaração a Leonardo. Vamos ver o que acontece agora.",
        buttonText: "Próximo"
    },
    {
        text: "Você completou o jogo! Clique em Reiniciar para jogar novamente.",
        buttonText: "Reiniciar"
    }
];

function updateDialogue() {
    if (currentLevel < levels.length) {
        dialogueText.textContent = levels[currentLevel].text;
        nextButton.style.display = 'block';
        startButton.style.display = 'none';
        if (currentLevel === levels.length - 1) {
            nextButton.style.display = 'none';
            resetButton.style.display = 'block';
        }
    }
}

startButton.addEventListener('click', function() {
    updateDialogue();
});

nextButton.addEventListener('click', function() {
    currentLevel++;
    updateDialogue();
});

resetButton.addEventListener('click', function() {
    currentLevel = 0;
    updateDialogue();
    resetButton.style.display = 'none';
    startButton.style.display = 'block';
});
