import React from 'react';

const Footer = () => {
    return (
        <div className='bg-white my-24 pt-24'>
            <footer className='w-10/12 mx-auto max-w-screen-2xl'>
                <div className='text-center'>
                    <h3 className='text-3xl font-bold mb-4'>Gadget Heaven</h3>
                    <p>Leading the way in cutting-edge technology and innovation.</p>
                </div>
                <div className='divider my-3'></div>

                <div className="footer p-10 pt-0 place-items-stretch">
                    <nav className='flex flex-col items-center'>
                        <h6 className="font-bold text-lg">Services</h6>
                        <a className="link link-hover text-base">Product Support</a>
                        <a className="link link-hover text-base">Order Tracking</a>
                        <a className="link link-hover text-base">Shipping & Delivery</a>
                        <a className="link link-hover text-base">Returns</a>

                    </nav>
                    <nav className='flex flex-col items-center'>

                        <h6 className="font-bold text-lg">Company</h6>
                        <a className="link link-hover text-base">About Us</a>
                        <a className="link link-hover text-base">Careers</a>
                        <a className="link link-hover text-base">Contact</a>

                    </nav>
                    <nav className='flex flex-col items-center'>

                        <h6 className="font-bold text-lg">Legal</h6>
                        <a className="link link-hover text-base">Terms of Service</a>
                        <a className="link link-hover text-base">Privacy Policy</a>
                        <a className="link link-hover text-base">Cookie Policy</a>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default Footer;