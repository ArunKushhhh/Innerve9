import React, { useState, useEffect } from 'react';
import cactus from "../assets/cactus.svg";
import Rocks from "../assets/ROCKS.svg";
import Texture from "../assets/Texture_Sponsor_Us.svg";
import Wooden from "../assets/wooden _block.svg";
import Wooden_mobile from "../assets/wooden_mobile.svg";
import ButtonSponsor from '../components/ButtonSponsor';
import Floating from '../components/Floating';
import bubble_Rock from "../assets/bubble-rock.png";

const SponsorUs = () => {
  // State to track screen width
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Effect to update isMobile when window is resized
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle sponsor form click
  const handleSponsorUsClick = () => {
    const sponsorFormUrl = "https://docs.google.com/forms/d/1ss1KVT5b5aGR8S7zuzEp34wlYNgyG1WyXq2RiEh-qdU/viewform";
    
    // Debugging output to ensure the click works
    console.log('Opening sponsor form...');
    
    // Open the form in a new tab
    window.open(sponsorFormUrl, "_blank", "noopener,noreferrer");
  };

  // Handle brochure click
  const handleGetBrochureClick = () => {
    const brochureUrl = "https://drive.google.com/file/d/your-file-id/view?usp=sharing";
    window.open(brochureUrl, "_blank", "noopener,noreferrer");
  };

  // Select background image based on screen size
  const backgroundImage = isMobile ? Wooden_mobile : Wooden;

  return (
    <div>
      <div className='absolute'>
        <Floating imgSrc={bubble_Rock}/>
      </div>
      {/* Cactus Image */}
      <div className="relative mb-[20px] scale-[2.5] md:scale-[1.5] lg:scale-[1.1] md:-mb-[20px] z-5">
        <img src={cactus} alt="Cactus" />
      </div>

      {/* Middle Section */}
      <div
        className="relative h-[70vh] md:h-[80vh] flex items-center justify-center"
        style={{
          background: "linear-gradient(to bottom, #E1A158, #986A36)",
        }}
      >
        {/* Texture Image - Below Wooden */}
        <div className="absolute inset-0 z-5">
          <img
            src={Texture}
            alt="Texture"
            className="w-full h-full object-cover mix-blend-soft-light"
          />
        </div>

        {/* Wooden Section with Background Image */}
        <div
          className="z-10 flex items-center justify-center w-[100%] md:w-[%] lg:w-[70%] h-[50vh] md:h-[60vh] lg:h-[70vh] bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          {/* Content Inside Wooden */}
          <div className="flex flex-col items-center justify-center gap-[1rem] md:px-[2rem] text-center">
          <div className="w-full">
          <div className="text-left">
            <p className="text-white font-angrybirds sm:text-[3rem] text-[2.5rem] md:text-[2.75rem] ml-[1rem] xl:text-[3rem]">
              WANT TO
            </p>
          </div>

          <div>
            <p className="text-white font-angrybirds sm:text-[5rem] text-[3.5rem] md:text-[6rem] xl:text-[8rem]">
              SPONSOR US!
            </p>
          </div>
        </div>

            <div className="flex flex-col md:flex-row gap-[1rem] md:gap-[3rem]">
             <a href="https://docs.google.com/forms/d/1ss1KVT5b5aGR8S7zuzEp34wlYNgyG1WyXq2RiEh-qdU/edit"><ButtonSponsor Label="FILL THE FORM" onClick={handleSponsorUsClick} /></a>
              {/* <ButtonSponsor Label="GET BROCHURE" onClick={handleGetBrochureClick} /> */}
            </div>
          </div>
        </div>
      </div>

      <div className="relative -mt-[15px] scale-[2] md:scale-[1.5] lg:scale-[1.5] md:-mt-[50px] lg:-mt-[100px] z-5">
        <img src={Rocks} alt="Rocks" />
      </div>

      <div className='absolute w-[100px] h-[100px] -mt-[8rem] -z-10'>
        <Floating imgSrc={bubble_Rock}/>
      </div>
    </div>
  );
};

export default SponsorUs;