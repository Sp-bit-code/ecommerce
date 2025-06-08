// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Hero.css';
// import free_shipping from '../Assets/free_shipping.png';
// import easy_return from '../Assets/easy_return.png';
// import secure_payments from '../Assets/secure_payment.png';
// import arrow_icon from '../Assets/arrow.png';
// import bg_image from '../Assets/bg1.png';
// import shoe_image from '../Assets/shoes.png';




// const Hero = () => {
//   const navigate = useNavigate();

//   const handleShopNow = () => {
//     navigate('/womens');
//   };

//   return (
//     <div className="hero">
//       <div className="hero-left">
//         <h2>Welcome to Our Store</h2>
//         <h1>Discover New Collections</h1>
//         <p>Explore the latest trends designed for everyone.</p>
//         <div className="hero-buttons">
//           <button className="cta-primary" onClick={handleShopNow}>
//             Shop Now
//           </button>
//           <button className="cta-secondary">
//             Learn More <img src={arrow_icon} alt="arrow icon" />
//           </button>
//         </div>
//         <div className="hero-features">
//           <div className="feature">
//             <img src={free_shipping} alt="feature icon" />
//             <p>Free Shipping</p>
//           </div>
//           <div className="feature">
//             <img src={easy_return} alt="feature icon" />
//             <p>Easy Returns</p>
//           </div>
//           <div className="feature">
//             <img src={secure_payments} alt="feature icon" />
//             <p>Secure Payment</p>
//           </div>
//         </div>
//       </div>
//       <div className="hero-right">
//         <img src={hero_image} alt="Hero" />
//       </div>
//     </div>
//   );
// };

// export default Hero;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

// Importing images
import free_shipping from '../Assets/free_shipping.png';
import easy_return from '../Assets/easy_return.png';
import secure_payments from '../Assets/secure_payment.png';
import arrow_icon from '../Assets/arrow.png';
import bg_image from '../Assets/bg1.png';
import shoe_image from '../Assets/shoes.png';

const Hero = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/womens');
  };

  return (
    <div className="hero" style={{ backgroundImage: `url(${bg_image})` }}>
      <div className="hero-left">
        <h2>Welcome to Our Store</h2>
        <h1>Discover New Collections</h1>
        <p>Explore the latest trends designed for everyone.</p>
        
        <div className="hero-buttons">
          <button className="cta-primary" onClick={handleShopNow}>
            Shop Now
          </button>
          <button className="cta-secondary">
            Learn More <img src={arrow_icon} alt="arrow icon" />
          </button>
        </div>

        <div className="hero-features">
          <div className="feature">
            <img src={free_shipping} alt="Free Shipping" />
            <p>Free Shipping</p>
          </div>
          <div className="feature">
            <img src={easy_return} alt="Easy Returns" />
            <p>Easy Returns</p>
          </div>
          <div className="feature">
            <img src={secure_payments} alt="Secure Payments" />
            <p>Secure Payment</p>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <img src={shoe_image} alt="Hero Shoes" />
      </div>
    </div>
  );
};

export default Hero;
