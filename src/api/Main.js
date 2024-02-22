import axios from "axios"; 

const baseURL = 'https://fakestoreapi.com'

const axiosInstance = axios.create ( {
   baseURL 
   
})

export default axiosInstance ;