import axios from 'axios';
import { useState } from 'react';

export const initialState ={
    products:[ {id:"1232141",cat_id:'2', title:"The lean startup",discription:"hellow worldflahgals;kdha afdkjal;dfj afhal;dfj;a afdl;ajfs;", price:29.99, image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",rating:5,stocks:3},{ id:"34834843",cat_id:"2", title:"Kenwood kMix Stand mixer for baking, stylish kitchen mixer with k-beater,dough hook and whisk,5 litre glass bowl",discription:"akdjf;aldjf afjadkfja;j dkafd, fajdfa ladfjaf ldkfkad; kk", price:239.1 , image:"https://m.media-amazon.com/images/I/41otY93nRZL._AC_SY200_.jpg", rating:4,stocks:2},
    {id:"1232141",cat_id:"3", title:"The lean startup",discription:"dfaj;kjdalfasdflaskfjlas;fj fafjksd afjkda", price:29.99, image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",rating:5,stocks:3},{ id:"34834843",cat_id:"2", title:"Kenwood kMix Stand mixer for baking, stylish kitchen mixer with k-beater,dough hook and whisk,5 litre glass bowl", discription:"djkafdsljf dkfja;ldkfjalj askfjasslfkjsdlj jfkdjfa fdakfjal fkadfjsd",price:239.1 , image:"https://m.media-amazon.com/images/I/41otY93nRZL._AC_SY200_.jpg", rating:4,stocks:3},
    {id:"1232141",cat_id:"2", title:"The lean startup",discription:"kfdjk djfjaskdj ienfaf iedkd irina ", price:29.99, image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",rating:5,stocks:2},{ id:"34834843",cat_id:"3", title:"Kenwood kMix Stand mixer for baking, stylish kitchen mixer with k-beater,dough hook and whisk,5 litre glass bowl", discription:"dfaja dkjfkd fksflfal slfljsaflaei ksdlfiss sdifs ksdlfjs ",price:239.1 , image:"https://m.media-amazon.com/images/I/41otY93nRZL._AC_SY200_.jpg", rating:4,stocks:3} 
    ] ,
    
    basket:[],
    user:null
};

export const getBasketTotal=(basket)=>
  basket?.reduce((amount,item)=>item.price+amount,0);




const reducer = (state,action )=>{
    switch(action.type){
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket:[...state.basket,action.item],
            };

        
        case "REMOVE_FROM_BASKET":
            
                const index =state.basket.findIndex(
                    (basketItem) => basketItem.id===action.id
                );
                let newBasket=[...state.basket];
              if(index>=0){
                  newBasket.splice(index,1);
              }  
            //   else{
            //       console.warn(
            //           'Cant remove product(id: ${action.id}) as its not in basket!')
            //       );
            //   }
            return {
                ...state,
                basket:newBasket
            }
        case "SET_USER":
            return {
                ...state,
                user: action.user
            } 
            
        case "CHANGE_CATEGORY":
            const l=[];
            console.log('cateogory making calls1')
            axios.get(`http://127.0.0.1:8080/endpoint?value=${action.item.category_id}`)
            .then(response => {
                console.log(response.data);
                l=response.data
                console.log(l)
            })
            .catch(error => {
                console.error('Error:');
            });
              
            
            return {
                //make a call then save it in product
                ...state,
                products:[ {id:"1232141",cat_id:'2', title:"The lean startup",discription:"hellow worldflahgals;kdha afdkjal;dfj afhal;dfj;a afdl;ajfs;", price:29.99, image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",rating:5,stocks:3},{ id:"34834843",cat_id:"2", title:"Kenwood kMix Stand mixer for baking, stylish kitchen mixer with k-beater,dough hook and whisk,5 litre glass bowl",discription:"akdjf;aldjf afjadkfja;j dkafd, fajdfa ladfjaf ldkfkad; kk", price:239.1 , image:"https://m.media-amazon.com/images/I/41otY93nRZL._AC_SY200_.jpg", rating:4,stocks:2},
                {id:"1232141",cat_id:"3", title:"The lean startup",discription:"dfaj;kjdalfasdflaskfjlas;fj fafjksd afjkda", price:29.99, image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",rating:5,stocks:3},{ id:"34834843",cat_id:"2", title:"Kenwood kMix Stand mixer for baking, stylish kitchen mixer with k-beater,dough hook and whisk,5 litre glass bowl", discription:"djkafdsljf dkfja;ldkfjalj askfjasslfkjsdlj jfkdjfa fdakfjal fkadfjsd",price:239.1 , image:"https://m.media-amazon.com/images/I/41otY93nRZL._AC_SY200_.jpg", rating:4,stocks:3}],
                //products:l
            }
                
        default:
            return state;    
    };
};

export default reducer;