import React from "react";

export const About = () => {
  return (
    <div className=" mx-auto md:flex md:justify-center">
        
        <div className="">
            <div className="relative">
                <img className="rounded-3xl" src="https://placeimg.com/800/400/arch" alt="" />
                <div className="absolute md:top-[45%] md:right-[0] top-16 right-40 bg-red-400">
                <img alt="" className=" w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800" src="https://source.unsplash.com/40x40/?portrait?1" />
                </div>
            </div>
        </div>

            <div className=" items-start">
              <div className="flex items-center">
              <div className="px-12">
                <img className="rounded-full md:w-12 md:h-12 w-20 h-20 " src="https://source.unsplash.com/60x60/?portrait?1" alt="" />
              </div>
              <div className="">
                <h5 className="text-2xl">Simple to Use </h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, odit!</p>
                <hr />
              </div>
              </div>

              <div className="flex items-center">
              <div className="px-12">
                <img className="rounded-full md:w-12 md:h-12 w-20 h-20 " src="https://source.unsplash.com/60x60/?portrait?1" alt="" />
              </div>
              <div className="">
                <h5 className="text-2xl">Simple to Use </h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, odit!</p>
                <hr />
              </div>
              </div>

              <div className="flex items-center">
              <div className="px-12">
                <img className="rounded-full md:w-12 md:h-12 w-20 h-20 " src="https://source.unsplash.com/60x60/?portrait?1" alt="" />
              </div>
              <div className="">
                <h5 className="text-2xl">Simple to Use </h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, odit!</p>
                <hr />
              </div>
              </div>
            </div>

            
    </div>
  );
};
