import React from 'react';

function Scroll(props) {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: '1px transparent solid',
        height: '610px',
      }}
    >
      {props.children}
    </div>
  );
}

export default Scroll;
