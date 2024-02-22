import React, { useEffect, useState } from 'react'
import { fetchallProduct } from '../api/services/product'
import ProductCard from '../component/ProductCard'

const Home = () => {
    const [loading , setloading] = useState(false)
    const [product ,setproduct] = useState([])

    
    useEffect ( () => {
        const getproduct = async () => {
            try {
             
              setloading(true)
              const data = await fetchallProduct()
              console.log(data)
              setproduct(data)
              
            } catch (error) {
              console.log(error)
              console.log('error while fetching products')
            }

            setloading(false) 
          } 

          getproduct() 
    },[])



  return (
    <> 
        
        <div>
            {
              loading ?  
              
              (<p> loading .... </p>)  
              
              : (product.length > 0) ? 
                  (<div 
                  className='grid xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'> 
                    
                     {
                        product.map( item => 
                        <ProductCard 
                        key={item.id} item ={item} 
                        /> )
                     }

                  </div>)  :  
                                    
                  (<div className='text-2xl justify-center items-center'> No data Found  </div>)
            } 
        </div>
        
        
        
     </>
  )
}

export default Home