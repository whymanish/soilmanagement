import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {

    return (
        <div className='h-screen flex items-center justify-center'>
            <div className="w-full max-w-2xl p-6 m-auto  dark:bg-gray-800">
                <h2 className='text-center text-2xl mt-10 font-bold'>Sign up</h2>
                <form className="mt-4">
                    <div className='grid lg:grid-cols-2 lg:gap-4'>

                        <div className="mt-4">
                            <input
                                type="name"
                                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="Full Name"
                            />
                        </div>
                        <div className="mt-4">
                            <input
                                type="email"
                                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="Email Address"
                            />
                        </div>

                        <div className="mt-4">


                            <input
                                type="password"
                                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="Password"
                            />
                        </div>
                        <div className="mt-4">


                            <input
                                type="password"
                                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border rounded-xl dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="Confirm Password"
                            />
                        </div>
                    </div>

                    <div className="mt-6">
                        <button
                            className="w-full px-6 py-4 text-md font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-xl hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                        >
                            Sign up
                        </button>
                    </div>

                </form>

                {/* Social Media Login */}
                

                

                <p className="mt-8 text-sm font-light text-center text-gray-400">
                    Already have an account? <Link to="/signin"><span className="font-medium cursor text-gray-700 dark:text-gray-200 hover:underline">Log in</span></Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;