import React from 'react';
import { useParams } from 'react-router-dom';
import useFirestoreFilter from '../utils/useFirestoreFilter';
import Loader from '../components/Loader/Loader';
import BookCardDetail from '../components/BookCard/BookCardDetail';

const DetailView = () => {
  
  const bookParam = useParams();
  const { bookId } = bookParam;
  const filtro = { comp1:'name', cond: '==', comp2: bookId };
  const [ data, loading ] = useFirestoreFilter('Books', filtro);

  return (
    <>
      { 
        loading ? (<Loader />) : ( data.map((element, index)=>{return <BookCardDetail title={element.name} key={index} />}) ) 
      }
    </>
  );
};

export default DetailView;