import React from 'react';
import { MdErrorOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const Error = () => {
     const home = useNavigate();

     const handelHomeBtn = () =>{
        home('/')
     }

    return (
        <div className='flex justify-center items-center min-h-screen '>
            <div className='flex flex-col justify-center items-center border bg-purple-100 p-3 md:py-20 md:px-40 rounded-3xl shadow-2xl'>
                <MdErrorOutline className='text-9xl'></MdErrorOutline>
                <h1 className='text-9xl'>404</h1>
                <p className='text-xl'>Page not found !!</p>
                <button className='btn mt-7 btn-info' onClick={handelHomeBtn}>Go to Home</button>
            </div>
        </div>
    );
};

export default Error;