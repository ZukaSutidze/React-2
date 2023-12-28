import React from 'react';
import './App.css';
import Card from './Components/Card.jsx';
import { data } from './cards';

function App() {
  const cards = [];

  for (let i = 0; i < data.length; i++) {
    const el = data[i];

    cards.push(
      <Card
        key={i}
        color={el.color}
        Img={el.Img}
        border={el.border}
        desc={el.desc}
        Learn={el.Learn}
        names={el.name}
      />
    );
  }

  return <>{cards}</>;
}

export default App;
