import { configureStore } from "@reduxjs/toolkit";
import catgoryreducer from './Slices/Categoryslice'
import buyreducer from './Slices/buyitem'


export const store = configureStore( {
    reducer: {
        category : catgoryreducer ,
        buycart : buyreducer ,
       
    }
})