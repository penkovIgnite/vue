export default {
	getAllProducts: (state) => {
		return state.products;
	},
	getProductById: (state) => (id) => {
		return state.products[0].find(product => product._id == id);
	}
}