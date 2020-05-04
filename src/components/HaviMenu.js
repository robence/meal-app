import React from 'react';

import Container from 'react-bootstrap/Container';
import calculateMonthlyFood from '../utils/calculations';

import HetiMenu from './HetiMenu';

export default function HaviMenu() {
  const haviKaja = calculateMonthlyFood();

  return (
    <Container>
      <h2>Havi Menü</h2>
      {haviKaja.length < 20 ? (
        <div>nincs eleg etel</div>
      ) : (
        Array(4)
          .fill(null)
          .map((_, i) => {
            return (
              <HetiMenu
                index={i + 1}
                hetiEtel={haviKaja.splice(5 * i, 5 * i + 5)}
              />
            );
          })
      )}
    </Container>
  );
}
