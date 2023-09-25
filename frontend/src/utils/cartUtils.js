export const addDecimals = (num) => {
    return (Math.round(num*100)/100).toFixed(2)
};

export const updateCart = (state) => {
    //calculate cart items
            state.itemsPrice = addDecimals(state.cartItems.reduce((acc, item) => acc+item.price * item.qty, 0));

            //calculate shipping price
            // if order id over $100 then shipping is free else it is $10
            state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

            // calculating the tax price (15%)
            state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed()));
            

            //calculating the total price
            state.totalPrice = (
                Number(state.itemsPrice) + 
                Number(state.shippingPrice) + 
                Number(state.taxPrice)
            ).toFixed(2);

            localStorage.setItem('cart', JSON.stringify(state));

            return state;

}