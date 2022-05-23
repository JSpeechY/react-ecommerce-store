import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const findInCart = (newItem, cart) => {
    return cart.find((item) => {
        return item.id === newItem.id;
    });
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {}, [cart]);

    const addItem = (item) => {
        const tmp = JSON.parse(JSON.stringify(item));
        const foundItem = findInCart(tmp, cart);

        console.log(foundItem);

        if (!foundItem) {
            tmp.number = 1;
            setCart([...cart, tmp]);
            return;
        }

        console.log(foundItem.number, "number");
        console.log(foundItem.Quantity, "Quantity");
        if (foundItem.number == foundItem.Quantity) {
            alert(
                `There is no more than ${foundItem.Quantity} in stock for - ${foundItem.Name}`
            );
            return;
        }

        foundItem.number += 1;

        setCart([...cart]);
    };

    const data = { cart, addItem };

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
