// Добавляем отслеживание на всем окне
window.addEventListener('click', function(event){ 
    
    // Объявляем переменную для счетсчика
    let counter;

    // Проверяем клик строго по кнопкам Плюс или Минус
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {

        // Находим обертку счетсчика
    const cardButtons = event.target.closest('.card-buttons');
     
    //Находим див с числом счетсчика 
    counter = cardButtons.querySelector('[data-counter]');
    }
    
    // Проверяем является ли элемент по которому был совершен клик кнопкой Плюс
if(event.target.dataset.action === 'plus') {

    counter.innerText = ++counter.innerText;
}
 
if(event.target.dataset.action === 'minus') {

    // Проверяем чтобы счетсчик был больше 0
    if (parseInt(counter.innerText) > 0){
        // Изменяе текст в счетсчике уменьшая его на 0
    counter.innerText = --counter.innerText;
    }

}


}); 