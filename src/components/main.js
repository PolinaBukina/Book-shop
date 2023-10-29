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

// inputName.addEventListener('input', e => {
//     const value = ev.target.value.trim()
//     const elasticItems = document.querySelectorAll('.card')
//     const searchRegExp = new RegExp(value, 'gi')
//     console.log(value)

//     if (value === '') {
//         elasticItems.forEach((el) => {
//             el.classList.remove('hide')
//         })
//         return
//     }

//     elasticItems.forEach((el) => {
//         const innerCard = el.querySelector('.card2')
//         const elementText = innerCard.textContent
//         const isContainsSearchRequest = searchRegExp.test(elementText)
//         if (!isContainsSearchRequest) {
//             el.classList.add('hide')
//         } else {
//             el.classList.remove('hide')
//         }
//     })
//})

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

    const procentAndQuick = document.createElement('div')
    procentAndQuick.className = 'image__all all'

    const procentSale = document.createElement('p')
    procentSale.className = 'all__discount'
    procentSale.innerHTML = `${name.procentSale}`

    const quickViewButton = document.createElement('input')
    quickViewButton.type = 'button'
    quickViewButton.value = 'Быстрый просмотр'
    quickViewButton.className = 'all__quickViewButton'

    procentAndQuick.append(procentSale, quickViewButton)

    // imageCard.append(image, procentSale, btnToBasket, quickViewButton)
    imageCard.append(image, procentAndQuick)

    //div с описанием под картинкой 
    const buttons = document.createElement('div')
    buttons.className = 'card__title title'
    const titleCard = document.createElement('div')
    titleCard.className = 'title__description'
    titleCard.innerHTML = `${name.name} <br> ${name.bookName}`

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

    const addToBasketButton = document.createElement('input')
    addToBasketButton.type = 'button'
    addToBasketButton.value = 'Добавить в корзину'
    addToBasketButton.className = 'title__button'

    // const rightButtons = document.createElement('div')
    // rightButtons.className = 'card-buttons__rightbuttons'

    // const leftButtons = document.createElement('div')
    // leftButtons.className = 'card-buttons__leftbuttons'

    // rightButtons.append(addToBasketButton)
    // leftButtons.append(quickViewButton, title)
    // buttons.append(leftButtons, rightButtons)

        
    // быстрый просмотр
    const modal = document.createElement('div')
    modal.className = 'show-wrapper'

    const modalContent = document.createElement('div')
    modalContent.className = 'show-wrapper__content'

    // добавление (имя, название, цена, книги, картинка)
    const modalCard = document.createElement('div')
    modalCard.className = 'content__all'

    const modalName = document.createElement('p')
    modalName.className = 'content__name'
    modalName.innerHTML = `${name.name} ${name.bookName}`

    const modalPrice = document.createElement('p')
    modalPrice.className = 'content__price'
    modalPrice.innerHTML = `${name.price}`

    const modalPriceSale = document.createElement('p')
    modalPriceSale.className = 'content__pricesale'
    modalPriceSale.innerHTML = `${name.priceSale}`

    const modalImg = document.createElement('img')
    modalImg.className = 'content__image'
    modalImg.innerHTML = `${name.image}`

    const modalHide = document.createElement('input')
    modalHide.type = 'button'
    modalHide.value = 'x'
    modalHide.className = 'content__hide'

    // modalCard.append(modalName, modalPrice, modalPriceSale, modalImg)

    // modalContent.append(modalCard)

    modal.append(modalContent, modalHide)
    
    root.append(modal)

    buttons.append(titleCard, price, addToBasketButton)

    addToBasketButton.addEventListener('click', (event) => {
        // const cardContainer = this.wrapper
        // let cardStorage = JSON.parse(localStorage.getItem('card-storage')) || []
        // const dataIndex = Array.from(cardContainer.parentElement.children).indexOf(cardContainer)
        // cardStorage.splice(dataIndex, 1)
        // localStorage.setItem('card-storage', JSON.stringify(cardStorage))

        // cardContainer.remove()
    })

    // обработчик событий при нажатии на кнопку быстрого просмотра
    quickViewButton.addEventListener('click', e => {
        modal.classList.add('opened')
    })

    modalHide.addEventListener('click', e => {
        modal.classList.remove('opened')
    })

    modal.addEventListener('click', e => {
        if (e.target.id === modal.id) {
            modal.classList.remove('opened')
        }
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

    // root.addEventListener('click', e => {
    //     e.preventDefault()

    //     console.log(e.target.parentElement.id)
    //     favoriteUsers.push(e.target.parentElement.id)
    // })
})()



 // быстрый просмотр
// const modal = document.createElement('div')
// modal.className = 'show-wrapper'

// const modalContent = document.createElement('div')
// modalContent.className = 'shadow-wrapper__content'

//  // еще нужно добавить (имя, название, цена, книги, картинка)

// const modalHide = document.createElement('input')
// modalHide.type = 'button'
// modalHide.value = 'x'
// modalHide.className = 'shadow-wrapper__hide'

// modalContent.append(modalHide)

// modal.append(modalContent)

//  // обработчик событий при нажатии на кнопку быстрого просмотра
// quickViewButton.addEventListener('click', e => {
//     modal.classList.add('opened')
// })

// modalHide.addEventListener('click', e => {
//     modal.classList.remove('opened')
// })

// modal.addEventListener('click', e => {
//     if (e.target.id === modal.id) {
//         modal.classList.remove('opened')
//     }
// })

// root.append(modal)


// // быстрый просмотр
// const modal = document.createElement('div')
// modal.className = 'show-wrapper'

// const modalContent = document.createElement('div')
// modalContent.className = 'shadow-wrapper__content'

// // еще нужно добавить (имя, название, цена, книги, картинка)

// const modalHide = document.createElement('input')
// modalHide.type = 'button'
// modalHide.value = 'x'
// modalHide.className = 'shadow-wrapper__hide'

// modalContent.append(modalHide)

// modal.append(modalContent)

// buttons.append(modal)

// // обработчик событий при нажатии на кнопку быстрого просмотра
// quickViewButton.addEventListener('click', e => {
//     modal.classList.add('opened')
// })

// modalHide.addEventListener('click', e => {
//     modal.classList.remove('opened')
// })

// modal.addEventListener('click', e => {
//     if (e.target.id === modal.id) {
//         modal.classList.remove('opened')
//     }
// })

