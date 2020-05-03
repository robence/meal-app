/* eslint-disable react/prop-types */

import React from 'react';

import { LEVESEK, FOETELEK, HARMADIK } from '../data/Etelek';
import HetiMenu from './HetiMenu';

function calculateWeeklyFood(previousWeek = []) {
  return FOETELEK;
}

export default function KetHetiMenu({ index }) {
  const elsoHet = calculateWeeklyFood();
  const masodikHet = calculateWeeklyFood(elsoHet);

  return (
    <>
      <HetiMenu index={2 * index + 1} hetiEtel={elsoHet} />
      <HetiMenu index={2 * index + 2} hetiEtel={masodikHet} />
    </>
  );
}
