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
    
}