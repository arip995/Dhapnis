import React from "react";

const Header = () => {
  return (
    <div className="w-full mt-3 ml-3">
      <div className="text-[#b0b0b0] mb-1">
        Medical darphan {">"} Search {">"}{" "}
        <span className="text-[#565656]">FabiFlu Tablet</span>
      </div>
      <div className="flex w-full">
        <div class="relative w-1/3">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>

          <input
            type="text"
            class="border-[#c8c8c8] w-full py-2 pl-10 pr-4 text-gray-700 bg-white border focus:border-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-20"
            placeholder="Paracetamol"
          />
        </div>
        <button className="bg-[#19afa4] text-[#e1f5f2] pl-5 pr-5">Search</button>
      </div>
      <div className="mt-3 flex items-end mb-3">
        <span className="text-[#919191] text-2xl pr-2">Paracetamol</span>
        <span className="text-[#767676] text-base pr-2">(128 products)</span>
        <span className="text-xs bg-[#19afa4] flex p-2 mr-2  items-center p-2 mr-2">
          <span className="text-[#e1f5f2]">Acedofeniac</span>
          <span className="text-[#e1f5f2] ml-1 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-3 h-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </span>
        <span className="text-xs bg-[#19afa4] flex items-center p-2">
          <span className="text-[#e1f5f2]">500mg</span>
          <span className="text-[#e1f5f2] ml-1 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-3 h-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </span>
        <span className="cursor-pointer ml-2 text-[#BE2E2E]">Remove all</span>
      </div>
    </div>
  );
};

export default Header;
