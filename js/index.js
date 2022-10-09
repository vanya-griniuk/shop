const products = [
	{
		id: 1,
		name: 'Casual shirt',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing',
		price: 45,
		img: '../images/shirt_1.webp',
	},
	{
		id: 2,
		name: 'Office Shirt',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing',
		price: 100,
		img: '../images/shirt_2.jpeg',
	},
	{
		id: 3,
		name: 'T-shirt',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing',
		price: 25,
		img: '../images/shirt_3.webp',
	},
	{
		id: 4,
		name: 'Mens Suit',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing',
		price: 300,
		img: '../images/suit_4.jpeg',
	},
	{
		id: 5,
		name: 'Mens Tie',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing',
		price: 25,
		img: '../images/tie_5.webp',
	},
	{
		id: 6,
		name: 'Casual shoes',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing',
		price: 200,
		img: '../images/shoes_6.webp',
	},
	{
		id: 7,
		name: 'Black suit',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing',
		price: 450,
		img: '../images/suit_7.jpeg',
	},
	{
		id: 8,
		name: 'Polo shirt',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing',
		price: 45,
		img: '../images/polo_8.jpeg',
	},
	{
		id: 9,
		name: 'Denim shirt',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing',
		price: 85,
		img: '../images/dshirt_9.jpeg',
	},
	{
		id: 10,
		name: 'Denim pants',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing',
		price: 120,
		img: '../images/dpants_10.jpeg',
	},
	{
		id: 11,
		name: 'Basic cap',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing',
		price: 35,
		img: '../images/cap_11.webp',
	},
	{
		id: 12,
		name: 'Leather boots',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing',
		price: 350,
		img: '../images/boots_12.jpeg',
	},
];

const cardElement = ({ id, name, description, price, img }) => `
	<div class="card" data-id="${id}">
		<img class="card-img-top" src="${img}">
		<div class="card-info">
			<h4 class="card-title">${name}</h4>
			<p>${description}</p>
			<div class="card-price">
				<h4 class="price">$${price}</h4>
				<div class="card-buttons">
					<div class="items__control" data-action="minus">-</div>
					<div class="items__current" data-counter>0</div>
					<div class="items__control" data-action="plus">+</div>
				</div>
			</div>
		</div>
	</div>
`;

document.addEventListener("DOMContentLoaded", () => {
	const containerElement = document.getElementById("container");

	containerElement.innerHTML = products.map(cardElement).join("");
});

window.addEventListener("click", function (event) { // Добавляем отслеживание на всем окне
  // Объявляем переменную для счетсчика
  let counter;

  // Проверяем клик строго по кнопкам Плюс или Минус
  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    // Находим обертку счетсчика
    const cardButtons = event.target.closest(".card-buttons");

    //Находим див с числом счетсчика
    counter = cardButtons.querySelector("[data-counter]");
  }

  // Проверяем является ли элемент по которому был совершен клик кнопкой Плюс
  if (event.target.dataset.action === "plus") {
    counter.innerText = ++counter.innerText;
  }

  if (event.target.dataset.action === "minus") {
    // Проверяем чтобы счетсчик был больше 0
    if (parseInt(counter.innerText) > 0) {
      // Изменяе текст в счетсчике уменьшая его на 0
      counter.innerText = --counter.innerText;
    }
  }
});