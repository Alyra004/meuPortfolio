document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Pega o valor do atributo 'data-tab' do botão clicado
            const targetTab = tab.dataset.tab;
            
            // Remove a classe 'active' de todos os botões e conteúdos
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(tc => tc.classList.remove('active'));

            // Adiciona a classe 'active' ao botão clicado
            tab.classList.add('active');

            // Adiciona a classe 'active' ao conteúdo correspondente
            document.getElementById(targetTab).classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Pega todos os elementos necessários
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.querySelector('.lightbox-close');

    // Pega TODAS as imagens que devem abrir o lightbox
    // Importante: use uma classe comum, como .lightbox-trigger
    const triggerImages = document.querySelectorAll('.project-media img');

    // Função para abrir o lightbox
    const openLightbox = (imageUrl) => {
        lightboxImage.src = imageUrl; // Define a imagem que será mostrada
        lightboxOverlay.style.display = 'flex'; // Mostra o lightbox
    };

    // Função para fechar o lightbox
    const closeLightbox = () => {
        lightboxOverlay.style.display = 'none'; // Esconde o lightbox
    };

    // Adiciona o evento de clique a cada imagem da galeria
    triggerImages.forEach(image => {
        image.addEventListener('click', (e) => {
            // Impede outros comportamentos, como seguir um link
            e.preventDefault(); 
            openLightbox(image.src); // Chama a função para abrir com a URL da imagem clicada
        });
    });

    // Adiciona o evento de clique ao botão de fechar
    lightboxClose.addEventListener('click', closeLightbox);

    // Adiciona o evento de clique ao fundo escuro para fechar também
    lightboxOverlay.addEventListener('click', (e) => {
        // Só fecha se o clique for no fundo (overlay) e não na imagem
        if (e.target === lightboxOverlay) {
            closeLightbox();
        }
    });

    // Bônus: Fechar o lightbox ao pressionar a tecla 'Esc'
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
});