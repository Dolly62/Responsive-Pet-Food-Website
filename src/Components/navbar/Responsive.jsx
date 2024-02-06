import React from "react";
import { IoCall } from "react-icons/io5";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Responsive = (props) => {
  return (<>
    <div
    className={`${
      props.showSideMenu ?  "left-0" : "-left-[100%]" 
    } h-screen w-[75%] bg-yellow-400 fixed top-0 z-50 transition-all duration-500 pt-24 pb-6 px-8 flex flex-col justify-between text-white md:hidden`}
  >
    <div>
      <div>
        <h1 className="text-2xl font-semibold">User Name</h1>
      </div>
      <nav className="mt-12">
        <ul className="space-y-4 text-xl">
        <li>
            <a href="#dogs" className="font-semibold text-2xl">DOGS</a>
          </li>
          <li>
            <a href="#cats" className="font-semibold text-2xl">CATS</a>
          </li>
          <li>
            <a href="#fish" className="font-semibold text-2xl">FISH & AQUATICS</a>
          </li>
          <li>
            <a href="#birds" className="font-semibold text-2xl">BIRDS</a>
          </li>
          <li>
            <a href="#smallAnimals" className="font-semibold text-2xl">SMALL ANIMALS</a>
          </li>
        </ul>
      </nav>
    </div>
    <div className="footer">
    <ul className="flex gap-5">
          <li>
            <IoCall size={30}/>
          </li>
          <li>
            <FaInstagram size={30}/>
          </li>
          <li>
            <FaFacebook size={30}/>
          </li>
        </ul>
    </div>
  </div>
  </>
  );
};

export default Responsive;
