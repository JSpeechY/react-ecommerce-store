import styles from "./App.module.scss";
import Home from "./containers/Home";
import { useState, useEffect } from "react";
import HotSaucesPage from "./containers/HotSaucesPage/HotSaucesPage";
import HotSauceCreatePage from "./containers/HotSauceCreatePage/HotSauceCreatePage";
import NavFunc from "./containers/NavFunc";
import CarouselFunc from "./containers/Carousel";

function App() {
    return (
        <div className={styles.App}>
            <NavFunc />
            <CarouselFunc />
            <HotSaucesPage />
            <HotSauceCreatePage />
            <Home />
        </div>
    );
}

export default App;
