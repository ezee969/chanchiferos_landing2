import React from 'react';
import CartItem from './components/CartItem';
import cartPigImg from 'utils/images/cart-pig-2.png';

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
        <div className="w-[27%] px-8 py-9 bg-neutral-secondary rounded-lg">
          <p className="text-xl font-medium text-slate-900 mb-9">Order summary</p>
          <input
            type="email"
            placeholder="Discount code"
            className="mb-2 border-brown-primary w-full py-3 px-3 text-lg rounded-md border  focus:outline-none focus:border-green-primary "
          />
          <button className="mb-3 py-3 w-full text-neutral-background rounded bg-positive-button hover:bg-positive-button-darker active:bg-positive-button-active transition-all">
            Apply the code
          </button>
          <div className="flex flex-col gap-4 py-5 border-b border-slate-300">
            <div className="text-slate-500 flex w-full justify-between">
              <p>Subtotal</p>
              <p className="font-medium">$179,70</p>
            </div>
            <div className="text-slate-500 flex w-full justify-between">
              <p>Discount</p>
              <p className="font-medium">-$0.00</p>
            </div>
            <div className="text-slate-500 flex w-full justify-between">
              <p>VAT +20%</p>
              <p className="font-medium">$35,94</p>
            </div>
          </div>
          <div className="py-6">
            <div className="flex justify-between w-full text-xl font-medium mb-6">
              <p>Order total</p>
              <p>$215,64</p>
            </div>
            <button className="py-2 w-full text-neutral-background rounded bg-positive-button hover:bg-positive-button-darker active:bg-positive-button-active transition-all">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
