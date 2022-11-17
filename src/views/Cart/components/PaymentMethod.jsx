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
        <div className="flex gap-10 flex-wrap">
          <div className="flex flex-col mr-4  gap-1 cursor-pointer">
            <p className="font-medium  tracking-tight text-slate-500 text-sm">QR</p>
            <img
              className="border border-yellow-secondary h-14 w-14 bg-slate-50 rounded-lg p-1"
              src={qrImg}
              alt=""
            />
          </div>
          <div className="flex mr-4 flex-col gap-1 cursor-pointer">
            <p className="font-medium  tracking-tight text-slate-500 text-sm">
              CRYPTO
            </p>
            <img
              className="border border-yellow-secondary h-14 w-14 bg-slate-50 rounded-lg p-1"
              src={cryptoImg}
              alt=""
            />
          </div>{' '}
          <div className="flex  mr-4 flex-col gap-1 cursor-pointer">
            <p className="font-medium  tracking-tight text-slate-500 text-sm">
              CASH
            </p>
            <img
              className="border border-yellow-secondary h-14 w-14 bg-slate-50 rounded-lg p-1"
              src={cashImg}
              alt=""
            />
          </div>{' '}
          <div className="flex flex-col gap-1 cursor-pointer">
            <p className="font-medium  tracking-tight text-slate-500 text-sm">
              CREDIT CARD
            </p>
            <img
              className="border border-yellow-secondary h-14 w-14 bg-slate-50 rounded-lg p-1"
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
