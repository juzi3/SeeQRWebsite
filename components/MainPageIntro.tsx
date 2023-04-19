import Logo from '../assets/1.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import LogoParallax from "../components/LogoParallax";
import top from "../assets/1_720.png";
import topMid from "../assets/2_720.png";
import bottomMid from "../assets/3_720.png";
import bottom from "../assets/4_720.png";



const MainPageIntro = () => {
    const height = 50;
    const [isScrolled, setIsScrolled] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.pageYOffset;
          if (scrollTop <= 70) {
            const images = document.querySelectorAll('.image-stack img');
            images.forEach((image, index) => {
              (image as HTMLImageElement).style.animation = `unstack 1s ease-in-out forwards ${index * 0.2}s`;
              
            });
            setIsScrolled(true);
          } else {
            setTimeout(() => {
                const images = document.querySelectorAll('.image-stack img');
                images.forEach((image) => {
                    (image as HTMLImageElement).style.animation = 'stack';
                });
            }, 1000);
            setIsScrolled(false);
          }
        };
      
        window.addEventListener('scroll', handleScroll);
        
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      
    return(
        <div className='flex items-center my-25 pl-50'>
            <div className={`LContainer slideIn ${isScrolled ? 'opacity-100 ' : 'opacity-0'} transition-opacity duration-500`}>
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-emerald-100">SeeQR</span></h1>
                <h2 className='pb-5'><strong>A SQL database efficiency testing tool.</strong></h2>
                <h4>SeeQR is a convenient one-stop shop for efficient SQL database manipulation and performance testing. SeeQR can be used throughout the database life-cycle, from creation to testing.</h4>
            </div>
            {/* <LogoParallax /> */}
            <div className={`image-stack pb-150 ml-60 ${isScrolled ? 'opacity-100 ' : 'opacity-0'} transition-opacity duration-1000`}>
                <img src={top.src} alt="Image 1" />
                <img src={topMid.src} alt="Image 2" />
                <img src={bottomMid.src} alt="Image 3" />
                <img src={bottom.src} alt="Image 4" />
            </div>

        </div>

    );

}

export default MainPageIntro;