function createCart() {
  let items = [];
  let discount = 0;

  function addItem(name, price, qty = 1) {
    if (qty <= 0 || price < 0) return;

    const existing = items.find((item) => item.name === name);

    if (existing) {
      existing.qty += qty;
    } else {
      items.push({ name, price, qty });
    }
  }

  function removeItem(name) {
    items = items.filter((item) => item.name !== name);
  }

  function getItems() {
    // return a copy so outside code can't mutate internal state
    return items.map((item) => ({ ...item }));
  }

  function getTotal() {
    const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

    return total * (1 - discount);
  }

  function applyDiscount(percent) {
    if (percent < 0 || percent > 100) return;
    discount = percent / 100;
  }

  function clearCart() {
    items = [];
    discount = 0;
  }

  return {
    addItem,
    removeItem,
    getItems,
    getTotal,
    applyDiscount,
    clearCart,
  };
}

const cart = createCart();

cart.addItem("Apple", 10, 2);
cart.addItem("Banana", 5, 3);
cart.addItem("Apple", 10, 1);
console.log(cart.getItems());

console.log(cart.getTotal());

cart.applyDiscount(10);
console.log(cart.getTotal());
