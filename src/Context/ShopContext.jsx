// import React, { createContext, useState } from "react";
// import all_product from '../Components/Assets/all_product';

// export const ShopContext = createContext(null); 

// const getDefaultCart = () => {
//   let cart = {};
//   for (let i = 0; i < all_product.length; i++) {
//     cart[all_product[i].id] = 0; // use product ID, not index
//   }
//   return cart;
// };

// const ShopContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState(getDefaultCart());

//   const addToCart = (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//   };

//   const updateCartItemCount = (itemId, count) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: count }));
//   };

//   const getTotalCartAmount = () => {
//     let total = 0;
//     for (const id in cartItems) {
//       if (cartItems[id] > 0) {
//         const product = all_product.find((p) => p.id === Number(id));
//         total += product.new_price * cartItems[id];
//       }
//     }
//     return total;
//   };

//   const getTotalCartItems = () => {
//     return Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);
//   };

//   const contextValue = {
//     getTotalCartItems,
//     getTotalCartAmount,
//     all_product,
//     cartItems,
//     addToCart,
//     removeFromCart,
//     updateCartItemCount,
//   };

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;
// import React, { createContext, useState } from "react";
// import all_product from '../Components/Assets/all_product';

// export const ShopContext = createContext(null); 

// const getDefaultCart = () => {
//   let cart = {};
//   for (let i = 0; i < all_product.length; i++) {
//     cart[all_product[i].id] = 0; 
//   }
//   return cart;
// };

// const ShopContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState(getDefaultCart());

//   const addToCart = (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//   };

//   const updateCartItemCount = (itemId, count) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: count }));
//   };

//   const getTotalCartAmount = () => {
//     let total = 0;
//     for (const id in cartItems) {
//       if (cartItems[id] > 0) {
//         const product = all_product.find((p) => p.id === Number(id));
//         total += product.new_price * cartItems[id];
//       }
//     }
//     return total;
//   };

//   const getTotalCartItems = () => {
//     return Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);
//   };

//   const contextValue = {
//     getTotalCartItems,
//     getTotalCartAmount,
//     all_product,
//     cartItems,
//     addToCart,
//     removeFromCart,
//     updateCartItemCount,
//   };

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;


import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const updateCartItemCount = (itemId, count) => {
        setCartItems((prev) => ({ ...prev, [itemId]: count }));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    };

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    };

    const contextValue = {
        getTotalCartItems,
        getTotalCartAmount,
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemCount, // Added here
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
