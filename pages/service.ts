import axios from "axios";

    export const getPeopleList = () => {
        const peopleUrl = "https://swapi.dev/api/people/";
        return axios.get(peopleUrl).then((res) => {
            return res.data;
        })
    }

    export const getPlanetsList = () => {
        const planetsUrl = "https://swapi.dev/api/planets/";
        return axios.get(planetsUrl).then((res) => {
            return res.data;
        })
    }

    export const getSpeciesList = () => {
        const speciesUrl = "https://swapi.dev/api/species/";
        return axios.get(speciesUrl).then((res) => {
            return res.data;
        })
    }