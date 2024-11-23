import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PiSliders } from "react-icons/pi";
import { useLoaderData, useNavigate } from 'react-router-dom';
import { getStoredCartList, getStoredWishList } from '../../utility/addToDb';
import Cart from '../Cart/Cart';
import Wishlist from '../WishList/Wishlist';
import image from '../../assets/Group.png'
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Dashboard = () => {
    const [showSection, setShowSection] = useState(true);
    const allProduct = useLoaderData();
    const [cartList, setCartList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const navigate = useNavigate();

    const handelHome = () => {
        navigate('/')
    };


    useEffect(() => {
        const storedCartList = getStoredCartList();

        const cartList = allProduct.filter(product => storedCartList.includes(product.product_id))
        setCartList(cartList);

        const storedWishList = getStoredWishList();

        const wishList = allProduct.filter(product => storedWishList.includes(product.product_id))
        setWishList(wishList);
    }, []);



    let totalPrice = 0;
    cartList.forEach(product => {
        totalPrice = totalPrice + product.price
    });



    const handleSortPrice = () => {
        const sortedPrice = [...cartList].sort((a, b) => b.price - a.price)
        setCartList(sortedPrice)
    };

    const handlePurchase = () => {
        document.getElementById('my_modal_1').showModal()
        localStorage.clear()
    };

    return (
        <HelmetProvider>
        <div>
            <Helmet>
                <title>Dashboard | Gadget Heaven</title>
            </Helmet>
            <div>
                <ToastContainer />
                <div className='bg-purple-600 -mt-6'>
                    <div className='md:w-8/12 mx-auto text-white text-center pt-8 pb-8' >
                        <h1 className='font-bold text-3xl mb-4'>Dashboard</h1>
                        <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                        <div className='mt-8 flex justify-center gap-8'>
                            <button onClick={() => setShowSection(true)} className={`btn rounded-full px-16 font-bold ${showSection ? "text-purple-600" : "text-white bg-purple-600"}`}  >Cart</button>
                            <button onClick={() => setShowSection(false)} className={`btn rounded-full px-16 font-bold ${!showSection ? "text-purple-600" : "text-white bg-purple-600"}`} >Wishlist</button>
                        </div>
                    </div>
                </div>
                <div className='w-10/12 mx-auto'>
                    <div className='flex items-center justify-between mt-12 h-14'>
                        <div className='flex '>
                            <h3 className={`text-2xl font-bold ${!showSection ? "hidden" : ""} `}>Cart</h3>
                            <h3 className={`text-2xl font-bold ${showSection ? "hidden" : ""} `}>WishList</h3>
                        </div>
                        <div className='flex items-center gap-4'>
                            <h3 className={`text-2xl font-bold ${!showSection ? "hidden" : ""}`}>Total cost: {totalPrice}</h3>
                            <button onClick={handleSortPrice} className={`btn btn-outline hover:bg-purple-600 border-purple-600 rounded-full text-purple-600 ${!showSection ? "hidden" : ""}`} >Sort by Price <PiSliders className='rotate-180 text-2xl' /></button>
                            <button className={`btn rounded-full flex justify-start bg-purple-600 text-white ${totalPrice <= 0 ? "btn-disabled" : ""} ${!showSection ? "hidden" : ""}`} onClick={handlePurchase}>Purchase</button>
                        </div>
                    </div>
                    <div>
                        <div className={`space-y-6 mt-8 ${!showSection ? "hidden" : ""}`}>
                            {
                                cartList.map(product => <Cart key={product.product_id} product={product} ></Cart>)
                            }

                        </div>
                        <div className={`space-y-6 mt-8 ${showSection ? "hidden" : ""}`}>
                            {
                                wishList.map(product => <Wishlist key={product.product_id} product={product} ></Wishlist>)
                            }
                        </div>
                    </div>
                    <div>
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn hidden" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box flex justify-center items-center flex-col">
                                <img className='w-16 pb-6' src={image} alt="ok" />
                                <h3 className="text-2xl font-bold">Payment Successfully</h3>
                                <p className="py-4">Thanks for purchasing.
                                </p>
                                <p> Total: {totalPrice}</p>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button onClick={handelHome} className="btn rounded-full ">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>

                    </div>

                </div>

            </div>
        </div>
        </HelmetProvider>
    );
};

export default Dashboard;