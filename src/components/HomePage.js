import React from "react";
import homeimg from "../images/landingPageBg.jpg"


function HomePage() {
  return (
    <div className="bg-light2 h-screen text-dark1 font-bakbak ">
      <div className="flex lg:flex-row flex-col items-center self-center h-screen justify-evenly lg:pl-32 pl-16 lg:pr-32 lg:pt-0 pt-[20em]">
        <div className="lg:w-[50em] w-[16em] flex flex-col lg:gap-6 gap-2">
          <div className="lg:text-8xl text-2xl font-bold tracking-wider">Hoomie</div>
          <div className="lg:text-4xl text-xl">Minimalist Sofa</div>
          <div className="lg:text-2xl text-base text-dark2 leading-8 font-montserrat lg:mt-6 mt-2">Since 2019, minimalist sofa decor has been popular. <br/>Millennials look to the combination of modern and<br/>semi-classical decor for inspiration.</div>
          <div>
            <button className="lg:text-2xl text-xs font-montserrat bg-dark1 hover:bg-dark2 hover:scale-110 duration-500 text-white py-4 lg:px-10 px-2 rounded tracking-wider lg:mt-6 mt-2">Add to your cart - $54</button>
          </div>
        </div>
        <div className="pt-[3em]">
          <img src={homeimg} alt="homeimg" className="lg:h-[35em] h-[10em] rounded-[3em] shadow-2xl "/>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
