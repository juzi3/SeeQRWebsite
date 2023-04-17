import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import logoTop from "../assets/1_720.png";
import logoTopMiddle from "../assets/2_720.png";
import logoBottomMiddle from "../assets/3_720.png";
import logoBottom from "../assets/4_720.png";

const LogoParallax = () => {
  return (
    <Parallax pages={2} className="">
      <ParallaxLayer offset={0.5} speed={0}>
        <img src={logoBottom.src} className="parallax" />
      </ParallaxLayer>
      <ParallaxLayer offset={0.5} speed={0.1}>
        <img src={logoBottomMiddle.src} className="parallax" />
      </ParallaxLayer>
      <ParallaxLayer offset={0.5} speed={0.2}>
        <img src={logoTopMiddle.src} className="parallax" />
      </ParallaxLayer>
      <ParallaxLayer offset={0.5} speed={0.3}>
        <img src={logoTop.src} className="parallax" />
      </ParallaxLayer>
    </Parallax>
  );
};

export default LogoParallax;
