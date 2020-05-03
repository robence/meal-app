/* eslint-disable react/prop-types */

import React from 'react';

import Table from 'react-bootstrap/Table';

import EtelTablazat from './EtelTablazat';

export default function HetiMenu({ index, hetiEtel }) {
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
          <EtelTablazat hetiEtel={hetiEtel} />
        </tbody>
      </Table>
    </div>
  );
}
