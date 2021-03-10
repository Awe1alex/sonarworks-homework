import { useState, useMemo } from "react";

const BASE_URL = 'https://www.sonarworks.com/api/legal/'

const useFetch = (url) => {
	const [response, setResponse] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	useMemo(() => {
		setIsLoading(true);
		const fetchData = async () => {
			try {
				const res = await fetch(BASE_URL + url);
				const json = await res.json();
				setResponse(json);
				setIsLoading(false)
			} catch (error) {
				console.log(error)
			}
		};
		fetchData();
	}, [url]);
	return { response, isLoading };
};

export default useFetch