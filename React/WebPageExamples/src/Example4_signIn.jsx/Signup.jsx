import React from "react";

const Signup = () => {
  return (
    <main className="h-[100vh] w-[100vw] bg-gradient-to-r from-[#ffe4e6]  to-[#a9f0e0] flex justify-center items-center ">
      <div className=" h-[60vh] w-[50vw] flex bg-white rounded-md p-4">
        <div className="h-[100%] w-[100%]  bg-white flex  rounded-lg shadow-lg">
          <aside className="h-[100%] w-[40%] rounded-l-lg">
            <img
              src="https://img.freepik.com/premium-photo/mountains-distance-with-dirt-road-foreground_1284565-25544.jpg"
              className="object-cover  h-[100%] w-[100%] rounded-l-lg"
              alt="Mountains"
            ></img>
          </aside>
          <section className="h-[100%] w-[100%] bg-slate-600 flex flex-col rounded-r-sm">
            <div className="bg-gray-50 h-[20%] w-[100%] p-4 text-3xl font-bold">
              Logo
            </div>
            <div className="bg-white h-[65%] w-[100%] p-4">
              <h1 className="text-2xl pb-4">Please Sign In</h1>
              <input
                type="text"
                placeholder="Email"
                className="h-10 w-[100%] border-[2px] p-2 border-sky-700 rounded-md"
                required
              ></input>
              <br></br> <br></br>
              <input
                type="text"
                placeholder="Password"
                className="h-10 w-[100%] border-[2px] p-2 border-sky-700 rounded-md"
                required
              ></input>
              <br></br> <br></br>
              <div>
                <input type="checkbox"></input>
                <span className="text-xl ml-2">Remember me</span>
              </div>
              <br></br>
              <button className=" bg-blue-600 text-white w-[90%] h-10 ml-8 rounded-md shadow-md">
                Next
              </button>
            </div>
            <div className="bg-white h-[15%] w-[100%] p-4 flex flex-row justify-between">
              <div className="text-blue-600 ">
                <a href="#">forgot password</a>
              </div>
              <div className="text-blue-600">
                <a href="#">Dont have account?</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Signup;
