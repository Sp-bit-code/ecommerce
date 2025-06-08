// import React from 'react'
// import './Offers.css'
// import exclusive_image from '../Assets/exclusive_image.png'

// const Offers = () => {
//   return (
//     <div className='offers'>
//       <div className="offers-left">
//         <h1>Exclusive</h1>
//         <h1>Offers For You</h1>
//         <p>ONLY ON BEST SELLERS PRODUCT</p>
//         <button>Check Now!</button>
//       </div>
//       <div className="offers-right">
//         <img src={exclusive_image} alt="" />
//       </div>
//     </div>
//   )
// }

// export default Offers
import React, { useState } from 'react';
import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.png';

const Offers = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000); // Hide after 3 seconds
  };

  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCT</p>
        <button onClick={handleClick}>Check Now!</button>
        {showMessage && <div className="offer-message">🎉 Currently no offers are available</div>}
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="Exclusive Offer" />
      </div>
    </div>
  );
};

export default Offers;

