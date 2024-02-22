import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import axiosInstance from '../api/Main';
import { GET_ALL_CATEGORY } from '../api/endpoints';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setcatgory } from '../Redux/Slices/Categoryslice';
import logo from '../assets/logo (1).png'



const Navbar = () => {

    const [Categorytype ,setCategorytype] = useState([])
    const [loading ,setloading] = useState(false)

    const cart = useSelector((state) =>  state.buycart.wishlist)

    const nav = useNavigate()
    const dispatch = useDispatch()


    const changecategory = (i) => {
        nav('/category')
        dispatch(setcatgory(i))
               
    }
  
    useEffect ( ()=> {
       
        async function getcategoryall () 
        {  
            setloading(true)
            const data = await axiosInstance.get(GET_ALL_CATEGORY)
            setCategorytype (data.data)  
            setloading(false)
        }
        getcategoryall()

    },[])
  return (
    <div className='flex sticky justify-between px-20 items-center z-50 lg:py-5 py-4 max-w-8xl mx-auto h-20 bg-slate-900 max-[320px]:h-[120px]'>
         
        <div className='max-[320px]:hidden'>
            <Link to='/'>
              <img src={logo} alt='logo' className='h-14'/>
            </Link>
        </div> 
        
        <div className='flex flex-row items-center justify-around gap-x-5 max-[320px]:flex-col'>
      
            <Link to='/'>
              <p className="cursor-pointer hover:text-green-400 transition duration-300 ease-in  text-slate-100"> Home </p>
            </Link>
                                           
                  { 
                      Categorytype.map( (item ,index) => {
                            return(<div                        
                              className="flex items-center font-medium text-slate-100 space-x-6 hover:text-green-400 transition duration-300"
                                key={index}
                                onClick={()=>changecategory(item)}

                                 > 
                                   {item}
                                 </div>)
                         })
                      }
         </div> 
        
            <div className='relative' >
                <Link to='/cart'>
                <AiOutlineShoppingCart  className='text-2xl text-white'/>
                {
                    cart.length > 0 &&
                    <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white className="text-2xl cursor-pointer hover:text-green-400 transition transform duration-200'> {cart.length} </span>
                }
                </Link>
              
           </div>
     

    </div>
  )
}

export default Navbar