import React from "react";

const Cart = ({ selectedCourses }) => {
  console.log(selectedCourses);
  return (
    <>
      <div className=" w-1/4  bg-[#fff] h-[100px] rounded-xl ">
        {selectedCourses.map((item) => {
          return (
            <div>
              <ol>
                <li>{item.courseName}</li>
              </ol>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
