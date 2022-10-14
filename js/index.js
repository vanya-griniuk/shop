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

let cartItemsCounter = 0;

const makeProductsCounter = (productCounterElement, cartItemsCounterElement) => {
	let productCounter = 0;

	const handleMinusClick = () => {
    if (productCounter > 0) {
      productCounterElement.innerHTML = --productCounter;
      cartItemsCounterElement.innerHTML = --cartItemsCounter;
    }
  };

	const handlePlusClick = () => {
    productCounterElement.innerHTML = ++productCounter;
    cartItemsCounterElement.innerHTML = ++cartItemsCounter;
  };

	return { handleMinusClick, handlePlusClick };
};

const createCardElement = ({ name, description, price, img }) => `
	<div class="card">
		<img class="card-img" src="${img}">
		<div class="card-info">
			<p class="card-title">${name}</p>
			<p>${description}</p>
			<div class="card-price-container">
				<p class="card-price">$${price}</p>
				<div class="card-counter-container">
					<button class="card-counter-button">
						<i class="bi bi-dash"></i>
					</button>
					<div class="card-counter-current">0</div>
					<button class="card-counter-button">
						<i class="bi bi-plus"></i>
					</button>
				</div>
			</div>
		</div>
	</div>
`;

document.addEventListener("DOMContentLoaded", () => {
	const containerElement = document.getElementById("container");
	containerElement.innerHTML = products.map(createCardElement).join("");

  const cartItemsCounterElement = document.getElementById("cart-items-counter");
	const cardCounterElements = [...document.getElementsByClassName("card-counter-container")];
	cardCounterElements.forEach((cardCounterElement) => {
		const [minusButton, productCounterElement, plusButton] = cardCounterElement.children;
		const { handleMinusClick, handlePlusClick } = makeProductsCounter(productCounterElement, cartItemsCounterElement);

		minusButton.onclick = handleMinusClick;
		plusButton.onclick = handlePlusClick;
	});
});













