import Layout from "@/components/Layout";
import React from "react";
import Image from "next/image";
import Hero from "../../public/images/team-2.png"
import ImageOne from "../../public/images/team.png";
import imageone from "../../public/images/about/imageone.png"
import imagetwo from "../../public/images/about/imagetwo.png"
import imagethree from "../../public/images/about/imagethree.png"
import imagefour from "../../public/images/about/imagefour.png"
import imagefive from "../../public/images/about/imagefive.png"
import imagesix from "../../public/images/about/imagesix.png"
import imageseven from "../../public/images/about/imageseven.png"

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
            &ldquo;Our production is laid back on collaborative effort with different
              team across multiple departments to yield significant result&ldquo;
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

        <div className="py-9 flexible border-[#CDDBEC] border-b">
        <div className="flex w-full flex-col space-y-5">
            <h3 className="text-2xl md:text-3xl font-semibold">
            Meet Our Team
            </h3>
            <p className="normal-text leading-12 max-w-2xl italic text-lg">
            &ldquo;Our production is laid back on collaborative effort with different
              team across multiple departments to yield significant result&ldquo;
            </p>
          </div>
            <div className="w-full">
              <Image
                width={0}
                height={0}
                src={Hero}
                alt=""
              />
            </div>
          {/* <div className="images gap-2 grid grid-cols-2 md:grid-cols-4 ">
              <div>
                <Image
                  width={0}
                  height={0}
                  src={imageone}
                  alt=""
                />
              </div>
              <div>
                <Image
                  width={0}
                  height={0}
                  objectFit="cover"
                  src={imagetwo}
                  alt=""
                />
                 <Image
                  width={0}
                  height={0}
                  objectFit="cover"
                  src={imagethree}
                  alt=""
                />
              </div>
             

              <div>
                <Image
                  width={0}
                  height={0}
                  objectFit="cover"
                  src={imagesix}
                  alt=""
                />
                 <Image
                  width={0}
                  height={0}
                  objectFit="cover"
                  src={imagefive}
                  alt=""
                />
                
              </div>
              <div>
                <Image
                  width={0}
                  height={0}
                  objectFit="cover"
                  src={imagefour}
                  alt=""
                />
                 <Image
                  width={0}
                  height={0}
                  objectFit="cover"
                  src={imageseven}
                  alt=""
                />
                
              </div>
          </div> */}
        </div>
      </div>
    </Layout>
  );
};

export default AboutUsPage;
