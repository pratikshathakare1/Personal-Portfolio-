import axios from "axios";

const API_URL = "http://localhost:8080/api/projects";

export const getProjects = () => axios.get(API_URL);

export const addProject = (project) => axios.post(API_URL, project);
