import React, { useEffect, useState } from 'react';
import Gadget from '../Gadget/Gadget';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

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
            <h1 className=' text-2xl md:text-4xl font-bold text-center mb-12'>Explore Cutting-Edge Gadgets</h1>
            <div className=' flex flex-col md:flex-row items-center md:items-start gap-6'>
                <div className='lg:w-1/5 w-48'>
                    <div className='border rounded-2xl bg-white p-6 flex flex-col  gap-6'>
                        <NavLink to="/" className={`btn  xl:text-lg rounded-full flex justify-start ${pathname === "/" ? "bg-purple-600 text-white" : ""}`}>All Product</NavLink>
                        <NavLink to="/category/laptop" className={`btn  xl:text-lg rounded-full flex justify-start ${pathname === "/category/laptop" ? "bg-purple-600 text-white" : ""}`}>Laptops</NavLink>
                        <NavLink to="/category/phone" className={`btn  xl:text-lg rounded-full flex justify-start ${pathname === "/category/phone" ? "bg-purple-600 text-white" : ""}`}>Phones</NavLink>
                        <NavLink to="/category/smart-watch" className={`btn  xl:text-lg rounded-full flex justify-start ${pathname === "/category/smart-watch" ? "bg-purple-600 text-white" : ""}`}>Smart Watch</NavLink>
                        <NavLink to="/category/accessories" className={`btn  xl:text-lg rounded-full flex justify-start ${pathname === "/category/accessories" ? "bg-purple-600 text-white" : ""}`}>Accessories</NavLink>
                        <NavLink to="/category/chargers" className={`btn  xl:text-lg rounded-full flex justify-start ${pathname === "/category/chargers" ? "bg-purple-600 text-white" : ""}`}>Chargers</NavLink>
                        <NavLink to="/category/power-banks" className={`btn  xl:text-lg rounded-full flex justify-start ${pathname === "/category/power-banks" ? "bg-purple-600 text-white" : ""}`}>Power Bank</NavLink>
                        <NavLink to="/category/tablet" className={`btn  xl:text-lg rounded-full flex justify-start ${pathname === "/category/tablet" ? "bg-purple-600 text-white" : ""}`}>Tablet</NavLink>
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