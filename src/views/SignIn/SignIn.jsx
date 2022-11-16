import React from 'react';
import { TranslatedText } from 'components';
import Input from 'views/Register/components/Input';
import heroWave from 'utils/images/wave.png';
import { wachinSvg } from 'utils/images/wachingSvg';

const SignIn = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${heroWave})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: ' 100% 60%',
        backgroundPosition: 'bottom',
      }}
      className="min-h-screen flex items-center w-full justify-center px-5 py-5 dark:bg-slate-800 transition-all"
    >
      <div className="bg-gray-100 dark:bg-slate-700 text-gray-500 rounded-3xl shadow-xl w-[65%] overflow-hidden animate-fadeIn">
        <div className="md:flex w-full m-3 ">
          <div className="hidden md:block w-1/2 rounded-l-xl bg-yellow-secondary py-10 px-10">
            {wachinSvg}
          </div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-10 ">
              <h1 className="font-bold text-3xl text-slate-900 dark:text-neutral-50">
                <TranslatedText tid={'signInUpper'} />
              </h1>
              <p className="dark:text-neutral-300">
                <TranslatedText tid={'enterYourInformationSignIn'} />
              </p>
            </div>
            <div>
              <div className="flex -mx-3">
                <Input
                  name={<TranslatedText tid={'email'} />}
                  type={'email'}
                  placeholder={'johnsmith@example.com'}
                  styles={'w-full'}
                />
              </div>
              <div className="flex -mx-3 mb-2">
                <Input
                  name={<TranslatedText tid={'password'} />}
                  type={'password'}
                  placeholder={'************'}
                  styles={'w-full'}
                />
              </div>
              <div className="flex -mx-3">
                <div className="flex flex-col gap-7  w-full px-3 mb-5">
                  <div className="flex justify-between w-full">
                    <label className="inline-flex items-center cursor-pointer ">
                      <input
                        type="checkbox"
                        className="form-checkbox text-slate-900  w-5 h-5"
                      />
                      <span className="ml-2 text-sm  text-slate-900 dark:text-neutral-50 ">
                        <TranslatedText tid={'rememberMe'} />
                      </span>
                    </label>
                    <p className="text-positive-button cursor-pointer ">
                      <TranslatedText tid={'forgotPassword'} />
                    </p>
                  </div>
                  <button className="block w-full max-w-xs mx-auto bg-positive-button hover:bg-positive-button-darker active:bg-positive-button-active text-white rounded-lg px-3 py-3 font-semibold">
                    <TranslatedText tid={'signIn'} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
