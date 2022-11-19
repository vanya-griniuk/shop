
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

document.addEventListener("DOMContentLoaded", async () => {
	const { products } = await fetch('http://127.0.0.1:3001').then((response) => response.json());
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













