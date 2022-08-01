import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_POKEAPI_URL,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});

export const getPokemons = async () => {
    try {
        const response = await api.get("/pokemon");
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
