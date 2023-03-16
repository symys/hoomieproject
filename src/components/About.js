import React from 'react'

function About() {
  return (
    <div className="bg-light2 h-full text-dark1 font-montserrat flex lg:flex-row flex-col pl-32 ">
       <div className="flex flex-col items-center pt-[10em]">
        <div className="text-7xl font-bakbak self-start">Hoomie</div>
        <div className="text-4xl pt-2 self-start">About Us</div>
        <div className="text-xl mt-16">
          HOOMIE provides a variety of quality collections for residential, office, accessories, and commercial spaces as a shop with a "one stop shopping" concept for all furniture products. HOOMIE offers a wide range of styles and cutting-edge designs to meet customers' desires for dream furniture. 
        </div>
        <div className="text-xl mt-10">
          HOOMIE furnishing develops the latest concept of "innovative and durable design at an affordable price" with customer needs and tastes in mind.
        </div>
      </div>
      <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/v6FEvLcnzP0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default About