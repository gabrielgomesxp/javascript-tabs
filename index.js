const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach((tabBtn) => { 
    tabBtn.addEventListener('click', () => {
        const targetTab = tabBtn.getAttribute('data-tab');
        // --- troca abas
            tabContents.forEach((tabContent) => {
                if (tabContent.id === targetTab) {
                    tabContent.classList.add('active');
                } else {
                    tabContent.classList.remove('active');
                }
            });

        // --- coloca cor no botão selecionado
        tabBtns.forEach((btn) => {
            if (btn === tabBtn) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    });
});

