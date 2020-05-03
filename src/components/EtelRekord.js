/* eslint-disable react/prop-types */
import React from 'react';
import ALLERGENEK from '../utils/constants';

const EtelCella = ({ etel, prop }) => {
  let text = etel[prop];

  if (prop === 'allergenek') {
    text = etel[prop].map((allergenkod) => ALLERGENEK[allergenkod]).join(', ');
  }

  return (
    <td>
      <p>{text}</p>
    </td>
  );
};
export default function EtelRekord({ title, hetiEtel, prop }) {
  return (
    <tr>
      <td>{title}</td>

      {hetiEtel.map((etel) => (
        <EtelCella key={etel.id} etel={etel} prop={prop} />
      ))}
    </tr>
  );
}
