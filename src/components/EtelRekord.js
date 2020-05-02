import React from 'react';

import PropTypes from 'prop-types';

export default function EtelRekord({ title }) {
  return (
    <tr>
      <td>{title}</td>
      <td>#</td>
      <td>#</td>
      <td>#</td>
      <td>#</td>
      <td>#</td>
    </tr>
  );
}

EtelRekord.propTypes = {
  title: PropTypes.string.isRequired,
};
