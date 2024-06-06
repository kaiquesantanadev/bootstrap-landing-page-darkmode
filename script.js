const inputModoEscuro = document.querySelector('#modo-cor');
const body = document.querySelector('body')


inputModoEscuro.addEventListener('click', () => {
    const modo = inputModoEscuro.checked ? 'dark' : 'light';
    body.setAttribute('data-bs-theme', modo)
})