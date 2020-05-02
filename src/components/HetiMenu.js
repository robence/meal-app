import React from 'react';

import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';

import EtelRekord from './EtelRekord';

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
          <EtelRekord title="Étel" />
          <EtelRekord title="Allergének" />
          <EtelRekord title="Só" />
          <EtelRekord title="Fehérje" />
          <EtelRekord title="Szénhidrát" />
          <EtelRekord title="Zsir" />
          <EtelRekord title="Kalória" />
        </tbody>
      </Table>
    </div>
  );
}

HetiMenu.propTypes = {
  index: PropTypes.number.isRequired,
};
