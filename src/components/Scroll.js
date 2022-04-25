import React from 'react';

function Scroll(props) {
  return (
    <div
      style={{
        overflowY: 'scroll',
        borderTop: '1px gray solid',
        height: '610px',
      }}
    >
      {props.children}
    </div>
  );
}

export default Scroll;
