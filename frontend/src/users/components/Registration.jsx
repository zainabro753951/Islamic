import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="grid grid-cols-2 w-full h-screen">
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover object-left"
          src="/imgs/mosquis/mosque1.jpg"
          alt=""
        />
      </div>
      <div className="bg-themeGreen flex justify-center w-full h-full relative">
        <img
          className="w-full h-full absolute object-cover"
          src="/imgs/mosquis/download.png"
          alt=""
        />
        <div className="w-full h-full">
          <div className="w-full relative flex flex-col items-center justify-center">
            <svg
              className="fill-themeYellow rotate-180 w-full h-[250px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 526.16 123"
            >
              <g>
                <path
                  d="M526.24,211.95c0,77.96-0.02,155.92,0.08,233.88c0,3.17-0.29,4.23-3.96,4.22c-172.75-0.12-345.49-0.12-518.24,0
                                    		c-3.67,0-3.96-1.06-3.96-4.23c0.1-78.29,0.08-156.59,0.08-234.88c7.78-21.03,24-30.67,45.27-33.16c4.2-0.49,4.67-2.73,4.73-6.06
                                    		c0.39-22.14,11.45-37.76,30.17-48.43c13.24-7.55,27.66-10.46,42.81-9.64c3.82,0.21,6.11-0.96,7.84-4.54
                                    		c12.26-25.31,31.61-43.43,56.98-55.22c10.88-5.06,22.06-9.46,32.54-15.35c17.31-9.75,33.26-21.04,43.66-38.6c0.33,0,0.67,0,1,0
                                    		c5.68,10.26,13.77,18.33,22.99,25.38c13.75,10.51,28.97,18.42,44.9,24.92c29.09,11.87,51.54,30.88,65.42,59.38
                                    		c1.45,2.98,3.4,4.05,6.67,3.91c8.56-0.36,16.95,0.89,25.16,3.31c27.38,8.06,46.93,30.09,45.2,55.68c-0.25,3.63,1.71,4.76,5.12,5.2
                                    		C502.31,180.5,518.75,190.31,526.24,211.95z"
                ></path>
              </g>
            </svg>
            <img className="absolute top-1" src="/imgs/logo2.png" alt="" />
            <h1 className="text-2xl font-semibold font-themeHeading -translate-y-10 text-white scale-y-125">
              Users Registration
            </h1>
          </div>
          <div className="p-8 relative">
            <form method="post" className=" flex flex-col gap-3">
              <div>
                <label className="block mb-2 text-sm font-medium font-themeText">
                  First name
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border-2 text-black outline-none border-gray-300  text-sm rounded-lg block w-full p-2.5 focus:border-themeYellow"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium font-themeText">
                  Email
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border-2 text-black outline-none border-gray-300 text-sm rounded-lg block w-full p-2.5 focus:border-themeYellow"
                  placeholder="example654@gmail.com"
                  required
                />
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium font-themeText">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="bg-gray-50 border-2 text-black outline-none border-gray-300 text-sm rounded-lg block w-full p-2.5 focus:border-themeYellow"
                  placeholder="example654@gmail.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium font-themeText">
                  Email
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border-2 text-black outline-none border-gray-300 text-sm rounded-lg block w-full p-2.5 focus:border-themeYellow"
                  placeholder="example654@gmail.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium font-themeText">
                  Gender
                </label>
                <select
                  className="bg-gray-50 border-2 text-black outline-none border-gray-300 text-sm rounded-lg block w-full p-2.5 focus:border-themeYellow"
                  required
                >
                  <option value="">Select a gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium font-themeText">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="bg-gray-50 border-2 text-black outline-none border-gray-300 text-sm rounded-lg block w-full p-2.5 focus:border-themeYellow"
                  placeholder="0330-165-1568"
                  required
                />
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium dark:text-white">
                  Upload file
                </label>
                <input
                  className="block w-full text-sm border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                  type="file"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium font-themeText">
                  Password
                </label>
                <input
                  type="password"
                  className="bg-gray-50 border-2 text-black outline-none border-gray-300 text-sm rounded-lg block w-full p-2.5 focus:border-themeYellow"
                  placeholder="*** ***"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium font-themeText">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="bg-gray-50 border-2 text-black outline-none border-gray-300 text-sm rounded-lg block w-full p-2.5 focus:border-themeYellow"
                  placeholder="*** ***"
                  required
                />
              </div>
              <input
                type="submit"
                value="Register"
                className="p-2.5 border-2 border-themeYellow rounded-lg bg-themeYellow text-white text-xl hover:bg-transparent duration-300"
              />
            </form>
            <p className="text-white text-center mt-7">
              Already have an account
              <Link to={"/login"} className="text-blue-500 cursor-pointer">
                {" "}
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
