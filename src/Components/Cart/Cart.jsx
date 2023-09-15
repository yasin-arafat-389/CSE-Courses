import React from "react";

const Cart = ({ selectedCourses }) => {
  return (
    <>
      <div className=" w-1/4 h-1/2  bg-[#fff] rounded-xl ">
        <h1 className=" text-[11px] md:text-[18px] lg:text-[18px] font-bold text-[#2F80ED] text-center mt-4 ">
          Credit Hour Remaining 7 hr
        </h1>
        <div className="divider w-[80%] mx-auto"></div>
        <h1 className="text-[11px] md:text-[20px] lg:text-[20px] font-bold w-[80%] mx-auto ">
          Course Name
        </h1>

        {selectedCourses.length > 0 ? (
          selectedCourses.map((item, index) => (
            <div key={index}>
              <p className="text-[#1c1b1bcc] w-[80%] mx-auto my-2 text-[11px] md:text-[14px] lg:text-[18px] ">
                {index + 1}. {item.courseName}
              </p>
            </div>
          ))
        ) : (
          <p className="text-[grey] text-[10px] md:text-[13px] lg:text-[15px]  w-[80%] mx-auto my-2">
            No Courses Selected
          </p>
        )}

        <div className="divider w-[80%] mx-auto"></div>
        <h1 className="text-[11px] md:text-[14px] lg:text-[16px] font-medium text-[#1c1b1bcc] w-[80%] mx-auto ">
          Total Credit Hour : 13
        </h1>
        <div className="divider w-[80%] mx-auto my-2"></div>
        <h1 className="text-[11px] md:text-[14px] lg:text-[16px] font-medium text-[#1c1b1bcc] w-[80%] mx-auto mb-4  ">
          Total Price : 48000 USD
        </h1>
      </div>
    </>
  );
};

export default Cart;
