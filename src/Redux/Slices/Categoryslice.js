import { createSlice } from "@reduxjs/toolkit"; 


const initialState = {
    categorytype : null
}
 
//create slice with name initialstate and function like add to cart and remove to cart
const categoryslice  = createSlice( 
    {
      name:"category",
      initialState,
      reducers : {
        setcatgory : (state ,action) => {
            state.categorytype = action.payload ;
        }
      }
    }
)

export const {setcatgory} = categoryslice.actions
export default categoryslice.reducer ;