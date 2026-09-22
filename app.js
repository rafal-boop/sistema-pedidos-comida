const dishes = [
  { id: 1, name: "Chiri Uchu", description: "Tradición cusqueña para compartir.", price: 18, icon: "✦" },
  { id: 2, name: "Pachamanca", description: "Carnes y papas con hierbas andinas.", price: 24, icon: "◒" },
  { id: 3, name: "Trucha al ajo", description: "Trucha del valle con papas nativas.", price: 21, icon: "≈" },
  { id: 4, name: "Cuy al horno", description: "Crocante, acompañado de ensalada fresca.", price: 32, icon: "◆" }
];

const order = new Map();
const menuElement = document.querySelector("#menu");
const orderItemsElement = document.querySelector("#order-items");
const totalElement = document.querySelector("#order-total");
const orderCountElement = document.querySelector("#order-count");
const submitButton = document.querySelector("#submit-order");
const messageElement = document.querySelector("#order-message");

function money(value) {
  return `S/ ${value.toFixed(2)}`;
}

function renderMenu() {
  document.querySelector("#dish-count").textContent = `${dishes.length} platos`;
  menuElement.innerHTML = dishes.map((dish) => `
    <article class="dish">
      <div class="dish-icon" aria-hidden="true">${dish.icon}</div>
      <h3>${dish.name}</h3>
      <p>${dish.description}</p>
      <div class="dish-footer">
        <span class="price">${money(dish.price)}</span>
        <button class="add-button" type="button" data-add="${dish.id}">Agregar</button>
      </div>
    </article>
  `).join("");
}

function renderOrder() {
  const items = [...order.values()];
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  orderCountElement.textContent = count;
  totalElement.textContent = money(total);
  submitButton.disabled = items.length === 0;
  orderItemsElement.innerHTML = items.length === 0
    ? '<p class="empty-order">Tu pedido está vacío. Agrega un plato para comenzar.</p>'
    : items.map((item) => `
      <div class="order-line">
        <div><h3>${item.name}</h3><p>${item.quantity} x ${money(item.price)}</p></div>
        <button class="remove-button" type="button" data-remove="${item.id}">Quitar</button>
      </div>
    `).join("");
}

menuElement.addEventListener("click", (event) => {
  const id = Number(event.target.dataset.add);
  if (!id) return;
  const dish = dishes.find((item) => item.id === id);
  const current = order.get(id) || { ...dish, quantity: 0 };
  order.set(id, { ...current, quantity: current.quantity + 1 });
  messageElement.textContent = `${dish.name} agregado al pedido.`;
  renderOrder();
});

orderItemsElement.addEventListener("click", (event) => {
  const id = Number(event.target.dataset.remove);
  if (!id) return;
  order.delete(id);
  messageElement.textContent = "Producto retirado del pedido.";
  renderOrder();
});

submitButton.addEventListener("click", () => {
  order.clear();
  messageElement.textContent = "Pedido registrado. ¡Gracias por elegir Sumaq Sabor!";
  renderOrder();
});

renderMenu();
renderOrder();