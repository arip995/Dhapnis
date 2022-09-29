import React from "react";
import pic from "../Assets/pharma.jpg";
import send from "../Assets/send.jpg";

const Card = () => {
  return (
    <div className="border-2 border-gray-300 rounded-md">
      <img src={pic} alt="pharma" className=" pt-2 px-2" />
      <div className="text-xl text-semibold text-center mt-2">
        Favipiravir 400mg (Fabiflu) Tablets
      </div>
      <div className="text-center mb-6">
        <span className="text-2xl font-bold text-[#832323]">Rs 1,775</span>
        <span className="text-2xl font-bold">&nbsp;/</span>
        <span className="text-lg font-medium text-gray-600">&nbsp;stripe</span>
      </div>
      <div className="text-xl font-medium text-center mt-2">
        Glenmark Pharmaceutical Limited
      </div>
      <div className="text-base font-medium text-center text-gray-600 mb-3">
        PARVAT PATIYA, SURAT, GUJURAT
      </div>
      <hr className="border-2-1 border-gray-300"/>
      <div className="flex justify-center py-2">
        <img src={send} alt="pharma" className="mr-3" />
        <div className="text-[#057e76] text-2xl font-bold ">Contact Suplier</div>
      </div>
      <div className="border-b-[15px] rounded-b-md border-[#832323]"></div>

    </div>
  );
};

export default Card;
