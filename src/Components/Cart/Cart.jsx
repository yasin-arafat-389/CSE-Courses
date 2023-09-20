import React from "react";
import { TiDelete } from "react-icons/ti";

const Cart = ({
  selectedCourses,
  remainingCredit,
  setTotalCredit,
  setTotalPrice,
  handleRemoveCourse,
}) => {
  return (
    <>
      <div className=" w-1/4 h-1/2  bg-[#fff] rounded-xl ">
        <h1 className=" text-[11px] md:text-[18px] lg:text-[18px] font-bold text-[#2F80ED] text-center mt-4 ">
          Credit Hour Remaining {remainingCredit} hr
        </h1>
        <div className="divider w-[80%] mx-auto"></div>
        <h1 className="text-[11px] md:text-[20px] lg:text-[20px] font-bold w-[80%] mx-auto ">
          Course Name
        </h1>

        {selectedCourses.length > 0 ? (
          selectedCourses.map((item, index) => (
            <div
              key={index}
              className="card w-[90%] flex flex-row m-auto bg-base-100 shadow-xl mb-3"
            >
              <p className="text-[#1c1b1bcc] w-[80%] mx-auto my-2 text-[11px] md:text-[14px] lg:text-[18px] ">
                {index + 1}. {item.courseName}
              </p>

              <TiDelete
                fontSize={"25px"}
                style={{
                  cursor: "pointer",
                  marginTop: "10px",
                  marginRight: "10px",
                }}
                onClick={() => handleRemoveCourse(item)}
              />
            </div>
          ))
        ) : (
          <p className="text-[grey] text-[10px] md:text-[13px] lg:text-[15px]  w-[80%] mx-auto my-2">
            No Courses Selected
          </p>
        )}

        <div className="divider w-[80%] mx-auto"></div>
        <h1 className="text-[11px] md:text-[14px] lg:text-[16px] font-medium text-[#1c1b1bcc] w-[80%] mx-auto ">
          Total Credit Hour : {setTotalCredit}
        </h1>
        <div className="divider w-[80%] mx-auto my-2"></div>
        <h1 className="text-[11px] md:text-[14px] lg:text-[16px] font-medium text-[#1c1b1bcc] w-[80%] mx-auto mb-4  ">
          Total Price : {setTotalPrice} USD
        </h1>
      </div>
    </>
  );
};

export default Cart;
