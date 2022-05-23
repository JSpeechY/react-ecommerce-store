import styles from "./ProductCard.module.scss";
import { Button } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const ProductCard = ({ sauce }) => {
    const { addItem } = useContext(CartContext);

    return (
        <div className={styles.ProductCard}>
            <img
                className={styles.ProductCard_Image}
                src={sauce.Image}
                alt=""
            />
            <p>{sauce.Name}</p>
            <p>${parseFloat(sauce.Price).toFixed(2)}</p>
            <Button variant="dark" onClick={() => addItem(sauce)}>
                Add Item to Cart
            </Button>
        </div>
    );
};

export default ProductCard;
