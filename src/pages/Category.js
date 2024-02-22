import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import CategoryCard from '../component/CategoryCard'


const Category = () => {

  const [changecategory , setchangecategory] = useState([])
  const [loading , setloading ] = useState(false)

   const category = useSelector((state) => state.category.categorytype) 

    console.log(category)

    async function newcategory ()
    { 
      setloading(true)
      const out = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
      console.log(out.data)
      setchangecategory(out.data)
      setloading(false)
    }

      
    useEffect ( ()=> {
       newcategory()
     }, [category])



  return (
    <div >
      
      <div className='grid xs:gridcols-1 xs:mx-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'> 
         {
           loading ? <p> Loading.. </p> : 

           changecategory.map ( (item) => <CategoryCard item={ item} key={item.id}/>)
         }

     </div>

    </div>
  )
}

export default Category