import React, { useEffect, useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";

const Courses = () => {
  let [course, getCourse] = useState([]);
  let [selectedCourses, setSelectedCourses] = useState([]);
  let [remainingCredit, setRemainingCredit] = useState(20);
  let [totalCredit, setTotalCredit] = useState(0);
  let [totalprice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => getCourse(data));
  }, []);

  let handleAddToCart = (course) => {
    let isExists = selectedCourses.find(
      (selected) => selected.id === course.id
    );

    if (isExists) {
      toast.warn(`${course.courseName} is already added`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      let credit = course.creditHours;
      selectedCourses.forEach((item) => {
        credit += item.creditHours;
      });

      if (credit > 20) {
        return toast.error(`Not enough credits left`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      setRemainingCredit(20 - credit);

      let price = course.price;
      selectedCourses.forEach((item) => {
        price += item.price;
      });

      setTotalPrice(price);

      setTotalCredit(credit);

      setSelectedCourses([...selectedCourses, course]);
    }
  };

  // Remove course from cart
  let handleRemoveCourse = (course) => {
    let courseToRemove = selectedCourses.find(
      (selected) => selected.id === course.id
    );

    if (courseToRemove) {
      swal({
        title: `Are you sure you want to remove ${courseToRemove.courseName}?`,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          let remainingCourses = selectedCourses.filter(
            (selected) => selected.id != courseToRemove.id
          );

          setSelectedCourses(remainingCourses);

          // Set total credits
          let totalCreditSelected = 0;
          let remCredit = course.creditHours;
          selectedCourses.forEach((item) => {
            totalCreditSelected += item.creditHours;
          });
          let totalCreditAfterRemove = totalCreditSelected - remCredit;

          setTotalCredit(totalCreditAfterRemove);

          setRemainingCredit(20 - totalCreditAfterRemove);

          swal(`${courseToRemove.courseName} has been deleted!`, {
            icon: "success",
          });
        }
      });
    }
  };

  return (
    <>
      <div className="flex w-[90%] mx-auto gap-5">
        <div className=" w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20 ">
          {course.map((item, index) => (
            <div className="card bg-base-100 shadow-xl justify-between">
              <figure>
                <img
                  className="h-[200px] p-3 rounded-[20px]  "
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
              </div>
              <div className="w-full flex justify-center ">
                <button
                  className="btn rounded-lg w-[90%]  my-4 bg-[#2F80ED] hover:bg-[#2F80ED] text-[#fff] "
                  onClick={() => handleAddToCart(item)}
                >
                  Select
                </button>
                <ToastContainer />
              </div>
            </div>
          ))}
        </div>

        <Cart
          selectedCourses={selectedCourses}
          remainingCredit={remainingCredit}
          setTotalCredit={totalCredit}
          setTotalPrice={totalprice}
          handleRemoveCourse={handleRemoveCourse}
        />
      </div>
    </>
  );
};

export default Courses;
