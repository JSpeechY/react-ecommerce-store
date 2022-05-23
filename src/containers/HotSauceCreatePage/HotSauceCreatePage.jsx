import React from "react";
import { createProductHotSauce } from "../../services/hotsauces";
import styles from "./HotSauceCreatePage.module.scss";

const HotSauceCreatePage = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData(e.target);

        let formObj = {};

        for (let key of form.keys()) {
            formObj[key] = form.get(key);
        }

        await createProductHotSauce(formObj);
        // create firestore function for saving objects in my Hot Sauces cllection

        e.target.reset();
    };

    return (
        <div className={styles.HotSauceCreatePage}>
            <div>
                <h2>Create a Hot Sauce Product</h2>
                <form
                    className={styles.HotSauceCreatePage_Form}
                    onSubmit={handleSubmit}
                >
                    <div>
                        <label htmlFor="Name">Product Name</label>
                        <input id="Name" name="Name" type="text" required />
                    </div>
                    <div>
                        <label htmlFor="Image">Image</label>
                        <input id="Image" name="Image" type="text" required />
                    </div>
                    <div>
                        <label htmlFor="Quantity">Quantity</label>
                        <input
                            id="Quantity"
                            name="Quantity"
                            type="text"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="Rating">Rating</label>
                        <input
                            id="Rating"
                            name="Rating"
                            type="number"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="Price">Price</label>
                        <input id="Price" name="Price" type="text" required />
                    </div>

                    <button type="submit">Submit Data</button>
                </form>
            </div>
        </div>
    );
};

export default HotSauceCreatePage;
