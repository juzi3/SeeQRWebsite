import NavBar from '../components/NavBar';

import MainPageIntro from '../components/MainPageIntro';
import Demo from '../components/Demo';
import Download from '../components/Download';
import { useEffect, useSt } from 'react';

const HomePage = () => {

  return (
    <>
      <NavBar showFadeEffect={true} />
      <MainPageIntro />
      <Demo />
      <Download />
    </>
  );
};

export default HomePage;
