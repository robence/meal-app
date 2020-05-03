import { LEVESEK, FOETELEK, HARMADIK } from '../data/Etelek';

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

export default function calculateWeeklyFood(previousWeek = []) {
  const weeklyFood = Array(5)
    .fill(null)
    .reduce((hetiKaja) => {
      const napiKaja = calculateDailyFood([...previousWeek, ...hetiKaja]);
      return [...hetiKaja, napiKaja];
    }, []);

  return weeklyFood;
}
