import NavBar from '../components/NavBar';

import MainPageIntro from '../components/MainPageIntro';
import Demo3d from '../components/Demo3d';
import Demo from '../components/Demo';
import Download from '../components/Download';
import Footer from '../components/Footer'

const HomePage = () => {

  return (
    <>
      <NavBar showFadeEffect={true} />
      <MainPageIntro />
      <Demo3d />
      <Demo />
      <Download />
      <Footer />
      </>
  );
};

export default HomePage;
