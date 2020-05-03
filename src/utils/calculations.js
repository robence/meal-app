import { LEVESEK, FOETELEK, HARMADIK } from '../data/Etelek';

function withKaloria(item) {
  const { szenhidrat, zsir, feherje } = item;
  const kaloria = Math.round(feherje * 4 + szenhidrat * 4 + zsir * 9);
  return { ...item, kaloria };
}

function calculateDailyFood(previousFoods = []) {
  const index = Math.floor(Math.random() * 5);
  const foetel = FOETELEK[index];
  return withKaloria(foetel);
}

export default function calculateWeeklyFood(previousWeek = []) {
  const weeklyFood = Array(5)
    .fill(null)
    .reduce((hetiKaja, _) => {
      const napiKaja = calculateDailyFood([...previousWeek, ...hetiKaja]);
      return [...hetiKaja, napiKaja];
    }, []);

  return weeklyFood;
}
