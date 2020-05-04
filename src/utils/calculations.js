import { LEVESEK, FOETELEK, HARMADIK } from '../data/Etelek';

const CHECKS = {};

function withKaloria(meal) {
  return meal.map((item) => {
    const { szenhidrat, zsir, feherje } = item;
    const kaloria = Math.round(feherje * 4 + szenhidrat * 4 + zsir * 9);
    return { ...item, kaloria };
  });
}

function calculateDailyFood(previousFoods = []) {
  const index = Math.floor(Math.random() * 5);
  const index2 = Math.floor(Math.random() * 5);

  const leves = LEVESEK[index2];
  const foetel = FOETELEK[index];
  const harmadik = HARMADIK[0];

  // return withKaloria(foetel);
  return withKaloria([leves, foetel, harmadik]);
}

export default function calculateMonthlyFood() {
  // 1. 3-as parok osszeallitasa

  // 2. kaloria es so alapjan szures

  // 3. csoportositas kategoria szerint

  /**
   *  4. ALGORITMUS
   *
   *  a) vegigmegyunk a minimum felteteleken, amig el nem erjuk a min erteket
   *  b) megallasi feltetel kategoriankent a min ertek elerese
   *  c) csak olyan kajat (3as par) valaszthatunk ami nem szegi meg a max hatart
   *  d) kozben taroljuk a jelenlegi kategoria elofordulasokat,
   *     azokra ahol van megszoritas
   *  e) kaja valasztas az adott csoportbol tortenik, az osszes megfelelt kozul/
   *     veletlenszam generalassal, ez biztositja a valtozatossagot es az
   *     ujraprobalas eselyeit noveli
   *  f) amennyiben nem ertuk el a 20 kajat, kezdodik elolrol
   *  */

  return [];
}
