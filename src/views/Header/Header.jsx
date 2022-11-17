/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { links } from './utils/links';
//components/ui
import { LanguageSelector } from './components';
import ChanchiferosBaner from 'utils/images/ChanchiferosBaner';
import shoppingCartImg from 'utils/images/shopping-cart.png';
import { Link } from 'react-router-dom';
import { TranslatedText } from 'components';

const Header = () => {
  const [show, setShow] = useState(true);
  const [scrollHeight, setScrollHeight] = useState(120);

  const styles = {
    active: {
      visibility: 'visible',
      position: 'fixed',
      top: 0,
    },
    hidden: {
      visibility: 'hidden',
      position: 'fixed',
      transform: 'translateY(-100%)',
    },
  };

  const renderLinks = links.map(({ to, text }) => (
    <li
      className=" text-neutral-50 hover:text-neutral-200 focus:text-neutral-200 font-san"
      key={to}
    >
      <Link to={to}>{text}</Link>
    </li>
  ));

  const handleScroll = () => {
    const currentScrollHeight = window.pageYOffset;
    const isScrollingDown = currentScrollHeight > scrollHeight;

    setShow(!isScrollingDown);
    setScrollHeight(currentScrollHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollHeight]);

  return (
    <header
      style={show ? styles.active : styles.hidden}
      className="flex w-full transition-all  bg-green-primary py-6 px-32 justify-between opacity-95 z-50 duration-[0.5s]"
    >
      <Link to={'/chanchiferos_landing2'}>
        <ChanchiferosBaner />
      </Link>
      <div style={{}} className="flex gap-48  items-center">
        <nav>
          <ul className="flex gap-10 ">{renderLinks}</ul>
        </nav>
        <div className="flex items-center gap-6">
          <Link
            className="active:opacity-95 border  border-neutral-background py-2 px-6 text-sm hover:bg-neutral-background transition-all hover:text-green-primary text-neutral-background rounded "
            to={'/chanchiferos_landing2/register'}
          >
            <TranslatedText tid={'register'} />
          </Link>
          <Link
            className="active:opacity-95   hover:border-neutral-background border transition-all hover:bg-green-primary hover:text-neutral-background bg-neutral-background py-2 px-8 text-sm text-green-primary rounded mr-6"
            to={'/chanchiferos_landing2/sign-in'}
          >
            <TranslatedText tid={'signIn'} />
          </Link>
          <LanguageSelector />
          <Link
            to={'/chanchiferos_landing2/cart'}
            className="rounded-full border-2 p-2 border-neutral-secondary hover:scale-105 transition-all active:scale-95 active:opacity-90"
          >
            <img className="w-6 h-6" src={shoppingCartImg} alt="" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
