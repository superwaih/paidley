import DashboardLayout from "@/components/dashboard/DashboardLayout";
import SimpleNav from "@/components/dashboard/SimpleNav";
import { PhysicalCard } from "@/public/svgs/physical-card";
import { useRouter } from "next/router";
import Image from "next/image";
import React, { useState } from "react";
import CardVirtual from "../../../public/images/virtual-card.png";
import CardSample from "../../../public/images/card-sample.png";
import { AiOutlineEye } from "react-icons/ai";
import { BsCreditCard2Back } from "react-icons/bs";
import { RxCaretRight } from "react-icons/rx";
const CardsPage = () => {
  const router = useRouter();
  const [cardType, setCardType] = useState("physical");
  return (
    <DashboardLayout>
      <SimpleNav title={"virtual cards"} />

      <div className="px-5 md:px-8 ">
        <button className=" rounded-[12px] border text-brand-color hover:bg-brand-color hover:text-white duration-300 border-brand-color px-4 py-2">
          Back
        </button>
      </div>

      <div className="flex px-8 justify-center duration-300 items-center  w-full">
        <div className="flex mt-[10px] md:mt-[90px] duration-300  rounded-md border  hover:[#F3F7FA] bg-white px-6 py-4 flex-col space-y-6 rouned-md shadow-md max-w-lg">
          <div className=" justify-between w-full">
            <div className="justify-center items-center md:px-16 duration-300 gap-4 flex">
              <button
                onClick={() => setCardType("physical")}
                className={
                  cardType === "physical"
                    ? "border-brand-color border-b-2"
                    : "gray-text"
                }
              >
                Physical Card
              </button>
              <button
                onClick={() => setCardType("virtual")}
                className={
                  cardType === "virtual"
                    ? "border-brand-color border-b-2"
                    : "gray-text"
                }
              >
                Virtual Card
              </button>
            </div>
          </div>
          {/* <PhysicalCard /> */}
          {cardType === "physical" && (
            <div className="flex items-center justify-center">
              <Image width={0} height={0} src={CardSample} alt="" />
            </div>
          )}
          {cardType === "virtual" && (
            <div
              className="flex items-center duration-300 space-y-4 flex-col justify-center
             "
            >
              <Image width={0} height={0} src={CardVirtual} alt="" />
              <button
                className="bg-[#E8F7FD] rounded-md gap-2  text-brand-color p-3 flex
             items-center"
              >
                {" "}
                <AiOutlineEye /> Show card details
              </button>
            </div>
          )}

          <div className="flex flex-col gap-4">
            {cardType === "physical" && (
              <>
                <button
                  onClick={() => router.push("/dashboard/transfer/send-money")}
                  className="btn-full rounded-[12px] duration-300"
                >
                  Proceed
                </button>
                <button
                  onClick={() => router.back()}
                  className="text-[#306BB1] flex w-full justify-center font-semibold items-center text-center"
                >
                  Cancel and go back
                </button>
              </>
            )}

            {cardType === "virtual" && (
              <div className="bg-[#F3F7FA] duration-300 rounded-md cursor-pointer py-3 px-2 flex justify-between sm:flex-row  border-[#306BB2] border ">
                 
                  <div className="flex sm:flex-row flex-col gap-2">
                  <div className="rounded-full w-fit bg-[#EAF0F6] p-3">
                    <BsCreditCard2Back className="text-[#ACC4E0] text-2xl" />
                  </div>

                    <div className="">
                    <h3 className="font-semibold text-brand-color">
                      Manage Card
                    </h3>
                    <p className="gray-text">Update your card info.</p>
                    </div>
                  </div>
                  <div className="flex  md:justify-end items-center">
                    <RxCaretRight className="text-brand-color text-2xl" />
                  </div>
                
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CardsPage;
