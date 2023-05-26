import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import BookCard from '../components/BookCard/BookCard';
import useFirestoreFilter from '../utils/useFirestoreFilter';

const FilteredView = () => {
  
  const categoryParam = useParams();
  const { filterCategory } = categoryParam;
  const filtro = { comp1:'category', cond: '==', comp2: filterCategory };
  const [ data, loading ] = useFirestoreFilter('Books', filtro);

  return (
    <>
      <div className="container text-center margin-nav">
        
        <h4 className='text-start'>{filterCategory.toUpperCase()}:</h4>
        
        <div className="order-book">

          { 
            loading ? (<Loader />) : (data.map((element, index) => { return <BookCard title={element.name} img={element.img} price={element.price} key={index} item={element} />; })) 
          }

        </div>
      </div>
    </>
  );
};

export default FilteredView; 