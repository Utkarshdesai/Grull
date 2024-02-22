import axios from "axios";
import { GET_ALL_CATEGORY, GET_ALL_PRODUCTS } from "../endpoints";
import axiosInstance from "../Main";


export const fetchallProduct = async () => {
    try {

        const response = await axiosInstance.get(GET_ALL_PRODUCTS)
        return response.data ;
        
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export const fetchCategories = async () => {
    try {

        const res = await axiosInstance.get(GET_ALL_CATEGORY)
        return res.data ;
        
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
}