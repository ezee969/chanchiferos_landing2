import React from 'react';
import qrImg from 'utils/images/qr.png';
import cryptoImg from 'utils/images/crypto.png';
import cashImg from 'utils/images/cash.png';
import creditCardImg from 'utils/images/credit-card.png';
import { Link } from 'react-router-dom';

const PaymentMethod = ({ handleIsCheckingOut }) => {
  return (
    <>
      <p className="text-xl font-medium text-slate-900 mb-9">Checkout</p>
      <p className=" font-medium text-slate-500 mb-6">Select your payment method</p>
      <div>
        <div className="flex  gap-4 flex-wrap justify-center">
          <div className="justify-center flex h-28 bg-slate-50 flex-col  gap-1 cursor-pointer items-center border border-green-primary rounded-xl px-3 w-28 py-2">
            <p className="font-medium  tracking-tight text-slate-500 text-sm">QR</p>
            <img
              className="h-14 w-14 bg-slate-50 rounded-lg p-2"
              src={qrImg}
              alt=""
            />
          </div>
          <div className="justify-center flex  h-28 bg-slate-50   flex-col gap-1 cursor-pointer items-center border border-green-primary rounded-xl px-3 w-28 py-3">
            <p className="font-medium  tracking-tight text-slate-500 text-sm">
              CRYPTO
            </p>
            <img
              className="h-14 w-14 bg-slate-50 rounded-lg p-2"
              src={cryptoImg}
              alt=""
            />
          </div>{' '}
          <div className="justify-center flex  h-28 bg-slate-50    flex-col gap-1 cursor-pointer items-center border border-green-primary rounded-xl px-3 w-28 py-2">
            <p className="font-medium  tracking-tight text-slate-500 text-sm">
              CASH
            </p>
            <img
              className="h-14 w-14 bg-slate-50 rounded-lg p-2"
              src={cashImg}
              alt=""
            />
          </div>{' '}
          <div className="justify-center flex h-28 bg-slate-50  flex-col gap-1 cursor-pointer items-center border border-green-primary rounded-xl px-3 w-28 py-2">
            <p className="font-medium  tracking-tight text-slate-500 text-sm">
              CREDIT CARD
            </p>
            <img
              className="h-14 w-14 bg-slate-50 rounded-lg p-2"
              src={creditCardImg}
              alt=""
            />
          </div>
        </div>
        <div className="w-full border-b border-slate-300 my-6"></div>
        <Link to={'/chanchiferos_landing2/success'}>
          <button
            onClick={{ handleIsCheckingOut }}
            className="py-2 w-full text-neutral-background rounded bg-positive-button hover:bg-positive-button-darker active:bg-positive-button-active transition-all"
          >
            Buy now
          </button>
        </Link>
      </div>
    </>
  );
};

export default PaymentMethod;
