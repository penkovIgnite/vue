import axios from "axios";

export default {
	getAll() {
		axios.post("https://baas.kinvey.com/appdata/kid_SkRxlwl4B", {
			headers: {
			Authorization: `Kinvey ${authString}`,
			"Content-Type": "application/json"
			}
		})
		.then(res => {
			console.log(res);
		});
	}
};
