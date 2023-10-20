const root = document.querySelector('#root')

const container = document.createElement('div')
container.className = 'container'

const containerWrapper = document.createElement('div')
containerWrapper.className = 'container-wrapper'

const header = document.createElement('header')
header.id = 'header'

// форма для поиска товаров
const formSearch = document.createElement('form')
formSearch.className = 'header__form form'

const inputName = document.createElement('input')
inputName.type = 'text' // тип search
inputName.className = 'form__input'
inputName.placeholder = 'Поиск...'

const btnSearch = document.createElement('a')
btnSearch.className = 'form__search'
btnSearch.href = '#'

const imgSearch = document.createElement('i')
imgSearch.classList = 'fa-solid fa-magnifying-glass'

btnSearch.append(imgSearch)

//корзина
const btnBasket = document.createElement('input')
btnBasket.type = 'button'
btnBasket.className = 'header__basket'
btnBasket.value = 'Корзина'
// const iconElement = document.createElement('i')
// iconElement.classList = 'fa-regular fa-cart-shopping'

// btnBasket.append(iconElement)

const logo = document.createElement('img')
// logo.src = '../assets/images/В4_шрифт_Poppins.jpg'
logo.src = 'https://img.freepik.com/premium-vector/book-store-logo-colorful-vector-design-book-logo-with-letters-bs_555652-51.jpg'

formSearch.append(inputName, btnSearch)

header.append(logo, formSearch, btnBasket)

container.append(containerWrapper)

root.append(header, container)


// проба 
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
    image.src=`${name.image}`

    const procentSale = document.createElement('p')
    procentSale.className = 'image__discount'
    procentSale.innerHTML = `${name.procentSale}`

    const btnToBasket = document.createElement('div')
    btnToBasket.type = 'button'
    btnToBasket.value = ' '
    btnToBasket.className = 'card__btn'

    const quickViewButton = document.createElement('input')
    quickViewButton.type = 'button'
    quickViewButton.value = 'Быстрый просмотр'
    quickViewButton.className = 'image__quickViewButton'

    imageCard.append(image, procentSale, btnToBasket, quickViewButton)

    //div с описанием под картинкой 
    const buttons = document.createElement('div')
    buttons.className = 'card__title title'
    const titleCard = document.createElement('div')
    titleCard.className = 'title__description'
    titleCard.innerHTML = `${name.name} ${name.bookName}`

    // div с ценой
    const price = document.createElement('div')
    price.className = 'title__price price'

    const titlePriceSale = document.createElement('p')
    titlePriceSale.className = 'price__sale'
    titlePriceSale.innerHTML = `${name.price}`

    const titlePrice = document.createElement('p')
    titlePrice.className = 'price__full'
    titlePrice.innerHTML = `${name.priceSale}`

    price.append(titlePriceSale, titlePrice)

    const titleName = document.createElement('p')
    titleName.className = 'title__name'

    const addToBasketButton = document.createElement('input')
    addToBasketButton.type = 'button'
    addToBasketButton.value = ' '
    addToBasketButton.className = 'addToBasketButton'

    // const rightButtons = document.createElement('div')
    // rightButtons.className = 'card-buttons__rightbuttons'

    // const leftButtons = document.createElement('div')
    // leftButtons.className = 'card-buttons__leftbuttons'

    // rightButtons.append(addToBasketButton)
    // leftButtons.append(quickViewButton, title)
    // buttons.append(leftButtons, rightButtons)

    buttons.append(titleCard, price, titleName, addToBasketButton)

    addToBasketButton.addEventListener('click', (event) => {
        // const cardContainer = this.wrapper
        // let cardStorage = JSON.parse(localStorage.getItem('card-storage')) || []
        // const dataIndex = Array.from(cardContainer.parentElement.children).indexOf(cardContainer)
        // cardStorage.splice(dataIndex, 1)
        // localStorage.setItem('card-storage', JSON.stringify(cardStorage))

        // cardContainer.remove()
    })

    quickViewButton.addEventListener('click', () => {
        // this.wrapper.style.backgroundColor = 'gray'
    })

    this.destroy = () => {
        this.wrapper.remove()
        this.wrapper = null
    }

    wrapper.append(imageCard, buttons)

    this.wrapper = wrapper

    return wrapper
}

const getCards = async () => {
    const response = await fetch('https://653044416c756603295e7d3c.mockapi.io/cards')
    const data = await response.json()
    return data
}

let allUsers = []
let favoriteUsers = []

; (async () => {
    const users = await getCards()
    allUsers = users
    console.log(allUsers)

    users.forEach(user => {
        const card = new Card(user)
        containerWrapper.append(card)
    })

    root.addEventListener('click', e => {
        e.preventDefault()

        console.log(e.target.parentElement.id)
        favoriteUsers.push(e.target.parentElement.id)
    })
})()