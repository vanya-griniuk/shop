// // div  внутри корзины, в который мы добавляем товары
// const containerCart = document.querySelector('.container_cart')


// // Отслеживаем клик на странице
// window.addEventListener('click', function (event) {

//     // Проверяем что клик был совершен по кнопке "добавить в корзину"
//     if (event.target.hasAttribute('data-action')) {

//         // Находим карточку с товаром, внутри которой был совершен клик
//         const card = event.target.closest('.card');
//         console.log(card);

//         // Собираем данные с этого товара и записываем их в единый объект productInfo
//         const productInfo = {
//             id: card.dataset.id,
//             imgSrc: card.querySelector('.card-img-top').getAttribute('src'),
//             title: card.querySelector('.card-title').innerText,
//             price: card.querySelector('.price').innerText,
//             counter: card.querySelector('[data-counter]').innerText,
//         }

//     }
//     // Собираем данные, подставим в шаблон для товара в корзине
//     const cartItemHTML = `<div class="card n-1" data-id="${productInfo.id}">
//     <img class="card-img-top" src="${productInfo.imgSrc}">
//     <div class="card-info">
//         <div class="title_price">
//             <h4 class="card-price">
//                 <p>${productInfo.title}</p>
//                 <p class="price">${productInfo.price}</p>
//             </h4>
//         </div>
//             <div class="card-buttons">
//                 <div class="items__control" data-action="minus">-</div>
//                 <div class="items__current" data-counter>${productInfo.counter}</div>
//                 <div class="items__control" data-action="plus">+</div>
//             </div>
//             <h3>$45</h3>
//         </div>
// </div>`;

//     // Отобразим товар в корзине
//     containerCart.insertAdjacentHTML('beforeend', cartItemHTML);

// // }

 