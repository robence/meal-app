/* eslint-disable react/prop-types */
/* eslint-disable  */
import React from 'react';
import ALLERGENEK from '../utils/constants';

function mergeIntoMeal(etel) {
  return Object.values(etel).reduce((meal, course) => {
    for (const key in course) {
      if (!meal[key]) {
        meal[key] = course[key];
      } else {
        if (typeof meal[key] === 'string') {
          meal[key] = `${meal[key]}, ${course[key]}`;
        } else if (typeof meal[key] === 'number') {
          const sum = meal[key] + course[key];
          meal[key] = Math.round((sum + Number.EPSILON) * 100) / 100;
        } else if (typeof meal[key] === 'array') {
          meal[key] = [...new Set([...meal[key], ...course[key]])];
        }
      }
    }
    return meal;
  }, {});
}

const EtelCella = ({ meal, prop }) => {
  let text = meal[prop];

  if (prop === 'allergenek') {
    text = meal[prop].map((allergenkod) => ALLERGENEK[allergenkod]).join(', ');
  }

  if (prop === 'nev') {
    text = meal[prop].replaceAll(',', '\n');
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

      {hetiEtel.map((etel) => {
        const meal = mergeIntoMeal(etel);

        return <EtelCella key={meal.id} meal={meal} prop={prop} />;
      })}
    </tr>
  );
}
