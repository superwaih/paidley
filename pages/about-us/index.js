import Layout from "@/components/Layout";
import React from "react";
import Image from "next/image";
import ImageOne from "../../public/images/team.png";
import { values } from "@/utils/data";
import Card from "@/components/landing-page-components/Card";
const AboutUsPage = () => {
  return (
    <Layout>
      <div
        className="w-[80%] mt-4 m-auto
        "
      >
        <div className="flex flex-col space-y-8 items-center justify-center">
          <h3 className="text-2xl md:text-4xl font-semibold">Our Mission</h3>
          <p className="normal-text leading-12 max-w-2xl text-center">
            Paidley is a financial technology company that develops and operates
            payment services, including virtual debit cards, foreign currency
            bank accounts with best low cost exchange rates and money services
            all from a smartphone app. Make easy international payments, send
            money across borders.
          </p>
        </div>

        <div className="py-4 border-[#CDDBEC] border-b"></div>

        <div className="py-8 flexible gap-5 justify-between w-full border-[#CDDBEC] border-b">
          <div className="w-full flex flex-col space-y-4">
            <h3 className="text-2xl md:text-4xl max-w-lg font-semibold">
              We are a team of creators & Innovators{" "}
            </h3>
            <p className="gray-text leading-12 max-w-lg">
              Paidley is a financial technology company that develops and
              operates payment services, including virtual debit cards, foreign
              currency bank accounts with best low cost exchange rates and money
              services all from a smartphone app. Make easy international
              payments, send money across borders.
            </p>
          </div>
          <div className="w-full">
            <Image width={0} height={0} src={ImageOne} alt="" />
          </div>
        </div>

        <div className="py-9 border-[#CDDBEC] border-b">
          <div className="flex flex-col space-y-8 items-center justify-center">
            <h3 className="text-2xl md:text-4xl font-semibold text-center">
              Our Values
            </h3>
            <p className="normal-text leading-12 max-w-2xl italic text-lg text-center">
              "Our production is laid back on collaborative effort with different
              team across multiple departments to yield significant result"
            </p>
          </div>

          <div className="grid gap-5 py-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {values.map((value) => (
              <Card key={value.id} 
              desc={value.desc}
              type="no-readmore"
              feature={value.feature}
              Icon={value.icon} />
            ))}
          </div>
        </div>

        <div className="py-9 border-[#CDDBEC] border-b">
        <div className="flex flex-col space-y-5">
            <h3 className="text-2xl md:text-3xl font-semibold">
            Meet Our Team
            </h3>
            <p className="normal-text leading-12 max-w-2xl italic text-lg">
              "Our production is laid back on collaborative effort with different
              team across multiple departments to yield significant result"
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUsPage;
