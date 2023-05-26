import { collection , getDocs, getFirestore, where, query } from 'firebase/firestore';
import { useCallback, useEffect, useState } from 'react';

const useFirestoreFilter = (nameCollection, filters) => {
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { comp1, cond, comp2 } = filters;
    
    const createFilter = useCallback(() => {
        return where(comp1, cond , comp2);
    },[comp1, cond, comp2]);
    
    useEffect(()=>{
        
        const db = getFirestore();
        // Acceder a una coleccion con filtros
        const q = query(collection(db, nameCollection), createFilter());
        getDocs(q).then((snapshot) => {
            setData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            setLoading(false);
        });

    },[nameCollection, createFilter]);

    return [ data, loading ];
};

export default useFirestoreFilter;