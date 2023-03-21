import React from "react";
import Image from "next/image";
import Logo from "../../public/svgs/logo.svg";
import RegisterImage from "../../public/auth-images/register-one.png"
const RegisterPage = () => {
  return (
    <div className="bg-gradient-to-r h-screen from-[#8DD8F7]/40 to-[#8DD8F7]/10 h-full flex justify-evenly">
      <div className="w-full shadow-md flex flex-col justify-between px-4 py-8 space-y-12 h-full ">
        <Image width={0} height={0} src={Logo} alt="" />   
        <div>
          <h3 className="text-center text-2xl text-black font-semibold">
            Create a Naira, USD and Euro account with ease in less than 5
            minutes
          </h3>
        </div>
        <div className="flex items-center justify-center">
          <Image
            width={0}
            height={0}
            src={RegisterImage}
            alt=""
          />
        </div>

        <div className="flex justify-between w-full gray-text">
          <h3>Paidley. 2023</h3>
          <p>Help Center</p>
          <p>Terms of Service</p>
        </div>
      </div>
      <div className=" w-full flex items-center justify-center">
      <div className="bg-white " >
        <h3>Create Account</h3>
        <form>

        </form>
      </div>
      </div>

 
    </div>
  );
};

export default RegisterPage;
