/* eslint-disable */
import { LEVESEK, FOETELEK, HARMADIK } from '../data/Etelek';

const DAILY_CHECKS = {
  kaloria: { min: 700, max: 900 },
  so: { min: 2, max: 4.3 },
};

function calculateDailyIntake(meal) {
  const { leves, foetel, harmadik } = meal;

  // TODO: add so metric
  const dailyCalory = foetel.kaloria + leves.kaloria + harmadik.kaloria;
  const dailySalt = foetel.so + leves.so + harmadik.so;

  return {
    kaloria: dailyCalory,
    so: dailySalt,
  };
}

function calculateKaloria(course) {
  const { szenhidrat, zsir, feherje } = course;
  const kaloria = Math.round(feherje * 4 + szenhidrat * 4 + zsir * 9);
  return kaloria;
}

function withKaloria(meal) {
  const kombo = Object.keys(meal).reduce((memo, courseKey) => {
    const kaloria = calculateKaloria(meal[courseKey]);

    return {
      ...memo,
      [courseKey]: {
        ...meal[courseKey],
        kaloria,
      },
    };
  }, {});
  return kombo;
}

export default function calculateMonthlyFood() {
  // 1. 3-as parok osszeallitasa

  const kombo = createFoodDescartes();
  console.log('kombo');
  console.log(kombo);

  // 2. kaloria es so alapjan szures
  const filteredKombo = filterFoodByMetrics(kombo);
  console.log('filteredKombo');
  console.log(filteredKombo);

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

function createFoodDescartes() {
  const kombo = [];
  for (const leves of LEVESEK) {
    for (const foetel of FOETELEK) {
      for (const harmadik of HARMADIK) {
        const komboElem = {
          leves,
          foetel,
          harmadik,
        };

        kombo.push(withKaloria(komboElem));
      }
    }
  }

  return kombo;
}

function filterFoodByMetrics(kombo) {
  const isMealAcceptable = (meal) => {
    const { kaloria, so } = calculateDailyIntake(meal);
    const isAccepted =
      kaloria >= DAILY_CHECKS.kaloria.min &&
      kaloria <= DAILY_CHECKS.kaloria.max &&
      so >= DAILY_CHECKS.so.min &&
      so <= DAILY_CHECKS.so.max;

    if (isAccepted) {
      console.log(so);
    }

    return isAccepted;
  };

  const filteredKombo = kombo.filter((meal) => isMealAcceptable(meal));
  return filteredKombo;
}
