/* eslint-disable react/prop-types */

import React from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

import EtelTablazat from './EtelTablazat';

export default function HetiMenu({ index, hetiEtel }) {
  return (
    <Card
      style={{
        width: '100%',
        margin: '2rem 0',
        padding: '10px',
        backgroundColor: 'rgba(255,255,255,.5)',
      }}
    >
      <Card.Body>
        <Card.Title>
          <h4>{`${index}. Heti Menu`}</h4>
        </Card.Title>
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
      </Card.Body>
    </Card>
  );
}
