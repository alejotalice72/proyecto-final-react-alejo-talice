import React, { useContext, useEffect, useState } from "react";
import { GeneralContext } from "../context/GeneralContext";

const AddBooksView = () => {
  const { sendData } = useContext(GeneralContext);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');
  const [stock, setStock] = useState();
  const [price, setPrice] = useState();
  const [information, setInformation] = useState({});

  useEffect(()=>{
    
    const informationUpdated = {
      name: name,
      category: category,
      description: description,
      img: img,
      stock: stock,
      price: price,
      cantidad: 1,
    };

    setInformation(informationUpdated);
  
  },[name, category, description, img, stock, price]);

  const handleSubmit = (event) => {
    event.preventDefault();
    sendData("Books", information);
  };

  return (
    <>
      <div className="container margin-nav">
        <form onSubmit={handleSubmit}>
          <div className="row">

            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  defaultValue={name}
                  onChange={(nameInput)=> setName(nameInput.target.value)}
                  id="name"
                  type="input"
                  className="form-control"
                  required
                />
              </div>
            </div>

            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Category:
                </label>
                <select id="category" className="form-select reset-color" onChange={(categoryInput)=>setCategory(categoryInput.target.value)} required>
                  <option value='aventura'> Aventura </option>
                  <option value='terror'> Terror </option>
                  <option value='ciencia-ficcion'> Ciencia Ficcion </option>
                  <option value='misterio'> Misterio </option>
                </select>
              </div>
            </div>

            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description:
                </label>
                <input
                  onChange={(descriptionInput)=>setDescription(descriptionInput.target.value)}
                  type="input"
                  className="form-control"
                  id="description"
                  required
                />
              </div>
            </div>

            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="img" className="form-label">
                  Image:
                </label>
                <input
                  onChange={(imgInput)=>setImg(imgInput.target.value)}
                  type="input"
                  className="form-control"
                  id="img"
                  required
                />
              </div>
            </div>

            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="stock" className="form-label">
                  Stock:
                </label>
                <input
                  onChange={(stockInput)=>setStock(stockInput.target.value)}
                  type="number"
                  className="form-control"
                  id="stock"
                  required
                />
              </div>
            </div>

            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price:
                </label>
                <input
                  onChange={(priceInput)=>setPrice(priceInput.target.value)}
                  type="number"
                  className="form-control"
                  id="price"
                  required
                />
              </div>
            </div>

            <div className="col">
              <button type="submit" className="btn btn-primary">
                Subir datos
              </button>
            </div>

          </div>
        </form>
      </div>
    </>
  );
};

export default AddBooksView;