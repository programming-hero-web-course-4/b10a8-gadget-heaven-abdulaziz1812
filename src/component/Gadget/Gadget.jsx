import React from 'react';

const Gadget = ({ gadget }) => {
    
    const { product_title, price,product_image } = gadget

    return (
        <div>
            <div className="card bg-base-100 w-60 md:w-60 xl:w-80 shadow-xl ">
                <figure className=" h-44 px-5 pt-5">
                    <img
                        src={product_image}
                        alt={product_title}
                        className="rounded-xl h-full w-full object-cover" />
                </figure>
                <div className="card-body text-center md:text-start md:items-start items-center pt-6 pb-5 px-5">
                    <h2 className="lg: xl:text-2xl font-semibold">{product_title}</h2>
                    <p>Price: ${price}</p>
                    <div className="card-actions">
                        <button className="btn btn-outline hover:bg-purple-600 border-purple-600 rounded-full">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gadget;