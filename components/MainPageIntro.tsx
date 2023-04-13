import Logo from '../assets/1.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';


const MainPageIntro = () => {
    const [isScrolled, setIsScrolled] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset < 70) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <div className='flex my-50'>
            <div className={`ml-30 pr-60 slideIn ${isScrolled ? 'opacity-100 ' : 'opacity-0'} transition-opacity duration-500`}>
                <h1 className='text-6xl'>SeeQR</h1>
                <h2 className=''><strong>A SQL database efficiency testing tool.</strong></h2>
                <h4>SeeQR is a convenient one-stop shop for efficient SQL database manipulation and performance testing. SeeQR can be used throughout the database life-cycle, from creation to testing.</h4>
            </div>
            <Image src = {Logo} alt = 'logo' height = '200'/>
        </div>

    );

}

export default MainPageIntro;