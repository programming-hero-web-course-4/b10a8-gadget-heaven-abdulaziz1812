import React, { useEffect, useState } from 'react';
import Categories from '../Categories/Categories';
import Gadget from '../Gadget/Gadget';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';



const Gadgets = () => {

    const [gadgets, setGadgets] = useState([])
    const { pathname } = useLocation();


    useEffect(() => {
        fetch('./gadgetsData.json')
            .then(res => res.json())
            .then(data => setGadgets(data))


    }, [])

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className=' text-2xl md:text-4xl font-bold text-center'>Explore Cutting-Edge Gadgets</h1>
            <p>{gadgets.length}</p>
            <div className=' flex flex-col md:flex-row items-center md:items-start gap-6'>
                <div className='lg:w-1/5 w-48'>
                    <div className='border rounded-2xl bg-white p-6 flex flex-col  gap-6'>
                        <NavLink to="/" className="btn  xl:text-lg rounded-full flex justify-start">All Product</NavLink>
                        <NavLink to="/category/laptop" className="btn  xl:text-lg rounded-full flex justify-start">Laptops</NavLink>
                        <NavLink to="/category/phone" className="btn  xl:text-lg rounded-full flex justify-start">Phones</NavLink>
                        <NavLink to="/category/smart-watch" className="btn  xl:text-lg rounded-full flex justify-start">Smart Watch</NavLink>
                        <NavLink to="/category/accessories" className="btn  xl:text-lg rounded-full flex justify-start">Accessories</NavLink>




                    </div>
                </div>
                <div className={`${pathname === "/" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : ""} `}>

                    {pathname === "/" ?
                        (gadgets.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>))
                        : (<Outlet></Outlet>)
                    }


                </div>
            </div>
        </div>

    );
};

export default Gadgets;