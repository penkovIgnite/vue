export const SET_ORDERS = "SET_ORDERS";
export const SET_ORDER = "SET_ORDER";

export const setOrders = orders => {
	return {
		type: SET_ORDERS,
		orders
	};
}

export const setOrder = order => {
	return {
		type: SET_ORDER,
		order
	};
}

export const updateOrder = order => {
	return {
		type: UPDATE_ORDER,
		order
	};
}

export default {
	[SET_ORDERS] (state, data) {
		state.orders = data.orders.data;
	},
	[SET_ORDER] (state, data) {
		state.order = data.order.data;
	}
};
