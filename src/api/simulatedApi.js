// Placeholder API-like endpoints to read data from 
// static JSON files located in the /public/data folder

export const getConfig = () => {
    return fetch("./data/config.json").then(res => res.json());
};

export const getAllCategories = () => {
    return fetch("./data/categories.json").then(res => res.json());
};

export const getAllProjects = () => {
    return fetch("./data/projects.json").then(res => res.json());
};