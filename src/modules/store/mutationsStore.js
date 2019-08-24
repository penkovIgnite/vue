export const ORDER = "ORDER";

export const order = orderInfo => {
	return {
		type: ORDER,
		orderInfo
	};
}

export default {
	[ORDER] (state, data) {
		state.cartProducts = [];
	}
};
