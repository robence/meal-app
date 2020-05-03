import React from 'react';

import Container from 'react-bootstrap/Container';

import { LEVESEK, FOETELEK, HARMADIK } from '../data/Etelek';
import HetiMenu from './HetiMenu';

export default function HaviMenu() {
  return (
    <Container>
      <h2>Havi Menu</h2>
      <HetiMenu index={1} data={FOETELEK} />
      <HetiMenu index={2} data={FOETELEK} />
    </Container>
  );
}
