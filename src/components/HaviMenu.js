import React from 'react';

import Container from 'react-bootstrap/Container';
import KetHetiMenu from './KetHetiMenu';

export default function HaviMenu() {
  return (
    <Container>
      <h2>Havi Menü</h2>
      <KetHetiMenu index={0} />
      {/* <KetHetiMenu index={1} /> */}
    </Container>
  );
}
