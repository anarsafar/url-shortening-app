import React from 'react'
import "../css/shortenLinks.css";

function LoadingSpin() {
  return (
    <div className="loading active">
    <svg viewBox="0 0 50 50">
      <circle className="ring" cx="25" cy="25" r="20"></circle>
      <circle className="ball" cx="25" cy="5" r="3.5"></circle>
    </svg>
  </div>
  )
}

export default LoadingSpin