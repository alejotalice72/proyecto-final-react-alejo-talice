import React, { useContext } from 'react';
import { GeneralContext } from '../context/GeneralContext';

const AddBooksView = () => {
  
  const { sendData } = useContext(GeneralContext);
  const information = {
    cantidad: 1,
    category: 'terror',
    description: '',
    img: '',
    name: 'Frankenstein',
    price: 4000,
    stock: 3,
  };
  const agregarData = () => {

    sendData('Books', information);
  };

  return (
    <>
      <div className="container text-center margin-nav">
        <button onClick={()=>{agregarData()}}>Cargar datos</button>
      </div>
    </>
  );
};

export default AddBooksView;