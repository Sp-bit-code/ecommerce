import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import start_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  const [selectedSize, setSelectedSize] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }
    addToCart(product.id);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <>
      {showToast && <div className="toast-message">✔ Item added to cart</div>}

      <div className="productdisplay">
        <div className="productdisplay-main-img">
          <img src={product.image} alt="Product" />
        </div>

        <div className="productdisplay-left">
          <div className="productdisplay-img-list">
            <img src={product.image} alt="Product" />
            <img src={product.image} alt="Product" />
            <img src={product.image} alt="Product" />
          </div>
        </div>

        <div className="productdisplay-right">
          <h1>{product.name}</h1>

          <div className="productdisplay-right-star">
            <img src={start_icon} alt="Star" />
            <img src={start_icon} alt="Star" />
            <img src={start_icon} alt="Star" />
            <img src={start_icon} alt="Star" />
            <img src={star_dull_icon} alt="Star" />
            <p>(15 Reviews)</p>
          </div>

          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
              ${product.old_price}
            </div>
            <div className="productdisplay-right-price-new">
              ${product.new_price}
            </div>
          </div>

          <div className="productdisplay-right-description">
            <p>{product.description}</p>
          </div>

          <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <div
                  key={size}
                  className={selectedSize === size ? "selected" : ""}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          <button onClick={handleAddToCart}>Add to Cart</button>

          <p className="productdisplay-right-category">
            <span>Category: {product.category}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
