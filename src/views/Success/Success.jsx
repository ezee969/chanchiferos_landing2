import React from 'react';
import heroWave from 'utils/images/wave.png';
import tickImg from 'utils/images/tick-box.png';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${heroWave})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: ' 100% 60%',
        backgroundPosition: 'bottom',
      }}
      className="w-full h-screen flex justify-center items-center bg-neutral-background"
    >
      <div className="flex flex-col animate-fadeIn w-[35%]  h-96 bg-neutral-background rounded-xl shadow-lg justify-center ">
        <div className="flex gap-5 items-center justify-center h-[55%] bg-emerald-100 w-full rounded-t-xl">
          <img className="" src={tickImg} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center w-full h-[45%] text-center gap-7">
          <div className="flex flex-col gap-1">
            <p className="text-slate-800 tracking-tight text-2xl font-bold">
              Great!
            </p>
            <p className="text-slate-700 font-medium">Your pig is on its way</p>
          </div>
          <Link to={'/chanchiferos_landing2/'}>
            <button className="block w-full max-w-xs mx-auto bg-positive-button hover:bg-positive-button-darker active:bg-positive-button-active text-white rounded-lg px-3 py-3 font-medium">
              Take me back to the home page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
