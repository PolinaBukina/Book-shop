const showModalElement = document.querySelector('#showModal')
const hideModalElement = document.querySelector('#hideModal')
const modalWindow = document.querySelector('#modal')

showModalElement.addEventListener('click', e => {
    modalWindow.classList.add('opened')
})

hideModalElement.addEventListener('click', e => {
    modalWindow.classList.remove('opened')
})

modalWindow.addEventListener('click', e => {
    if (e.target.id === modalWindow.id) {
        modalWindow.classList.remove('opened')
    }
})

export {
<<<<<<< HEAD

=======
    
>>>>>>> 3168a940bc1fba10d128061c9fc8772a38c8adbd
}