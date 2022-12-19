import React from 'react';
import love  from "../../assets/Image/bg-love.png";
import hero  from "../../assets/Image/aimg3.png";

const Hero = () => {
    return (
        <div className='bg-blue-700 h-96 flex justify-between items-center p-12' styles={{ backgroundImage:`url(${love})` }}>
            <div className='text-center md:text-left'>
                <h1 className='text-3xl md:text-4xl text-white font-normal   mb-2'>Best Way to Find Your <br /> True Sole Mate</h1>
                <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Join Now</button>
            </div>
            <div className='hidden md:flex '>
                <img className='h-96 w-[800px] ' src={hero} alt="" />
            </div>
        </div>
    );
};

export default Hero;