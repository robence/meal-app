export const LEVESEK = [
  {
    id: 'l1',
    nev: 'Frankfurtileves',
    szenhidrat: 11.4,
    feherje: 18.7,
    zsir: 17.8,
    so: 0.8,
    allergenek: [1, 6, 7, 10],
    kategoria: 'Huskeszitmeny',
  },
  {
    id: 'l2',
    nev: 'Babgulyas',
    szenhidrat: 12.5,
    feherje: 10.8,
    zsir: 19.4,
    so: 3.25,
    allergenek: [1, 3, 9],
    kategoria: 'Bab',
  },
];

// new Etel('e3', 'Brokkolikremleves,levesgyongy', 8.8, 15.6, 25, 2.2, 120, [1,3,7], 'Kremleves'),
// new Etel('e4', 'Barackkremleves', 8.6, 7.3, 34.4, 0.8, 120, [7], 'Kremleves'),
// new Etel('e5', 'Majgombocleves', 41.7, 38.2, 43.1, 2.8, 120, [1,3,9], 'Huskeszitmeny'),

const ETELEK = [
  {
    id: 'e1',
    nev: 'Krumplifozelek,vagdalt',
    szenhidrat: 8.6,
    feherje: 7.9,
    zsir: 61.1,
    so: 3,
    allergenek: [1, 3, 7, 10],
    kategoria: 'Fozelek',
  },
  {
    id: 'e2',
    nev: 'Finomfozelek',
    szenhidrat: 16.8,
    feherje: 3.1,
    zsir: 21.7,
    so: 2.7,
    allergenek: [1, 7],
    kategoria: 'Fozelek',
  },
  {
    id: 'e3',
    nev: 'Kapros_tokfozelek',
    szenhidrat: 17.5,
    feherje: 29.1,
    zsir: 32.8,
    so: 0.4,
    allergenek: [1, 7],
    kategoria: 'Fozelek',
  },
  {
    id: 'e4',
    nev: 'Gyumolcsmartas,piritott_dara',
    szenhidrat: 5.1,
    feherje: 2.2,
    zsir: 29.3,
    so: 2.1,
    allergenek: [1, 7],
    kategoria: 'Martas',
  },
  {
    id: 'e5',
    nev: 'Parajmartas',
    szenhidrat: 16.2,
    feherje: 15.7,
    zsir: 25.8,
    so: 2.6,
    allergenek: [1, 3, 7, 9, 10],
    kategoria: 'Martas',
  },
];

export const HARMADIK = [
  {
    id: 'e1',
    name: 'Savanyu_uborka',
    szenhidrat: 0.3,
    feherje: 0.2,
    zsir: 1.2,
    so: 0.4,
    allergenek: [10],
    kategoria: 'Savanyu',
  },
  {
    id: 'e2',
    name: 'Savanyu_paprika',
    szenhidrat: 0.5,
    feherje: 0.2,
    zsir: 2.4,
    so: 0.3,
    allergenek: ['allergen 3', 'allergen 1'],
    kategoria: 'Kategoria1',
  },
];

export default ETELEK;
