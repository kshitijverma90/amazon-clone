import axios from 'axios';


export const initialState ={
    products:[ {id:"1232141",cat_id:'4', title:"Think like monk",discription:"Think Like a Monk 1st edition - Train your M", price:29.99, image:"https://m.media-amazon.com/images/I/71GBwRkvchL._SY342_.jpg",rating:5,stocks:3},
    { id:"34834843",cat_id:"2", title:"Apple macbook",discription:"Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver", price:239.1 , image:"https://m.media-amazon.com/images/I/71TPda7cwUL._SX522_.jpg", rating:4,stocks:2},
    {id:"1232141",cat_id:"3", title:"Amazon Brand Bed",discription:"Amazon Brand - Solimo Canes Engineered Wood King Bed with Box Storage (Walnut finish)", price:29.99, image:"https://m.media-amazon.com/images/I/81fXs3rl2UL._SX425_.jpg",rating:5,stocks:3},
    { id:"34834843",cat_id:"3", title:" Sofa Amazon Branded", discription:"Amazon Brand Solimo Premium Faux Leather Bean Bag, Filled with Beans | Capacity: Upto 6 Ft 3 In Height, 120 KG Weight | 3XL | Black and Brown",price:239.1 , image:"https://m.media-amazon.com/images/I/61em4XfIdEL._SX425_.jpg", rating:4,stocks:3},
    {id:"1232141",cat_id:"4", title:"The lean startup",discription:"Interesting book for growth and learning about startups", price:29.99, image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",rating:5,stocks:2},
    { id:"34834843",cat_id:"3", title:"Kenwood kMix Stand ", discription:"Kenwood kMix Stand mixer for baking, stylish kitchen mixer with k-beater,dough hook and whisk,5 litre glass bowl ",price:239.1 , image:"https://m.media-amazon.com/images/I/41otY93nRZL._AC_SY200_.jpg", rating:4,stocks:3} ,
    {id:"1232141",cat_id:'2', title:"Apple Smart watch",discription:"Apple Watch SE (2nd Gen) [GPS 40 mm] Smart Watch w/Starlight Aluminium Case & Starllight Sport Band. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant", price:29.99, image:"https://m.media-amazon.com/images/I/71YdE55GwjL._SY450_.jpg",rating:5,stocks:3},
    { id:"34834843",cat_id:"2", title:"Redmi smart phone",discription:"Redmi 13C (Starfrost White, 4GB RAM, 128GB Storage) | Powered by 4G MediaTek Helio G85 | 90Hz Display | 50MP AI Triple Camera", price:239.1 , image:"https://m.media-amazon.com/images/I/71scmEdSC2L._SX569_.jpg", rating:4,stocks:2}
    ] ,
    
    basket:[],
    user:null
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action, dispatch) => { // Added dispatch as an argument
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1);
            }
            return {
                ...state,
                basket: newBasket
            };

        case "SET_USER":
            return {
                ...state,
                user: action.user
            };

        case "CHANGE_CATEGORY":
            console.log('category making calls1');
            axios.get(`http://127.0.0.1:8080/endpoint?value=${action.item.category_id}`)
                .then(response => {
                    console.log(response.data);
                    const l = response.data;
                    console.log(l);
                    dispatch({ type: 'SET_PRODUCTS', item: l });
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            return state;

        case "SET_PRODUCTS":
            console.log('set products is called');
            console.log("hello");
            console.log(action.item);
            console.log("hello");
            return {
                ...state,
                products: action.item
            };

        default:
            return state;
    }
};

export default reducer;