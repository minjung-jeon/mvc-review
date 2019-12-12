export const fetchJson = async url => {
	try {
		const res = await fetch(url);
		const resJSON = await res.json();
		return resJSON;
	} catch (error) {
		console.error(res.statusText);
		return null;
	}
};
