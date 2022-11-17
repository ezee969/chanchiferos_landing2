import React from 'react';

const Checkout = ({ handleIsBuying }) => {
  return (
    <>
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
        <button
          onClick={handleIsBuying}
          className="py-2 w-full text-neutral-background rounded bg-positive-button hover:bg-positive-button-darker active:bg-positive-button-active transition-all"
        >
          Checkout
        </button>
      </div>
    </>
  );
};

export default Checkout;
