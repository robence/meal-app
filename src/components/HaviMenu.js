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
            const min = i * 5;
            const max = (i + 1) * 5;
            return (
              <HetiMenu
                // eslint-disable-next-line react/no-array-index-key
                key={i + 1}
                index={i + 1}
                hetiEtel={haviKaja.filter((e, j) => j >= min && j < max)}
              />
            );
          })
      )}
    </Container>
  );
}
