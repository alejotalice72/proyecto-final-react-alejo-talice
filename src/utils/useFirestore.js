import { doc, getDoc, collection , getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const useFirestore = (nameCollection, itemId, filters) => {
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        
        const db = getFirestore();
        
        if (itemId) {
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

    }, [nameCollection, itemId, filters]);

    return [ data, loading ];
};

export default useFirestore;