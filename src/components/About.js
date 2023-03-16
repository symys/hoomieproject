import React from 'react'

function About() {
  return (
    <div className="bg-light2 h-full text-dark1 font-montserrat flex lg:flex-row flex-col pl-32 pt-[2em] pb-[10em] items-center">
       <div className="flex flex-col items-center basis-1/2">
        <div className="text-7xl font-bakbak self-start">Hoomie</div>
        <div className="text-4xl pt-2 self-start">About Us</div>
        <div className="text-xl pt-12">
          HOOMIE provides a variety of quality collections for residential, office, accessories, and commercial spaces as a shop with a "one stop shopping" concept for all furniture products. HOOMIE offers a wide range of styles and cutting-edge designs to meet customers' desires for dream furniture. 
        </div>
        <div className="text-xl mt-10">
          HOOMIE furnishing develops the latest concept of "innovative and durable design at an affordable price" with customer needs and tastes in mind.
        </div>
      </div>
      <div className='w-[50em] pl-24'>
      <iframe width="600" height="330" src="https://www.youtube.com/embed/v6FEvLcnzP0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='rounded-[1em]'></iframe>
      </div>
    </div>
  )
}

export default About