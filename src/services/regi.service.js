import axios from "axios";
import { hostUrl } from "../environment/environment";


export const getRegiList = () => axios.get(`${hostUrl}/regis`)
export const registRegi = (params) => axios
    .post(`${hostUrl}/regis/`, { ...params, checked: false})
export const deleteRegi = (id) => axios.delete(`${hostUrl}/regis/` +id)
export const updateRegi = (id, params) => axios
    .put(`${hostUrl}/regis/${id}`, params)


