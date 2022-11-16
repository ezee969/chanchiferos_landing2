import { TranslatedText } from 'components';

export const links = [
  { to: '/chanchiferos_landing2/', text: 'Home' },
  {
    to: '/chanchiferos_landing2/register',
    text: <TranslatedText tid={'register'} />,
  },
  {
    to: '/chanchiferos_landing2/sign-in',
    text: <TranslatedText tid={'signIn'} />,
  },
  {
    to: '/chanchiferos_landing2/products',
    text: <TranslatedText tid={'products'} />,
  },
  {
    to: '/chanchiferos_landing2/about-us',
    text: <TranslatedText tid={'aboutUs'} />,
  },
];
