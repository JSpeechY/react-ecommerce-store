import firestore from "../config/firebase";

const cleanDocument = (doc) => ({ id: doc.id, ...doc.data() });

export const getAllHotSauces = async () => {
    const raw = await firestore.collection("Hot Sauces").get();
    console.log(raw); // QuerySnapshot
    console.log(raw.docs); // [QueryDocumentSnapshot]
    console.log(raw.docs[0].id, raw.docs[0].data()); // string, butterfly object

    const cleaned = raw.docs.map(cleanDocument);
    return cleaned;
};

export const createProductHotSauce = async (data) => {
    await firestore.collection("Hot Sauces").add(data);
};

export default getAllHotSauces;
