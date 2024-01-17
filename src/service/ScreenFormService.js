import axios from 'axios';

const SCREENFORM_BASE_API_URL = 'http://localhost:8080/api/v1/screen-request';

export function getAllScreenForms(){
    return axios.get(SCREENFORM_BASE_API_URL);
}

export function createScreenForm(screenForm){
    return axios.post(SCREENFORM_BASE_API_URL,screenForm);
}

export function getById(id){
    return axios.get(`${SCREENFORM_BASE_API_URL}/${id}`);
}

export function updateScreenForm(id, screenForm){
    return axios.put(`${SCREENFORM_BASE_API_URL}/${id}`, screenForm);
}

export function deleteScreenForm(id){
    return axios.delete(`${SCREENFORM_BASE_API_URL}/${id}`);
}
