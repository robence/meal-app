/* eslint-disable react/prop-types */
import React from 'react';
import EtelRekord from './EtelRekord';

export default function EtelTablazat({ hetiEtel }) {
  const tablazatInfo = [
    { title: 'Étel', prop: 'nev' },
    { title: 'Fehérje', prop: 'feherje' },
    { title: 'Zsír', prop: 'zsir' },
    { title: 'Szénhidrát', prop: 'szenhidrat' },
    { title: 'Kalória', prop: 'kaloria' },
    { title: 'Só', prop: 'so' },
    { title: 'Allergének', prop: 'allergenek' },
  ];
  return tablazatInfo.map(({ title, prop }) => (
    <EtelRekord key={prop} title={title} prop={prop} hetiEtel={hetiEtel} />
  ));
}
