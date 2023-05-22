import React, { memo } from 'react';
import useFirestore from '../utils/useFirestore';
import BookCard from '../components/BookCard/BookCard';
import Loader from '../components/Loader/Loader';

const MainView = () => {
  
  const [ data, loading ] = useFirestore('Books');
  
  return (
    <>
      <div className="container text-center margin-nav order-book">
      {
     
        loading ? (<Loader />) : (data.map((element, index) => { return <BookCard title={element.name} img={element.img} price={element.price} key={index} item={element} />; }))

      }
      </div>
    </>
  );
};

export default memo(MainView);