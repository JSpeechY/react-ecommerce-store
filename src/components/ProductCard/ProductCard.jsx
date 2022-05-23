import styles from "./ProductCard.module.scss";

const ProductCard = ({ sauce }) => {
    return (
        <div className={styles.ProductCard}>
            <img
                className={styles.ProductCard_Image}
                src={sauce.Image}
                alt=""
            />
            <p>{sauce.Name}</p>
            <p>{sauce.Price}</p>
        </div>
    );
};

export default ProductCard;
