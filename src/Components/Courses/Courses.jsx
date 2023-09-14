import React, { useEffect, useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import Cart from "../Cart/Cart";

const Courses = () => {
  let [course, getCourse] = useState([]);
  let [selectedCourses, setSelectedCourses] = useState([]);

  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => getCourse(data));
  }, []);

  let handleAddToCart = (course) => {
    setSelectedCourses([...selectedCourses, course]);
  };

  return (
    <>
      <div className="flex w-[90%] mx-auto gap-5">
        <div className=" w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20 ">
          {course.map((item, index) => (
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  className=" w-auto  h-[200px] p-3 rounded-[20px]  "
                  src={item.image}
                />
              </figure>
              <div className="course-body">
                <h2 className=" w-[90%] mx-auto course-title text-center text-[#1C1B1B] text-[18px] font-bold my-4 ">
                  {item.courseName}
                </h2>
                <p className=" w-[90%] mx-auto text-center text-[#1c1b1b99] text-[16px] ">
                  {item.shortDescription}
                </p>
                <div className=" flex flex-col md:flex-col lg:flex-row gap-5 justify-center mt-5  ">
                  <div className="price flex items-center justify-center">
                    <BsCurrencyDollar fontSize={"25px"} />
                    <p className="text-[#1c1b1b99] text-[17px] ">
                      Price: {item.price}
                    </p>
                  </div>
                  <div className="credit flex items-center gap-3  justify-center">
                    <BsBook fontSize={"25px"} />
                    <p className="text-[#1c1b1b99] text-[17px]">
                      Credit: {item.creditHours} hr
                    </p>
                  </div>
                </div>
                <div className="w-full flex justify-center ">
                  <button
                    className="btn w-[90%]  my-4 bg-[#2F80ED] hover:bg-[#2F80ED] text-[#fff] "
                    onClick={() => handleAddToCart(item)}
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Cart selectedCourses={selectedCourses} />
      </div>
    </>
  );
};

export default Courses;
