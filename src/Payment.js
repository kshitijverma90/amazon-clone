import React ,{ useEffect, useState}from 'react'
import './Payment.css'
import BasketItem from './BasketItem';
import { useStateValue } from './StateProvider'
import { Link,useHistory } from 'react-router-dom';
import { CardElement , useStripe,useElements, Elements} from "@stripe/react-stripe-js"
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from 'axios';


function Payment() {
    const [{basket,user},dispatch]=useStateValue();
    const history=useHistory();

    const stripe=useStripe();
    const elements=useElements();

    const [succeeded,setSucceeded]=useState(false);
    const [processing,setProcessing]=useState("");


    const[error,setError]=useState(null);
    const[disabled,setDisabled]=useState(true);
    const[clientSecret,setClientSecret]=useState(true);

    useEffect(()=>{
          const getClientSecret=async()=>{
              const response=await axios({
                  method:'post',
                  url:'/payments/create?total=${getBasketTotal(basket)*100}'
              });
              setClientSecret(response.data.clientSecret)
          }
          getClientSecret();
    },[basket])
    
    const handleSubmit=async(event)=>{
         event.preventDefault();
         setProcessing(true);

         const payload=await stripe.confirmCardPayment(clientSecret,{payment_method:{
             card:elements.getElement(CardElement)
         }
        }).then(({paymentIntent})=>
        {
            setSucceeded(true);
            setError(null)
            setProcessing(false)
             history.replace('/orders')
        })
    }

    const handleChange=event=>{
        setDisabled(event.empty);
        setError(event.error ? event.error.message:"");
    }

  return (
    <div className='payment'>
        <div className='payment_container'>
            <h1>Checkout (<Link to='/checkout'>{basket?.length}items</Link>)</h1>
            <div className='payment_section'>
                 <div className='payment_title'>
                     <h3>Delivery Address</h3>
                 </div>
                 <div className='payment_address'>
                     <p>{user?.email}</p>
                     <p>B-9 Sultan Appartment,Saket</p>
                     <p>New Delhi,Delhi,110030</p>
                 </div>
            </div>
            <div className='payment_section'>
                  <div className='payment_title'>
                      <h3>Review Items and delivery</h3>
                  </div>
                  <div className='payment_items'>
                      {basket.map(item=>(
                          <BasketItem id={item.id}
                          title={item.title}
                          image={item.image}
                          price={item.price}
                          rating={item.rating}
                          />
                      ))}
                  </div>
           </div>
           <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment_details'>
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange} />
                                <div className='payment_priceContainer'>
                                     <CurrencyFormat renderText={(value)=>(
                                         <>
                                         <h3>Order Total:{value}</h3>
                                         </>
                                     )} 
                                     decimalScale={2}
                                     value={getBasketTotal(basket)}
                                     displayType={"text"}
                                     thousandSeparator={true}
                                     prefix={"Rs"}
                                     />
                                     <button className='payment_buynow' disabled={processing||disabled||succeeded}>
                                         <span> {processing ? <p>Processing</p>:"Buy Now"}</span>
                                     </button>
                                </div>

                                {error && <div>{error}</div>}
                            </form>
                    </div>
            </div>

        </div>
    </div>
  )
}

export default Payment