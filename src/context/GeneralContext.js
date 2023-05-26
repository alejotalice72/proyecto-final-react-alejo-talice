import { createContext } from "react";
import { addDoc, collection, getFirestore, doc, updateDoc } from 'firebase/firestore';

export const GeneralContext = createContext();

const GeneralProvider = ({ children }) => {

    const db = getFirestore(); 
    
    const sendData = (nameCollection, dataToAdd) => {
        
        const selectCollection = collection(db, nameCollection);
        addDoc(selectCollection, dataToAdd).then(({ id }) => {
            alert('Agregado exitosamente');
            console.log(id);
        });
    
    };

    const updateData = (nameCollection, itemId, dataToUpdate) => {

        const itemInformation = doc(db, nameCollection, itemId);
        updateDoc(itemInformation, dataToUpdate);
    
    };  

    return (
        <GeneralContext.Provider value={{ sendData, updateData }}> { children } </GeneralContext.Provider>
    );

};

export default GeneralProvider;