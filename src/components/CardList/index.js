import React from 'react';
import './index.css';
import Card from '../Card';

import data from './data';

const CardList = (params) => {
  return (

    <div className="card-list-container">
      {
        data.cardList.map ( card => (
          <Card attr={card} />
        ))
      }
    </div>

  )
}

export default CardList;    //別的檔不用再指定 import 哪個 const
