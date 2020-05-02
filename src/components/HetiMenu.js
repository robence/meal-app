import React from 'react';

import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';

import EtelRekord from './EtelRekord';

import ETELEK from '../data/Etelek';

export default function HetiMenu({ index }) {
  return (
    <div>
      <p>{`${index}. Heti Menu`}</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Hétfő</th>
            <th>Kedd</th>
            <th>Szerda</th>
            <th>Csütörtök</th>
            <th>Péntek</th>
          </tr>
        </thead>
        <tbody>
          <EtelRekord prop="nev" data={ETELEK} title="Étel" />
          <EtelRekord prop="so" data={ETELEK} title="Só" />
          <EtelRekord prop="szenhidrat" data={ETELEK} title="Szénhidrát" />
          <EtelRekord prop="feherje" data={ETELEK} title="Fehérje" />
          <EtelRekord prop="zsir" data={ETELEK} title="Zsir" />
          <EtelRekord prop="kaloria" data={ETELEK} title="Kalória" />
          <EtelRekord prop="allergenek" data={ETELEK} title="Allergének" />
        </tbody>
      </Table>
    </div>
  );
}

HetiMenu.propTypes = {
  index: PropTypes.number.isRequired,
};
