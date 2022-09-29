import React from "react";
import people from "../Assets/people.jpg";


const Navbar = () => {
  return (
    <div className="w-full h-[52px] bg-[#750b0b] flex items-center justify-around">
      <div className="ml-2 flex mr-5 w-1/5">
        <div className="h-8 w-8 mr-4 bg-[#dddddd]"></div>
        <div className="text-2xl text-[#fffefe]">Medical Darpan</div>
      </div>
      <div className="flex justify-around w-3/6">
        <div className="text-lg text-[#fffefe]">Home</div>
        <div className="text-lg text-[#fffefe]">Products</div>
        <div className="text-lg text-[#fffefe]">Distributors</div>
        <div className="text-lg text-[#fffefe]">Manufacturers</div>
        <div className="text-lg text-[#fffefe]">About us</div>
        <div className="text-lg text-[#fffefe]">Blog</div>
      </div>
      <div className="w-1/6 flex justify-end mr-8 items-center">
        <div className="text-base text-[#fffefe] mr-8 cursor-pointer">
          Login
        </div>
        <img src={people} alt="people" className="cursor-pointer h-[52px]" />

        {/* <div className="w-8 h-8 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 29 29"
          >
            <path d="M14.5 2A12.514 12.514 0 0 0 2 14.5 12.521 12.521 0 0 0 14.5 27a12.5 12.5 0 0 0 0-25Zm7.603 19.713a8.48 8.48 0 0 0-15.199.008A10.367 10.367 0 0 1 4 14.5a10.5 10.5 0 0 1 21 0 10.368 10.368 0 0 1-2.897 7.213ZM14.5 7a4.5 4.5 0 1 0 4.5 4.5A4.5 4.5 0 0 0 14.5 7Z" />
          </svg>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
