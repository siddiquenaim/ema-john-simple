// use local storage to manage cart data

const getShoppingCart = () => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

/*
getShoppingCart: This function retrieves the shopping cart object from local storage. If the object is not found in local storage, an empty object is returned.
*/

const addToDb = (id) => {
  let shoppingCart = getShoppingCart();
  // add quantity
  const quantity = shoppingCart[id];
  if (!quantity) {
    shoppingCart[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

/*addToDb: This function is used to add items to the cart. It first calls getShoppingCart to retrieve the existing cart object from local storage. If the item being added is already in the cart, the function increments its quantity by 1. If the item is not in the cart, it is added with a quantity of 1. The updated cart object is then saved to local storage.
 */

const removeFromDb = (id) => {
  const shoppingCart = getShoppingCart();
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  }
};

/*
removeFromDb: This function is used to remove items from the cart. It first calls getShoppingCart to retrieve the existing cart object from local storage. If the item being removed is in the cart, it is deleted from the cart object. The updated cart object is then saved to local storage.
*/

const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};

/*
deleteShoppingCart: This function is used to completely clear the shopping cart. It simply calls localStorage.removeItem('shopping-cart') to remove the shopping cart object from local storage.
*/

export { addToDb, removeFromDb, getShoppingCart, deleteShoppingCart };
