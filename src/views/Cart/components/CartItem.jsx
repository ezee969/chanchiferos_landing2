import React from 'react';
import greenHeartImg from 'utils/images/green-heart.png';
import trashCanImg from 'utils/images/trash.png';

const CartItem = ({ title, size, gender, code, price, img }) => {
  return (
    <div className="flex flex-col border-b border-slate-300">
      <div className="py-8 flex gap-3">
        <div className="rounded-xl">
          <img className="w-36 h-28 rounded-xl" src={img} alt="" />
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-1">
            <p className="text-lg font-medium text-slate-800">{title}</p>
            <p className=" text-slate-600">
              Size: <span className="font-medium">{size}</span>
            </p>
            <p className=" text-slate-600">
              Gender: <span className="font-medium">{gender}</span>
            </p>
            <p className=" text-slate-600">
              {' '}
              Code: <span className="font-medium">{code}</span>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 cursor-pointer">
              <img src={trashCanImg} alt="" className="w-6 h-6" />
              <p className="text-slate-500">Remove</p>
            </div>
            <div className="flex gap-2 cursor-pointer">
              <img className="w-6 h-6 " src={greenHeartImg} alt="" />
              <p className="text-slate-500">Save</p>
            </div>
          </div>
          <div className="flex gap-2 items-baseline">
            <select className="w-20 h-9 rounded-md border border-slate-300 focus:outline-none focus:border-green-primary">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <p className="text-slate-800 text-lg font-medium">$ {price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
