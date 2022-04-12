import React from 'react'
import "./Home.css"
import Product from './Product';
function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
        <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg" alt="" />
       
        <div className="home_row">
           <Product id="1232141" title="The lean startup" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"rating={5}/> 
           <Product id="34834843" title="Kenwood kMix Stand mixer for baking, stylish kitchen mixer with k-beater,dough hook and whisk,5 litre glass bowl" price={239.1}  image="https://m.media-amazon.com/images/I/41otY93nRZL._AC_SY200_.jpg" rating={4}/> 
        </div>
        <div className="home_row">
        <Product id="2323" title="OPPO A74 5G (Fantastic Purple,6GB RAM,128GB Storage) - 5G Android Smartphone | 5000 mAh Battery | 18W Fast Charge | 90Hz LCD Display" price={230} image="https://m.media-amazon.com/images/I/71geVdy6-OS._SL1500_.jpg" rating={4} /> 
        <Product id="234" title="pTron Bassbuds Duo New Bluetooth 5.1 Wireless Headphones, 32Hrs Total Playtime, Stereo Audio, Touch Control TWS, Dual HD Mic, Type-C Fast Charging, IPX4 Water-Resistant & Voice Assistance (Black)" price={264} image="https://m.media-amazon.com/images/I/519uMzMXJVL._SL1100_.jpg" rating={5} /> 
        <Product id="234" title="Amazon Brand - Solimo XXXL Bean Bag Filled With Beans (Black and Brown)" price={264} image="https://m.media-amazon.com/images/I/61CiyGIeoOL._SL1200_.jpg" rating={5}/> 
        </div>
        <div className="home_row">
        <Product id="234" title="LG 1.5 Ton 4 Star DUAL Inverter Window AC (Copper, Convertible 4-in-1 cooling, PW-Q18WUXA, 2022 Model, HD Filter, White)" price={264} image="https://m.media-amazon.com/images/I/71C1YgTEg4L._SL1500_.jpg" rating={5}/> 
        </div>
        <div className="home_row">
        <Product id="2323" title="Urban Born Cast Iron Metal Flower vase for Home Decor and Living Room Vintage Antique Decor (Gold, 15 x 15 x 15 cm)" price={23} image="https://m.media-amazon.com/images/I/71b1xh2Dm8L._SL1280_.jpg" rating={4} /> 
        <Product id="234" title="NEW LEAF 220 GSM All-Season Printed Super Soft Light Weight Cotton Comforter Set with 1 Bedsheet 2 Pillow Covers (Double, Blue, Orange) -4 Pieces" price={264} image="https://m.media-amazon.com/images/I/61GZfow+IMS._SL1023_.jpg" rating={5} /> 
        <Product id="234" title="Ogil Gold Formal Shoes for Men" price={264} image="https://m.media-amazon.com/images/I/61qYQorR-3L._UL1500_.jpg" rating={5}/> 
        </div>
        <div className="home_row">
        <Product id="1232141" title="Amazon Brand - Solimo UV Protection & Dustproof Car Cover for Maruti Swift (Dark Blue & Silver)" price={29.99} image="https://m.media-amazon.com/images/I/713otrX0ypL._SL1500_.jpg"rating={5}/> 
           <Product id="34834843" title="Scott International Men's Solid Wind Cheater Jacket" price={239.1}  image="https://m.media-amazon.com/images/I/510GbRxnfgL._UL1100_.jpg" rating={4}/> 
        </div>
        </div>
    </div>
  )
}

export default Home