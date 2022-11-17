import { TranslatedText } from 'components';
import React from 'react';
import heroWave from 'utils/images/wave.png';
import callMaleIcon from 'utils/images/call-male.png';
import mailIcon from 'utils/images/mail2.png';
import chatIcon from 'utils/images/chat.png';

const ContactUs = () => {
  const [firstCardStyle, setFirstCardStyle] = React.useState('hidden');
  const [secondCardStyle, setSecondCardStyle] = React.useState('hidden');

  React.useEffect(() => {
    setTimeout(() => {
      setFirstCardStyle('flex animate-fadeIn');
    }, 100);
    setTimeout(() => {
      setSecondCardStyle('flex animate-fadeIn');
    }, 200);
  }, []);

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
      <div className="flex flex-col w-[65%] gap-14 justify-center items-center ">
        <p className="text-4xl text-slate-800 font-semibold">
          <TranslatedText tid={'contactUsUpper'} />
        </p>
        <div className="p-5 flex gap-28 w-full">
          <div className="h-[440px] shadow-md w-80 py-10 flex flex-col gap-2 items-center animate-fadeIn bg-neutral-50 text-center rounded px-4">
            <img className="w-10 h-10 mb-7" src={callMaleIcon} alt="" />
            <p className="font-medium tracking-wider text-xl mb-6">BY PHONE</p>
            <p className="text-xs font-medium text-slate-600">
              (Monday to Friday, 9am to 6pm PST)
            </p>
            <p className="text-lg text-slate-600 font-medium mb-5">
              North America Toll-Free: <br />
              1-877-93-7483
            </p>
            <p className="text-lg text-slate-600 font-medium">
              International: <br />
              1-604-637-0780
            </p>
          </div>
          <div
            className={`h-[440px] shadow-md w-80 py-10 ${firstCardStyle} flex-col gap-2 items-center  bg-neutral-50 text-center rounded px-4`}
          >
            <img className="w-8 h-8 mb-7" src={mailIcon} alt="" />
            <p className="font-medium tracking-wider text-xl mb-6">BY EMAIL</p>
            <p className="text-lg text-slate-600 font-medium mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              voluptatum labore tempora necessitatibus excepturi maxime ducimus sed.
            </p>
            <button className="w-full py-4"></button>
          </div>
          <div
            className={`h-[440px] shadow-md w-80 py-10 ${secondCardStyle} flex-col gap-2 items-center  bg-neutral-50 text-center rounded px-4`}
          >
            <img className="w-8 h-8 mb-7" src={chatIcon} alt="" />
            <p className="font-medium tracking-wider text-xl mb-6">LIVE CHAT</p>
            <p className="text-lg text-slate-600 font-medium mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rerum
              dolore necessitatibus reiciendis quibusdam laborum et in perferendis
              omnis ea?
            </p>
            <button className="w-full py-4"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
