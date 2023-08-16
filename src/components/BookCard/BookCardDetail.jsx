import React from 'react';

const BookCardDetail = ({ title }) => {
  return (
    <>
      <div className="container margin-nav">
        <h1> {title} </h1>
      </div>
    </>
  );
};

export default BookCardDetail;