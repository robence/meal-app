import React from 'react';

import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';

import EtelRekord from './EtelRekord';

export default function HetiMenu({ index, data }) {
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
          <EtelRekord prop="nev" data={data} title="Étel" />
          <EtelRekord prop="so" data={data} title="Só" />
          <EtelRekord prop="szenhidrat" data={data} title="Szénhidrát" />
          <EtelRekord prop="feherje" data={data} title="Fehérje" />
          <EtelRekord prop="zsir" data={data} title="Zsir" />
          <EtelRekord prop="kaloria" data={data} title="Kalória" />
          <EtelRekord prop="allergenek" data={data} title="Allergének" />
        </tbody>
      </Table>
    </div>
  );
}

HetiMenu.propTypes = {
  index: PropTypes.number.isRequired,
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    nev: PropTypes.string.isRequired,
    szenhidrat: PropTypes.number.isRequired,
    feherje: PropTypes.number.isRequired,
    zsir: PropTypes.number.isRequired,
    so: PropTypes.number.isRequired,
    allergenek: PropTypes.array.isRequired,
    kategoria: PropTypes.string.isRequired,
    // kaloria: PropTypes.number.isRequired,
  }).isRequired,
};
