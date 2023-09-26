import axios from 'axios';

// console.log(process.env.REACT_APP_RAPID_API_KEY);

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
	params: {
		maxResults: '50',
	},
	headers: {
		'X-RapidAPI-Key': '1d730c9485msh93f7d1f9bd73c77p10db7ajsnf9ddc4f08225',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
	},
};

export const fetchFromApi = async (url) => {
	const { data } = await axios.get(`${BASE_URL}/${url}`, options);
	return data;
};
