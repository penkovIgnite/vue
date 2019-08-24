export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const ADD_TO_CARD = "ADD_TO_CARD";

export const getAllProducts = products => {
	return {
		type: GET_ALL_PRODUCTS,
		products
	};
}

export const createProduct = product => {
	return {
		type: CREATE_PRODUCT,
		product
	};
}

export const addToCard = product => {
	return {
		type: ADD_TO_CARD,
		product
	};
}

export default {
	[GET_ALL_PRODUCTS] (state, data) {
		state.products.push(data.products.data);
	},
	[CREATE_PRODUCT] (state, data) {
		state.products.push(data.product.data);
	},
	[ADD_TO_CARD] (state, data) {
		state.card.push(data.product);
	}
};
