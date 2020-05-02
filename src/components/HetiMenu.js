import React from 'react';

import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';

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
          <tr>
            <td>Étel</td>
            <td>#</td>
            <td>#</td>
            <td>#</td>
            <td>#</td>
            <td>#</td>
          </tr>
          <tr>
            <td>Allergének</td>
            <td>#</td>
            <td>#</td>
            <td>#</td>
            <td>#</td>
            <td>#</td>
          </tr>
          <tr>
            <td>Só</td>
            <td>#</td>
            <td>#</td>
            <td>#</td>
            <td>#</td>
            <td>#</td>
          </tr>
          <tr>
            <td>Fehérje</td>
            <td>#</td>
            <td>#</td>
            <td>#</td>
            <td>#</td>
            <td>#</td>
          </tr>
          <tr>
            <td>Szénhidrát</td>
            <td>#</td>
            <td>#</td>
            <td>#</td>
            <td>#</td>
            <td>#</td>
          </tr>
          <tr>
            <td>Zsír</td>
            <td>#</td>
            <td>#</td>
            <td>#</td>
            <td>#</td>
            <td>#</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

HetiMenu.propTypes = {
  index: PropTypes.number.isRequired,
};
