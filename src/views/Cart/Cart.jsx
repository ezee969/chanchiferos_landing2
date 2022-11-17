import React from 'react';
import CartItem from './components/CartItem';
import cartPigImg from 'utils/images/cart-pig-2.png';
import Checkout from './components/Checkout';
import PaymentMethod from './components/PaymentMethod';

const Cart = () => {
  const [isBuying, setIsBuying] = React.useState(false);

  const handleIsBuying = () => {
    setIsBuying(!isBuying);
  };

  return (
    <div
      style={{
        // backgroundImage: `url(${heroWave})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: ' 100% 60%',
        backgroundPosition: 'bottom',
      }}
      className="w-full h-screen flex justify-center items-center bg-neutral-background"
    >
      <div className="w-[70%] flex justify-between">
        <div className="w-[70%] px-4 flex flex-col gap-2">
          <p className="text-xl font-medium text-slate-900">Shopping cart</p>
          {/*  */}
          <CartItem
            title={'JAMAL'}
            code={'15AD252A'}
            gender={'Female'}
            img={cartPigImg}
            price={'100.98'}
            size={'XL'}
          />
          <CartItem
            title={'NORBERT'}
            code={'LG3LGAK2'}
            gender={'Male'}
            img={cartPigImg}
            price={'106.28'}
            size={'LG'}
          />
          <CartItem
            title={'RICHARD'}
            code={'5LWPQ42Q'}
            gender={'Female'}
            img={cartPigImg}
            price={'20.18'}
            size={'SM'}
          />
          {/*  */}
        </div>
        <div className="w-[27%] px-8 py-9 bg-neutral-secondary rounded-lg ">
          {!isBuying && <Checkout handleIsBuying={handleIsBuying} />}
          {isBuying && <PaymentMethod />}
        </div>
      </div>
    </div>
  );
};

export default Cart;
