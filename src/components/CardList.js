import React from 'react';
import Card from './Card.js';

function CardList({ robots }) {
  return robots.map((user, i) => (
    <Card
      key={i}
      id={robots[i].id}
      name={robots[i].name}
      email={robots[i].email}
    />
  ));
}

export default CardList;
