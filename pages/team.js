import NavBar from '../components/NavBar';
// import Image from 'next/image';
// import img from "../assets/1_720.png"
import Teams from '../components/Teams';

const TeamPage = () => {
  return (
    <div className="mt-50">
      <NavBar showFadeEffect={false} />
      <div className='flex flex-col justify-center items-center'>
        <h1 className="text-4xl">The Team</h1>
        <Teams />
      </div>
    </div>
  );
};

export default TeamPage;
