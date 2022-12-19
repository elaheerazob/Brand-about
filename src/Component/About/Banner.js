import React from 'react';
import aiimg from '../../assets/Image/aimg11.png';
import aiimg2 from '../../assets/Image/pexels-monstera-5874664.jpg';
import ChoosCard from './ChoosCard';
import Footer from './Footer';
import Hero from './Hero';
import SuccessCard from './SuccessCard';
const Banner = () => {
    return (
        <div>
            <div className='grid grid-rows-2 md:gird md:grid-cols-2   '>
            <div className='mx-auto'
            // style={{ backgroundImage: "url("+ aiimg2 +")" }}
            >
                <img className='w-[500px]' src={aiimg} alt="" />
            </div>

            <div className=''>
                <h1 className='text-center md:text-left text-xl font-medium my-2'>Get to Know More </h1>
                <h1 className='text-center md:text-left text-3xl font-bold my-2'>About</h1>
                <p className='text-center md:text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quibusdam voluptatum amet dolore vel ducimus eum dolores rem, laborum et vitae reprehenderit eveniet a perspiciatis tempore praesentium asperiores accusantium nemo?</p>
                <br />
                <p className='text-center md:text-justify' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sed cupiditate, libero ducimus velit, mollitia ipsum reiciendis perspiciatis excepturi et, beatae deserunt? Vitae incidunt labore perspiciatis illo officiis magni explicabo?</p>
            </div>
        </div>
        <ChoosCard/>
        <Hero/>
        <SuccessCard/>
        <Footer/>
        </div>
    );
};

export default Banner;