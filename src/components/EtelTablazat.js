/* eslint-disable react/prop-types */
import React from 'react';
import EtelRekord from './EtelRekord';

export default function EtelTablazat({ hetiEtel }) {
  const tablazatInfo = [
    { title: 'Étel', prop: 'nev' },
    { title: 'Só', prop: 'so' },
    { title: 'Szénhidrát', prop: 'szenhidrat' },
    { title: 'Fehérje', prop: 'feherje' },
    { title: 'Zsír', prop: 'zsir' },
    { title: 'Kalória', prop: 'kaloria' },
    { title: 'Allergének', prop: 'allergenek' },
  ];
  return tablazatInfo.map(({ title, prop }) => (
    <EtelRekord title={title} prop={prop} hetiEtel={hetiEtel} />
  ));
}
