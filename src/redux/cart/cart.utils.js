export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id //Assess if cartItem being added already exists within cart
    );
  
    if (existingCartItem) {
      return cartItems.map(cartItem => //Need to return new version of state to trigger re-render
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]; 
  };