import { FaAngleDown } from "react-icons/fa";
import ParticlesBackground from '../../components/ParticlesBackground';
const Kv = ({ onScrollTo }) =>{
  return(
    <div className="flex justify-center overflow-hidden">
      <ParticlesBackground/> 
      <h1 className="w-[80%] lg:w-full text-[12vw] lg:text-[5.5vw] leading-[4rem] lg:leading-[7rem] font-[900] uppercase text-[#003c5b]">
        Hi,I am Dan
        <br />
        Welcome to my website
      </h1>
      <div className="absolute bottom-16 lg:bottom-7 left-[50%] flex justify-center items-center rounded-[99em] m-auto w-14 h-14 lg:w-16 lg:h-16 bg-[#f67410] text-white text-3xl animate-bounceUpDown cursor-pointer" 
      onClick={onScrollTo}>
        <FaAngleDown />
      </div>
    </div>
  )
}

export default Kv