import React from 'react';
import { TranslatedText } from 'components';
import miniArrowImg from 'utils/images/mini-arrow.png';
import pig1aboutImg from 'utils/images/pig1about.png';
import pig2aboutImg from 'utils/images/pig2about.png';
import heroWave from 'utils/images/wave.png';

const AboutUs = () => {
  const [imgStyle, setImgStyle] = React.useState('hidden');
  const [parragraphStyle, setParragraphStyle] = React.useState('hidden');

  React.useEffect(() => {
    setTimeout(() => {
      setImgStyle('animate-fadeIn');
    }, 100);
    setTimeout(() => {
      setParragraphStyle('flex flex-col animate-fadeIn flex-col gap-6');
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
      <div className="grid grid-cols-2 w-[65%] gap-8 items-center">
        <div className="h-[500px] grid grid-cols-2 gap-10">
          <div
            className="bg-neutral-secondary animate-fadeIn"
            style={{
              backgroundImage: `url(${pig1aboutImg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: ' 500px ',
              backgroundPosition: 'left',
            }}
          ></div>
          <div
            style={{
              backgroundImage: `url(${pig2aboutImg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: ' 600px ',
              backgroundPosition: 'right',
            }}
            className={`bg-green-primary h-[85%] self-center animate-fadeIn ${imgStyle}`}
          ></div>
        </div>
        <div className={parragraphStyle}>
          <p className="text-4xl font-semibold text-brown-primary">
            <TranslatedText tid="aboutUsUpper" />
          </p>
          <p className="text-slate-500 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi hic,
            laborum neque perferendis pariatur cum voluptas minima magni est
            explicabo et quam voluptatibus, unde aliquam mollitia rem veritatis
            blanditiis quis laboriosam doloribus! Quibusdam distinctio est repellat
            ab molestiae aspernatur dolores dolorem praesentium. Eius asperiores,
            amet molestiae qui ratione praesentium fuga laudantium ea vero suscipit
            nesciunt eos, aperiam ducimus assumenda tempore blanditiis consectetur
            numquam, iste totam ex illo ullam maiores deserunt. Optio nemo libero
            amet officia!
          </p>
          <div className="flex gap-2 items-center">
            <p className="tracking-tight text-positive-button text-sm font-medium">
              <TranslatedText tid="moreAboutUs" />
            </p>
            <img className="w-3 h-3" src={miniArrowImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
