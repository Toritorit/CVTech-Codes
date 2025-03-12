let Icon = document.querySelector('.CartIcon');
let body = document.querySelector('body');
let Close =document.querySelector('.CartTab .Close')

Icon.addEventListener('click', () => {
    body.classList.toggle ('ShowCart')
})

Close.addEventListener('click', () => {
    body.classList.toggle ('ShowCart')
})