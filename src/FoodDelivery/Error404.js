import React from 'react';
import errorImg from './assets/Error.gif';

const Error404 = () => {
  return (
    <div className='container text-center'>
      <h4 className='pt-3 text-danger'>Error 404</h4>
      <img src={errorImg} alt='Error404' className='w-50' />
    </div>
  );
};

export default Error404;