import React from 'react';

import Container from 'react-bootstrap/Container';

import HetiMenu from './HetiMenu';

export default function HaviMenu() {
  return (
    <Container>
      <h2>Havi Menu</h2>
      <HetiMenu index={1} />
      <HetiMenu index={2} />
    </Container>
  );
}
