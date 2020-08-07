import React from 'react';
import './index.css';

const Card = (params) => {
  const myClickListener = () => {
    window.location = params.attr.btn.to
  };

  return (
    <div className="card-wrapper">
      <img className="card-image" src={params.attr.imgSrc} alt=""></img>
      <h3 className="card-name">{params.attr.name}</h3>
      <p className="card-desc">{params.attr.desc}</p>
      <button className="card-btn" onClick={myClickListener}>{params.attr.btn.text}</button>
    </div>
  )
};

export default Card;    //別的檔不用再指定 import 哪個 const
