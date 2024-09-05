document.getElementById('start-button').addEventListener('click', function() {
    const dialogueText = document.getElementById('dialogue-text');
    dialogueText.textContent = "Você encontrou o bilhete escondido na sala de aula! Agora, onde você acha que pode encontrar o próximo item?";

    this.style.display = 'none'; // Oculta o botão depois de clicar
});
