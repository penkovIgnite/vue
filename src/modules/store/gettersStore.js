export default {
	getCartProducts: (state) => {
		return state.cartProducts;
	},
	getCartProductIds: (state) => {
		return state.cartProducts.map(product => product._id);
	}
}