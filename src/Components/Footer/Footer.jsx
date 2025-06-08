// import React from "react";
// import "./Footer.css";
// import footer_logo from "../Assets/logshoes.png";
// import background_img from "../Assets/loging_bg.png";

// import linkedin_icon from "../Assets/8134637_link_linkedin_icon (1).png";
// import github_icon from "../Assets/291716_github_logo_social network_social_icon (1).png";
// import instagram_icon from "../Assets/5335781_camera_instagram_social media_instagram logo_icon.png";

// const Footer = () => {
//   return (
//     <div className="footer-wrapper">
//       <div
//         className="footer"
//         style={{
//           backgroundImage: `url(${background_img})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <div className="footer-logo">
//           <img src={footer_logo} alt="Footer Logo" />
//           <p className="footer-gradient-text">Follow Us</p>
//         </div>

//         <div className="footer-social-icon">
//           <div className="footer-icons-container">
//             <img src={linkedin_icon} alt="LinkedIn" />
//             <p>LinkedIn</p>
//           </div>
//           <div className="footer-icons-container">
//             <img src={github_icon} alt="GitHub" />
//             <p>GitHub</p>
//           </div>
//           <div className="footer-icons-container">
//             <img src={instagram_icon} alt="Instagram" />
//             <p>Instagram</p>
//           </div>
//         </div>

//         <div className="footer-copyright">
//           <hr />
//           <p>Copyright © 2024 - All Rights Reserved</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

















import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/36682.png"; // Your logo
import shoe_image from "../Assets/logshoes.png"; // Your shoe image
import background_img from "../Assets/loging_bg.png";

import linkedin_icon from "../Assets/8134637_link_linkedin_icon (1).png";
import github_icon from "../Assets/291716_github_logo_social network_social_icon (1).png";
import instagram_icon from "../Assets/5335781_camera_instagram_social media_instagram logo_icon.png";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div
        className="footer"
        style={{
          backgroundImage: `url(${background_img})`,
        }}
      >
        <div className="footer-left-image">
          <img src={shoe_image} alt="Shoe" />
        </div>

        <div className="footer-content">
          <div className="footer-logo">
            <img src={footer_logo} alt="Footer Logo" />
            <p className="footer-gradient-text">Follow Us</p>
          </div>

<div className="footer-social-icon">
  <a href="https://www.linkedin.com/in/sparsh-srivastava-621882289/" target="_blank" rel="noopener noreferrer" className="footer-icons-container">
    <img src={linkedin_icon} alt="LinkedIn" />
    <p>LinkedIn</p>
  </a>

  <a href="https://github.com/Sp-bit-code" target="_blank" rel="noopener noreferrer" className="footer-icons-container">
    <img src={github_icon} alt="GitHub" />
    <p>GitHub</p>
  </a>

  <a href="https://www.instagram.com/sp_02arsh_/" target="_blank" rel="noopener noreferrer" className="footer-icons-container">
    <img src={instagram_icon} alt="Instagram" />
    <p>Instagram</p>
  </a>
</div>


          <div className="footer-copyright">
            <hr />
            <p>Copyright © 2024 - All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
