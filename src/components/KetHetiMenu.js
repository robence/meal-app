/* eslint-disable react/prop-types */

import React from 'react';

import HetiMenu from './HetiMenu';

export default function KetHetiMenu({ index, hetek }) {
  const [elsoHet, masodikHet] = hetek;

  return (
    <>
      <HetiMenu index={2 * index + 1} hetiEtel={elsoHet} />
      <HetiMenu index={2 * index + 2} hetiEtel={masodikHet} />
    </>
  );
}
