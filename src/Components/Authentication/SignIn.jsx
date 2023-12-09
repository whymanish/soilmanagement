import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className="w-full max-w-md p-6 m-auto  dark:bg-gray-800">
        <h2 className='text-center text-2xl mt-10 font-bold'>Log in</h2>
        <form className="mt-10">
          <div>
            <input
              type="email"
              className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email Address"
            />
          </div>

          <div className="relative mt-4">


            <input
              type={showPassword ? 'text' : 'password'}
              className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={togglePasswordVisibility}
                type="button"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>


          <div className="mt-6">
            <button
              className="w-full px-6 py-4 text-md font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-xl hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              Log in
            </button>
          </div>
          <div className="flex pt-4 items-center justify-center">
            <Link to="/forgot"><span className="text-xs cursor text-gray-600 dark:text-gray-400 hover:underline">Forget Password?</span></Link>
          </div>
        </form>

        {/* Social Media Login */}
        

        
        <p className="mt-8 text-sm font-light text-center text-gray-400">
          Don't have an account? <Link to="/signup"><span className="font-medium cursor text-gray-700 dark:text-gray-200 hover:underline">Create One</span></Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;