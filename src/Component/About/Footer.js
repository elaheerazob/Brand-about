import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineRobot } from "react-icons/ai";
import FooterComponent from "../FooterComponent";
import LastFooter from "../LastFooter";

const Footer = () => {
  /* const [items, setIteams] = useState([]);

  useEffect(() => {
    fetch("./footer.json")
      .then((res) => res.json())
      .then((data) => {
        setIteams(data);
        console.log(data);
      });
  }, []); */


  const [items,setIteams] =useState([]);
  useEffect(() => {
    fetch("./footer.json")
    .then(res =>res.json())
    .then(data =>setIteams(data))
  }, [])
  

  return (
    <div className={` bg-pink-600 py-5`}>
      <div className="py-10">
        <AiOutlineRobot className="mx-auto h-24 w-24 text-white bg-zinc-600 rounded-full p-5" />
        <h1 className="text-base text-gray-50 text-center font-normal mb-12">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </h1>
        <div className="flex justify-center ">
          <div className="relative">
            <input
              type="email"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-80 md:w-96  p-2.5 "
              placeholder="name@flowbite.com"
              required
            />
            <button className="btn btn-circle btn-sm absolute -right-5 top-1">
              sub
            </button>
          </div>
        </div>
      </div>
      <hr className="w-[90%] mx-auto" />
      <div className="px-16 mt-10">
        {/* <FooterComponent items={items} /> */}
        <LastFooter items={items}/>
        
      </div>
    </div>
  );
};

export default Footer;
