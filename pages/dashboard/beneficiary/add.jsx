import DashboardLayout from "@/components/dashboard/DashboardLayout";
import SimpleNav from "@/components/dashboard/SimpleNav";
import React from "react";

const AddBeneficiary = () => {
  return (
    <DashboardLayout>
      <SimpleNav title={"Add Beneficiary"} />
      <div className="px-8 md:hidden">
        <h3 className="text-xl font-medium">Add Beneficiary</h3>
      </div>
      <div className="px-5 md:px-8 grid grid-cols-1 gap-4 md:gap-8 my-8 md:mt-12 md:grid-cols-2 ">
        <div className="px-6  flex flex-col space-y-2">
          <label className="text-[#444A58]" htmlFor="firstname">
            Receipient&apos;s Currency
          </label>
          <select type="text" className="input-gray">
            <option value="">EUR</option>
            <option value="">NGN</option>
          </select>
        </div>
        <div className="px-6  flex flex-col space-y-2">
          <label className="text-[#444A58]" htmlFor="firstname">
            Bank Name
          </label>
          <input type="text" className="input-gray" />
        </div>
        <div className="px-6  flex flex-col space-y-2">
          <label className="text-[#444A58]" htmlFor="firstname">
           Bank Name
          </label>
          <input type="text" className="input-gray" />
        </div>
        <div className="px-6  flex flex-col space-y-2">
          <label className="text-[#444A58]" htmlFor="firstname">
          First Name
          </label>
          <input type="text" className="input-gray" />
        </div>{" "}
        <div className="px-6  flex flex-col space-y-2">
          <label className="text-[#444A58]" htmlFor="firstname">
            Bank Swift Code
          </label>
          <input type="text" className="input-gray" />
        </div>
        <div className="px-6  flex flex-col space-y-2">
          <label className="text-[#444A58]" htmlFor="firstname">
           IBAN
          </label>
          <input type="text" className="input-gray" />
        </div>
        <div className="px-6  flex flex-col space-y-2">
          <label className="text-[#444A58]" htmlFor="firstname">
            Account Number
          </label>
          <input type="text" className="input-gray" />
        </div>
        <div className="px-6  flex flex-col space-y-2">
          <label className="text-[#444A58]" htmlFor="firstname">
           Last Name
          </label>
          <input type="text" className="input-gray" />
        </div>
        <div className="px-6  flex flex-col space-y-2">
          <label className="text-[#444A58]" htmlFor="firstname">
            Bank Name
          </label>
          <input type="text" className="input-gray" />
        </div>
        <div className="px-6  flex flex-col space-y-2">
          <label className="text-[#444A58]" htmlFor="firstname">
            Bank Sort Code
          </label>
          <input type="text" className="input-gray" />
        </div>
       
      </div>

      <div className="px-5 md:px-8 flex items-center justify-center py-8 w-full">
        <button className="btn-full max-w-sm">Add Beneficiary</button>
      </div>
    </DashboardLayout>
  );
};

export default AddBeneficiary;
