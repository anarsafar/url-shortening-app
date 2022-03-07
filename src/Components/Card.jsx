import React from "react";
import "../css/card.css";

const Card = (props) => {
  const { isCopied, btnID, btnCopy, result } = props.data;
  let ui = result.map((item) => (
    <div className="card" key={item.code}>
      <p className="orginal">{item.original_link}</p>
      <div className="left">
        <p className="short">{item.full_short_link}</p>
        <button
          className="btn"
          onClick={() => props.handleCopy(item.full_short_link, item.code)}
          style={{
            backgroundColor: isCopied && btnID === item.code ? btnCopy : null,
          }}
        >
          {isCopied && btnID === item.code ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  ));
  return ui;
};

export default Card;
