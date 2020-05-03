import Etel from '../models/Etel';

export const LEVESEK = [
  new Etel('e1', 'Frankfurtileves', 11.4, 18.7, 17.8, 0.8, 320, [1,6,7,10], 'Huskeszitmeny'),
  new Etel('e2', 'Babgulyas', 12.5, 10.8, 19.4, 3.25, 120, [1,3,9], 'Bab'),
  new Etel('e3', 'Brokkolikremleves,levesgyongy', 8.8, 15.6, 25, 2.2, 120, [1,3,7], 'Kremleves'),
  new Etel('e4', 'Barackkremleves', 8.6, 7.3, 34.4, 0.8, 120, [7], 'Kremleves'),
  new Etel('e5', 'Majgombocleves', 41.7, 38.2, 43.1, 2.8, 120, [1,3,9], 'Huskeszitmeny'),
];

const ETELEK = [
  new Etel('e1', 'Krumplifozelek,vagdalt', 8.6, 7.9, 61.1, 3, 320, [1,3,7,10], 'Fozelek'),
  new Etel('e2', 'Finomfozelek', 16.8, 3.1, 21.7, 2.7, 120, [1,7], 'Fozelek'),
  new Etel('e3', 'Kapros_tokfozelek', 17.5, 29.1, 32.8, 0.4, 120, [1,7], 'Fozelek'),
  new Etel('e4', 'Gyumolcsmartas,piritott_dara', 5.1, 2.2, 29.3, 2.1, 120, [1,7], 'Martas'),
  new Etel('e5', 'Parajmartas', 16.2, 15.7, 25.8, 2.6, 120, [1,3,7,9,10], 'Martas'),
];

export const HARMADIK = [
  new Etel('e1', 'Savanyu_uborka', 0.3, 0.2, 1.2, 0.4, 320, [10], 'Savanyu'),
  new Etel('e2', 'Savanyu_paprika', 0.5, 0.2, 2.4, 0.3, 120, ['allergen 3', 'allergen 1'],'Kategoria1'),
  new Etel('e3', 'Repa', 20, 50, 3, 1, 120, ['allergen 3', 'allergen 1'],'Kategoria1'),
  new Etel('e4', 'Repa', 20, 50, 3, 1, 120, ['allergen 3', 'allergen 1'],'Kategoria1'),
  new Etel('e5', 'Repa', 20, 50, 3, 1, 120, ['allergen 3', 'allergen 1'],'Kategoria1'),
];

export default ETELEK;
