import React from 'react';

const Cart = ({ product }) => {
  
  const { product_image, product_title, description, price } = product
  return (
    <div>
      <div className='border rounded-2xl p-8 flex justify-between bg-white '>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className=" h-32   ">
              <img src={product_image} alt="" className='rounded-xl' />
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div className="font-bold text-2xl">{product_title}</div>
            <div className="opacity-50">{description}</div>
            <div className="text-xl font-semibold">Price: ${price}</div>
          </div>
        </div>
        <div className='flex flex-col items-start'>
          <button className="btn btn-circle btn-sm btn-outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart; 