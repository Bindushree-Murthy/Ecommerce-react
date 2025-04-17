import React from 'react';
import './More.css';
import { useNavigate } from 'react-router-dom';
import j1 from './Images/j1.jpg';
import j2 from './Images/j2.jpg';
import j3 from './Images/j3.jpg';
import j4 from './Images/j4.jpg';
import j5 from './Images/j5.jpg';
import j6 from './Images/j6.jpg';

import m1 from './Images/m1.jpg';
import m2 from './Images/m2.jpg';
import m3 from './Images/m3.jpg';
import m4 from './Images/m4.jpg';
import m5 from './Images/m5.jpg';
import m6 from './Images/m6.jpg';

import w1 from './Images/w1.jpg';
import w2 from './Images/w2.jpg';
import w3 from './Images/w3.jpg';
import w4 from './Images/w4.jpg';
import w5 from './Images/w5.jpg';
import w6 from './Images/w6.jpg';

import a1 from './Images/a1.jpg';
import a2 from './Images/a2.jpg';
import a3 from './Images/a3.jpg';
import a4 from './Images/a4.jpg';
import a5 from './Images/a5.jpg';
import a6 from './Images/a6.jpg';

const More = () => {
  const navigate=useNavigate();

  const handleBuyNow = (image, cost, offerDays, name) => {
    navigate('/buy',{state:{image,cost, offerDays, name}})
  };
  
    return (
        <div>
            <h1 className='tophead'>Special Offers</h1>

            <h1 className='hs1' id='sp'>Jewelleries</h1>
           <section className='Accessories' id='m1'>
            <div className='division'>
              <h1 className='h11'>Bangles</h1>
              <img src={j1} alt="" className='i1'/>
              <h1 className='hh2'>$200 only</h1>
              <h4 className='hh3'>Offer ends in 2 days</h4>
              <button onClick={()=>handleBuyNow(j1, '$200', '2 days', 'Bangles')}>Buy now</button>
            </div>
            <div className='division'>
              <h1 className='h11'>Necklaces</h1>
              <img src={j2} alt="" className='i1'/>
              <h1 className='hh2'>$500 only</h1>
              <h4 className='hh3'>Offer ends in 1 days</h4>
              <button onClick={() => handleBuyNow(j2, '$500', '1 days', 'Necklaces')}>Buy now</button>
            </div> 
            <div className='division'>
            <h1 className='h11'>Earrings</h1>
              <img src={j3} alt="" className='i1'/>
              <h1 className='hh2'>$300 only</h1>
              <h4 className='hh3'>Offer ends in 5 days</h4>
              <button onClick={() => handleBuyNow(j3, '$300', '5 days', 'Earrings')}>Buy now</button>
            </div> 
            <div className='division'>
              <h1 className='h11'>Toe Rings</h1>
              <img src={j4} alt="" className='i1'/>
              <h1 className='hh2'>$100 only</h1>
              <h4 className='hh3'>Offer ends in 1 days</h4>
              <button onClick={() => handleBuyNow(j4, '$100', '1 days', 'Toe Rings')}>Buy now</button>
            </div>
            <div className='division'>
              <h1 className='h11'>Anklets</h1>
              <img src={j5} alt="" className='i1'/>
              <h1 className='hh2'>$200 only</h1>
              <h4 className='hh3'>Offer ends in 2 days</h4>
              <button onClick={() => handleBuyNow(j5, '$200', '2 days', 'Anklets')}>Buy now</button>
            </div>
            <div className='division'>
              <h1 className='h11'>Finger Rings</h1>
              <img src={j6} alt="" className='i1'/>
              <h1 className='hh2'>$350 only</h1>
              <h4 className='hh3'>Offer ends in 1 days</h4>
              <button onClick={() => handleBuyNow(j6, '$350', '1 days', 'Finger Rings')}>Buy now</button>
            </div>
            </section> 
            
            <h1 className='hs1' id='sp'>Men's Collection</h1>
            <section className='men' id='m1'>
            <div className='division'>
              <h1 className='h11'>Shirt</h1>
              <img src={m1} alt="" className='i1'/>
              <h1 className='hh2'>$200 only</h1>
              <h4 className='hh3'>Offer ends in 2 days</h4>
              <button onClick={() => handleBuyNow(m1, '$200', '2 days', 'Shirt')}>Buy now</button>
            </div>

            <div className='division'>
              <h1 className='h11'>Combo</h1>
              <img src={m2} alt="" className='i1'/>
              <h1 className='hh2'>$300 only</h1>
              <h4 className='hh3'>Offer ends in 3 days</h4>
              <button onClick={() => handleBuyNow(m2, '$300', '3 days', 'Combo')}>Buy now</button>
            </div>
             
            <div className='division'>
              <h1 className='h11'>Full shirt</h1>
              <img src={m3} alt="" className='i1'/>
              <h1 className='hh2'>$600 only</h1>
              <h4 className='hh3'>Offer ends in 1 days</h4>
              <button onClick={() => handleBuyNow(m3, '$600', '1 days', 'Full shirt')}>Buy now</button>
            </div>

            <div className='division'>
              <h1 className='h11'>Open shirt</h1>
              <img src={m4} alt="" className='i1'/>
              <h1 className='hh2'>$400 only</h1>
              <h4 className='hh3'>Offer ends in 3 days</h4>
              <button onClick={() => handleBuyNow(m4, '$400', '3 days', 'Open shir')}>Buy now</button>
            </div>

            <div className='division'>
              <h1 className='h11'>Shirt [Full sleeve]</h1>
              <img src={m5} alt="" className='i1'/>
              <h1 className='hh2'>$300 only</h1>
              <h4 className='hh3'>Offer ends in 4 days</h4>
              <button onClick={() => handleBuyNow(m5, '$300', '4 days', 'Skirt [Full sleeve]')}>Buy now</button>
            </div>

            <div className='division'>
              <h1 className='h11'>Shirt [Short sleeve]</h1>
              <img src={m6} alt="" className='i1'/>
              <h1 className='hh2'>$100 only</h1>
              <h4 className='hh3'>Offer ends in 1 days</h4>
              <button onClick={() => handleBuyNow(m6, '$100', '1 days', 'Skirt [Short sleeve]')}>Buy now</button>
            </div>

            </section>

            <h1 className='hs1' id='sp'>Women's Collection</h1>

            <section className='women' id='m1'>

            <div className='division'>
              <h1 className='h11'>fancy top</h1>
              <img src={w1} alt="" className='i1'/>
              <h1 className='hh2'>$100 only</h1>
              <h4 className='hh3'>Offer ends in 6 days</h4>
              <button onClick={() => handleBuyNow(w1, '$100', '6 days', 'fancy top')}>Buy now</button>
            </div>

            <div className='division'>
              <h1 className='h11'>Top</h1>
              <img src={w2} alt="" className='i1'/>
              <h1 className='hh2'>$330 only</h1>
              <h4 className='hh3'>Offer ends in 1 days</h4>
              <button onClick={() => handleBuyNow(w2, '$330', '1 days', 'Top')}>Buy now</button>
            </div>

            <div className='division'>
              <h1 className='h11'>fancy skirt</h1>
              <img src={w3} alt="" className='i1'/>
              <h1 className='hh2'>$120 only</h1>
              <h4 className='hh3'>Offer ends in 2 days</h4>
              <button onClick={() => handleBuyNow(w3, '$120', '2 days', 'fancy skirt')}>Buy now</button>
            </div>

            <div className='division'>
              <h1 className='h11'>Bodycon dress</h1>
              <img src={w4} alt="" className='i1'/>
              <h1 className='hh2'>$200 only</h1>
              <h4 className='hh3'>Offer ends in 3 days</h4>
              <button onClick={() => handleBuyNow(w4, '$200', '3 days', 'Bodycon dress')}>Buy now</button>
            </div>

            <div className='division'>
              <h1 className='h11'>Umbrella top</h1>
              <img src={w5} alt="" className='i1'/>
              <h1 className='hh2'>$230 only</h1>
              <h4 className='hh3'>Offer ends in 5 days</h4>
              <button onClick={() => handleBuyNow(w5, '$230', '5 days', 'Umbrella top')}>Buy now</button>
            </div>

            <div className='division'>
              <h1 className='h11'>Short dress</h1>
              <img src={w6} alt="" className='i1'/>
              <h1 className='hh2'>$320 only</h1>
              <h4 className='hh3'>Offer ends in 1 days</h4>
              <button onClick={() => handleBuyNow(w6, '$320', '1 days', 'Short dress')}>Buy now</button>
            </div>

            </section>

            <h1 className='hs1' id='sp'>Cosmetics Products</h1>


            <section className='makeup' id='m1'>

            <div className='division'>
              <h1 className='h11'>Lipstick</h1>
              <img src={a1} alt="" className='i1'/>
              <h1 className='hh2'>$491 only</h1>
              <h4 className='hh3'>Offer ends in 1 days</h4>
              <button onClick={() => handleBuyNow(a1, '$491', '1 days', 'Lipstick')}>Buy now</button>
            </div>

            <div className='division'>
              <h1 className='h11'>Eyeshadow Palette</h1>
              <img src={a2} alt="" className='i1'/>
              <h1 className='hh2'>$222 only</h1>
              <h4 className='hh3'>Offer ends in 2 days</h4>
              <button onClick={() => handleBuyNow(a2, '$222', '2 days', 'Eyeshadow Palette')}>Buy now</button>
            </div>

            <div className='division'>
              <h1 className='h11'>Compact Powder</h1>
              <img src={a3} alt="" className='i1'/>
              <h1 className='hh2'>$341 only</h1>
              <h4 className='hh3'>Offer ends in 4 days</h4>
              <button onClick={() => handleBuyNow(a3, '$341', '4 days', 'Compact Powder')}>Buy now</button>
            </div>

            <div className='division'>
              <h1 className='h11'>Brushes</h1>
              <img src={a4} alt="" className='i1'/>
              <h1 className='hh2'>$261 only</h1>
              <h4 className='hh3'>Offer ends in 1 days</h4>
              <button onClick={() => handleBuyNow(a4, '$261', '1 days', 'Brushes')}>Buy now</button>
            </div>

            <div className='division'>
              <h1 className='h11'>Lashes</h1>
              <img src={a5} alt="" className='i1'/>
              <h1 className='hh2'>$165 only</h1>
              <h4 className='hh3'>Offer ends in today days</h4>
              <button onClick={() => handleBuyNow(a5, '$165', '1 hour', 'Lashes')}>Buy now</button>
            </div>

            <div className='division'>
              <h1 className='h11'>Nail Polish</h1>
              <img src={a6} alt="" className='i1'/>
              <h1 className='hh2'>$203 only</h1>
              <h4 className='hh3'>Offer ends in 6 days</h4>
              <button onClick={() => handleBuyNow(a6, '$203', '6 days', 'Nail Polish')}>Buy now</button>
            </div>
            
            </section> 
        </div>
    );
};
export default More;




function handleBuyNow()
{
  navigate('/Buy', { state: { image, cost, offerDays, name } });
};

<button onClick={() => handleBuyNow()}>
  Buy now
</button>