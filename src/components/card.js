function Card(name) {
    this.name = name
    this.id = Date.now()

    const wrapper = document.createElement('div')
    wrapper.className = 'card'
    wrapper.id = this.id

    //div с картинкой 
    const imageCard = document.createElement('div')
    imageCard.className = 'card__image image'

    const image = document.createElement('img')
    image.className = 'image__img'

    const title = document.createElement('p')
    title.className = 'image__discount'

    const btnToBasket = document.createElement('div')
    btnToBasket.type = 'button'
    btnToBasket.value = ' '
    btnToBasket.className = 'card__btn'

    const quickViewButton = document.createElement('input')
    quickViewButton.type = 'button'
    quickViewButton.value = 'Быстрый просмотр'
    quickViewButton.className = 'image__quickViewButton'

    //div с описанием под картинкой 
    const titleCard = document.createElement('div')
    titleCard.className = 'card__title title'

    const titlePriceSale = document.createElement('p')
    titlePriceSale.className = 'title__pricesale'

    const titlePrice = document.createElement('p')
    titlePriceSale.className = 'title__price'

    const titleName = document.createElement('p')
    titleName.className = 'title__name'

    const addToBasketButton = document.createElement('input')
    addToBasketButton.type = 'button'
    addToBasketButton.value = ' '
    addToBasketButton.className = 'addToBasketButton'

    const buttons = document.createElement('div')
    buttons.className = 'card-buttons'

    const rightButtons = document.createElement('div')
    rightButtons.className = 'card-buttons__rightbuttons'

    const leftButtons = document.createElement('div')
    leftButtons.className = 'card-buttons__leftbuttons'

    rightButtons.append(addToBasketButton, date1)
    leftButtons.append(quickViewButton, title)
    buttons.append(leftButtons, rightButtons)

    addToBasketButton.addEventListener('click', (event) => {
        const cardContainer = this.wrapper
        let cardStorage = JSON.parse(localStorage.getItem('card-storage')) || []
        const dataIndex = Array.from(cardContainer.parentElement.children).indexOf(cardContainer)
        cardStorage.splice(dataIndex, 1)
        localStorage.setItem('card-storage', JSON.stringify(cardStorage))

        cardContainer.remove()
    })

    quickViewButton.addEventListener('click', () => {
        this.wrapper.style.backgroundColor = 'gray'
    })

    this.destroy = () => {
        this.wrapper.remove()
        this.wrapper = null
    }

    wrapper.append(buttons)

    this.wrapper = wrapper
}




const getUsers = async () => {
    const response = await fetch('https://653044416c756603295e7d3c.mockapi.io/:endpoint')
    const data = await response.json()
    return data
}

const generateCard = user => {
    const card = document.createElement('div')
    card.id = user.id
    card.className = 'card'
    card.innerHTML = `<span>id: ${user.id}</span>, <span>name: ${user.name}</span>`
    return card
}

let allUsers = []
let favoriteUsers = []

; (async () => {
    const users = await getUsers()
    allUsers = users

    users.forEach(user => {
        const card = generateCard(user)
        root.append(card)
    })

    root.addEventListener('click', e => {
        e.preventDefault()

        console.log(e.target.parentElement.id)
        favoriteUsers.push(e.target.parentElement.id)
    })
})()