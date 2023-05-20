import React, { memo } from 'react';
import useFirestore from '../utils/useFirestore';
import BookCard from '../components/BookCard/BookCard';

const MainView = () => {
  
  const [ data, loading ] = useFirestore('Books');
  
  return (
    <>
      <div className="container text-center margin-nav order-book">
      {
     
        loading ? (<div className="position-absolute top-50 start-50 translate-middle"><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>) : (data.map((element, index) => { return <BookCard title={element.name} img={element.img} price={element.price} key={index} item={element} />; }))

      }
      </div>
    </>
  );
};

export default memo(MainView);