/**
 * Reusable method data — calculator, quiz, and comparison (English).
 */
window.COFFEE_METHODS = {
  v60: {
    id: 'v60',
    name: 'V60',
    ratio: 16,
    temp: 92,
    time: '2:30 – 3:00',
    grind: 'Medium-fine',
    bloomRatio: 2,
    bloomTime: 30,
    pours: 2,
    filter: 'Conical paper',
    difficulty: 'Medium',
    body: 3, acidity: 5, sweetness: 4, aroma: 5, complexity: 5,
    ease: 3, clean: 4
  },
  chemex: {
    id: 'chemex',
    name: 'Chemex',
    ratio: 16.5,
    temp: 94,
    time: '4:00 – 5:00',
    grind: 'Medium-coarse',
    bloomRatio: 2,
    bloomTime: 45,
    pours: 2,
    filter: 'Thick paper',
    difficulty: 'Medium',
    body: 2, acidity: 4, sweetness: 4, aroma: 5, complexity: 4,
    ease: 3, clean: 3
  },
  'prensa-francesa': {
    id: 'prensa-francesa',
    name: 'French Press',
    ratio: 15,
    temp: 93,
    time: '4:00',
    grind: 'Coarse',
    bloomRatio: 0,
    bloomTime: 0,
    pours: 1,
    filter: 'Metal mesh (immersion)',
    difficulty: 'Easy',
    body: 5, acidity: 2, sweetness: 3, aroma: 3, complexity: 3,
    ease: 5, clean: 3
  },
  aeropress: {
    id: 'aeropress',
    name: 'AeroPress',
    ratio: 14,
    temp: 88,
    time: '1:30 – 2:00',
    grind: 'Fine to medium',
    bloomRatio: 2,
    bloomTime: 20,
    pours: 1,
    filter: 'Paper / metal',
    difficulty: 'Easy',
    body: 4, acidity: 3, sweetness: 4, aroma: 4, complexity: 4,
    ease: 5, clean: 5
  },
  'hario-switch': {
    id: 'hario-switch',
    name: 'Hario Switch',
    ratio: 15,
    temp: 93,
    time: '3:00 – 3:30',
    grind: 'Medium',
    bloomRatio: 2,
    bloomTime: 30,
    pours: 1,
    filter: 'V60 paper + valve',
    difficulty: 'Medium',
    body: 4, acidity: 4, sweetness: 4, aroma: 4, complexity: 4,
    ease: 4, clean: 4
  },
  'clever-dripper': {
    id: 'clever-dripper',
    name: 'Clever Dripper',
    ratio: 16,
    temp: 93,
    time: '3:00 – 4:00',
    grind: 'Medium',
    bloomRatio: 0,
    bloomTime: 0,
    pours: 1,
    filter: 'Paper (immersion)',
    difficulty: 'Easy',
    body: 4, acidity: 3, sweetness: 4, aroma: 4, complexity: 3,
    ease: 5, clean: 4
  },
  origami: {
    id: 'origami',
    name: 'Origami',
    ratio: 16,
    temp: 92,
    time: '2:30 – 3:30',
    grind: 'Medium-fine',
    bloomRatio: 2,
    bloomTime: 30,
    pours: 2,
    filter: 'Paper / metal',
    difficulty: 'Medium',
    body: 3, acidity: 5, sweetness: 4, aroma: 5, complexity: 5,
    ease: 3, clean: 4
  },
  koar: {
    id: 'koar',
    name: 'Koar',
    ratio: 15.5,
    temp: 92,
    time: '2:30 – 3:30',
    grind: 'Medium-fine',
    bloomRatio: 2,
    bloomTime: 30,
    pours: 2,
    filter: 'Conical paper',
    difficulty: 'Medium',
    body: 3, acidity: 5, sweetness: 4, aroma: 5, complexity: 5,
    ease: 3, clean: 4
  },
  moka: {
    id: 'moka',
    name: 'Moka Pot',
    ratio: 8,
    temp: 95,
    time: '4:00 – 6:00',
    grind: 'Fine (espresso-style)',
    bloomRatio: 0,
    bloomTime: 0,
    pours: 1,
    filter: 'Metal disk',
    difficulty: 'Medium',
    body: 5, acidity: 2, sweetness: 3, aroma: 3, complexity: 3,
    ease: 4, clean: 3
  }
};

window.COFFEE_QUIZ = [
  {
    q: 'How do you prefer your coffee to taste?',
    options: [
      { label: 'Intense and full-bodied', scores: { 'prensa-francesa': 2, moka: 2, aeropress: 1 } },
      { label: 'Balanced', scores: { 'hario-switch': 2, 'clever-dripper': 2, origami: 1 } },
      { label: 'Delicate and aromatic', scores: { v60: 2, chemex: 2, koar: 2, origami: 1 } }
    ]
  },
  {
    q: 'Do you prefer ritual or convenience?',
    options: [
      { label: 'Ritual and precision', scores: { v60: 2, origami: 2, koar: 2, chemex: 1 } },
      { label: 'A bit of both', scores: { 'hario-switch': 2, aeropress: 1, origami: 1 } },
      { label: 'Maximum convenience', scores: { 'prensa-francesa': 2, 'clever-dripper': 2, aeropress: 2, moka: 1 } }
    ]
  },
  {
    q: 'Do you enjoy fruity coffees with bright acidity?',
    options: [
      { label: 'Yes, I love them', scores: { v60: 2, origami: 2, koar: 2, chemex: 1 } },
      { label: 'It depends on the day', scores: { 'hario-switch': 2, aeropress: 1, 'clever-dripper': 1 } },
      { label: 'I prefer lower, chocolatey notes', scores: { moka: 2, 'prensa-francesa': 2, aeropress: 1 } }
    ]
  },
  {
    q: 'How much time do you usually spend brewing?',
    options: [
      { label: 'Less than 3 minutes', scores: { aeropress: 2, moka: 1, 'clever-dripper': 1 } },
      { label: 'Between 3 and 5 minutes', scores: { v60: 1, origami: 1, 'hario-switch': 2, koar: 1 } },
      { label: 'I can spend 5 minutes or more', scores: { chemex: 2, 'prensa-francesa': 2, v60: 1 } }
    ]
  },
  {
    q: 'How do you prefer cleanup afterward?',
    options: [
      { label: 'Quick and simple', scores: { aeropress: 2, 'clever-dripper': 1, v60: 1 } },
      { label: 'I don’t mind a little more', scores: { origami: 1, koar: 1, 'hario-switch': 1, chemex: 1 } },
      { label: 'I’ll put in more work for the result', scores: { chemex: 1, 'prensa-francesa': 1, moka: 2 } }
    ]
  },
  {
    q: 'Do you like trying Brazilian gear or classic specialty-coffee tools?',
    options: [
      { label: 'International classics', scores: { v60: 2, chemex: 2, aeropress: 1, moka: 1 } },
      { label: 'Innovation and versatility', scores: { origami: 2, 'hario-switch': 2, 'clever-dripper': 1 } },
      { label: 'Brazilian design and precision', scores: { koar: 3, origami: 1, v60: 1 } }
    ]
  }
];
