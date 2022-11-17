import React from 'react';
import CartItem from './components/CartItem';

const Cart = () => {
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
            img={''}
            price={'100.98'}
            size={'XL'}
          />
          <CartItem
            title={'NORBERT'}
            code={'LG3LGAK2'}
            gender={'Male'}
            img={''}
            price={'106.28'}
            size={'LG'}
          />
          <CartItem
            title={'RICHARD'}
            code={'5LWPQ42Q'}
            gender={'Female'}
            img={''}
            price={'20.18'}
            size={'SM'}
          />
          {/*  */}
        </div>
        <div className="w-[27%] px-8 py-9 bg-neutral-secondary rounded-lg">
          <p className="text-xl font-medium text-slate-900">Order summary</p>
          <input
            type="email"
            placeholder="Discount code"
            className="mb-2 border-brown-primary w-full py-3 px-3 text-lg rounded-md border  focus:outline-none focus:border-green-primary "
          />
          <button className="py-3 w-full text-neutral-background rounded bg-positive-button hover:bg-positive-button-darker active:bg-positive-button-active transition-all">
            Apply the code
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
