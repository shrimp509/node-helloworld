import React from 'react';
import './index.css';

const Card = () => {
  return (
    <div className="card-wrapper">
      <img className="card-image" src="" alt=""></img>
      <h3 className="card-name">Title</h3>
      <p className="card-desc">description</p>
      <button className="card-btn">Button</button>
    </div>
  )
};

export default Card;    //別的檔不用再指定 import 哪個 const
