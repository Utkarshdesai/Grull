import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
  wishlist: [],
}
 
//create slice with name initialstate and function like add to cart and remove to cart
const Orderslice  = createSlice( 
    {
      name:"cartitem",
      initialState,
      reducers : {
        add : (state , action) => {
            state.wishlist.push (action.payload)
        } ,

        remove : (state ,action) => {
            state.wishlist = state.wishlist.filter( (card)=>card.id !== action.payload)
        }
    }

    }
)

export const {add ,remove } = Orderslice.actions ;
export default Orderslice.reducer
