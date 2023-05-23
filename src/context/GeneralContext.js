import { createContext } from "react";
import { addDoc, collection, getFirestore } from 'firebase/firestore';

export const GeneralContext = createContext();

const GeneralProvider = ({ children }) => {

    const sendData = (nameCollection, dataToAdd) => {
    
        const db = getFirestore(); 
        const selectCollection = collection(db, nameCollection);
        addDoc(selectCollection, dataToAdd).then(({ id }) => console.log(id));
    
    };

    return (
        <GeneralContext.Provider value={{ sendData }}> { children } </GeneralContext.Provider>
    );

};

export default GeneralProvider;