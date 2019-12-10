export const fetchJson = async (url) => {
	const res = await fetch(url);
	const resJSON = await res.json();

	return resJSON;
};
