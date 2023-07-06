import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../assets/1.png";

const NavBar = ({ showFadeEffect = true }) => {
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
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setShowNav(true);
    }
  }, [showFadeEffect]);

  return (
    <>
      <nav
        className={`navbar fixed px-5 flex flex-row items-center space-between justify-between fixed top-0 left-0 right-0 ${
          showNav ? "opacity-100 " : "opacity-0"
        } transition-opacity duration-300`}
      >
        <div className="flex items-center">
          <h2 className="text-3xl text-white">SeeQR</h2>
          <img src={Logo.src} className="logo" />
        </div>
        <div className="pr-15 ">
          <Link href="/" className="px-10 link text-white">
            Home
          </Link>
          <a> | </a>
          <Link href="/docs" className="px-10 link text-white">
            Docs
          </Link>
          <a> | </a>
          <Link href="/team" className="px-10 link text-white">
            Team
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
