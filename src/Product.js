import React from 'react'
import './Product.css';
import {useStateValue} from "./StateProvider";
import Zoom from 'react-reveal/Zoom';
import {Link} from "react-router-dom";
function Product({id,cat_id,title,discription,image,price,rating,stocks}) {
  const [{basket},dispatch]=useStateValue();
 
  const addToBasket=()=>{
      dispatch({
        type :"ADD_TO_BASKET",
        item:{
          id:id,
          title:title,
          image:image,
          price:price,
          rating:rating,
        },
      });
  };
 
  return (
    <Zoom left>
    <div className='product'>
        <div className='product_info'>
            <p className='product_title'> {title}</p>
            {/* <p>{discription}</p> */}
            <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product_rating'>
                 {Array(rating).fill().map((_,i)=>(
                    <p>⭐</p>  
                 ))}
                
                
            </div>

        </div>
        <img  src={image} alt="" />
        <Link to={{
    pathname: '/productdetails',
    state: { 
       data: {id,cat_id,title,discription,image,price,rating,stocks}
    },
  }}>  
          <p className='view_details'>View Details</p>
        </Link>
        <button onClick={addToBasket}>Add to Basket</button>
    </div></Zoom>
  )
}

export default Product