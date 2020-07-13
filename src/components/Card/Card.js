import React from "react";
import TimeCountDown from "./TimeCountDown";
import "./Card.scss";

class Card extends React.PureComponent {
  render() {
    console.log('CardRender')
    const { dataItem, removeCardFromId } = this.props;
    return (
      <div className="card">
        <div className="ctn-img">
          <img src={dataItem.imageUrl} />
        </div>
        <div className="ctn-name">
          <img
            width={15}
            height={15}
            src="https://dummyimage.com/200x200/000/fff"
          />
          <span className="span-txt-name">
            <div className="txt-name"> {dataItem.name} </div>
          </span>
        </div>
        <div className="quantity-item">1 Items</div>
        <div className="quantity-panto">
          <img
            width={15}
            height={15}
            src="https://dummyimage.com/200x200/000/fff"
          />
          <span className="txt-panto">{dataItem.quantity} PANTO POINT</span>
        </div>
        <div className="time-remaining">
          <img
            width={15}
            height={15}
            src="https://dummyimage.com/200x200/000/fff"
          />{" "}
          <span className="txt-time">
            {" "}
            <TimeCountDown
              id={dataItem.id}
              removeCardFromId={removeCardFromId}
              remainTime={dataItem.time}
            />{" "}
          </span>
        </div>
      </div>
    );
  }
}

export default Card;
