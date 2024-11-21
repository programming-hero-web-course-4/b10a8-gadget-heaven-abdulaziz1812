import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Gadget from '../Gadget/Gadget';

const Categories = () => {
    const {category} =useParams()
    const [gadgets, setGadgets] = useState([])
   
    useEffect(() => {
        fetch('/gadgetsData.json')
            .then(res => res.json())
            .then(data => setGadgets(data))            
    }, [])

    console.log(gadgets);
    const filteredGadgets = gadgets.filter(gadget => gadget.category.toLowerCase() === category.toLowerCase())
    console.log(filteredGadgets);

    

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
            {
                filteredGadgets.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
                
            }
        </div>
    );
};

export default Categories;