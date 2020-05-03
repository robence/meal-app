/* eslint-disable react/prop-types */

import React from 'react';

import HetiMenu from './HetiMenu';
import calculateWeeklyFood from '../utils/calculations';

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
