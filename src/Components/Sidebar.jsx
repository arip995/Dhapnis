import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="w-full bg-[#ffffff] mb-3">
        <div className="pl-3 text-xl text-semibold bg-[#dddddd] py-2">
          Related Category
        </div>
        <div className="mt-3 ml-2">Paracetamol Tablets</div>
        <div className="mt-3 ml-2">Paracetamol Syrup</div>
        <div className="mt-3 ml-2">Paracetamol Powder</div>
        <div className="mt-3 ml-2 px-2 mr-2 bg-[#19afa4] text-[#e1f5f2] justify-between flex items-center rounded-sm">
          Aceclofenac
          <span className="ml-1 cursor-pointer">
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
        </div>
        <div className="mt-3 ml-2">
          Magaladarate Simethicone Oral Suspension
        </div>
        <div className="mt-3 ml-2">Mefenamic Paracetamol Syrup</div>
      </div>

      <div className="w-full bg-[#ffffff] mb-3">
        <div className="pl-3 text-xl text-semibold bg-[#dddddd] py-2">
          Related Brands
        </div>
        <div className="mt-3 ml-2">Cipmol Paracetamol</div>
        <div className="mt-3 ml-2">Pandal Paracetamol Tablets</div>
        <div className="mt-3 ml-2">Combiflam</div>
        <div className="mt-3 ml-2">Crocin Tablets</div>
        <div className="mt-3 ml-2">Calpol Paracetamol Tablets</div>
        <div className="mt-3 ml-2">Sumo Tablet</div>
      </div>

      <div className="w-full bg-[#ffffff] mb-3">
        <div className="pl-3 text-xl text-semibold bg-[#dddddd] py-2">
          Business Type
        </div>
        <div className="mt-3 ml-2">Wholesaler</div>
        <div className="mt-3 ml-2">Manufacturer</div>
        <div className="mt-3 ml-2">Retailer</div>
        <div className="mt-3 ml-2">Exporter</div>
      </div>

      <div className="w-full bg-[#ffffff] mb-3">
        <div className="pl-3 text-xl text-semibold bg-[#dddddd] py-2">
        Strength
        </div>
        <div className="mt-3 ml-2 px-2 mr-2 bg-[#19afa4] text-[#e1f5f2] justify-between flex items-center rounded-sm">
          500mg
          <span className="ml-1 cursor-pointer">
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
        </div>
        <div className="mt-3 ml-2">600 mg</div>
      </div>

      <div className="w-full bg-[#ffffff] mb-3">
        <div className="pl-3 text-xl text-semibold bg-[#dddddd] py-2">
        Manufacturer
        </div>
        <div className="mt-3 ml-2">Intas Pharmaceutical Ltd</div>
        <div className="mt-3 ml-2">Alkem Labrotaries Ltd</div>
      </div>

      <div className="w-full bg-[#ffffff] mb-3">
        <div className="pl-3 text-xl text-semibold bg-[#dddddd] py-2">
          Prescription/Non prescription
        </div>
        <div className="mt-3 ml-2">Wholesaler</div>
        <div className="mt-3 ml-2">Manufacturer</div>
        <div className="mt-3 ml-2">Retailer</div>
        <div className="mt-3 ml-2">Exporter</div>
      </div>
    </>
  );
};

export default Sidebar;
