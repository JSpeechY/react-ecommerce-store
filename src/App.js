import styles from "./App.module.scss";
import Home from "./containers/Home";
import { useState, useEffect } from "react";
import HotSaucesPage from "./containers/HotSaucesPage/HotSaucesPage";
import HotSauceCreatePage from "./containers/HotSauceCreatePage/HotSauceCreatePage";
import NavFunc from "./containers/NavFunc";
import CarouselFunc from "./containers/Carousel";
import { CartProvider } from "./context/CartProvider";
import Cart from "./components/Cart";

function App() {
    return (
        <div className={styles.App}>
            <CartProvider>
                <NavFunc />
                <CarouselFunc />
                <HotSaucesPage />
                <Cart />
                <Home />
            </CartProvider>
        </div>
    );
}

export default App;
