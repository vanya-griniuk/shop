
let cartItemsCounter = 0;

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

const injectCounter = (cardCounterElement) => {
  const cartItemsCounterElement = document.getElementById("cart-items-counter");
  const [minusButton, productCounterElement, plusButton] = cardCounterElement.children;

  let productCounter = 0;

  minusButton.onclick = () => {
    if (productCounter > 0) {
      productCounterElement.innerHTML = --productCounter;
      cartItemsCounterElement.innerHTML = --cartItemsCounter;
    }
  };

  plusButton.onclick = () => {
    productCounterElement.innerHTML = ++productCounter;
    cartItemsCounterElement.innerHTML = ++cartItemsCounter;
  };
};
 
document.addEventListener("DOMContentLoaded", async () => {
  const products = await fetch('http://127.0.0.1:3001').then((response) => response.json());

  const containerElement = document.getElementById("container");
  containerElement.innerHTML = products.map(createCardElement).join("");

  const cardCounterElements = [...document.getElementsByClassName("card-counter-container")];
  cardCounterElements.forEach(injectCounter);
});













