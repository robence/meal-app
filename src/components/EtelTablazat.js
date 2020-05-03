/* eslint-disable react/prop-types */
import React from 'react';
import EtelRekord from './EtelRekord';

export default function EtelTablazat({ hetiEtel }) {
  const tablazatInfo = [
    { title: 'Nev', prop: 'nev' },
    { title: 'So', prop: 'so' },
    { title: 'Szenhidrat', prop: 'szenhidrat' },
    { title: 'Feherje', prop: 'feherje' },
    { title: 'Zsir', prop: 'zsir' },
    { title: 'Kaloria', prop: 'kaloria' },
    { title: 'Allergenek', prop: 'allergenek' },
  ];
  return tablazatInfo.map(({ title, prop }) => (
    <EtelRekord title={title} prop={prop} hetiEtel={hetiEtel} />
  ));
}
