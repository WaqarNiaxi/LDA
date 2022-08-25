import React from "react";
import Link from 'next/link'
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const Signup=()=>{
    return(<>
 
            <div className='bggg'>
                <Navbar />
            </div>
<section className="">
  <div className="flex flex-col items-center justify-center py-12 px-2">
      <h1 href="#" className="flex items-center mb-6 text-2xl font-bold">
          
          Sign up Form  
      </h1>
      <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium">User Name</label>
                      <input type="email" name="email" id="email" className=" border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Enter User name" required=""/>
                  </div>

                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium">Contact Num</label>
                      <input type="email" name="email" id="email" className=" border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Enter contact number" required=""/>
                  </div>
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium">Date of Birth</label>
                      <input type="date" name="email" id="email" className=" border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Enter contact number" required=""/>
                  </div>

                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium">Password</label>
                      <input type="password" name="password" id="password" className=" border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Enter password" required=""/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium">Confirm Password</label>
                      <input type="password" name="password" id="password" className=" border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Enter password" required=""/>
                  </div>
                  
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label for="remember">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" className="login-btn w-full p-2 text-xl text-white rounded">Sign in</button>
                  <p className="text-sm font-light text-gray-500 ">
                      You have an account ? <Link href="/login"><a href="#" className="font-medium hover:underline text-black ">Login</a></Link>
                  </p>
                  
              </form>
          </div>
      </div>
  </div>
</section>
<Footer/>
    </>)
}

export default Signup;