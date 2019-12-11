export const fetchJson = async (url) => {
	try {
		const res = await fetch(url);
		const resJSON = await res.json();
	} catch (error) {
		console.error(res.statusText);
		return null;
	}
	return resJSON;
};
