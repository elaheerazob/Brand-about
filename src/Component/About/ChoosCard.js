import React from 'react';
import images from '../../assets/Image/aimg11.png';
import css from '../About/ChoosCard.module.css';
const ChoosCard = () => {
    return (
        <div className={`${css.bannerBg} `}>
            <div className='p-12 '>
                <h2 className='text-center font-medium'>How We are Diffrent </h2>
                <h1 className='text-center text-3xl font-bold'>Why Choose Us! </h1>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dignissimos incidunt. Iusto assumenda rerum quo?</p>
            </div>
            <div class="grid grid-cols-1 md:grid md:grid-cols-4 gap-4 pb-8">
                 <div className='bg-white border border-gray-200 rounded-lg shadow-md p-12 w-72 mx-auto'>
                    <img className='rounded-full w-20 h-20 mx-auto' src={images} alt="" />
                        <h1 className='text-center font-medium text-2xl'>Dating</h1>
                        <p className='text-center md:text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod.</p>
                 </div>
                 
                 <div className='bg-white border border-gray-200 rounded-lg shadow-md p-12 w-72 mx-auto'>
                    <img className='rounded-full w-20 h-20 mx-auto' src={images} alt="" />
                        <h1 className='text-center font-medium text-2xl'>Dating</h1>
                        <p className='text-center md:text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod.</p>
                 </div>

                 <div className='bg-white border border-gray-200 rounded-lg shadow-md p-12 w-72 mx-auto'>
                    <img className='rounded-full w-20 h-20 mx-auto' src={images} alt="" />
                        <h1 className='text-center font-medium text-2xl'>Dating</h1>
                        <p className='text-center md:text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod.</p>
                 </div>

                 <div className='bg-white border border-gray-200 rounded-lg shadow-md p-12 w-72 mx-auto'>
                    <img className='rounded-full w-20 h-20 mx-auto' src={images} alt="" />
                        <h1 className='text-center font-medium text-2xl'>Dating</h1>
                        <p className='text-center md:text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod.</p>
                 </div>
            </div>
        </div>
    );
};

export default ChoosCard;