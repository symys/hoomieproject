import React from "react";
import delivery from "../images/fastdelivery.png";
import guarantee from "../images/guarantee.png";
import moneyback from "../images/moneyback.png";
import pencil from "../images/pencil.png";

function Services() {
  return (
    <div className="bg-light2 h-full text-dark1 font-montserrat flex lg:flex-row flex-col pl-32 pt-[10em]">
      <div className="flex flex-col items-center pt-[10em]">
        <div className="text-7xl font-bakbak self-start">Hoomie</div>
        <div className="text-4xl pt-2 self-start">Services</div>
        <div className="text-xl mt-16">
          Through our services, we strive to provide our customerswith
          satisfaction. At Hoomie, you can get free delivery and installation
          services with a certain minimum purchase, guaranteed best price and
          quality so you don't overpay for the product you've purchased, simple
          process of returning and exchanging goods if the product does not meet
          your expectations.
        </div>
        <div className="text-xl mt-10">
          Of course, a modern strategy to elevate our products above competitors
          is to focus on customer pleasure. We strive to provide our clients
          with a positive buying experience because of this.
        </div>
      </div>

      <div className="flex flex-col gap-6 basis-1/2 text-center items-center justify-center m-16 scale-75">
        <div className="flex lg:flex-row flex-col gap-6 ">
          <div className="bg-dark1 text-light1 p-[2em] object-center">
            <img src={guarantee} alt="guarantee" className="h-[12em]"/>
            <div className="flex w-[12em] text-lg">
              Easily warranty digitally
              <br />
              with E-Warranty
            </div>
          </div>
          <div className="bg-light1 text-dark1 p-[2em] items-center justify-center h-full gap-10 flex flex-col">
            <img src={delivery} alt="delivery"  className="w-[16em]"/>
            <div className=" w-[12em] text-lg ">
              Free shipping and
              <br />
              installation fees
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-6">
          <div className="bg-light1 text-dark1 p-[2em] flex flex-col items-center ">
            <img src={moneyback} alt="moneyback"  className="w-[12em]"/>
            <div className="w-[12em] text-lg">
              100% Satisfaction
              <br />
              guarantee
            </div>
          </div>
          <div className="bg-dark1 text-light1 p-[2em] gap-8 flex flex-col items-center">
            <img src={pencil} alt="pencil"  className="w-[10em]"/>
            <div className=" w-[12em] text-lg">
              Free interior design
              <br />
              service
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
