import React from 'react';
import images from '../../assets/Image/women-in set.jpg';
import { AiFillFacebook } from "react-icons/ai";

const SuccessCard = () => {
    return (
        <div className='my-8'>
            <div className='p-12 '>
                <h2 className='text-center font-medium'>How We are Diffrent </h2>
                <h1 className='text-center text-3xl font-bold'>Why Choose Us! </h1>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dignissimos incidunt. Iusto assumenda rerum quo?</p>
            </div>
            <div class="grid grid-cols-1 md:grid md:grid-cols-3 gap-4">
                 <div className='bg-white border border-gray-200 rounded-lg shadow-md w-72 mx-auto'>
                    <div className='relative'>
                        <img className='rounded-lg  w-72  mx-auto' src={images} alt="" />
                        <div className='absolute right-[40%] -bottom-[10%]'>
                            <img className='w-12 h-12 rounded-full' src="https://source.unsplash.com/40x40/?portrait?1" alt="" />
                        </div>
                    </div>
                        <div className='p-4'>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod.</p>
                            <p className=' text-xs font-bold mt-2'>Dec 10, 2022</p>
                        </div>
                        <div className='flex justify-between p-4'>
                            <div className='flex'>
                                <AiFillFacebook size='25px' className='rounded-full'/>
                                <AiFillFacebook size='25px' className='rounded-full'/>
                                <AiFillFacebook size='25px' className='rounded-full'/>
                            </div>
                            <div>
                                <p>Read More</p>
                            </div>
                        </div>
                 </div>

                 <div className='bg-white border border-gray-200 rounded-lg shadow-md w-72 mx-auto'>
                    <div className='relative'>
                        <img className='rounded-lg  w-72  mx-auto' src={images} alt="" />
                        <div className='absolute right-[40%] -bottom-[10%]'>
                            <img className='w-12 h-12 rounded-full' src="https://source.unsplash.com/40x40/?portrait?1" alt="" />
                        </div>
                    </div>
                        <div className='p-4'>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod.</p>
                            <p className=' text-xs font-bold mt-2'>Dec 10, 2022</p>
                        </div>
                        <div className='flex justify-between p-4'>
                            <div className='flex'>
                                <AiFillFacebook size='25px' className='rounded-full'/>
                                <AiFillFacebook size='25px' className='rounded-full'/>
                                <AiFillFacebook size='25px' className='rounded-full'/>
                            </div>
                            <div>
                                <p>Read More</p>
                            </div>
                        </div>
                 </div>

                 <div className='bg-white border border-gray-200 rounded-lg shadow-md w-72 mx-auto'>
                    <div className='relative'>
                        <img className='rounded-lg  w-72  mx-auto' src={images} alt="" />
                        <div className='absolute right-[40%] -bottom-[10%]'>
                            <img className='w-12 h-12 rounded-full' src="https://source.unsplash.com/40x40/?portrait?1" alt="" />
                        </div>
                    </div>
                        <div className='p-4'>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod.</p>
                            <p className=' text-xs font-bold mt-2'>Dec 10, 2022</p>
                        </div>
                        <div className='flex justify-between p-4'>
                            <div className='flex'>
                                <AiFillFacebook size='25px' className='rounded-full'/>
                                <AiFillFacebook size='25px' className='rounded-full'/>
                                <AiFillFacebook size='25px' className='rounded-full'/>
                            </div>
                            <div>
                                <p>Read More</p>
                            </div>
                        </div>
                 </div>
            </div>
        </div>
    );
};

export default SuccessCard;