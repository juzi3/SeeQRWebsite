import Link from 'next/link'
import { useEffect, useState } from 'react'

const NavBar = ({showFadeEffect = true}) => {

    const [showNav, setShowNav] = useState(false);
    useEffect(() => {
        if (showFadeEffect) {
            const handleScroll = () => {
              if (window.scrollY >= 100) {
                setShowNav(true);
              } else {
                setShowNav(false);
              }
            };
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            }
        }
        else {
            setShowNav(true);
        }
      }, [showFadeEffect]);
 
    return(
        <>
  <nav
        className={`bg-green-300 p-5 flex flex-row space-between justify-between fixed top-0 left-0 right-0 z-50 ${showNav ? 'opacity-95 ' : 'opacity-0'} transition-opacity duration-500`}
      >
            <div>
                <h2>SeeQR</h2>
            </div>
            <div className = ''>
                <Link href = "/" className = 'px-2.5'>Home</Link>
                <a> | </a>
                <Link href = "/docs" className = 'px-2.5'>Docs</Link>
                <a> | </a>
                <Link href = "/team" className = 'px-2.5'>Team</Link>
            </div>
        </nav>
        </>

    )
}

export default NavBar;
