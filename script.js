document.addEventListener('DOMContentLoaded', function() {
    console.log('Tela de carregamento da Veritas carregada! 🌿');
    
    // Elementos
    const statusText = document.querySelector('.status-text');
    const loader = document.querySelector('.loader');
    
    // Array de mensagens para alternar.
    const messages = [
        '📖 Preparando conteúdos...',
        '✝️ Conectando com a fé...',
        '🙏 Quase pronto...',
        '✨ Site em desenvolvimento...',
        '🎨 Criando experiência única...'
    ];
    
    let messageIndex = 0;
    
    // Alterna mensagens a cada 2 segundos (opcional)
    if (statusText) {
        setInterval(() => {
            messageIndex = (messageIndex + 1) % messages.length;
            statusText.textContent = messages[messageIndex];
        }, 2000);
    }
    
    // Simula carregamento 
    // setTimeout(() => {
    //     // Quando o site estiver pronto, descomente a linha abaixo
    //     // window.location.href = 'home.html';
    //     console.log('Carregamento concluído!');
    // }, 5000);
});

// Função para verificar se a logo carregou corretamente
function checkLogo() {
    const logo = document.getElementById('logoImg');
    if (logo) {
        logo.addEventListener('error', function() {
            console.warn('Logo não encontrada. Verifique o caminho da imagem.');
            // Opcional: mostrar uma logo padrão em SVG
            this.style.display = 'none';
            // Adicionar SVG fallback
            const fallbackSvg = document.createElement('div');
            fallbackSvg.innerHTML = `
                <svg width="150" height="150" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <rect x="42" y="10" width="16" height="80" rx="3" fill="#8fa667"/>
                    <rect x="20" y="42" width="60" height="16" rx="3" fill="#8fa667"/>
                    <circle cx="50" cy="50" r="8" fill="#5f344e" stroke="#fffada" stroke-width="2"/>
                </svg>
            `;
            this.parentElement.insertBefore(fallbackSvg, this.nextSibling);
        });
    }
}

// Executa verificação da logo
checkLogo();