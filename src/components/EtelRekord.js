import React from 'react';

import PropTypes from 'prop-types';

export default function EtelRekord({ title, data, prop }) {
  return (
    <tr>
      <td>{title}</td>

      {data.map((etel) => (
        <td key={etel.id}>{etel[prop]}</td>
      ))}
    </tr>
  );
}

EtelRekord.propTypes = {
  title: PropTypes.string.isRequired,
  prop: PropTypes.string.isRequired,
  /* eslint-disable-next-line */
  data: PropTypes.object.isRequired,
};
