import React from 'react';
import { Helmet } from "react-helmet";

const Faq = () => {
    return (
        <div>
            <div>
                <Helmet>
                    <title>FAQ | Gadget Heaven</title>
                </Helmet>
                <div>
                    <div className='bg-purple-600 -mt-6'>
                        <div className='md:w-8/12 mx-auto text-white text-center pt-8 pb-8' >
                            <h1 className='font-bold text-3xl mb-4'>FAQ - Frequently Asked Questions</h1>

                        </div>
                    </div>
                    <div className='w-10/12 mx-auto mt-8'>
                        <div className='shadow-2xl rounded-2xl'>
                            <div className="collapse ">
                                <input type="radio" name="my-accordion-1" defaultChecked />
                                <div className="collapse-title text-2xl font-bold">1. What is Gadget Heaven?</div>
                                <div className="collapse-content text-xl">
                                    <p>Gadget Heaven is your go-to platform for discovering, learning about, and purchasing the latest tech gadgets. From product reviews to exclusive deals, we’re here to connect you with the technology that fits your needs.</p>
                                </div>
                            </div>
                            <div className="collapse ">
                                <input type="radio" name="my-accordion-1" defaultChecked />
                                <div className="collapse-title text-2xl font-bold">2. How can I order a gadget?</div>
                                <div className="collapse-content text-xl">
                                    <p>Simply browse our products, add your desired items to the cart, and proceed to checkout. We offer secure payment methods and fast delivery options.</p>
                                </div>
                            </div>
                            <div className="collapse ">
                                <input type="radio" name="my-accordion-1" defaultChecked />
                                <div className="collapse-title text-2xl font-bold">3. Do you provide international shipping?</div>
                                <div className="collapse-content text-xl">
                                    <p>Yes, we ship to most countries worldwide. Shipping fees and delivery times may vary based on your location. Check our Shipping Policy for more details.</p>
                                </div>
                            </div>
                            <div className="collapse ">
                                <input type="radio" name="my-accordion-1" defaultChecked />
                                <div className="collapse-title text-2xl font-bold">4. What is your return policy?</div>
                                <div className="collapse-content text-xl">
                                    <p>We offer a hassle-free return policy within 30 days of purchase for most products. Items must be in their original condition. Please visit our Returns & Refunds page for further information.</p>
                                </div>
                            </div>
                            <div className="collapse ">
                                <input type="radio" name="my-accordion-1" defaultChecked />
                                <div className="collapse-title text-2xl font-bold">5. How can I contact customer support?
                                </div>
                                <div className="collapse-content text-xl">
                                    <p>Our friendly support team is available to assist you 24/7. You can reach us via:</p>
                                    <ol className='list-inside list-disc'>
                                        <li> Email: support@gadgetheaven.com</li>
                                        <li> Phone: +966 01712345678</li>
                                    </ol>
                                </div>
                            </div>
                            <div className="collapse ">
                                <input type="radio" name="my-accordion-1" defaultChecked />
                                <div className="collapse-title text-2xl font-bold">6. Are your products covered by a warranty?</div>
                                <div className="collapse-content text-xl">
                                    <p>Yes, all our products come with a manufacturer’s warranty. Specific warranty terms vary by product. You can find detailed information on each product page.</p>
                                </div>
                            </div>
                            <div className="collapse rounded-2xl ">
                                <input type="radio" name="my-accordion-1" defaultChecked />
                                <div className="collapse-title text-2xl font-bold">7. Can I get updates on new gadgets and deals?</div>
                                <div className="collapse-content text-xl">
                                    <p>Absolutely! Sign up for our newsletter to stay informed about the latest tech trends, product launches, and special offers.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-2/3 mx-auto text-center mt-8 border p-3 rounded-2xl bg-white shadow-2xl '>
                            <h6 className="text-2xl font-bold">Newsletter</h6>
                            <div className='mt-8'>
                                <div className="font-semibold text-lg">Enter your email address</div>
                                <div className="join w-full mt-4">
                                    <input
                                        type="text"
                                        placeholder="username@site.com"
                                        className="input input-bordered join-item w-full" />
                                    <button className="btn bg-purple-600 text-white join-item">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;