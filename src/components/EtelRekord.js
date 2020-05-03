/* eslint-disable react/prop-types */
import React from 'react';

const Etel = ({ etel, prop }) => (
  <td>
    <p>{etel[prop]}</p>
  </td>
);

export default function EtelRekord({ title, hetiEtel, prop }) {
  return (
    <tr>
      <td>{title}</td>

      {hetiEtel.map((etel) => (
        <Etel key={etel.id} etel={etel} prop={prop} />
      ))}
    </tr>
  );
}
