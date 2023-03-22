import React from "react";
import Image from "next/image";
import Logo from "../../public/svgs/logo.svg";
import RegisterImage from "../../public/auth-images/register-one.png";
import Link from "next/link";
import { useRouter } from "next/router";

const RegisterPage = () => {
  const router = useRouter()
  const handleSubmit = (e) =>{
    e.preventDefault()
    router.push("/register/verify-email")
  }
  return (
    <div className="bg-gradient-to-r  h-screen md:py-4 from-[#8DD8F7]/40 to-[#8DD8F7]/10 h-full flex justify-evenly">
      <div className="w-2/5 shadow-md hidden md:flex  flex-col justify-between px-4 py-8 space-y-12 h-full ">
        <Image width={0} height={0} src={Logo} alt="" />
        <div>
          <h3 className="text-center text-2xl text-black font-semibold">
            Create a Naira, USD and Euro account with ease in less than 5
            minutes
          </h3>
        </div>
        <div className="flex items-center justify-center">
          {/* <Image width={0} height={0} src={RegisterImage} alt="" /> */}
        </div>

        <div className="flex justify-between w-full gray-text">
          <h3>Paidley. 2023</h3>
          <p>Help Center</p>
          <p>Terms of Service</p>
        </div>
      </div>
      
      <div className="w-full px-4 md:w-3/5  flex items-center flex-col space-y-4 justify-center ">
    <div className="flex md:hidden justify-start items-start">
     <Image width={0} height={0} src={Logo} alt="" />
     </div>
        <div className="bg-white rounded-lg shadow-md w-full mx-12 max-w-xl">
          <div className="border-[#E5E9F1] border-b-2">
            <h3 className="font-bold text-xl py-4 px-6 normal-text">Create Account</h3>
          </div>

          <form onSubmit={handleSubmit} className="flex py-4 w-full flex-col space-y-4">
           <div className="flex flex-col lg:flex-row">
           <div className="px-6  flex flex-col space-y-2">
              <label className="text-[#444A58]" htmlFor="firstname">
                First Name
              </label>
              <input type="text" className="input-gray" />
            </div>
            <div className="px-6  flex flex-col space-y-2">
              <label className="text-[#444A58]" htmlFor="firstname">
                Middle Name (Optional)
              </label>
              <input type="text" className="input-gray" />
            </div>
           </div>
           <div className="flex flex-col lg:flex-row">
           <div className="px-6  flex flex-col space-y-2">
              <label className="text-[#444A58]" htmlFor="firstname">
                Last Name
              </label>
              <input type="text" className="input-gray" />
            </div>
            <div className="px-6  flex flex-col space-y-2">
              <label className="text-[#444A58]" htmlFor="firstname">
                Phone Number
              </label>
              <input type="text" className="input-gray" />
            </div>
           </div>
            <div className="px-6  flex flex-col space-y-2">
              <label className="text-[#444A58]" htmlFor="email">
               Email
              </label>
              <input type="text" className="input-gray" />
            </div>
            <div className="px-6  flex flex-col space-y-2">
              <label className="text-[#444A58]" htmlFor="email">
               Password
              </label>
              <input type="password" className="input-gray" />
            </div>
            <div className="px-6  flex flex-col space-y-2">
              <label className="text-[#444A58]" htmlFor="email">
               referral Code (Optional)
              </label>
              <input type="text" className="input-gray" />
            </div>
           <div className="px-6">
           <button className="btn-full items-center">Create Account</button>
           </div>
           <div className="flex items-center justify-center">
            <h6 className="gray-text font-semibold">Already have an account? <span className="text-[#074DA2]">
              <Link href="/auth/signin">Sign in
              </Link></span></h6>
           </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
