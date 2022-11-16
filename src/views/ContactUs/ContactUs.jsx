import React from 'react';
import heroWave from 'utils/images/wave.png';

const ContactUs = () => {
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
      ContactUs
    </div>
  );
};

export default ContactUs;
