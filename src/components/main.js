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

inputName.addEventListener('input', e => {
    const value = e.target.value.trim()
    const elasticItems = document.querySelectorAll('.card')
    const searchRegExp = new RegExp(value, 'gi')
    let foundCardsCount = 0 // переменная для хранения количества найденных карточек

    if (value === '') {
        elasticItems.forEach((el) => {
            el.classList.remove('hide')
        })
        return
    }

    elasticItems.forEach((el) => {
        const innerCard = el.querySelector('.title__description')
        const elementText = innerCard.textContent
        const isContainsSearchRequest = searchRegExp.test(elementText)
        if (!isContainsSearchRequest) {
            el.classList.add('hide')
        } else {
            el.classList.remove('hide')
            foundCardsCount++ // увеличиваем количество найденных карточек
        }
    })
})

//корзина
const btnBasket = document.createElement('input')
btnBasket.type = 'button'
btnBasket.className = 'header__basket'
btnBasket.value = 'Корзина'

btnBasket.addEventListener('click', e => {
    modalBasket.classList.add('opened')
})

// const logo = document.createElement('img')
// logo.src = 'https://img.freepik.com/premium-vector/book-store-logo-colorful-vector-design-book-logo-with-letters-bs_555652-51.jpg'

const logo = document.createElement('p')
logo.className = 'header__logo'
logo.textContent = 'BOOK-SHOOP'

formSearch.append(inputName, btnSearch)

header.append(logo, formSearch, btnBasket)

container.append(containerWrapper)

root.append(header, container)


// создание модального окна для basket
const modalBasket = document.createElement('div')
modalBasket.className = 'basket-wrapper'

const modalBasketCard = document.createElement('div')
modalBasketCard.className = 'content-basket__all'

const modalBasketBack = document.createElement('div')
modalBasketBack.className = 'content-basket'

const modalBasketP = document.createElement('p')
modalBasketP.className = 'content-basket__p'
modalBasketP.textContent = 'Корзина'

const modalBasketRemove = document.createElement('input')
modalBasketRemove.type = 'button'
modalBasketRemove.value = 'Очистить корзину'
modalBasketRemove.className = 'content-basket__remove'


modalBasketCard.append(modalBasketP, modalBasketRemove)

modalBasketBack.append(modalBasketCard)
modalBasket.append(modalBasketBack)

root.append(modalBasket)

modalBasket.addEventListener('click', e => {
    if (e.target.type === 'button') {
        const basketWrapper = document.querySelector('.basket-wrapper')
        const childDivs = basketWrapper.querySelectorAll('.content-basket .basket-wrapper__content');
    
        // Удалить каждый дочерний div
        childDivs.forEach(div => {
            div.remove();
        });
    }
    else{
        modalBasket.classList.remove('opened')
    }
})

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
    titlePriceSale.innerHTML = `${name.price} BYN`

    const titlePrice = document.createElement('p')
    titlePrice.className = 'price__full'
    titlePrice.innerHTML = `${name.priceSale} BYN`

    price.append(titlePriceSale, titlePrice)

    const addToBasketButton = document.createElement('input')
    addToBasketButton.type = 'button'
    addToBasketButton.value = 'Добавить в корзину'
    addToBasketButton.className = 'title__button'
    
    // быстрый просмотр
    const modal = document.createElement('div')
    modal.className = 'show-wrapper'

    const modalContent = document.createElement('div')
    modalContent.className = 'show-wrapper__content content'

    // добавление (имя, название, цена, книги, картинка)
    const modalCard = document.createElement('div')
    modalCard.className = 'content__all'

    const modalName = document.createElement('p')
    modalName.className = 'content__name'
    modalName.innerHTML = `Автор: ${name.name} <br><br> Произведение: ${name.bookName}`

    const modalPrice = document.createElement('p')
    modalPrice.className = 'content__price'
    modalPrice.innerHTML = `Цена без скидки: ${name.price} BYN`

    const modalPriceSale = document.createElement('p')
    modalPriceSale.className = 'content__pricesale'
    modalPriceSale.innerHTML = `Цена со скидкой: ${name.priceSale} BYN`

    const modalImg = document.createElement('img')
    modalImg.className = 'content__image'
    modalImg.src = `${name.image}`

    const modalBasket = document.createElement('input')
    modalBasket.type = 'button'
    modalBasket.value = 'Добавить в корзину'
    modalBasket.className = 'content__basket'

    const modalHide = document.createElement('input')
    modalHide.type = 'button'
    modalHide.value = 'x'
    modalHide.className = 'content__hide'

    modalCard.append(modalName, modalPrice, modalPriceSale, modalBasket)

    modalContent.append(modalImg, modalCard)

    modal.append(modalContent, modalHide)
    
    root.append(modal)

    buttons.append(titleCard, price, addToBasketButton)

    // обработчик событий при нажатии на кнопку "добавить в корзину" на карточке
    addToBasketButton.addEventListener('click', (event) => {
        const modalBasketCard = document.querySelector('.content-basket')
        
        const newBookInfo = document.createElement('div')
        newBookInfo.className = 'basket-wrapper__content'
        
        const newModalBasketName = document.createElement('div')
        newModalBasketName.className = 'content-basket__name'
        newModalBasketName.innerHTML = `${name.name}, <br> ${name.bookName}`

        const newModalBasketPriceSale = document.createElement('p')
        newModalBasketPriceSale.className = 'content-basket__pricesale'
        newModalBasketPriceSale.innerHTML = `Стоимость ${name.priceSale} BYN`
        
        newBookInfo.append(newModalBasketName, newModalBasketPriceSale)
        modalBasketCard.appendChild(newBookInfo)
    })

    // обработчик событий при нажатии на кнопку быстрого просмотра
    quickViewButton.addEventListener('click', e => {
        modal.classList.add('opened')
    })

    modal.addEventListener('click', (event) => {
        if (event.target.type === 'button'){
            const modalBasketCard = document.querySelector('.content-basket')
        
            const newBookInfo = document.createElement('div')
            newBookInfo.className = 'basket-wrapper__content'
            
            const newModalBasketName = document.createElement('div')
            newModalBasketName.className = 'content-basket__name'
            newModalBasketName.innerHTML = `${name.name}, <br> ${name.bookName}`

            const newModalBasketPriceSale = document.createElement('p')
            newModalBasketPriceSale.className = 'content-basket__pricesale'
            newModalBasketPriceSale.innerHTML = `Стоимость ${name.priceSale} BYN`
            
            newBookInfo.append(newModalBasketName, newModalBasketPriceSale)
            modalBasketCard.appendChild(newBookInfo)
        }
        else{
            modal.classList.remove('opened')
        }
    })

    modalHide.addEventListener('click', e => {
        modal.classList.remove('opened')
    })

    wrapper.append(imageCard, buttons)

    this.wrapper = wrapper

    return wrapper
}

const isLoadingShow = false

const loading = document.createElement('div')
loading.className = 'loader'

document.body.append(loading)

const getCards = async () => {
    const response = await fetch('https://653044416c756603295e7d3c.mockapi.io/cards')
    const data = await response.json()
    loading.remove()
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
})()

