import React from "react";
import homeimg from "../images/landingPageBg.jpg"


function HomePage() {
  return (
    <div className="bg-light2 h-screen text-dark1 font-bakbak ">
      <div className="flex flex-row items-center self-center h-screen justify-evenly pl-32 pr-32">
        <div className="w-[60em] flex flex-col gap-6">
          <div className="text-8xl font-bold tracking-wider">Hoomie</div>
          <div className="text-4xl ">Minimalist Sofa</div>
          <div className="text-2xl text-dark2 leading-8 font-montserrat mt-6">Since 2019, minimalist sofa decor has been popular. <br/>Millennials look to the combination of modern and<br/>semi-classical decor for inspiration.</div>
          <div>
            <button className="text-2xl font-montserrat bg-dark1 hover:bg-dark2 hover:scale-110 duration-500 text-white py-4 px-10 rounded tracking-wider mt-6">Add to your cart - $54</button>
          </div>
        </div>
        <div>
          <img src={homeimg} alt="homeimg" className="h-[35em] rounded-[3em] shadow-2xl "/>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
