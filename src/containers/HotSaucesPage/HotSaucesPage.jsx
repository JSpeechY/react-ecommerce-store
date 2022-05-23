import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import getAllHotSauces from "../../services/hotsauces";
import styles from "./HotSaucesPage.module.scss";

const HotSaucesPage = () => {
    const [hotSauces, setHotSauce] = useState([]);

    useEffect(() => {
        (async () => {
            setHotSauce(await getAllHotSauces());
        })();
    }, []);

    return (
        <div className={styles.HotSaucesPage}>
            {hotSauces.length &&
                hotSauces.map((hotSauce, index) => {
                    return <ProductCard key={index} sauce={hotSauce} />;
                })}
        </div>
    );
};

export default HotSaucesPage;
