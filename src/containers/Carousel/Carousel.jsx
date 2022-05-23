import Carousel from "react-bootstrap/Carousel";
import grumpygary from "./../../assets/grumpygary.png";
import firstwefeast from "./../../assets/firstwefeast.png";
import melbournehotsauce from "./../../assets/melbournehotsauce.png";
import styles from "./Carousel.module.scss";

const CarouselFunc = () => {
    return (
        <div>
            <Carousel className={styles.Carousel}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={grumpygary}
                        alt="The Grumpy Gary Hot Sauce Selection"
                    />
                    <Carousel.Caption>
                        <h3>The Grumpy Garys Selection</h3>
                        <p>
                            100% Australian Hot Sauces from a family owned
                            manufacturer
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={firstwefeast}
                        alt="The Hot Ones Selection from First We Feast"
                    />

                    <Carousel.Caption>
                        <h3>The Hot Ones Selection</h3>
                        <p>
                            Sauces from the Hot Ones interviews on First We
                            Feast
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={melbournehotsauce}
                        alt="Melbourne made Hot Sauce from Melbourne Hot Sauce"
                    />

                    <Carousel.Caption>
                        <h3>Melbourne Hot Sauce</h3>
                        <p>Experience the best of Melbourne made Hot Sauces</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselFunc;
