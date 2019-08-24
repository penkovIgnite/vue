export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const ADD_TO_CART = "ADD_TO_CART";

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

export const addToCart = product => {
	return {
		type: ADD_TO_CART,
		product
	};
}

export default {
	[GET_ALL_PRODUCTS] (state, data) {
		var products = data.products.data;
		products.forEach(product => {
			if(product.img == "")
				return product.img = 'https://rimage.gnst.jp/livejapan.com/public/img/common/noimage.jpg?20190126050053';

			return product;
		});
		state.products.push(data.products.data);
	},
	[CREATE_PRODUCT] (state, data) {
		var product = data.product.data;
		if(product.img == "")
			product.img = 'https://rimage.gnst.jp/livejapan.com/public/img/common/noimage.jpg?20190126050053';
		state.products.push(product);
	},
	[ADD_TO_CART] (state, data) {
		state.cartProducts.push(data.product);
	}
};
