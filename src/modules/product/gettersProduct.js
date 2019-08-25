export default {
	getAllProducts: (state) => {
		return state.products;
	},
	getProductById: (state) => (id) => {
		return state.products.find(product => product._id == id);
	}
}