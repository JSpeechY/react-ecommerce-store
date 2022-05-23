import { useContext } from "react";
import { CartContext, CartProvider } from "../../context/CartProvider";
import styles from "./Cart.module.scss";

const Cart = () => {
    const { cart } = useContext(CartContext);
    return (
        <div className={styles.Cart}>
            <h1>Cart List:</h1>
            <ul>
                {cart.map((cart, index) => (
                    <p key={index}>
                        {cart.Name} - {cart.number} - $
                        {(cart.Price * cart.number).toFixed(2)}
                    </p>
                ))}

                <h3>
                    Cart Total: $
                    {cart
                        .reduce(
                            (acc, cart) =>
                                acc + cart.Price.toFixed(2) * cart.number,
                            0
                        )
                        .toFixed(2)}
                </h3>
            </ul>
        </div>
    );
};

export default Cart;
