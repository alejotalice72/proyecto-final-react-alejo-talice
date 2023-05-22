import { doc, getDoc, collection , getDocs, getFirestore, where, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const useFirestore = (nameCollection, filters, itemId) => {
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        
        const db = getFirestore();
        
        const createFilter = () => {
            const { comp1, cond, comp2 } = filters;
            return where(comp1, cond , comp2);
        };
        if (filters) {
            // Acceder a una coleccion con filtros
            const q = query(
                collection(db, nameCollection),
                createFilter()
            );
            getDocs(q).then((snapshot) => {
                setData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
                setLoading(false);
            });
            
        } else if (itemId) {
            // Acceder a un item
            const biciRef = doc(db, nameCollection, itemId);
            getDoc(biciRef).then((snapshot) => {
                if (snapshot.exists()) {
                    setData({ id: snapshot.id, ...snapshot.data() });
                    setLoading(false);
                }
            });
        } else {
            // Acceder a una coleccion
            const refCollection = collection(db, nameCollection);
            getDocs(refCollection).then((snapshot) => {
                setData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
                setLoading(false);
            });
        } 

    }, [nameCollection, filters, itemId]);

    return [ data, loading ];
};

export default useFirestore;