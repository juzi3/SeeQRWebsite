import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
// import Image from 'next/image';
// import img from "../assets/1_720.png"
import Teams from '../components/Teams';

const TeamPage = () => {
  return (
    <div className="my-50">
      <NavBar showFadeEffect={false} />
      <div className="flex flex-col justify-center items-center ">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-emerald-100">
            The Team
          </span>
        </h1>
        <Teams />
      </div>
      <Footer />
    </div>
  );
};

export default TeamPage;
