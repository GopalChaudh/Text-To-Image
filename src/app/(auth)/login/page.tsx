import Link from 'next/link';
import React from 'react';

const Page: React.FC = () => {
  return (
    <div className="font-poppins">
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-600"
	  >
        <div className="w-full sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 bg-white rounded-lg overflow-hidden flex justify-between">
          <div
            className="hidden lg:block w-1/2 bg-cover bg-center"
            style={{ backgroundImage: "url('ShowPiece.png')" }}
          ></div>
          <form className="w-full lg:w-1/2 p-8">
            <h1 className="text-3xl font-bold text-center mb-12">Member Login</h1>
            <div className="mb-6 relative">
              <input
                className="input100 block w-full bg-gray-200 border-none rounded-lg py-3 px-4 focus:bg-gray-300 focus:outline-none"
                type="text"
                placeholder="Email"
              />
              <i className="fa fa-envelope absolute top-1/2 transform -translate-y-1/2 left-4 text-gray-500"></i>
            </div>
            <div className="mb-6 relative">
              <input
                className="input100 block w-full bg-gray-200 border-none rounded-lg py-3 px-4 focus:bg-gray-300 focus:outline-none"
                type="password"
                placeholder="Password"
              />
              <i className="fa fa-lock absolute top-1/2 transform -translate-y-1/2 left-4 text-gray-500"></i>
            </div>
            <div className="mb-6">
              <button className="login100-form-btn w-full py-3 rounded-lg bg-green-500 text-white font-semibold hover:bg-gray-700 transition duration-300">
                Login
              </button>
            </div>
            <div className="text-center">
              <span className="txt1 text-xs text-gray-500">Forgot</span>
              <Link href="signUp" className="txt2 text-xs text-gray-600">
                Username / Password?
              </Link>
            </div>
            <div className="text-center pt-16">
              <Link href="/signUp" className="txt2 text-xs text-gray-600 flex items-center justify-center">
                Create your Account
                <i className="fa fa-long-arrow-right ml-1"></i>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;