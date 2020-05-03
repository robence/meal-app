import React from 'react';

import Container from 'react-bootstrap/Container';

import { LEVESEK, FOETELEK, HARMADIK } from '../data/Etelek';
import HetiMenu from './HetiMenu';

function calculateWeeklyFood(previousWeek = []) {
  return FOETELEK;
}

export default function HaviMenu() {
  const elsoHet = calculateWeeklyFood();
  const masodikHet = calculateWeeklyFood();

  return (
    <Container>
      <h2>Havi Menu</h2>
      <HetiMenu index={1} hetiEtel={elsoHet} />
      <HetiMenu index={2} hetiEtel={masodikHet} />
    </Container>
  );
}
