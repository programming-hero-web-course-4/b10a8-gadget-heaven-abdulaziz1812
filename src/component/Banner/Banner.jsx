import React from 'react';
import bannerImg from '../../assets/banner.jpg'
import { useNavigate } from 'react-router-dom';

const  Banner = () => {
    const dashboard = useNavigate()

    const handelShopNowBtn = () =>{
        dashboard('/dashboard')
    }

    return (
        <div className='w-[97%] mx-auto -m-24 mb-24'>
            <div className="hero bg-purple-600 place-items-start pt-28 md:min-h-[694px] rounded-[32px] pla">
                <div className="hero-content text-center mx-auto">
                    <div className="w-4/5" >
                        <h1 className=" text-3xl md:text-5xl font-bold text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="py-6 text-white">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <button className="btn rounded-[32px] text-purple-600 font-bold" onClick={handelShopNowBtn}>Shop Now</button>
                    </div>
                </div>
            </div>
            <div>
                <div className='md:-mt-52 lg:-mt-64 xl:-mt-72 hidden md:block' >
                    <div className='mx-auto border-2 rounded-[32px] p-6 bg-white bg-opacity-20  w-3/4 sm:h-[400px] md:h-[500px] lg:h-[611px]' >
                
                        <img src={bannerImg} className='rounded-3xl h-full  w-full object-cover object-center ' alt="bannerImg" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;