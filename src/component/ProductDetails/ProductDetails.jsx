import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { PiShoppingCartLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToStoredCartList, addToStoredWishList } from '../../utility/addToDb';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ReactStars from "react-rating-stars-component";



const ProductDetails = () => {
    const { product_id } = useParams();
    const data = useLoaderData();

    const product = data.find(product => product.product_id === product_id);
    const { product_image, price, product_title, availability, description, specifications, rating } = product;

    const [disable, setDisable] = useState(false);

    const star = {
        size: 30,
        value: rating || 0,
        edit: false
    };


    const handleAddToCart = (id) => {
        addToStoredCartList(id)
        toast.success('Item Added to Cart', {
            position: "top-center",
        });
    };

    const handelWishList = (id) => {
        addToStoredWishList(id)

        toast.success('Item Added to Wishlist', {
            position: "top-center",
        });
        setDisable(true)

    };

    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>Product Details | Gadget Heaven</title>
                </Helmet>
                <ToastContainer />
                <div className='bg-purple-600 -mt-6'>
                    <div className='md:w-8/12 mx-auto text-white text-center pt-8 pb-8 md:pb-60' >
                        <h1 className='font-bold text-3xl mb-4'>Product Details</h1>
                        <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    </div>
                </div>
                <div className='w-4/5 border rounded-3xl bg-white mx-auto md:flex p-8 gap-8 mt-4 md:-mt-52'>
                    <div className='flex justify-center items-center'>
                        <img className='w-96 rounded-2xl ' src={product_image} alt={product_id} />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-2xl font-semibold'>{product_title}</h3>
                        <p className='text-lg font-semibold'>Price: ${price}</p>
                        <button className="btn btn-sm bg-green-200 text-green-700 btn-outline border-green-700 rounded-full w-fit">{availability ? 'In Stock' : 'Out of Stock'}</button>
                        <p className='opacity-60'>{description}</p>
                        <p className='font-bold'>Specification:</p>
                        <ol className='list-decimal list-inside opacity-60'>
                            {specifications.map((spec, index) => <li key={index} className=''>{spec}</li>)}
                        </ol>
                        <div className='flex items-center '>
                            <p className='font-bold'>Rating

                            </p>
                            <img src="https://img.icons8.com/?size=48&id=8ggStxqyboK5&format=png" alt="" className=' h-4' />
                        </div>
                        <div className='flex items-center gap-4'>

                            <ReactStars {...star} />

                            <button className="btn btn-xs">{rating}</button>
                        </div>

                        <div className='flex gap-4 '>
                            <button onClick={() => handleAddToCart(product_id)} className="btn rounded-full flex justify-start bg-purple-600 text-white">
                                Add To Card
                                <PiShoppingCartLight className=' w-10 h-10 p-2  ' />
                            </button>

                            <button onClick={() => handelWishList(product_id)} className={`btn-ghost rounded-full ${disable ? "btn-disabled text-gray-300 bg-slate-200" : ""}`}><CiHeart className=' w-12 h-12 p-2 border rounded-full ' /></button>

                        </div>


                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default ProductDetails;