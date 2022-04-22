import React from 'react'
import { moveClockwise } from '../state/action-creators';
import { connect } from 'react-redux';

export default function Wheel(props) {
  const { moveClockwise } = props;

  const handleClockwise = (evt) => {
    const { value } = evt.target;
    moveClockwise(value);
};

  return (
    <div id="wrapper">
      <div id="wheel">
        <div className="cog active" style={{ "--i": 0 }}>B</div>
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" >Counter clockwise</button>
        <button id='clockwiseBtn' onClick={handleCounterClockwise}>
                    Clockwise
                </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      wheel: state.wheel.counter,
  };
};

export default connect(mapStateToProps, { moveClockwise})(Wheel);
