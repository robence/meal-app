/* eslint-disable */
import { LEVESEK, FOETELEK, HARMADIK } from '../data/Etelek';

const DAILY_CHECKS = {
  kaloria: { min: 700, max: 900 },
  so: { min: 2, max: 4.3 },
};

const MONTHLY_CHECKS = {
  Hús: { min: 6, max: 10 },
  Húskészítmény: { min: 2 },
  Hal: { min: 1},
  Belsőség: { max: 2},
  Tojás: { min: 2, max: 4 },
  Rizs: { max: 3 },
  Tészta: { max: 2 },
  Krumpli: { max: 5 },
  Édesség: { max: 2 },
  Péksütemény: { max: 2 },
  Bő_Zsírban_Sült: { max: 1 },
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

const withKategoria = (meal) => {
  const { leves, foetel, harmadik } = meal;
  const kategoriak = [
    ...new Set([leves.kategoria, foetel.kategoria, harmadik.kategoria]),
  ];

  return {
    ...meal,
    kategoriak,
  };
};

export default function calculateMonthlyFood() {
  // 1. 3-as parok osszeallitasa

  const kombo = createFoodDescartes();

  // 2. kaloria es so alapjan szures
  const filteredKombo = filterFoodByMetrics(kombo);
  console.log('filteredKombo');
  console.log(filteredKombo);

  /**
   *  3. ALGORITMUS
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

  getMonthlyFood(filteredKombo);

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

    return isAccepted;
  };

  const filteredKombo = kombo.filter(isMealAcceptable).map(withKategoria);

  return filteredKombo;
}

function getMonthlyFood(kombo) {
  // kivalogatni 6 elemet amik kozott van hus

  const currentCategoryCounts = {};

  const husosKajak = categoryHandler(kombo, currentCategoryCounts, 'Hús', 6);
  console.log('husosKajak');
  console.log(husosKajak);

  const huskeszKajak = categoryHandler(
    kombo,
    currentCategoryCounts,
    'Húskészítmény',
    2
  );

  console.log('huskeszKajak');
  console.log(huskeszKajak);
}

function categoryHandler(kombo, currentCategoryCounts, kategoria, min) {
  const blacklist = [];
  return Array(min)
    .fill(null)
    .map(
      (_) => takeRandom(kombo, currentCategoryCounts, blacklist, kategoria).food
    );
}

// TODO: work for only one category first
function takeRandom(kombo, currentCategoryCounts, blacklist = [], kategoria) {
  // general random szamot
  // visszaadja az elemet, ha megfelel
  // megfelel - checkkek es nem fordult meg elo

  const reGenerateFood = () => {
    blacklist.push(index);
    return takeRandom(kombo, currentCategoryCounts, blacklist, kategoria);
  };

  const index = generateBetween(0, kombo.length);
  const food = kombo[index];
  const { kategoriak } = food;

  let isMealAcceptable = true;

  if (blacklist.includes(index)) {
    return reGenerateFood();
  }

  if (kategoria && !kategoriak.includes(kategoria)) {
    return reGenerateFood();
  }

  for (const mealKategoria in kategoriak) {
    isMealAcceptable = isCategoryOkay(mealKategoria, currentCategoryCounts);
  }

  if (!isMealAcceptable) {
    return reGenerateFood();
  }

  // increase count
  currentCategoryCounts[kategoria] =
    currentCategoryCounts[kategoria] !== undefined
      ? currentCategoryCounts[kategoria] + 1
      : 0;

  return { food, currentCategoryCounts, blacklist };
}

function generateBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function isCategoryOkay(kategoria, currentCategoryCounts) {
  const hasMealInCategory = kategoria in currentCategoryCounts;

  const hasMealInCount =
    currentCategoryCounts[kategoria] && currentCategoryCounts[kategoria] > 0;

  const hasMealMaximum = hasMealInCount && 'max' in MONTHLY_CHECKS[kategoria];

  const isMealCountAtMaximumForCategory =
    hasMealMaximum &&
    currentCategoryCounts[kategoria] === MONTHLY_CHECKS[kategoria].max;

  return !hasMealInCategory || !isMealCountAtMaximumForCategory;
}
